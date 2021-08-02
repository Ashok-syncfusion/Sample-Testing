define(["require", "exports", "../../src/treeview/treeview", "@syncfusion/ej2-base", "@syncfusion/ej2-data", "../../node_modules/es6-promise/dist/es6-promise"], function (require, exports, treeview_1, ej2_base_1, ej2_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ej2_base_1.enableRipple(true);
    var nodeAttr = { 'style': 'font-weight: 500', 'class': 'customClass' };
    var company = {
        productTeam: [{
                team: { id: "0-1", name: 'Web Controls', expanded: true,
                    child: [
                        {
                            team: { id: "1-1", pid: "0-1", name: 'Calendar', checked: true, expanded: true, child: [
                                    { team: { id: "1-1-1", pid: "1-1", name: 'Constructors', navigation: '#demo' } },
                                    { team: { id: "1-1-2", pid: "1-1", name: 'Properties', htmlAttr: nodeAttr } },
                                    { team: { id: "1-1-3", pid: "1-1", name: 'Methods', tool: 'Web controls list' } },
                                    { team: { id: "1-1-4", pid: "1-1", name: 'Events' } }
                                ] }
                        },
                        {
                            team: { id: "1-2", pid: "0-1", name: 'Data Grid', select: true, child: [
                                    { team: { id: "1-2-1", pid: "1-2", name: 'Constructors' } },
                                    { team: { id: "1-2-2", pid: "1-2", name: 'Fields' } },
                                    { team: { id: "1-2-3", pid: "1-2", name: 'Properties' } },
                                    { team: { id: "1-2-4", pid: "1-2", name: 'Methods' } },
                                    { team: { id: "1-2-5", pid: "1-2", name: 'Events' } }
                                ] }
                        },
                        {
                            team: { id: "1-3", pid: "0-1", name: 'DropDownList', icon: 'folder', child: [
                                    { team: { id: "1-3-1", pid: "1-3", name: 'Constructors' } },
                                    { team: { id: "1-3-2", pid: "1-3", name: 'Properties' } },
                                    { team: { id: "1-3-3", pid: "1-3", name: 'Methods' } }
                                ] }
                        },
                        {
                            team: { id: "1-4", pid: "0-1", name: 'Menu', image: 'images/Employees/9.png', child: [
                                    { team: { id: "1-4-1", pid: "1-4", name: 'Constructors' } },
                                    { team: { id: "1-4-2", pid: "1-4", name: 'Fields' } },
                                    { team: { id: "1-4-3", pid: "1-4", name: 'Properties' } },
                                    { team: { id: "1-4-4", pid: "1-4", name: 'Methods' } },
                                    { team: { id: "1-4-5", pid: "1-4", name: 'Events' } }
                                ] }
                        },
                        {
                            team: { id: "1-5", pid: "0-1", name: 'TextBox', htmlAttr: { class: 'myclass' }, child: [
                                    { team: { id: "1-5-1", pid: "1-5", name: 'Constructors' } },
                                    { team: { id: "1-5-2", pid: "1-5", name: 'Properties' } },
                                    { team: { id: "1-5-3", pid: "1-5", name: 'Methods' } },
                                    { team: { id: "1-5-4", pid: "1-5", name: 'Events' } }
                                ] }
                        }
                    ]
                }
            }]
    };
    var listcompany = {
        productTeam: [
            { team: { id: 1, name: 'Web Controls', expanded: true, hasChild: true } },
            { team: { id: 2, pid: 1, name: 'Calendar', checked: true, expanded: true, hasChild: true } },
            { team: { id: 7, pid: 2, name: 'Constructors', navigation: '#demo' } },
            { team: { id: 8, pid: 2, name: 'Properties', htmlAttr: nodeAttr } },
            { team: { id: 9, pid: 2, name: 'Methods', tool: 'Web controls list' } },
            { team: { id: 10, pid: 2, name: 'Events' } },
            { team: { id: 3, pid: 1, name: 'Data Grid', select: true, hasChild: true } },
            { team: { id: 11, pid: 3, name: 'Constructors' } },
            { team: { id: 12, pid: 3, name: 'Fields' } },
            { team: { id: 13, pid: 3, name: 'Properties' } },
            { team: { id: 14, pid: 3, name: 'Methods' } },
            { team: { id: 15, pid: 3, name: 'Events' } },
            { team: { id: 4, pid: 1, name: 'DropDownList', icon: 'folder', hasChild: true } },
            { team: { id: 16, pid: 4, name: 'Constructors' } },
            { team: { id: 17, pid: 4, name: 'Properties' } },
            { team: { id: 18, pid: 4, name: 'Methods' } },
            { team: { id: 5, pid: 1, name: 'Menu', image: 'images/Employees/9.png', hasChild: true } },
            { team: { id: 19, pid: 5, name: 'Constructors' } },
            { team: { id: 20, pid: 5, name: 'Fields' } },
            { team: { id: 21, pid: 5, name: 'Properties' } },
            { team: { id: 22, pid: 5, name: 'Methods' } },
            { team: { id: 23, pid: 5, name: 'Events' } },
            { team: { id: 6, pid: 1, name: 'TextBox', htmlAttr: { class: 'myclass' }, hasChild: true } },
            { team: { id: 20, pid: 6, name: 'Constructors' } },
            { team: { id: 21, pid: 6, name: 'Properties' } },
            { team: { id: 22, pid: 6, name: 'Methods' } },
            { team: { id: 23, pid: 6, name: 'Events' } }
        ]
    };
    var treeViewData = {
        rootData: [
            { team: { id: 1, name: 'Web Controls', expanded: true, hasChild: true } },
        ],
        subDate: [
            { team: { id: 2, pid: 1, name: 'Calendar', checked: true, expanded: true, hasChild: true } },
            { team: { id: 3, pid: 1, name: 'Data Grid', select: true, hasChild: true } },
            { team: { id: 4, pid: 1, name: 'DropDownList', icon: 'folder', hasChild: true } },
            { team: { id: 5, pid: 1, name: 'Menu', image: 'images/Employees/9.png', hasChild: true } },
            { team: { id: 6, pid: 1, name: 'TextBox', htmlAttr: { class: 'myclass' }, hasChild: true } },
        ],
        leafData: [
            { team: { id: 7, pid: 2, name: 'Constructors', navigation: '#demo' } },
            { team: { id: 8, pid: 2, name: 'Properties', htmlAttr: nodeAttr } },
            { team: { id: 9, pid: 2, name: 'Methods', tool: 'Web controls list' } },
            { team: { id: 10, pid: 2, name: 'Events' } },
            { team: { id: 11, pid: 3, name: 'Constructors' } },
            { team: { id: 12, pid: 3, name: 'Fields' } },
            { team: { id: 13, pid: 3, name: 'Properties' } },
            { team: { id: 14, pid: 3, name: 'Methods' } },
            { team: { id: 15, pid: 3, name: 'Events' } },
            { team: { id: 16, pid: 4, name: 'Constructors' } },
            { team: { id: 17, pid: 4, name: 'Properties' } },
            { team: { id: 18, pid: 4, name: 'Methods' } },
            { team: { id: 19, pid: 5, name: 'Constructors' } },
            { team: { id: 20, pid: 5, name: 'Fields' } },
            { team: { id: 21, pid: 5, name: 'Properties' } },
            { team: { id: 22, pid: 5, name: 'Methods' } },
            { team: { id: 23, pid: 5, name: 'Events' } },
            { team: { id: 20, pid: 6, name: 'Constructors' } },
            { team: { id: 21, pid: 6, name: 'Properties' } },
            { team: { id: 22, pid: 6, name: 'Methods' } },
            { team: { id: 23, pid: 6, name: 'Events' } }
        ]
    };
    var tree1 = new treeview_1.TreeView({
        fields: { dataSource: company.productTeam, id: 'team.id', text: 'team.name', child: 'team.child', expanded: 'team.expanded', selected: 'team.select', isChecked: 'team.checked', htmlAttributes: 'team.htmlAttr', iconCss: 'team.icon', imageUrl: 'team.image', navigateUrl: 'team.navigation', tooltip: 'team.tool' },
        showCheckBox: true,
    });
    tree1.appendTo('#tree1');
    var tree2 = new treeview_1.TreeView({
        fields: { dataSource: listcompany.productTeam, id: 'team.id', text: 'team.name', parentID: 'team.pid', hasChildren: 'team.hasChild', expanded: 'team.expanded', selected: 'team.select', isChecked: 'team.checked', htmlAttributes: 'team.htmlAttr', iconCss: 'team.icon', imageUrl: 'team.image', navigateUrl: 'team.navigation', tooltip: 'team.tool' },
        showCheckBox: true,
    });
    tree2.appendTo('#tree2');
    var data = {
        treeData: new ej2_data_1.DataManager({
            url: 'http://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/',
            crossDomain: true,
        })
    };
    var query = {
        query1: new ej2_data_1.Query().from("Orders").select("CustomerID,OrderID,EmployeeID,Freight").take(3),
        query2: new ej2_data_1.Query().from("Customers").select("CustomerID,ContactTitle,ContactName,Country").take(5)
    };
    var table = {
        Suppliers: "Suppliers"
    };
    var tree3 = new treeview_1.TreeView({
        fields: { dataSource: data.treeData, query: query.query1, id: "CustomerID", text: "CustomerID", hasChildren: "CustomerID", tooltip: "Freight",
            child: { dataSource: data.treeData, query: query.query2, tableName: "Customers", id: "Country", parentID: "CustomerID", text: "ContactName", hasChildren: "ContactName", tooltip: "ContactTitle",
                child: { dataSource: data.treeData, tableName: table.Suppliers, id: "Fax", parentID: "Country", text: "CompanyName", tooltip: "Fax", hasChildren: "PostalCode",
                    child: { dataSource: data.treeData, tableName: table.Suppliers, id: "CompanyName", text: "CompanyName" }
                }
            }
        }
    });
    tree3.appendTo('#tree3');
    var data1 = new ej2_data_1.DataManager(treeViewData.rootData);
    var data2 = new ej2_data_1.DataManager(treeViewData.subDate);
    var data3 = new ej2_data_1.DataManager(treeViewData.leafData);
    var tree4 = new treeview_1.TreeView({
        fields: { dataSource: data1, id: "team.id", text: "team.name", hasChildren: 'team.hasChild', expanded: 'team.expanded', selected: 'team.select', isChecked: 'team.checked', htmlAttributes: 'team.htmlAttr', iconCss: 'team.icon', imageUrl: 'team.image',
            child: { dataSource: data2, id: "team.id", text: "team.name", hasChildren: 'team.hasChild', parentID: 'team.pid', expanded: 'team.expanded', selected: 'team.select', isChecked: 'team.checked', htmlAttributes: 'team.htmlAttr', iconCss: 'team.icon', imageUrl: 'team.image',
                child: { dataSource: data3, id: "team.id", text: "team.name", hasChildren: 'team.hasChild', parentID: 'team.pid', expanded: 'team.expanded', selected: 'team.select', isChecked: 'team.checked', htmlAttributes: 'team.htmlAttr', iconCss: 'team.icon', imageUrl: 'team.image' }
            }
        },
        showCheckBox: true
    });
    tree4.appendTo('#tree4');
});
