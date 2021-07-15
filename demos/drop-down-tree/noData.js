define(["require", "exports", "../../src/drop-down-tree/index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var empList = [];
    var listObj = new index_1.DropDownTree({
        fields: { dataSource: empList, text: 'country', value: 'id' },
        noRecordsTemplate: '<div> <img src="http://www.404errorpages.com/images/image001.png" height="150px", width="150px"/> <div> There is no records to rendering the list items</div></div>',
        width: '250px',
        popupHeight: '300px',
        popupWidth: '250px',
    });
    listObj.appendTo('#list');
});
