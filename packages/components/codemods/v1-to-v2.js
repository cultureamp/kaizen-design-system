"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("fs/promises");
var path_1 = require("path");
var makeDirectories = function (baseDir, family, hasFuture) { return __awaiter(void 0, void 0, void 0, function () {
    var v1Dir, v2Dir;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                v1Dir = path_1.default.join(baseDir, "__".concat(family, "__"), "v1");
                v2Dir = path_1.default.join(baseDir, "__".concat(family, "__"), "v2");
                return [4 /*yield*/, promises_1.default.mkdir(v1Dir, { recursive: true })];
            case 1:
                _a.sent();
                return [4 /*yield*/, promises_1.default.mkdir(v2Dir, { recursive: true })];
            case 2:
                _a.sent();
                if (!hasFuture) return [3 /*break*/, 4];
                return [4 /*yield*/, promises_1.default.mkdir(path_1.default.join(v2Dir, "__docs"), { recursive: true })];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
function copyContentsToTargetDir(baseDir, targetDir) {
    return __awaiter(this, void 0, void 0, function () {
        var items, _i, items_1, item, sourcePath, destPath, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 9, , 10]);
                    // Ensure the v1 directory exists
                    return [4 /*yield*/, promises_1.default.mkdir(targetDir, { recursive: true })
                        // Read all the items in the base directory
                    ];
                case 1:
                    // Ensure the v1 directory exists
                    _a.sent();
                    return [4 /*yield*/, promises_1.default.readdir(baseDir, { withFileTypes: true })
                        // Iterate over each item in the base directory
                    ];
                case 2:
                    items = _a.sent();
                    _i = 0, items_1 = items;
                    _a.label = 3;
                case 3:
                    if (!(_i < items_1.length)) return [3 /*break*/, 8];
                    item = items_1[_i];
                    sourcePath = path_1.default.join(baseDir, item.name);
                    destPath = path_1.default.join(targetDir, item.name);
                    if (!item.isDirectory()) return [3 /*break*/, 5];
                    // If the item is a directory, recursively copy its contents
                    return [4 /*yield*/, copyBaseDirToV1(sourcePath, targetDir)];
                case 4:
                    // If the item is a directory, recursively copy its contents
                    _a.sent();
                    return [3 /*break*/, 7];
                case 5: 
                // If the item is a file, copy it to the v1 directory
                return [4 /*yield*/, promises_1.default.copyFile(sourcePath, destPath)];
                case 6:
                    // If the item is a file, copy it to the v1 directory
                    _a.sent();
                    _a.label = 7;
                case 7:
                    _i++;
                    return [3 /*break*/, 3];
                case 8: return [3 /*break*/, 10];
                case 9:
                    error_1 = _a.sent();
                    console.error("Failed to copy directory contents:", error_1);
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    });
}
var createV2StructureWithDocs = function (baseDir, version, family) { return __awaiter(void 0, void 0, void 0, function () {
    var futureComponents, hasFuture, v1Dir, v2Dir;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                futureComponents = ["Select", "Workflow"];
                hasFuture = futureComponents.includes(baseDir);
                v1Dir = path_1.default.join(baseDir, "__".concat(family, "__"), "v1");
                v2Dir = path_1.default.join(baseDir, "__".concat(family, "__"), "v2");
                return [4 /*yield*/, promises_1.default.mkdir(v1Dir, { recursive: true })];
            case 1:
                _a.sent();
                return [4 /*yield*/, promises_1.default.mkdir(v2Dir, { recursive: true })];
            case 2:
                _a.sent();
                return [4 /*yield*/, copyContentsToTargetDir(baseDir, v1Dir)
                    // if (hasFuture) {
                    //   // Migrate future component into v2
                    //   // Make the directories
                    //   await fs.mkdir(path.join(v2Dir, "__docs"), { recursive: true })
                    // }
                    // // const v1FilePath = path.join(baseDir, "v1.ts")
                    // // const components = await parseComponents(v1FilePath)
                    // for (const component of components) {
                    //   const v1Dir = path.join(baseDir, component, "v1")
                    //   const v2Dir = path.join(baseDir, component, "v2")
                    //   const docsDir = path.join(v2Dir, "_docs")
                    //   await fs.mkdir(docsDir, { recursive: true })
                    //   // Re-export v1 in v2 folder
                    //   await fs.writeFile(path.join(v2Dir, "index.ts"), 'export * from "../v1";\n')
                    //   // Duplicate .stories.tsx and .mdx files
                    //   const storiesSrcPath = path.join(v1Dir, `${component}.stories.tsx`)
                    //   const mdxSrcPath = path.join(v1Dir, `${component}.mdx`)
                    //   const storiesDestPath = path.join(docsDir, `${component}.stories.tsx`)
                    //   const mdxDestPath = path.join(docsDir, `${component}.mdx`)
                    //   if (await exists(storiesSrcPath)) {
                    //     let storiesContent = await fs.readFile(storiesSrcPath, "utf8")
                    //     storiesContent =
                    //       `import * as V1Stories from "../../v1/${component}.stories";\n` +
                    //       storiesContent
                    //     storiesContent = storiesContent.replace(
                    //       /export const (\w+): Story =/g,
                    //       "export const $1: Story = V1Stories.$1;"
                    //     )
                    //     await fs.writeFile(storiesDestPath, storiesContent)
                    //   }
                    //   if (await exists(mdxSrcPath)) {
                    //     let mdxContent = await fs.readFile(mdxSrcPath, "utf8")
                    //     mdxContent = mdxContent.replace(
                    //       /<KAIOInstallation version="[^"]*"/g,
                    //       `<KAIOInstallation version="${version}" family="${family}"`
                    //     )
                    //     await fs.writeFile(mdxDestPath, mdxContent)
                    //   }
                    // }
                    // // Create a global barrel file
                    // await fs.writeFile(
                    //   path.join(baseDir, "index.ts"),
                    //   components
                    //     .map(
                    //       component =>
                    //         `export * from "./${component}/v1";\nexport * from "./${component}/v2";`
                    //     )
                    //     .join("")
                    // )
                ];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
// async function parseComponents(filePath: string): Promise<string[]> {
//   const content = await fs.readFile(filePath, "utf8")
//   return content
//     .split("\n")
//     .map(line => line.match(/"\.\/(.+)\/v1"/)?.[1])
//     .filter(Boolean)
// }
createV2StructureWithDocs(path_1.default.join(__dirname, "packages/components/src/Avatar"), 1, "content");
