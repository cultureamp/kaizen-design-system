"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var React = __importStar(require("react"));
var constants_1 = require("./constants");
var ModalAccessibleDescription = function (_a) {
    var children = _a.children;
    return React.createElement("div", { id: constants_1.ID_DESCRIBEDBY }, children);
};
exports["default"] = ModalAccessibleDescription;
//# sourceMappingURL=ModalAccessibleDescription.js.map