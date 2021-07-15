define(["require", "exports", "../../src/drop-down-tree/index", "@syncfusion/ej2-inputs"], function (require, exports, index_1, ej2_inputs_1) {
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
    var dropDownTreeObject = new index_1.DropDownTree({
        fields: { dataSource: data, value: 'id', parentValue: 'pid', hasChildren: 'hasChild', text: 'name' },
        placeholder: "Select a Country"
    });
    dropDownTreeObject.appendTo('#ddlelement');
    var options = {
        rules: {
            'listItems': { required: true },
        },
        customPlacement: function (inputElement, errorElement) {
            var errorEle = document.getElementById('error');
            errorEle.appendChild(errorElement);
        }
    };
    var formObject = new ej2_inputs_1.FormValidator('#form-element', options);
});
