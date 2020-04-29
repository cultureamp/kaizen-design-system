"use strict";
exports.__esModule = true;
var DropdownMenu_1 = require("./DropdownMenu");
describe("calculateMenuTop", function () {
    var newMenuRect = function () { return ({
        width: 170,
        height: 425,
        top: 70,
        right: 170,
        bottom: 500,
        left: 0
    }); };
    var newButtonsRect = function (top) {
        var height = 42;
        return {
            width: 170,
            height: height,
            top: top,
            right: 170,
            bottom: top + height,
            left: 0
        };
    };
    it("returns the css `top` value required for the dropdown menu, " +
        "when there is enough room below the SplitButtons", function () {
        var result = DropdownMenu_1.calculateMenuTop(newButtonsRect(32), newMenuRect(), 500);
        expect(result).toEqual(40); // ie. show the menu below the split buttons
    });
    it("returns the css `top` value required for the dropdown menu, " +
        "when there is not enough room below the SplitButtons, but enough room above", function () {
        var result = DropdownMenu_1.calculateMenuTop(newButtonsRect(459), newMenuRect(), 500);
        expect(result).toEqual(-423); // ie. show the menu above the split buttons
    });
    it("returns the css `top` value required for the dropdown menu, " +
        "when there is not enough room below or above the SplitButtons", function () {
        var result = DropdownMenu_1.calculateMenuTop(newButtonsRect(315), newMenuRect(), 500);
        expect(result).toEqual(40); // ie. show the menu below the split buttons
    });
});
//# sourceMappingURL=DropdownMenu.spec.js.map