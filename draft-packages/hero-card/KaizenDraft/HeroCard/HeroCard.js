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
var styles = require("./HeroCard.scss");
var HeroCard = function (_a) {
    var _b, _c;
    var leftContent = _a.leftContent, children = _a.children, title = _a.title, image = _a.image, badge = _a.badge, _d = _a.minHeight, minHeight = _d === void 0 ? "none" : _d, _e = _a.fullWidth, fullWidth = _e === void 0 ? false : _e;
    return (React.createElement("div", { className: classnames_1["default"](styles.root, (_b = {},
            _b[styles.fullWidth] = fullWidth,
            _b)) },
        React.createElement("div", { style: { minHeight: minHeight }, className: styles.left },
            badge && React.createElement("div", { className: styles.badge }, badge),
            leftContent && (React.createElement("div", { className: classnames_1["default"](styles.leftContent, (_c = {},
                    _c[styles.withBadge] = !!badge,
                    _c)) }, leftContent)),
            image),
        React.createElement("div", { className: styles.right },
            title,
            React.createElement("div", { className: styles.rightContent }, children))));
};
exports["default"] = HeroCard;
//# sourceMappingURL=HeroCard.js.map