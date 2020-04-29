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
var component_library_1 = require("@kaizen/component-library");
var checkIcon = require("@kaizen/component-library/icons/check.icon.svg")["default"];
var minusIcon = require("@kaizen/component-library/icons/minus.icon.svg")["default"];
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var styles = require("./styles.scss");
var renderCheckOrMixedIcon = function (status) {
    if (status === "on") {
        return (React.createElement("div", { className: styles.icon },
            React.createElement(component_library_1.Icon, { icon: checkIcon, role: "presentation", inheritSize: true })));
    }
    else if (status === "mixed") {
        return (React.createElement("div", { className: styles.icon },
            React.createElement(component_library_1.Icon, { icon: minusIcon, role: "presentation", inheritSize: true })));
    }
    return;
};
var getCheckedFromStatus = function (checkedStatus) {
    return checkedStatus === "on" ? true : false;
};
var Input = function (_a) {
    var id = _a.id, automationId = _a.automationId, name = _a.name, _b = _a.checkedStatus, checkedStatus = _b === void 0 ? "off" : _b, onCheck = _a.onCheck, _c = _a.disabled, disabled = _c === void 0 ? false : _c, tabIndex = _a.tabIndex;
    return (React.createElement("div", { className: styles.container },
        React.createElement("input", { type: "checkbox", id: id, name: name, tabIndex: tabIndex, "data-automation-id": automationId, "data-indeterminate": checkedStatus === "mixed", 
            // TODO - needsclick class disables fastclick on this element to prevent double tap on mobile.
            // Remove when fastclick is removed from consuming repos
            className: classnames_1["default"](styles.checkbox, "needsclick"), checked: getCheckedFromStatus(checkedStatus), onChange: onCheck, disabled: disabled, ref: function (node) {
                if (node && checkedStatus === "mixed") {
                    node.indeterminate = true;
                }
            } }),
        React.createElement("div", { className: styles.box }, renderCheckOrMixedIcon(checkedStatus))));
};
exports["default"] = Input;
//# sourceMappingURL=Checkbox.js.map