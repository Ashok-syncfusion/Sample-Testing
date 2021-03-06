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
});
