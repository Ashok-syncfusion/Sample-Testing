define(["require", "exports", "../../src/treeview/treeview", "@syncfusion/ej2-data", "@syncfusion/ej2-base", "../../node_modules/es6-promise/dist/es6-promise"], function (require, exports, treeview_1, ej2_data_1, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ej2_base_1.enableRipple(true);
    var nodeAttr = { 'style': 'font-weight: 500' };
    var hierarchicalData = [
        {
            nodeId: '01', nodeText: 'Music', icons: 'folder', image: 'images/Shooting.png', attr: nodeAttr, nodeExpanded: true,
            nodeChild: [
                { nodeId: '01-01', nodeText: 'Gouttes.mp3', nodeSelected: true, nodeUrl: 'http://npmci.syncfusion.com/development/demos/#/material/chart/line.html' }
            ]
        },
        {
            nodeId: '02', nodeText: 'Videos', icons: 'folder', image: 'images/Shooting.png',
            nodeChild: [
                { nodeId: '02-01', nodeText: 'Naturals.mp4', icons: 'file', image: 'images/Shooting.png' },
                { nodeId: '02-02', nodeText: 'Wild.mpeg', icons: 'file' },
            ]
        },
        {
            nodeId: '03', nodeText: 'Documents', icons: 'folder',
            nodeChild: [
                { nodeId: '03-01', nodeText: 'Environment Pollution.docx', icons: 'file' },
                { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx', icons: 'file' },
                { nodeId: '03-03', nodeText: 'Global Warming.ppt', icons: 'file' },
                { nodeId: '03-04', nodeText: 'Social Network.pdf', icons: 'file' },
                { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf', icons: 'file' },
            ]
        },
        {
            nodeId: '04', nodeText: 'Pictures', icons: 'folder',
            nodeChild: [
                {
                    nodeId: '04-01', nodeText: 'Camera Roll', icons: 'folder',
                    nodeChild: [
                        { nodeId: '04-01-01', nodeText: 'WIN_20160726_094117.JPG', icons: 'file' },
                        { nodeId: '04-01-02', nodeText: 'WIN_20160726_094118.JPG', icons: 'file' },
                        { nodeId: '04-01-03', nodeText: 'WIN_20160726_094119.JPG', icons: 'file' }
                    ]
                },
                { nodeId: '04-02', nodeText: 'Wind.jpg', icons: 'file' },
                { nodeId: '04-03', nodeText: 'Stone.jpg', icons: 'file' },
                { nodeId: '04-04', nodeText: 'Home.jpg', icons: 'file' },
                { nodeId: '04-05', nodeText: 'Bridge.png', icons: 'file' }
            ]
        },
        {
            nodeId: '05', nodeText: 'Downloads', icons: 'folder',
            nodeChild: [
                { nodeId: '05-01', nodeText: 'UI-Guide.pdf', icons: 'file' },
                { nodeId: '05-02', nodeText: 'Tutorials.zip', icons: 'file' },
                { nodeId: '05-03', nodeText: 'Game.exe', icons: 'file' },
                { nodeId: '05-04', nodeText: 'TypeScript.7z', icons: 'file' },
            ]
        },
    ];
    var localData = [
        { nodeId: '01', nodeText: 'Music', icons: 'folder', image: 'images/Shooting.png', attr: nodeAttr, hasChild: true, nodeExpanded: 'true', nodeSelected1: true },
        { nodeId: '01-01', nodePid: '01', nodeText: 'Gouttes.mp3', nodeSelected: true, nodeUrl: 'http://npmci.syncfusion.com/development/demos/#/material/chart/line.html' },
        { nodeId: '02', nodeText: 'Videos', icons: 'folder', image: 'images/Shooting.png', hasChild: true, nodeSelected1: true },
        { nodeId: '02-01', nodePid: '02', nodeText: 'Naturals.mp4', icons: 'file', image: 'images/Shooting.png' },
        { nodeId: '02-02', nodePid: '02', nodeText: 'Wild.mpeg', icons: 'file' },
        { nodeId: '03', nodeText: 'Documents', icons: 'folder', hasChild: true },
        { nodeId: '03-01', nodePid: '03', nodeText: 'Environment Pollution.docx', icons: 'file' },
        { nodeId: '03-02', nodePid: '03', nodeText: 'Global Water, Sanitation, & Hygiene.docx', icons: 'file' },
        { nodeId: '03-03', nodePid: '03', nodeText: 'Global Warming.ppt', icons: 'file' },
        { nodeId: '03-04', nodePid: '03', nodeText: 'Social Network.pdf', icons: 'file' },
        { nodeId: '03-05', nodePid: '03', nodeText: 'Youth Empowerment.pdf', icons: 'file' },
        { nodeId: '04', nodeText: 'Pictures', icons: 'folder', hasChild: true },
        { nodeId: '04-01', nodePid: '04', nodeText: 'Camera Roll', icons: 'folder', hasChild: true },
        { nodeId: '04-01-01', nodePid: '04-01', nodeText: 'WIN_20160726_094117.JPG', icons: 'file' },
        { nodeId: '04-01-02', nodePid: '04-01', nodeText: 'WIN_20160726_094118.JPG', icons: 'file' },
        { nodeId: '04-01-03', nodePid: '04-01', nodeText: 'WIN_20160726_094119.JPG', icons: 'file' },
        { nodeId: '04-02', nodePid: '04', nodeText: 'Wind.jpg', icons: 'file' },
        { nodeId: '04-03', nodePid: '04', nodeText: 'Stone.jpg', icons: 'file' },
        { nodeId: '04-04', nodePid: '04', nodeText: 'Home.jpg', icons: 'file' },
        { nodeId: '04-05', nodePid: '04', nodeText: 'Bridge.png', icons: 'file' },
        { nodeId: '05', nodeText: 'Downloads', icons: 'folder', hasChild: true },
        { nodeId: '05-01', nodePid: '05', nodeText: 'UI-Guide.pdf', icons: 'file' },
        { nodeId: '05-02', nodePid: '05', nodeText: 'Tutorials.zip', icons: 'file' },
        { nodeId: '05-03', nodePid: '05', nodeText: 'Game.exe', icons: 'file' },
        { nodeId: '05-04', nodePid: '05', nodeText: 'TypeScript.7z', icons: 'file' },
    ];
    var localData1 = [
        { nodeId: '01', nodeText: 'Music', nodeCusText: 'This is Music', image: 'images/Shooting.png', attr: nodeAttr, nodeSelected: true, hasChild: true, nodeExpanded: true },
        { nodeId: '01-01', nodePid: '01', nodeText: 'Gouttes.mp3', nodeCusText: 'This is Gouttes.mp3', nodeUrl: 'http://npmci.syncfusion.com/development/demos/#/material/chart/line.html' },
        { nodeId: '02', nodeText: 'Videos', nodeCusText: 'This is Videos', icons: 'folder', image: 'images/Shooting.png', hasChild: true },
        { nodeId: '02-01', nodePid: '02', nodeText: 'Naturals.mp4', nodeCusText: 'This is Naturals.mp4', icons: 'file', image: 'images/Shooting.png' },
        { nodeId: '02-02', nodePid: '02', nodeText: 'Wild.mpeg', nodeCusText: 'This is Wild.mpeg', icons: 'file' },
        { nodeId: '03', nodeText: 'Documents', nodeCusText: 'This is Documents', icons: 'folder', hasChild: true },
        { nodeId: '03-01', nodePid: '03', nodeText: 'Environment Pollution.docx', nodeCusText: 'This is Environment Pollution.docx', icons: 'file' },
        { nodeId: '03-02', nodePid: '03', nodeText: 'Global Water, Sanitation, & Hygiene.docx', nodeCusText: 'This is Global Water, Sanitation, & Hygiene.docx', icons: 'file' },
        { nodeId: '03-03', nodePid: '03', nodeText: 'Global Warming.ppt', nodeCusText: 'This is Global Warming.ppt', icons: 'file' },
        { nodeId: '03-04', nodePid: '03', nodeText: 'Social Network.pdf', nodeCusText: 'This is Social Network.pdf', icons: 'file' },
        { nodeId: '03-05', nodePid: '03', nodeText: 'Youth Empowerment.pdf', nodeCusText: 'This is Youth Empowerment.pdf', icons: 'file' },
        { nodeId: '04', nodeText: 'Pictures', nodeCusText: 'This is Pictures', icons: 'folder', hasChild: true },
        { nodeId: '04-01', nodePid: '04', nodeText: 'Camera Roll', nodeCusText: 'This is Camera Roll', icons: 'folder', hasChild: true },
        { nodeId: '04-01-01', nodePid: '04-01', nodeText: 'WIN_20160726_094117.JPG', nodeCusText: 'This is WIN_20160726_094117.JPG', icons: 'file' },
        { nodeId: '04-01-02', nodePid: '04-01', nodeText: 'WIN_20160726_094118.JPG', nodeCusText: 'This is WIN_20160726_094118.JPG', icons: 'file', hasChild: true },
        { nodeId: '04-01-03', nodePid: '04-01-02', nodeText: 'WIN_20160726_094119.JPG', nodeCusText: 'This is WIN_20160726_094119.JPG', icons: 'file' },
        { nodeId: '04-02', nodePid: '04', nodeText: 'Wind.jpg', nodeCusText: 'This is Wind.jpg', icons: 'file' },
        { nodeId: '04-03', nodePid: '04', nodeText: 'Stone.jpg', nodeCusText: 'This is Stone.jpg', icons: 'file' },
        { nodeId: '04-04', nodePid: '04', nodeText: 'Home.jpg', nodeCusText: 'This is Home.jpg', icons: 'file' },
        { nodeId: '04-05', nodePid: '04', nodeText: 'Bridge.png', nodeCusText: 'This is Bridge.png', icons: 'file' },
        { nodeId: '05', nodeText: 'Downloads', nodeCusText: 'This is Downloads', icons: 'folder', hasChild: true },
        { nodeId: '05-01', nodePid: '05', nodeText: 'UI-Guide.pdf', nodeCusText: 'This is UI-Guide.pdf', icons: 'file' },
        { nodeId: '05-02', nodePid: '05', nodeText: 'Tutorials.zip', nodeCusText: 'This is Tutorials.zip', icons: 'file' },
        { nodeId: '05-03', nodePid: '05', nodeText: 'Game.exe', nodeCusText: 'This is Game.exe', icons: 'file' },
        { nodeId: '05-04', nodePid: '05', nodeText: 'TypeScript.7z', nodeCusText: 'This is TypeScript.7z', icons: 'file' },
        { nodeId: '06', nodeText: 'Home', nodeCusText: 'This is Home', icons: 'folder', hasChild: true },
        { nodeId: '06', nodeText: 'App-Data', nodeCusText: 'This is App-Data', icons: 'folder', hasChild: "true" },
        { nodeText: 'Content', icons: 'folder', nodeCusText: 'This is Content', hasChild: "true" },
        { nodeId: '07', nodeText: 'App-start', nodeCusText: 'This is App-start', icons: 'file' },
    ];
    var data = new ej2_data_1.DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc',
        adaptor: new ej2_data_1.ODataV4Adaptor,
        crossDomain: true,
    });
    var query = new ej2_data_1.Query().from("Orders").select("CustomerID,OrderID,EmployeeID,Freight").take(3);
    var tree1 = new treeview_1.TreeView({
        fields: { dataSource: hierarchicalData, id: "nodeId", text: "nodeText", tooltip: "nodeText", child: "nodeChild", imageUrl: "image", iconCss: "icons", htmlAttributes: 'attr', expanded: 'nodeExpanded', selected: 'nodeSelected', navigateUrl: 'nodeUrl' },
    });
    tree1.appendTo('#tree1');
    var tree2 = new treeview_1.TreeView({
        fields: { dataSource: localData, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: 'hasChild', tooltip: "nodeText", imageUrl: "image", iconCss: "icons", htmlAttributes: 'attr', expanded: 'nodeExpanded', selected: 'nodeSelected', navigateUrl: 'nodeUrl' },
        selectedNodes: ['03']
    });
    tree2.appendTo('#tree2');
    var tree3 = new treeview_1.TreeView({
        fields: { dataSource: data, query: query, id: "CustomerID", text: "CustomerID", hasChildren: "CustomerID", tooltip: "Freight", expanded: 'CustomerID',
            child: { dataSource: data, tableName: "Customers", id: "Country", parentID: "CustomerID", text: "ContactName", hasChildren: "ContactName", tooltip: "ContactTitle",
                child: { dataSource: data, tableName: "Suppliers", id: "PostalCode", parentID: "Country", text: "CompanyName", tooltip: "Fax" }
            }
        },
        selectedNodes: ['France']
    });
    tree3.appendTo('#tree3');
    var tree4 = new treeview_1.TreeView({
        fields: { dataSource: localData, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: 'hasChild', imageUrl: "image", iconCss: "icons" },
        expandOn: 'Click',
    });
    tree4.appendTo('#tree4');
    var tree5 = new treeview_1.TreeView({
        fields: { dataSource: localData, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: 'hasChild', imageUrl: "image", iconCss: "icons" },
        allowEditing: true,
        nodeEditing: function (args) {
            document.getElementById("events").value = document.getElementById("events").value + 'editing: ' + args.oldText + '\\\n';
        },
        nodeEdited: function (args) {
            document.getElementById("events").value = document.getElementById("events").value + args.oldText + ' is edited to: ' + args.newText + '\\\n';
        },
    });
    tree5.appendTo('#tree5');
    var tree6 = new treeview_1.TreeView({
        fields: { dataSource: localData, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: 'hasChild', imageUrl: "image", iconCss: "icons" },
        enableRtl: true,
    });
    tree6.appendTo('#tree6');
    var tree7 = new treeview_1.TreeView({
        fields: { dataSource: localData, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: 'hasChild', imageUrl: "image", iconCss: "icons" },
        sortOrder: 'Ascending',
    });
    tree7.appendTo('#tree7');
    var tree8 = new treeview_1.TreeView({
        fields: { dataSource: localData, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: 'hasChild', imageUrl: "image", iconCss: "icons" },
        animation: { expand: { duration: 0 }, collapse: { duration: 0 } }
    });
    tree8.appendTo('#tree8');
    var tree9 = new treeview_1.TreeView({
        fields: { dataSource: localData, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: 'hasChild', imageUrl: "image", iconCss: "icons" },
        allowDragAndDrop: true,
        allowMultiSelection: true,
    });
    tree9.appendTo('#tree9');
    var tree10 = new treeview_1.TreeView({
        fields: { dataSource: localData, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: 'hasChild', imageUrl: "image", iconCss: "icons", selected: 'nodeSelected1' },
        fullRowSelect: false,
    });
    tree10.appendTo('#tree10');
    var tree11 = new treeview_1.TreeView({
        fields: { dataSource: localData, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: 'hasChild', imageUrl: "image", iconCss: "icons", selected: 'nodeSelected1' },
        allowMultiSelection: true,
    });
    tree11.appendTo('#tree11');
    var tree12 = new treeview_1.TreeView({
        fields: { dataSource: localData1, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: 'hasChild', imageUrl: "image", iconCss: "icons" },
        drawNode: function (args) {
            if (!args.node.querySelector('.e-icons')) {
                var rowDiv = document.createElement('span');
                rowDiv.className += 'new';
                args.node.children[1].appendChild(rowDiv);
            }
        }
    });
    tree12.appendTo('#tree12');
    var tree13 = new treeview_1.TreeView({
        fields: { dataSource: localData, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: 'hasChild', imageUrl: "image", iconCss: "icons", selected: 'nodeSelected1' },
        enablePersistence: true,
    });
    tree13.appendTo('#tree13');
    var tree50 = new treeview_1.TreeView({
        fields: { dataSource: localData1, id: "nodeId", parentID: 'nodePid', text: "nodeText", tooltip: "nodeText", hasChildren: "hasChild", imageUrl: "image", iconCss: "icons", htmlAttributes: 'attr', expanded: 'nodeExpanded', selected: 'nodeSelected' },
        cssClass: 'custom-tree',
        selectedNodes: ['02'],
        allowMultiSelection: true,
        allowDragAndDrop: true,
        allowEditing: true,
        created: function (args) {
            document.getElementById("events").value = document.getElementById("events").value + 'TreeView has been created. \\\n';
        },
        destroyed: function (args) {
            document.getElementById("events").value = document.getElementById("events").value + 'TreeView has been destroyed. \\\n';
        },
        dataBound: function (args) {
            document.getElementById("events").value = document.getElementById("events").value + 'TreeView data source is populated. \\\n';
        },
        nodeExpanding: function (args) {
            if (args.nodeData) {
                document.getElementById("events").value = document.getElementById("events").value + 'expanding: ' + args.nodeData.text + '\\\n';
            }
        },
        nodeExpanded: function (args) {
            if (args.nodeData) {
                document.getElementById("events").value = document.getElementById("events").value + 'expanded: ' + args.nodeData.text + '\\\n';
            }
        },
        nodeCollapsing: function (args) {
            if (args.nodeData) {
                document.getElementById("events").value = document.getElementById("events").value + 'collapsing: ' + args.nodeData.text + '\\\n';
            }
        },
        nodeCollapsed: function (args) {
            if (args.nodeData) {
                document.getElementById("events").value = document.getElementById("events").value + 'collapsed: ' + args.nodeData.text + '\\\n';
            }
        },
        nodeSelected: function (args) {
            if (args.nodeData) {
                document.getElementById("events").value = document.getElementById("events").value + args.action + 'ed: ' + args.nodeData.text + '\\\n';
            }
        },
        nodeSelecting: function (args) {
            if (args.nodeData) {
                document.getElementById("events").value = document.getElementById("events").value + args.action + 'ing: ' + (args.nodeData ? args.nodeData.text : '') + '\\\n';
            }
        },
        nodeEditing: function (args) {
            document.getElementById("events").value = document.getElementById("events").value + 'editing: ' + args.oldText + '\\\n';
        },
        nodeEdited: function (args) {
            document.getElementById("events").value = document.getElementById("events").value + args.oldText + ' is edited to: ' + args.newText + '\\\n';
        },
        nodeDragStart: function (args) {
            document.getElementById("events").value = document.getElementById("events").value + 'nodeDragStarted on: ' + args.draggedNodeData.text + '\\\n';
        },
        nodeDragging: function (args) {
            document.getElementById("events").value = document.getElementById("events").value + 'nodeDragging from: ' + args.draggedNodeData.text + ' to: ' + (args.droppedNodeData ? args.droppedNodeData.text : '') + '\\\n';
        },
        nodeDragStop: function (args) {
            document.getElementById("events").value = document.getElementById("events").value + 'nodeDragStop on: ' + (args.droppedNodeData ? args.droppedNodeData.text : '') + '\\\n';
        },
        nodeDropped: function (args) {
            document.getElementById("events").value = document.getElementById("events").value + 'nodeDropped to: ' + (args.droppedNodeData ? args.droppedNodeData.text : '') + '\\\n';
        },
        drawNode: function (args) {
            if (!args.node.querySelector('.e-icons')) {
                var rowDiv = document.createElement('span');
                rowDiv.className += 'new';
                args.node.querySelector('.e-list-text').appendChild(rowDiv);
            }
        },
        keyPress: function (args) {
            if (args.node) {
                document.getElementById("events").value = document.getElementById("events").value + 'key press on: ' + args.node.querySelector('.e-list-text').textContent + '\\\n';
            }
        },
        nodeClicked: function (args) {
            if (args.node) {
                document.getElementById("events").value = document.getElementById("events").value + 'clicked: ' + args.node.querySelector('.e-list-text').textContent + '\\\n';
            }
        }
    });
    tree50.appendTo('#tree50');
});
