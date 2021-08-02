define(["require", "exports", "../../src/treeview/treeview", "@syncfusion/ej2-data", "../../node_modules/es6-promise/dist/es6-promise"], function (require, exports, treeview_1, ej2_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var data = new ej2_data_1.DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc',
        adaptor: new ej2_data_1.ODataV4Adaptor,
        crossDomain: true,
    });
    var query = new ej2_data_1.Query().from('Employees').select('EmployeeID,FirstName,Title').take(5);
    var query1 = new ej2_data_1.Query().from('Orders').select('OrderID,EmployeeID,ShipName').take(5);
    var tree1 = new treeview_1.TreeView({
        fields: { dataSource: data, query: query, id: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID',
            child: { dataSource: data, query: query1, id: 'OrderID', parentID: 'EmployeeID', text: 'ShipName' }
        }
    });
    tree1.appendTo('#tree1');
});
