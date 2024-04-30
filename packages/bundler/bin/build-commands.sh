#!/bin/bash

GREEN='\033[0;32m'
BOLD='\033[1m'
NC='\033[0m' # No Color

SECONDS=0

case "$1" in
    build)
        echo "Running build command..."
        npx package-bundler clean 
        npx package-bundler rollup
        npx package-bundler types 
        npx package-bundler styles
        npx package-bundler dist:clean

        elapsed_time=$SECONDS
        echo -e "${GREEN}Built in: ${BOLD}${GREEN}$elapsed_time${NC} ${GREEN}seconds${NC}"
        ;;
    clean)
        echo -e "${GREEN}Remove existing build output folder...${NC}"
        echo "rm -rf dist"
        rm -rf dist
        ;;
    rollup)
        echo -e "${GREEN}Compile and bundle source code...${NC}"
        echo "rollup -c"
        rollup -c
        ;;
    types)
        echo -e "${GREEN}Compile typescript types...${NC}"
        echo "tsc --project tsconfig.types.json"
        tsc --project tsconfig.types.json
        ;;
    styles)
        echo -e "${GREEN}Compile global.css...${NC}"
        echo "postcss styles/global.css --output dist/global.css"
        postcss styles/global.css --output dist/global.css

        echo -e "${GREEN}Combine all css output into raw styles...${NC}"
        echo "concat-cli -f ./dist/*.css -o ./dist/raw-styles.css"
        concat-cli -f ./dist/*.css -o ./dist/raw-styles.css

        echo -e "${GREEN}Combine all css output into raw styles...${NC}"
        echo "concat-cli -f ./dist/esm/*.css -o ./dist/raw-styles.css"
        concat-cli -f ./dist/esm/*.css -o ./dist/raw-styles.css

        echo -e "${GREEN}Convert raw styles into styles.css...${NC}"
        echo "postcss dist/raw-styles.css --output dist/styles.css"
        postcss dist/raw-styles.css --output dist/styles.css
        ;;
    dist:clean)
        echo -e "${GREEN}Removing temporary CSS artifacts...${NC}"
        echo "rm ./dist/global.css ./dist/raw-styles.css"
        rm ./dist/global.css ./dist/raw-styles.css
        ;;
    help)
        echo -e "${GREEN}Usage: $0 {build|clean|rollup|types|styles|dist:clean|help}${NC}"
        exit 1
        ;;
    *)
        echo -e "${GREEN}Usage: $0 {build|clean|rollup|types|styles|dist:clean|help}${NC}"
        exit 1
        ;;
esac
