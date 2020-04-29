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
var styles = require("./styles.scss");
var FieldMessage = function (_a) {
    var _b;
    var id = _a.id, automationId = _a.automationId, message = _a.message, _c = _a.status, status = _c === void 0 ? "default" : _c, _d = _a.reversed, reversed = _d === void 0 ? false : _d;
    return (React.createElement("div", { id: id, "data-automation-id": automationId, className: classnames_1["default"](styles.message, (_b = {},
            _b[styles.reversed] = reversed,
            _b[styles["default"]] = status === "default",
            _b[styles.error] = status === "error",
            _b)) }, message));
};
exports["default"] = FieldMessage;
//# sourceMappingURL=FieldMessage.js.map