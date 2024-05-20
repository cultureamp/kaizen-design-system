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

# inject_tailwind_imports() {
#     echo -e "${GREEN}Running Tailwind Styles Import command..."
#     npm explore @kaizen/package-bundler -- node ./dist/presets/shared-ui/bin/injectTailwindImports.js --packagePath="$PWD"
#     echo -e "${GREEN}------${NC}"
# }

consolidate_styles() {
    echo -e "${GREEN}Consolidate styles...${NC}"
    # mv ./dist/esm/styles.css ./dist/styles.css
    npm explore @kaizen/package-bundler -- node ./dist/presets/shared-ui/bin/consolidateStyles.js --packagePath="$PWD"
    # concat-cli -f dist/tailwind.css dist/esm/styles.css -o dist/styles.css
    # rm ./dist/cjs/styles.css ./dist/esm/styles.css
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
        # inject_tailwind_imports
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
