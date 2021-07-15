define(["require", "exports", "../../src/drop-down-tree/index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var data = [{ id: 1, name: 'Australia', hasChild: true, expanded: true },
        { id: 2, pid: 1, name: 'New South Wales' },
        { id: 3, pid: 1, name: 'Victoria' },
        { id: 4, pid: 1, name: 'South Australia' },
        { id: 6, pid: 1, name: 'Western Australia' },
        { id: 7, name: 'Brazil', hasChild: true },
        { id: 8, pid: 7, name: 'Paraná' },
        { id: 9, pid: 7, name: 'Ceará' },
        { id: 10, pid: 7, name: 'Acre' },
        { id: 11, name: 'China', hasChild: true },
        { id: 12, pid: 11, name: 'Guangzhou' },
        { id: 13, pid: 11, name: 'Shanghai' },
        { id: 14, pid: 11, name: 'Beijing' },
        { id: 15, pid: 11, name: 'Shantou' },
        { id: 16, name: 'France', hasChild: true },
        { id: 17, pid: 16, name: 'Pays de la Loire' },
        { id: 18, pid: 16, name: 'Aquitaine' },
        { id: 19, pid: 16, name: 'Brittany' },
        { id: 20, pid: 16, name: 'Lorraine' },
        { id: 21, name: 'India', hasChild: true },
        { id: 22, pid: 21, name: 'Assam' },
        { id: 23, pid: 21, name: 'Bihar' },
        { id: 24, pid: 21, name: 'Tamil Nadu' },
        { id: 25, pid: 21, name: 'Punjab' }
    ];
    var ddTreeObj = new index_1.DropDownTree({
        fields: { dataSource: data, value: "id", parentValue: 'pid', text: "name", hasChildren: "hasChild", expanded: "expanded" },
        allowMultiSelection: true,
        showCheckBox: true,
        treeSettings: { loadOnDemand: true, autoCheck: true }
    });
    ddTreeObj.appendTo('#default');
    document.getElementById("btn").addEventListener("click", function() {
        var datasource = [
            {
                code: "AF", name: "Africa", countries: [
                    { code: "NGA", name: "Nigeria" },
                    { code: "EGY", name: "Egypt" },
                    { code: "ZAF", name: "South Africa" }
                ]
            },
            {
                code: "AS", name: "Asia", expanded: true, countries: [
                    { code: "CHN", name: "China" },
                    { code: "IND", name: "India", selected: true },
                    { code: "JPN", name: "Japan" }
                ]
            },
            {
                code: "EU", name: "Europe", countries: [
                    { code: "DNK", name: "Denmark" },
                    { code: "FIN", name: "Finland" },
                    { code: "AUT", name: "Austria" }
                ]
            },
            {
                code: "NA", name: "North America", countries: [
                    { code: "USA", name: "United States of America" },
                    { code: "CUB", name: "Cuba" },
                    { code: "MEX", name: "Mexico" }
                ]
            },
            {
                code: "SA", name: "South America", countries: [
                    { code: "BRA", name: "Brazil" },
                    { code: "COL", name: "Colombia" },
                    { code: "ARG", name: "Argentina" }
                ]
            },
            {
                code: "OC", name: "Oceania", countries: [
                    { code: "AUS", name: "Australia" },
                    { code: "NZL", name: "New Zealand" },
                    { code: "WSM", name: "Samoa" }
                ]
            },
            {
                code: "AN", name: "Antarctica", countries: [
                    { code: "BVT", name: "Bouvet Island" },
                    { code: "ATF", name: "French Southern Lands" }
                ]
            },
        ];        
        ddTreeObj.fields = { dataSource: datasource, value: "code", text: "name", child: "countries" };
        //ddTreeObj.dataBind();
      });
});
