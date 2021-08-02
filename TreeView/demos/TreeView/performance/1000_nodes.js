define(["require", "exports", "../../../src/treeview/treeview"], function (require, exports, treeview_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var hierarchicalData = [];
    var parent = 1000;
    for (var m = 1; m <= parent; m++) {
        hierarchicalData.push({ id: "a" + m, name: "Node" + m, child: [] });
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
