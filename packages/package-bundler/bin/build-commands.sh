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
    echo -e "${GREEN}------${NC}"
}

compile_types() {
    echo -e "${GREEN}Compile typescript types...${NC}"
    tsc --project tsconfig.types.json --declarationDir dist/types
    echo -e "${GREEN}------{NC}"
}

inject_tailwind_imports() {
    echo -e "${GREEN}Running Tailwind Styles Import command..."
    npm explore @kaizen/package-bundler -- node ./dist/presets/shared-ui/bin/injectTailwindImports.js --packagePath="$PWD"
    echo -e "${GREEN}------${NC}"
}

apply_pure_to_style_inject() {
    echo -e "${GREEN}Purify style inject for treeshaking...${NC}"
    npm explore @kaizen/package-bundler -- node ./dist/presets/shared-ui/bin/applyPureToStyleInject.js --packagePath="$PWD"
    echo -e "${GREEN}------${NC}"
}

elapsed_time() {
    echo -e "${GREEN}Built in: ${BOLD}${GREEN}$SECONDS${NC} ${GREEN}seconds${NC}"
}

build() {
    clean
    bundle
    compile_types
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
        inject_tailwind_imports
        apply_pure_to_style_inject
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
