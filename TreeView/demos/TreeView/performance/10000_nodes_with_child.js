define(["require", "exports", "../../../src/treeview/treeview"], function (require, exports, treeview_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var hierarchicalData = [];
    var parent = 10, child = 10, child1 = 9, child2 = 10;
    for (var m = 1; m <= parent; m++) {
        var childArray1 = [];
        for (var n = 1; n <= child; n++) {
            var childArray2 = [];
            for (var o = 1; o <= child1; o++) {
                var childArray3 = [];
                for (var p = 1; p <= child2; p++) {
                    childArray3.push({ id: "d" + m + n + o + p, name: "Node" + m + n + o + p });
                }
                childArray2.push({ id: "c" + m + n + o, name: "Node" + m + n + o, child: childArray3, expanded: true });
            }
            childArray1.push({ id: "b" + m + n, name: "Node" + m + n, child: childArray2, expanded: true });
        }
        hierarchicalData.push({ id: "a" + m, name: "Node" + m, child: childArray1, expanded: true });
    }
    var start = Math.floor(Date.now() / 1);
    var ejTree = new treeview_1.TreeView({
        fields: { dataSource: hierarchicalData, id: "id", text: "name", child: "child", },
        dataBound: function () {
            var time = Math.floor(Date.now() / 1) - start;
            var nodeLen = document.getElementById('ejTree').querySelectorAll('li').length;
            document.getElementById('ej').innerHTML = "Running Time : " + time + "ms, nodes :" + nodeLen;
        },
    });
    ejTree.appendTo('#ejTree');
});
