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
        elapsed_time=$SECONDS
        echo -e "${GREEN}Built in: ${BOLD}${GREEN}$elapsed_time${NC} ${GREEN}seconds${NC}"
        ;;
    build-shared-ui)
        echo "Running build-shared-ui command..."
        npx package-bundler build
        npx --no -c addTailwindStylesImport
        echo -e "${GREEN}Purify style inject for treeshaking...${NC}"
        npx --no -c markStyleInjectAsPure
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
    help)
        echo -e "${GREEN}Usage: $0 {build|build-shared-ui|clean|rollup|types|help}${NC}"
        exit 1
        ;;
    *)
        echo -e "${GREEN}Usage: $0 {build|build-shared-ui|clean|rollup|types|help}${NC}"
        exit 1
        ;;
esac
