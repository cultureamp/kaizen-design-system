#!/bin/bash

GREEN='\033[0;32m'
BOLD='\033[1m'
NC='\033[0m' # No Color

SECONDS=0

case "$1" in
    build)
        echo "Running build command..."
        echo -e "${GREEN}Remove existing build output folder...${NC}"
        echo "rm -rf dist"
        rm -rf dist
        echo -e "${GREEN}Compile and bundle source code...${NC}"
        echo "rollup -c"
        rollup -c
        echo -e "${GREEN}Compile typescript types...${NC}"
        echo "tsc --project tsconfig.types.json --declarationDir dist/types"
        tsc --project tsconfig.types.json --declarationDir dist/types
        elapsed_time=$SECONDS
        echo -e "${GREEN}Built in: ${BOLD}${GREEN}$elapsed_time${NC} ${GREEN}seconds${NC}"
        ;;
    build-shared-ui)
        echo "Running build-shared-ui command..."
        echo -e "${GREEN}Remove existing build output folder...${NC}"
        echo "rm -rf dist"
        rm -rf dist
        echo -e "${GREEN}Compile and bundle source code...${NC}"
        echo "rollup -c"
        rollup -c
        echo -e "${GREEN}Compile typescript types...${NC}"
        echo "tsc --project tsconfig.types.json --declarationDir dist/types"
        tsc --project tsconfig.types.json --declarationDir dist/types
        echo "Running Tailwind Styles Import command..."
        npx --no -c addTailwindStylesImport
        npx package-bundler style-inject
        echo -e "${GREEN}Purify style inject for treeshaking...${NC}"
        npx --no -c markStyleInjectAsPure
        elapsed_time=$SECONDS
        echo -e "${GREEN}Built in: ${BOLD}${GREEN}$elapsed_time${NC} ${GREEN}seconds${NC}"
        ;;
    help)
        echo -e "${GREEN}Usage: $0 {build|build-shared-ui}${NC}"
        exit 1
        ;;
    *)
        echo -e "${GREEN}Usage: $0 {build|build-shared-ui}${NC}"
        exit 1
        ;;
esac
