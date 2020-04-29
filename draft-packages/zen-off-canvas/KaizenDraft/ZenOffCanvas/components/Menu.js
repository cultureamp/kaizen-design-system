"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var v4_1 = __importDefault(require("uuid/v4"));
var styles = require("./Menu.module.scss");
var Menu = function (_a) {
    var _b;
    var link = _a.link, section = _a.section;
    return (React.createElement("div", { className: classnames_1["default"](styles.menu, (_b = {},
            _b[styles.primary] = section === "primary",
            _b[styles.secondary] = section === "secondary",
            _b[styles.active] = link.active,
            _b)), key: link.heading + "-" + v4_1["default"]() }, link));
};
exports["default"] = Menu;
//# sourceMappingURL=Menu.js.map