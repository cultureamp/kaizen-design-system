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
var Input = function (_a) {
    var _b, _c;
    var id = _a.id, name = _a.name, automationId = _a.automationId, ariaDescribedBy = _a.ariaDescribedBy, className = _a.className, _d = _a.inputType, inputType = _d === void 0 ? "text" : _d, placeholder = _a.placeholder, _e = _a.disabled, disabled = _e === void 0 ? false : _e, inputValue = _a.inputValue, defaultInputValue = _a.defaultInputValue, inputRef = _a.inputRef, _f = _a.reversed, reversed = _f === void 0 ? false : _f, _g = _a.status, status = _g === void 0 ? "default" : _g, startIconAdornment = _a.startIconAdornment, endIconAdornment = _a.endIconAdornment, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus;
    return (React.createElement("div", { className: classnames_1["default"](styles.wrapper, (_b = {},
            _b[styles.withReversed] = reversed,
            _b[styles.withDisabled] = disabled,
            _b[styles.withStartIconAdornment] = startIconAdornment,
            _b[styles.withEndIconAdornment] = endIconAdornment,
            _b)) },
        startIconAdornment && (React.createElement("div", { className: styles.startIconAdornment }, startIconAdornment)),
        React.createElement("input", { id: id, name: name, "data-automation-id": automationId, type: inputType, value: inputValue, defaultValue: defaultInputValue, ref: inputRef, "aria-describedby": ariaDescribedBy, placeholder: placeholder, onChange: onChange, onBlur: onBlur, onFocus: onFocus, disabled: disabled, className: classnames_1["default"](styles.input, (_c = {},
                _c[styles.error] = status === "error",
                _c[styles.success] = status === "success",
                _c[styles["default"]] = !reversed,
                _c[styles.reversed] = reversed,
                _c[styles.disabled] = disabled,
                _c), className) }),
        endIconAdornment && (React.createElement("div", { className: styles.endIconAdornment }, endIconAdornment))));
};
exports["default"] = Input;
//# sourceMappingURL=Input.js.map