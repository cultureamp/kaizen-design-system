#!/bin/bash

GREEN='\033[0;32m'
BOLD='\033[1m'
NC='\033[0m' # No Color

SECONDS=0

clean() {
    echo -e "${GREEN}Remove existing build output folder...${NC}"
    rm -rf dist
    echo -e "${GREEN}------${NC}"
}

bundle() {
    echo -e "${GREEN}Compile and bundle source code...${NC}"
    rollup -c
    mv dist/esm/_tmp/types dist/types
    rm -rf dist/esm/_tmp
    echo -e "${GREEN}------${NC}"
}

consolidate_styles() {
    echo -e "${GREEN}Consolidate styles...${NC}"
    npm explore @kaizen/package-bundler -- node ./dist/presets/shared-ui/bin/consolidateStyles.js --packagePath="$PWD"
    echo -e "${GREEN}------${NC}"
}

elapsed_time() {
    echo -e "${GREEN}Built in: ${BOLD}${GREEN}$SECONDS${NC} ${GREEN}seconds${NC}"
}

build() {
    clean
    bundle
}

case "$1" in
    build)
        echo "Running build command..."
        build
        elapsed_time
        ;;
    build-shared-ui)
        echo "Running build-shared-ui command..."
        build
        consolidate_styles
        elapsed_time
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
