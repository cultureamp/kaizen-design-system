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
    echo -e "${GREEN}------${NC}"
}

add_ui_build_tools() {
    echo -e "${GREEN}Adding UI build tools..."
    npm explore @kaizen/package-bundler -- node ./dist/presets/shared-ui/bin/addBuildTools.js --packagePath="$PWD"
    echo -e "${GREEN}------${NC}"
}

inject_tailwind_imports() {
    echo -e "${GREEN}Running Tailwind Styles Import command..."
    npm explore @kaizen/package-bundler -- node ./dist/presets/shared-ui/bin/injectTailwindImports.js --packagePath="$PWD"
    echo -e "${GREEN}------${NC}"
}

ui_post_build() {
    echo -e "${GREEN}Post build...${NC}"
    npm explore @kaizen/package-bundler -- node ./dist/presets/shared-ui/bin/postBuild.js --packagePath="$PWD"
    echo -e "${GREEN}------${NC}"
}

elapsed_time() {
    echo -e "${GREEN}Built in: ${BOLD}${GREEN}$SECONDS${NC} ${GREEN}seconds${NC}"
}

build() {
    bundle
    compile_types
}

case "$1" in
    build)
        echo "Running build command..."
        clean
        build
        elapsed_time
        ;;
    build-shared-ui)
        echo "Running build-shared-ui command..."
        clean
        add_ui_build_tools
        build
        inject_tailwind_imports
        ui_post_build
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
