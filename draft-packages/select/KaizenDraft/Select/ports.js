"use strict";
exports.__esModule = true;
exports["default"] = (function (ports) {
    var activeMutationObserver;
    var config = { characterData: true, subtree: true };
    var sizerCallback = function (sizer, input, initialWidth, data) {
        return function () {
            // Need to remove the initial width of the sizer to account for empty space.
            var currentSizerWidth = sizer.getBoundingClientRect().width - initialWidth;
            // We also need to add the default width of the input which accounts for the cursor
            var calculatedInputWidth = currentSizerWidth < data.defaultInputWidth
                ? data.defaultInputWidth
                : currentSizerWidth + data.defaultInputWidth;
            input.style.width = calculatedInputWidth.toString() + "px";
        };
    };
    var initObserver = function (sizer, input, nodeData) {
        // The sizer does not start at 0px, we need to record the width and account for it in the calculation
        var initialSizerWidth = sizer.getBoundingClientRect().width;
        activeMutationObserver = new MutationObserver(sizerCallback(sizer, input, initialSizerWidth, nodeData));
        return activeMutationObserver;
    };
    // PORTS
    ports.kaizenConnectSelectInputDynamicWidth.subscribe(function (data) {
        var sizerNode = document.getElementById(data.sizerId);
        var inputNode = document.getElementById(data.inputId);
        if (sizerNode && inputNode) {
            initObserver(sizerNode, inputNode, data).observe(sizerNode, config);
        }
    });
    ports.kaizenDisconnectSelectInputDynamicWidth.subscribe(function (data) {
        var inputNode = document.getElementById(data.inputId);
        if (activeMutationObserver) {
            activeMutationObserver.disconnect();
        }
        if (inputNode) {
            inputNode.style.width = data.defaultInputWidth + "px";
        }
    });
});
//# sourceMappingURL=ports.js.map