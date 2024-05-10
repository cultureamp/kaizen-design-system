#!/bin/bash

GREEN='\033[0;32m'
BOLD='\033[1m'
NC='\033[0m' # No Color

SECONDS=0

case "$1" in
    build-ui-library)
        echo "Running build-ui-library command..."
        npx package-bundler build
        npx package-bundler purify-styles
        npx package-bundler inject-tailwind
        elapsed_time=$SECONDS
        echo -e "${GREEN}Built in: ${BOLD}${GREEN}$elapsed_time${NC} ${GREEN}seconds${NC}"
        ;;
    build)
        echo "Running build command..."
        npx package-bundler clean
        npx package-bundler rollup
        npx package-bundler types
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
    purify-styles)
        echo -e "${GREEN}Purify style inject for treeshaking...${NC}"
        npx --no -c markStyleInjectAsPure
        ;;
    inject-tailwind)
        echo -e "${GREEN}Inject Tailwind${NC}"
        # npx --no -c buildTailwind
        npx --no -c addTailwindStylesImport
        ;;
    help)
        echo -e "${GREEN}Usage: $0 {build|clean|rollup|purify-styles|types|help}${NC}"
        exit 1
        ;;
    *)
        echo -e "${GREEN}Usage: $0 {build|clean|rollup|purify-styles|types|help}${NC}"
        exit 1
        ;;
esac
