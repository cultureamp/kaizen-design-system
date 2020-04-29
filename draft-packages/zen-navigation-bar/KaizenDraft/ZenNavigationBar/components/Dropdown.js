"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_1 = __importStar(require("react"));
var v4_1 = __importDefault(require("uuid/v4"));
var MenuGroup_1 = __importDefault(require("./MenuGroup"));
var MenuItem_1 = __importDefault(require("./MenuItem"));
var styles = require("./Dropdown.module.scss");
var Dropdown = function (_a) {
    var _b;
    var items = _a.items, header = _a.header;
    var _c = react_1.useState(false), shiftLeft = _c[0], setShiftLeft = _c[1];
    var dropdownRef = react_1.useRef(null);
    react_1.useLayoutEffect(function () {
        var dropdownElem = dropdownRef.current;
        if (dropdownElem) {
            var bounding = dropdownElem.getBoundingClientRect();
            if (bounding.right >
                (window.innerWidth || document.documentElement.clientWidth)) {
                // Right side of menu is out of viewport
                setShiftLeft(true);
            }
        }
    }, []);
    return (react_1["default"].createElement("div", { className: classnames_1["default"](styles.dropdown, (_b = {},
            _b[styles.shiftDropdownLeft] = shiftLeft,
            _b)), ref: dropdownRef },
        header,
        react_1["default"].createElement("ul", { className: styles.menuItems }, items.map(function (item, index) {
            if ("url" in item) {
                return react_1["default"].createElement(MenuItem_1["default"], __assign({ key: item.url + "-" + v4_1["default"]() }, item));
            }
            else if ("title" in item) {
                return (react_1["default"].createElement(MenuGroup_1["default"], __assign({ key: item.title + "-" + v4_1["default"]() }, item, { first: index === 0 })));
            }
        }))));
};
exports["default"] = Dropdown;
//# sourceMappingURL=Dropdown.js.map