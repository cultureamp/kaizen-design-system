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
        echo -e "${GREEN}Compile CSS...${NC}"
        echo "postcss dist/esm/index.css --output dist/styles.css"
        postcss dist/esm/index.css --output dist/styles.css
        ;;
    styles)
        echo -e "${GREEN}Compile Tailwind...${NC}"
        echo "postcss src/tailwind.css --output dist/tailwind.css"
        postcss src/tailwind.css --output dist/tailwind.css
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
