define(["require", "exports", "../../src/drop-down-tree/index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var hierarchicalData = [];
    var parent = 10, child = 9, child1 = 9, child2 = 5;
    for (var m = 1; m <= parent; m++) {
        var childArray1 = [];
        for (var n = 1; n <= child; n++) {
            var childArray2 = [];
            for (var o = 1; o <= child1; o++) {
                var childArray3 = [];
                for (var p = 1; p <= child2; p++) {
                    childArray3.push({ id: "d" + m + n + o + p, name: "Node" + m + n + o + p });
                }
                childArray2.push({ id: "c" + m + n + o, name: "Node" + m + n + o, child: childArray3, expanded: false });
            }
            childArray1.push({ id: "b" + m + n, name: "Node" + m + n, child: childArray2, expanded: false });
        }
        hierarchicalData.push({ id: "a" + m, name: "Node" + m, child: childArray1, expanded: false });
    }
    var ddTreeObj = new index_1.DropDownTree({
        changeOnBlur: false,
        showCheckBox: true,
        treeSettings: { loadOnDemand: true, autoCheck: true },
        mode: "Delimiter",
        popupHeight: "220px",
        placeholder: "Select a folder or file",
        fields: { dataSource: hierarchicalData, value: "id", text: "name", child: "child" },
    });
    ddTreeObj.appendTo('#default');
});
