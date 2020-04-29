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
var LoadingPlaceholder = function (_a) {
    var _b;
    var _c = _a.animated, animated = _c === void 0 ? true : _c, centred = _a.centred, reversedDefault = _a.reversedDefault, reversedOcean = _a.reversedOcean, tall = _a.tall, inheritBaseline = _a.inheritBaseline, inline = _a.inline, noBottomMargin = _a.noBottomMargin, _d = _a.width, width = _d === void 0 ? 100 : _d;
    return (React.createElement("div", { className: classnames_1["default"](styles.base, (_b = {},
            _b[styles.animated] = animated,
            _b[styles.centered] = centred,
            _b[styles.reversedDefault] = reversedDefault,
            _b[styles.reversedOcean] = reversedOcean,
            _b[styles.normal] = !tall,
            _b[styles.tall] = tall,
            _b[styles.inheritBaseline] = inheritBaseline,
            _b[styles.inline] = inline,
            _b[styles.noBottomMargin] = noBottomMargin,
            _b)), style: { width: width + "%" } }));
};
exports["default"] = LoadingPlaceholder;
//# sourceMappingURL=LoadingPlaceholder.js.map