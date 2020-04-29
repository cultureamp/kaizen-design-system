"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = require("@testing-library/react");
var React = __importStar(require("react"));
var ReactTestUtils = __importStar(require("react-dom/test-utils"));
var GuidanceBlock_1 = __importDefault(require("./GuidanceBlock"));
describe("GuidanceBlock", function () {
    afterEach(react_1.cleanup);
    test("starts visible", function () {
        var container = react_1.render(React.createElement(GuidanceBlock_1["default"], { img: { src: "image/path.png", alt: "Call to action banner" }, text: {
                title: "This is the call to action title",
                description: "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis."
            }, button: {
                label: "Action!",
                onClick: function () {
                    alert("tada: 🎉");
                }
            }, onDismiss: function () {
                /* do nothing */
            } })).container;
        expect(container.querySelector(".hidden")).toBeFalsy();
    });
    test("The cancel button hides the notification and calls the on dismiss function", function () {
        var onDismiss = jest.fn();
        var container = react_1.render(React.createElement(GuidanceBlock_1["default"], { img: { src: "image/path.png", alt: "Call to action banner" }, text: {
                title: "This is the call to action title",
                description: "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis."
            }, button: {
                label: "Action!",
                onClick: function () {
                    /* do nothing */
                }
            }, onDismiss: onDismiss })).container;
        // The element should start in a "hidden" state
        expect(container.querySelector(".hidden")).toBeFalsy();
        // After clicking, the element should fade out
        var cancelButton = container.querySelector(".cancel");
        cancelButton && react_1.fireEvent.click(cancelButton);
        expect(container.querySelector(".hidden")).toBeTruthy();
        expect(onDismiss).toHaveBeenCalledTimes(1);
    });
    test("The action button calls the action function", function () {
        var onAction = jest.fn();
        var container = react_1.render(React.createElement(GuidanceBlock_1["default"], { img: { src: "image/path.png", alt: "Call to action banner" }, text: {
                title: "This is the call to action title",
                description: "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis."
            }, button: {
                label: "Action!",
                onClick: onAction
            }, onDismiss: function () {
                /* do nothing */
            } })).container;
        var actionButton = container.querySelector("button");
        actionButton && react_1.fireEvent.click(actionButton);
        expect(onAction).toHaveBeenCalledTimes(1);
    });
    test("when animation ends the element is removed", function () {
        var container = react_1.render(React.createElement(GuidanceBlock_1["default"], { img: { src: "image/path.png", alt: "Call to action banner" }, text: {
                title: "This is the call to action title",
                description: "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis."
            }, button: {
                label: "Action!",
                onClick: function () {
                    /* do nothing */
                }
            }, onDismiss: function () {
                /* do nothing */
            } })).container;
        // After clicking, the element should fade out
        var cancelButton = container.querySelector(".cancel");
        cancelButton && react_1.fireEvent.click(cancelButton);
        var banner = container.querySelector(".banner");
        // Simulate fade out
        banner &&
            ReactTestUtils.Simulate.transitionEnd(banner, {
                propertyName: "margin-top"
            });
        var bannerAfter = container.querySelector(".banner");
        expect(bannerAfter).toBeNull();
    });
});
//# sourceMappingURL=GuidanceBlock.spec.js.map