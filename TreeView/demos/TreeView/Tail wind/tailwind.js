define(["require", "exports", "../../../src/treeview/treeview", "@syncfusion/ej2-data", "@syncfusion/ej2-base", "../../node_modules/es6-promise/dist/es6-promise"], function (require, exports, treeview_1, ej2_data_1, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ej2_base_1.enableRipple(true);
    var nodeAttr = { 'style': 'font-weight: 500' };
    var hierarchicalData = [
        {
            nodeId: '01', nodeText: 'Music', image: 'images/Shooting.png', attr: nodeAttr, nodeSelected: 'true', nodeExpanded: true,
            nodeChild: [
                { nodeId: '01-01', nodeText: 'Gouttes.mp3', nodeUrl: 'http://npmci.syncfusion.com/development/demos/#/material/chart/line.html' }
            ]
        },
        {
            nodeId: '02', nodeText: 'Videos', icons: 'folder', image: 'images/Shooting.png',
            nodeChild: [
                { nodeId: '02-01', nodeText: 'Naturals.mp4', icons: 'file', image: 'images/Shooting.png' },
                { nodeId: '02-02', nodeText: 'Wild.mpeg', icons: 'file' },
            ]
        },
        { nodeId: '06', nodeText: 'Home', icons: 'folder', nodeChild: [] },
        { nodeText: 'Content', icons: 'folder', hasChildren: true },
        { nodeId: '07', nodeText: 'App-start', icons: 'file' },
    ];
    var localData = [
        { nodeId: '01', nodeText: 'Music', image: 'images/Shooting.png', attr: nodeAttr, nodeSelected: true, hasChild: true, nodeExpanded: true, nodeSelected1: true },
        { nodeId: '01-01', nodePid: '01', nodeText: 'Gouttes.mp3', nodeUrl: 'http://npmci.syncfusion.com/development/demos/#/material/chart/line.html' },
        { nodeId: '02', nodeText: 'Videos', icons: 'folder', image: 'images/Shooting.png', hasChild: true, nodeSelected1: true },
        { nodeId: '02-01', nodePid: '02', nodeText: 'Naturals.mp4', icons: 'file', image: 'images/Shooting.png' },
        { nodeId: '02-02', nodePid: '02', nodeText: 'Wild.mpeg', icons: 'file' },
        { nodeId: '03', nodeText: 'Documents', icons: 'folder', hasChild: true },
        { nodeId: '03-01', nodePid: '03', nodeText: 'Environment Pollution.docx', icons: 'file' },
        { nodeId: '03-02', nodePid: '03', nodeText: 'Global Water, Sanitation, & Hygiene.docx', icons: 'file' },
        { nodeId: '03-03', nodePid: '03', nodeText: 'Global Warming.ppt', icons: 'file' },
        { nodeId: '03-04', nodePid: '03', nodeText: 'Social Network.pdf', icons: 'file' },
        { nodeId: '03-05', nodePid: '03', nodeText: 'Youth Empowerment.pdf', icons: 'file' },
        { nodeId: '04', nodeText: 'Pictures', icons: 'folder', hasChild: true, nodeExpanded: true, },
        { nodeId: '04-01', nodePid: '04', nodeText: 'Camera Roll', icons: 'folder', hasChild: true, nodeExpanded: 'true', },
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
        { nodeId: '06', nodeText: 'Home', icons: 'folder', hasChild: true },
        { nodeId: '06', nodeText: 'App-Data', icons: 'folder', hasChild: "true" },
        { nodeText: 'Content', icons: 'folder', hasChild: "true" },
        { nodeId: '07', nodeText: 'App-start', icons: 'file' },
    ];
    var rootData = [
        { nodeId: '01', nodeText: 'Music', image: 'images/Shooting.png', attr: nodeAttr, hasChild: true },
        { nodeId: '02', nodeText: 'Videos', icons: 'folder', image: 'images/Shooting.png', hasChild: true },
        { nodeId: '03', nodeText: 'Documents', icons: 'folder', hasChild: true },
        { nodeId: '04', nodeText: 'Pictures', icons: 'folder', hasChild: true, nodeExpanded: true, },
        { nodeId: '05', nodeText: 'Downloads', icons: 'folder', hasChild: true },
        { nodeId: '07', nodeText: 'App-start', icons: 'file' },
    ];
    var rootData1 = [
        { nodeId: '01-01', nodePid: '01', nodeText: 'Gouttes.mp3' },
        { nodeId: '02-01', nodePid: '02', nodeText: 'Naturals.mp4', icons: 'file', image: 'images/Shooting.png' },
        { nodeId: '02-02', nodePid: '02', nodeText: 'Wild.mpeg', icons: 'file' },
        { nodeId: '03-01', nodePid: '03', nodeText: 'Environment Pollution.docx', icons: 'file' },
        { nodeId: '03-02', nodePid: '03', nodeText: 'Global Water, Sanitation, & Hygiene.docx', icons: 'file' },
        { nodeId: '03-03', nodePid: '03', nodeText: 'Global Warming.ppt', icons: 'file' },
        { nodeId: '03-04', nodePid: '03', nodeText: 'Social Network.pdf', icons: 'file' },
        { nodeId: '03-05', nodePid: '03', nodeText: 'Youth Empowerment.pdf', icons: 'file' },
        { nodeId: '04-01', nodePid: '04', nodeText: 'Camera Roll', icons: 'folder', hasChild: true, nodeExpanded: 'true', },
        { nodeId: '04-01-01', nodePid: '04-01', nodeText: 'WIN_20160726_094117.JPG', icons: 'file' },
        { nodeId: '04-01-02', nodePid: '04-01', nodeText: 'WIN_20160726_094118.JPG', icons: 'file' },
        { nodeId: '04-01-03', nodePid: '04-01', nodeText: 'WIN_20160726_094119.JPG', icons: 'file' },
        { nodeId: '04-02', nodePid: '04', nodeText: 'Wind.jpg', icons: 'file' },
        { nodeId: '04-03', nodePid: '04', nodeText: 'Stone.jpg', icons: 'file' },
        { nodeId: '04-04', nodePid: '04', nodeText: 'Home.jpg', icons: 'file' },
        { nodeId: '04-05', nodePid: '04', nodeText: 'Bridge.png', icons: 'file' },
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
    var employees = [
        { id: 1, name: 'Steven Buchanan', eimg: '10', job: 'CEO', hasChild: true, expanded: true },
        { id: 2, pid: 1, name: 'Laura Callahan', eimg: '2', job: 'Product Manager', hasChild: true },
        { id: 3, pid: 2, name: 'Andrew Fuller', eimg: '7', job: 'Team Lead', hasChild: true },
        { id: 4, pid: 3, name: 'Anne Dodsworth', eimg: '1', job: 'Developer' },
        { id: 5, pid: 1, name: 'Nancy Davolio', eimg: '4', job: 'Product Manager', hasChild: true },
        { id: 6, pid: 5, name: 'Michael Suyama', eimg: '9', job: 'Team Lead', hasChild: true },
        { id: 7, pid: 6, name: 'Robert King', eimg: '8', job: 'Developer ' },
        { id: 8, pid: 7, name: 'Margaret Peacock', eimg: '6', job: 'Developer' },
        { id: 9, pid: 1, name: 'Janet Leverling', eimg: '3', job: 'HR' },
    ];
    var data = new ej2_data_1.DataManager({
        url: 'http://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Categories',
        crossDomain: true,
    });
    var data1 = new ej2_data_1.DataManager({
        url: 'http://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/',
        crossDomain: true,
    });
    var data2 = new ej2_data_1.DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc',
        adaptor: new ej2_data_1.ODataV4Adaptor,
        crossDomain: true,
    });
    var data3 = new ej2_data_1.DataManager(rootData);
    var data4 = new ej2_data_1.DataManager({
        url: 'http://js.syncfusion.com/demos/ejServices/api/TreeViewData/GetTreeData',
        adaptor: new ej2_data_1.UrlAdaptor,
        crossDomain: true,
    });
    var data5 = new ej2_data_1.DataManager({
        url: "http://js.syncfusion.com/demos/ejServices/api/TreeViewData/GetTreeData", crossDomain: true, adaptor: new ej2_data_1.WebApiAdaptor
    });
    var data6 = new ej2_data_1.DataManager({
        url: "http://mvc.syncfusion.com/Services/Northwnd.svc", crossDomain: true, adaptor: new ej2_data_1.ODataAdaptor
    });
    var data7 = new ej2_data_1.DataManager({
        url: 'http://js.syncfusion.com/demos/ejServices/api/TreeViewData/GetTreeData',
        adaptor: new ej2_data_1.UrlAdaptor,
        crossDomain: true,
        offline: true
    });
    var data9 = new ej2_data_1.DataManager(rootData1);
    var query = new ej2_data_1.Query().from("Categories").select("CategoryID,CategoryName,Description").take(7);
    var query2 = new ej2_data_1.Query().from("Orders").select("CustomerID,OrderID,EmployeeID,Freight").take(3);
    var query3 = new ej2_data_1.Query().from("Customers").select("CustomerID,ContactTitle,ContactName,Country").take(5);
    var query4 = new ej2_data_1.Query().from("Suppliers").select("PostalCode,Country,CompanyName,Fax").take(5);
    var query5 = new ej2_data_1.Query().from('Products').select('ProductID,ProductName').take(5);
    var query6 = new ej2_data_1.Query().take(5);
    var query7 = new ej2_data_1.Query().from("Foods").select("ItemID,ItemName,ItemType,Price,Stock").take(7);
    var tree1 = new treeview_1.TreeView({
        fields: { dataSource: hierarchicalData, id: "nodeId", text: "nodeText", tooltip: "nodeText", child: "nodeChild", imageUrl: "image", iconCss: "icons", htmlAttributes: 'attr', expanded: 'nodeExpanded', selected: 'nodeSelected', navigateUrl: 'nodeUrl' },
    });
    tree1.appendTo('#tree1');
    // var tree2 = new treeview_1.TreeView({
    //     fields: { dataSource: localData, id: "nodeId", parentID: 'nodePid', text: "nodeText", hasChildren: 'hasChild', tooltip: "nodeText", imageUrl: "image", iconCss: "icons", htmlAttributes: 'attr', expanded: 'nodeExpanded', selected: 'nodeSelected', navigateUrl: 'nodeUrl' },
    // });
    // tree2.appendTo('#tree2');
    // var tree3 = new treeview_1.TreeView({
    //     fields: { dataSource: data1, query: query2, id: "CustomerID", text: "CustomerID", hasChildren: "CustomerID", tooltip: "Freight", expanded: 'CustomerID',
    //         child: { dataSource: data1, tableName: "Customers", id: "Country", parentID: "CustomerID", text: "ContactName", hasChildren: "ContactName", tooltip: "ContactTitle", expanded: 'ContactName',
    //             child: { dataSource: data1, tableName: "Suppliers", id: "PostalCode", parentID: "Country", text: "CompanyName", tooltip: "Fax" }
    //         }
    //     }
    // });
    // tree3.appendTo('#tree3');
    // var tree4 = new treeview_1.TreeView({
    //     fields: { dataSource: data2, query: query2, id: "CustomerID", text: "CustomerID", hasChildren: "CustomerID", tooltip: "Freight",
    //         child: { dataSource: data2, tableName: "Customers", id: "Country", parentID: "CustomerID", text: "ContactName", hasChildren: "ContactName", tooltip: "ContactTitle",
    //             child: { dataSource: data2, tableName: "Suppliers", id: "PostalCode", parentID: "Country", text: "CompanyName", tooltip: "Fax" }
    //         }
    //     }
    // });
    // tree4.appendTo('#tree4');
    // var tree5 = new treeview_1.TreeView({
    //     fields: { dataSource: data3, id: "nodeId", text: "nodeText", hasChildren: 'hasChild', tooltip: "nodeText", imageUrl: "image", iconCss: "icons", htmlAttributes: 'attr', expanded: 'nodeExpanded',
    //         child: { dataSource: data9, id: "nodeId", text: "nodeText", parentID: "nodePid", tooltip: "nodeText", iconCss: "icons", hasChildren: 'hasChild', expanded: 'nodeExpanded' }
    //     }
    // });
    // tree5.appendTo('#tree5');
    // var tree6 = new treeview_1.TreeView({
    //     fields: { dataSource: data4, query: query6, id: "id", text: "name", hasChildren: 'hasChild',
    //         child: { dataSource: data4, query: query6, id: "id", text: "name", parentID: 'pid' }
    //     }
    // });
    // tree6.appendTo('#tree6');
    // var tree7 = new treeview_1.TreeView({
    //     fields: { dataSource: data5, query: query6, id: "id", text: "name", hasChildren: 'hasChild',
    //         child: { dataSource: data5, query: query6, id: "id", text: "name", parentID: 'pid' }
    //     }
    // });
    // tree7.appendTo('#tree7');
    // var tree8 = new treeview_1.TreeView({
    //     fields: { dataSource: data6, query: query7, id: "ItemID", text: "ItemName", }
    // });
    // tree8.appendTo('#tree8');
    // var tree9 = new treeview_1.TreeView({
    //     fields: { dataSource: data7, id: "id", text: "name", hasChildren: 'hasChild', expanded: 'expanded' }
    // });
    // tree9.appendTo('#tree9');
    var tree10 = new treeview_1.TreeView({
        fields: { dataSource: hierarchicalData, id: "nodeId", text: "nodeText", tooltip: "nodeText", child: "nodeChild", imageUrl: "image", iconCss: "icons", htmlAttributes: 'attr', expanded: 'nodeExpanded', selected: 'nodeSelected', navigateUrl: 'nodeUrl' },
        expandOn: 'Click',
    });
    tree10.appendTo('#tree10');
    var tree11 = new treeview_1.TreeView({
        fields: { dataSource: hierarchicalData, id: "nodeId", text: "nodeText", tooltip: "nodeText", child: "nodeChild", imageUrl: "image", iconCss: "icons", htmlAttributes: 'attr', expanded: 'nodeExpanded', selected: 'nodeSelected', navigateUrl: 'nodeUrl' },
        allowEditing: true,
        nodeEditing: function (args) {
            document.getElementById("events").value = document.getElementById("events").value + 'editing: ' + args.oldText + '\\\n';
        },
        nodeEdited: function (args) {
            document.getElementById("events").value = document.getElementById("events").value + args.oldText + ' is edited to: ' + args.newText + '\\\n';
        },
    });
    tree11.appendTo('#tree11');
    var tree12 = new treeview_1.TreeView({
        fields: { dataSource: hierarchicalData, id: "nodeId", text: "nodeText", tooltip: "nodeText", child: "nodeChild", imageUrl: "image", iconCss: "icons", htmlAttributes: 'attr', expanded: 'nodeExpanded', selected: 'nodeSelected', navigateUrl: 'nodeUrl' },
        enableRtl: true,
    });
    tree12.appendTo('#tree12');
    var tree13 = new treeview_1.TreeView({
        fields: { dataSource: hierarchicalData, id: "nodeId", text: "nodeText", tooltip: "nodeText", child: "nodeChild", imageUrl: "image", iconCss: "icons", htmlAttributes: 'attr', expanded: 'nodeExpanded', selected: 'nodeSelected', navigateUrl: 'nodeUrl' },
        sortOrder: 'Ascending',
    });
    tree13.appendTo('#tree13');
    var tree14 = new treeview_1.TreeView({
        fields: { dataSource: hierarchicalData, id: "nodeId", text: "nodeText", tooltip: "nodeText", child: "nodeChild", imageUrl: "image", iconCss: "icons", htmlAttributes: 'attr', expanded: 'nodeExpanded', selected: 'nodeSelected', navigateUrl: 'nodeUrl' },
        animation: { expand: { duration: 0 }, collapse: { duration: 0 } }
    });
    tree14.appendTo('#tree14');
    var tree15 = new treeview_1.TreeView({
        fields: { dataSource: hierarchicalData, id: "nodeId", text: "nodeText", tooltip: "nodeText", child: "nodeChild", imageUrl: "image", iconCss: "icons", htmlAttributes: 'attr', expanded: 'nodeExpanded', selected: 'nodeSelected', navigateUrl: 'nodeUrl' },
        allowDragAndDrop: true,
        allowMultiSelection: true,
    });
    tree15.appendTo('#tree15');
    var tree16 = new treeview_1.TreeView({
        fields: { dataSource: hierarchicalData, id: "nodeId", text: "nodeText", tooltip: "nodeText", child: "nodeChild", imageUrl: "image", iconCss: "icons", htmlAttributes: 'attr', expanded: 'nodeExpanded', selected: 'nodeSelected', navigateUrl: 'nodeUrl' },
        fullRowSelect: false,
    });
    tree16.appendTo('#tree16');
    var tree17 = new treeview_1.TreeView({
        fields: { dataSource: hierarchicalData, id: "nodeId", text: "nodeText", tooltip: "nodeText", child: "nodeChild", imageUrl: "image", iconCss: "icons", htmlAttributes: 'attr', expanded: 'nodeExpanded', selected: 'nodeSelected', navigateUrl: 'nodeUrl' },
        allowMultiSelection: true,
    });
    tree17.appendTo('#tree17');
    // var tree18 = new treeview_1.TreeView({
    //     fields: { dataSource: employees, id: "id", parentID: 'pid', text: "name", hasChildren: 'hasChild' },
    //     cssClass: 'custom',
    //     nodeTemplate: '<div><img class="eimage" src="images/Employees/${eimg}.png" alt="${eimg}"/><div class="ejob">${job}</div><div class="ename">${name}</div></div>'
    // });
    // tree18.appendTo('#tree18');
    var tree19 = new treeview_1.TreeView({
        fields: { dataSource: hierarchicalData, id: "nodeId", text: "nodeText", tooltip: "nodeText", child: "nodeChild", imageUrl: "image", iconCss: "icons", htmlAttributes: 'attr', expanded: 'nodeExpanded', selected: 'nodeSelected', navigateUrl: 'nodeUrl' },
        enablePersistence: true,
    });
    tree19.appendTo('#tree19');
    var tree50 = new treeview_1.TreeView({
        fields: { dataSource: hierarchicalData, id: "nodeId", text: "nodeText", tooltip: "nodeText", child: "nodeChild", imageUrl: "image", iconCss: "icons", htmlAttributes: 'attr', expanded: 'nodeExpanded', selected: 'nodeSelected', navigateUrl: 'nodeUrl' },
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
