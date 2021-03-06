var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-data", "@syncfusion/ej2-base", "@syncfusion/ej2-lists", "@syncfusion/ej2-buttons", "@syncfusion/ej2-inputs", "@syncfusion/ej2-popups"], function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4, ej2_base_5, ej2_base_6, ej2_base_7, ej2_data_1, ej2_base_8, ej2_lists_1, ej2_buttons_1, ej2_inputs_1, ej2_popups_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ROOT = 'e-treeview';
    var CONTROL = 'e-control';
    var COLLAPSIBLE = 'e-icon-collapsible';
    var EXPANDABLE = 'e-icon-expandable';
    var LISTITEM = 'e-list-item';
    var LISTTEXT = 'e-list-text';
    var PARENTITEM = 'e-list-parent';
    var HOVER = 'e-hover';
    var ACTIVE = 'e-active';
    var LOAD = 'e-icons-spinner';
    var PROCESS = 'e-process';
    var ICON = 'e-icons';
    var TEXTWRAP = 'e-text-content';
    var INPUT = 'e-input';
    var INPUTGROUP = 'e-input-group';
    var TREEINPUT = 'e-tree-input';
    var EDITING = 'e-editing';
    var RTL = 'e-rtl';
    var INTERACTION = 'e-interaction';
    var DRAGITEM = 'e-drag-item';
    var DROPPABLE = 'e-droppable';
    var DRAGGING = 'e-dragging';
    var SIBLING = 'e-sibling';
    var DROPIN = 'e-drop-in';
    var DROPNEXT = 'e-drop-next';
    var DROPOUT = 'e-drop-out';
    var NODROP = 'e-no-drop';
    var FULLROWWRAP = 'e-fullrow-wrap';
    var FULLROW = 'e-fullrow';
    var SELECTED = 'e-selected';
    var EXPANDED = 'e-expanded';
    var NODECOLLAPSED = 'e-node-collapsed';
    var DISABLE = 'e-disable';
    var DROPCOUNT = 'e-drop-count';
    var CHECK = 'e-check';
    var INDETERMINATE = 'e-stop';
    var CHECKBOXWRAP = 'e-checkbox-wrapper';
    var CHECKBOXFRAME = 'e-frame';
    var CHECKBOXRIPPLE = 'e-ripple-container';
    var RIPPLE = 'e-ripple';
    var RIPPLEELMENT = 'e-ripple-element';
    var FOCUS = 'e-node-focus';
    var IMAGE = 'e-list-img';
    var BIGGER = 'e-bigger';
    var SMALL = 'e-small';
    var CHILD = 'e-has-child';
    var ITEM_ANIMATION_ACTIVE = 'e-animation-active';
    var DISABLED = 'e-disabled';
    var treeAriaAttr = {
        treeRole: 'tree',
        itemRole: 'treeitem',
        listRole: 'group',
        itemText: '',
        wrapperRole: ''
    };
    var FieldsSettings = (function (_super) {
        __extends(FieldsSettings, _super);
        function FieldsSettings() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            ej2_base_2.Property('child')
        ], FieldsSettings.prototype, "child", void 0);
        __decorate([
            ej2_base_2.Property([])
        ], FieldsSettings.prototype, "dataSource", void 0);
        __decorate([
            ej2_base_2.Property('expanded')
        ], FieldsSettings.prototype, "expanded", void 0);
        __decorate([
            ej2_base_2.Property('hasChildren')
        ], FieldsSettings.prototype, "hasChildren", void 0);
        __decorate([
            ej2_base_2.Property('htmlAttributes')
        ], FieldsSettings.prototype, "htmlAttributes", void 0);
        __decorate([
            ej2_base_2.Property('iconCss')
        ], FieldsSettings.prototype, "iconCss", void 0);
        __decorate([
            ej2_base_2.Property('id')
        ], FieldsSettings.prototype, "id", void 0);
        __decorate([
            ej2_base_2.Property('imageUrl')
        ], FieldsSettings.prototype, "imageUrl", void 0);
        __decorate([
            ej2_base_2.Property('isChecked')
        ], FieldsSettings.prototype, "isChecked", void 0);
        __decorate([
            ej2_base_2.Property('parentID')
        ], FieldsSettings.prototype, "parentID", void 0);
        __decorate([
            ej2_base_2.Property(null)
        ], FieldsSettings.prototype, "query", void 0);
        __decorate([
            ej2_base_2.Property('selected')
        ], FieldsSettings.prototype, "selected", void 0);
        __decorate([
            ej2_base_2.Property(null)
        ], FieldsSettings.prototype, "tableName", void 0);
        __decorate([
            ej2_base_2.Property('text')
        ], FieldsSettings.prototype, "text", void 0);
        __decorate([
            ej2_base_2.Property('tooltip')
        ], FieldsSettings.prototype, "tooltip", void 0);
        __decorate([
            ej2_base_2.Property('navigateUrl')
        ], FieldsSettings.prototype, "navigateUrl", void 0);
        return FieldsSettings;
    }(ej2_base_2.ChildProperty));
    exports.FieldsSettings = FieldsSettings;
    var ActionSettings = (function (_super) {
        __extends(ActionSettings, _super);
        function ActionSettings() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            ej2_base_2.Property('SlideDown')
        ], ActionSettings.prototype, "effect", void 0);
        __decorate([
            ej2_base_2.Property(400)
        ], ActionSettings.prototype, "duration", void 0);
        __decorate([
            ej2_base_2.Property('linear')
        ], ActionSettings.prototype, "easing", void 0);
        return ActionSettings;
    }(ej2_base_2.ChildProperty));
    exports.ActionSettings = ActionSettings;
    var NodeAnimationSettings = (function (_super) {
        __extends(NodeAnimationSettings, _super);
        function NodeAnimationSettings() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            ej2_base_2.Complex({ effect: 'SlideUp', duration: 400, easing: 'linear' }, ActionSettings)
        ], NodeAnimationSettings.prototype, "collapse", void 0);
        __decorate([
            ej2_base_2.Complex({ effect: 'SlideDown', duration: 400, easing: 'linear' }, ActionSettings)
        ], NodeAnimationSettings.prototype, "expand", void 0);
        return NodeAnimationSettings;
    }(ej2_base_2.ChildProperty));
    exports.NodeAnimationSettings = NodeAnimationSettings;
    var TreeView = (function (_super) {
        __extends(TreeView, _super);
        function TreeView(options, element) {
            var _this = _super.call(this, options, element) || this;
            _this.isRefreshed = false;
            _this.preventExpand = false;
            _this.checkedElement = [];
            _this.disableNode = [];
            _this.validArr = [];
            _this.validNodes = [];
            _this.expandChildren = [];
            _this.isFieldChange = false;
            _this.changeDataSource = false;
            _this.isBlazorExpandedNodes = [];
            _this.hasTemplate = false;
            _this.mouseDownStatus = false;
            return _this;
        }
        TreeView_1 = TreeView;
        TreeView.prototype.getModuleName = function () {
            return 'treeview';
        };
        TreeView.prototype.preRender = function () {
            var _this = this;
            this.isBlazorPlatform = (ej2_base_6.isBlazor() && this.isServerRendered);
            this.checkActionNodes = [];
            this.parentNodeCheck = [];
            this.dragStartAction = false;
            this.isAnimate = false;
            this.keyConfigs = {
                escape: 'escape',
                end: 'end',
                enter: 'enter',
                f2: 'f2',
                home: 'home',
                moveDown: 'downarrow',
                moveLeft: 'leftarrow',
                moveRight: 'rightarrow',
                moveUp: 'uparrow',
                ctrlDown: 'ctrl+downarrow',
                ctrlUp: 'ctrl+uparrow',
                ctrlEnter: 'ctrl+enter',
                ctrlHome: 'ctrl+home',
                ctrlEnd: 'ctrl+end',
                ctrlA: 'ctrl+A',
                shiftDown: 'shift+downarrow',
                shiftUp: 'shift+uparrow',
                shiftEnter: 'shift+enter',
                shiftHome: 'shift+home',
                shiftEnd: 'shift+end',
                csDown: 'ctrl+shift+downarrow',
                csUp: 'ctrl+shift+uparrow',
                csEnter: 'ctrl+shift+enter',
                csHome: 'ctrl+shift+home',
                csEnd: 'ctrl+shift+end',
                space: 'space'
            };
            this.listBaseOption = {
                expandCollapse: true,
                showIcon: true,
                expandIconClass: EXPANDABLE,
                ariaAttributes: treeAriaAttr,
                expandIconPosition: 'Left',
                itemCreated: function (e) {
                    _this.beforeNodeCreate(e);
                },
                enableHtmlSanitizer: this.enableHtmlSanitizer,
                itemNavigable: this.fullRowNavigable
            };
            this.updateListProp(this.fields);
            this.aniObj = new ej2_base_4.Animation({});
            this.treeList = [];
            this.isLoaded = false;
            this.isInitalExpand = false;
            this.expandChildren = [];
            this.index = 0;
            this.setTouchClass();
            if (ej2_base_8.isNullOrUndefined(this.selectedNodes)) {
                this.setProperties({ selectedNodes: [] }, true);
            }
            if (ej2_base_8.isNullOrUndefined(this.checkedNodes)) {
                this.setProperties({ checkedNodes: [] }, true);
            }
            if (ej2_base_8.isNullOrUndefined(this.expandedNodes)) {
                this.setProperties({ expandedNodes: [] }, true);
            }
            else {
                this.isInitalExpand = true;
            }
        };
        TreeView.prototype.getPersistData = function () {
            var keyEntity = ['selectedNodes', 'checkedNodes', 'expandedNodes'];
            return this.addOnPersist(keyEntity);
        };
        TreeView.prototype.render = function () {
            this.initialRender = true;
            this.blazorInitialRender = false;
            this.initialize();
            this.setDataBinding(false);
            this.setDisabledMode();
            this.setExpandOnType();
            if (!this.disabled) {
                this.setRipple();
            }
            this.wireEditingEvents(this.allowEditing);
            this.setDragAndDrop(this.allowDragAndDrop);
            if (!this.disabled) {
                this.wireEvents();
            }
            if (!this.isBlazorPlatform) {
                this.initialRender = false;
            }
            this.renderComplete();
        };
        TreeView.prototype.initialize = function () {
            if (!this.isBlazorPlatform) {
                this.element.setAttribute('role', 'tree');
                this.element.setAttribute('tabindex', '0');
                this.element.setAttribute('aria-activedescendant', this.element.id + '_active');
                this.setCssClass(null, this.cssClass);
                this.setEnableRtl();
                this.setFullRow(this.fullRowSelect);
            }
            this.nodeTemplateFn = this.templateComplier(this.nodeTemplate);
        };
        TreeView.prototype.setDisabledMode = function () {
            if (this.disabled) {
                this.element.classList.add(DISABLED);
            }
            else {
                this.element.classList.remove(DISABLED);
            }
        };
        TreeView.prototype.setEnableRtl = function () {
            (this.enableRtl ? ej2_base_7.addClass : ej2_base_7.removeClass)([this.element], RTL);
        };
        TreeView.prototype.setRipple = function () {
            var tempStr = '.' + FULLROW + ',.' + TEXTWRAP;
            var rippleModel = {
                selector: tempStr,
                ignore: '.' + TEXTWRAP + ' > .' + ICON + ',.' + INPUTGROUP + ',.' + INPUT + ', .' + CHECKBOXWRAP
            };
            this.rippleFn = ej2_base_4.rippleEffect(this.element, rippleModel);
            var iconModel = {
                selector: '.' + TEXTWRAP + ' > .' + ICON,
                isCenterRipple: true
            };
            this.rippleIconFn = ej2_base_4.rippleEffect(this.element, iconModel);
        };
        TreeView.prototype.setFullRow = function (isEnabled) {
            (isEnabled ? ej2_base_7.addClass : ej2_base_7.removeClass)([this.element], FULLROWWRAP);
        };
        TreeView.prototype.setMultiSelect = function (isEnabled) {
            var firstUl = ej2_base_7.select('.' + PARENTITEM, this.element);
            if (isEnabled) {
                firstUl.setAttribute('aria-multiselectable', 'true');
            }
            else {
                firstUl.removeAttribute('aria-multiselectable');
            }
        };
        TreeView.prototype.templateComplier = function (template) {
            if (template) {
                this.hasTemplate = true;
                var e = void 0;
                this.element.classList.add(INTERACTION);
                try {
                    if (document.querySelectorAll(template).length) {
                        return ej2_base_1.compile(document.querySelector(template).innerHTML.trim());
                    }
                }
                catch (e) {
                    return ej2_base_1.compile(template);
                }
            }
            this.element.classList.remove(INTERACTION);
            return undefined;
        };
        TreeView.prototype.setDataBinding = function (changeDataSource) {
            var _this = this;
            this.treeList.push('false');
            if (this.fields.dataSource instanceof ej2_data_1.DataManager) {
                this.isOffline = (this.isBlazorPlatform ? this.fields.dataSource.offline :
                    this.fields.dataSource.dataSource.offline);
                if (this.fields.dataSource.ready) {
                    this.fields.dataSource.ready.then(function (e) {
                        _this.isOffline = (_this.isBlazorPlatform ? _this.fields.dataSource.offline :
                            _this.fields.dataSource.dataSource.offline);
                        if (_this.fields.dataSource instanceof ej2_data_1.DataManager && _this.isOffline) {
                            _this.treeList.pop();
                            _this.treeData = e.result;
                            _this.isNumberTypeId = _this.getType();
                            _this.setRootData();
                            _this.renderItems(true);
                            if (_this.treeList.length === 0 && !_this.isLoaded) {
                                _this.finalize();
                            }
                        }
                    }).catch(function (e) {
                        _this.trigger('actionFailure', { error: e });
                    });
                }
                else {
                    this.fields.dataSource.executeQuery(this.getQuery(this.fields)).then(function (e) {
                        _this.treeList.pop();
                        _this.treeData = e.result;
                        _this.isNumberTypeId = _this.getType();
                        _this.setRootData();
                        if (changeDataSource) {
                            _this.changeDataSource = true;
                        }
                        _this.renderItems(true);
                        _this.changeDataSource = false;
                        if (_this.treeList.length === 0 && !_this.isLoaded) {
                            _this.finalize();
                        }
                    }).catch(function (e) {
                        _this.trigger('actionFailure', { error: e });
                    });
                }
            }
            else {
                this.treeList.pop();
                if (ej2_base_8.isNullOrUndefined(this.fields.dataSource)) {
                    this.rootData = this.treeData = [];
                }
                else {
                    this.treeData = JSON.parse(JSON.stringify(this.fields.dataSource));
                    this.setRootData();
                }
                this.isNumberTypeId = this.getType();
                this.renderItems(false);
            }
            if (this.treeList.length === 0 && !this.isLoaded) {
                this.finalize();
            }
        };
        TreeView.prototype.getQuery = function (mapper, value) {
            if (value === void 0) { value = null; }
            var columns = [];
            var query;
            if (!mapper.query) {
                query = new ej2_data_1.Query();
                var prop = this.getActualProperties(mapper);
                for (var _i = 0, _a = Object.keys(prop); _i < _a.length; _i++) {
                    var col = _a[_i];
                    if (col !== 'dataSource' && col !== 'tableName' && col !== 'child' && !!mapper[col]
                        && col !== 'url' && columns.indexOf(mapper[col]) === -1) {
                        columns.push(mapper[col]);
                    }
                }
                query.select(columns);
                if (prop.hasOwnProperty('tableName')) {
                    query.from(mapper.tableName);
                }
            }
            else {
                query = mapper.query.clone();
            }
            ej2_lists_1.ListBase.addSorting(this.sortOrder, mapper.text, query);
            if (!ej2_base_8.isNullOrUndefined(value) && !ej2_base_8.isNullOrUndefined(mapper.parentID)) {
                query.where(mapper.parentID, 'equal', (this.isNumberTypeId ? parseFloat(value) : value));
            }
            return query;
        };
        TreeView.prototype.getType = function () {
            return this.treeData[0] ? ((typeof ej2_base_8.getValue(this.fields.id, this.treeData[0]) === 'number') ? true : false) : false;
        };
        TreeView.prototype.setRootData = function () {
            this.dataType = this.getDataType(this.treeData, this.fields);
            if (this.dataType === 1) {
                this.groupedData = this.getGroupedData(this.treeData, this.fields.parentID);
                var rootItems = this.getChildNodes(this.treeData, undefined, true);
                if (ej2_base_8.isNullOrUndefined(rootItems)) {
                    this.rootData = [];
                }
                else {
                    this.rootData = rootItems;
                }
            }
            else {
                this.rootData = this.treeData;
            }
        };
        TreeView.prototype.renderItems = function (isSorted) {
            if (!this.isBlazorPlatform || (this.isBlazorPlatform && this.fields.dataSource instanceof ej2_data_1.DataManager && (this.fields.dataSource.adaptorName !== 'BlazorAdaptor')) || this.changeDataSource) {
                this.listBaseOption.ariaAttributes.level = 1;
                var sortedData = this.getSortedData(this.rootData);
                this.ulElement = ej2_lists_1.ListBase.createList(this.createElement, isSorted ? this.rootData : sortedData, this.listBaseOption);
                this.element.appendChild(this.ulElement);
                var rootNodes = this.ulElement.querySelectorAll('.e-list-item');
                if (this.loadOnDemand === false) {
                    var i = 0;
                    while (i < rootNodes.length) {
                        this.renderChildNodes(rootNodes[i], true, null, true);
                        i++;
                    }
                }
                var parentEle = ej2_base_7.selectAll('.' + PARENTITEM, this.element);
                if ((parentEle.length === 1 && (rootNodes && rootNodes.length !== 0)) || this.loadOnDemand) {
                    this.finalizeNode(this.element);
                }
            }
            this.updateTemplateForBlazor();
            this.parentNodeCheck = [];
            this.parentCheckData = [];
            this.updateCheckedStateFromDS();
            if (this.autoCheck && this.showCheckBox && !this.isLoaded) {
                this.updateParentCheckState();
            }
        };
        TreeView.prototype.updateTemplateForBlazor = function () {
            if (this.nodeTemplate && this.isBlazorPlatform && !this.isStringTemplate) {
                this.updateBlazorTemplate();
            }
        };
        TreeView.prototype.updateCheckedStateFromDS = function (id) {
            this.validNodes = [];
            if (this.treeData && this.showCheckBox) {
                if (this.dataType === 1) {
                    var mapper = this.fields;
                    var resultData = new ej2_data_1.DataManager(this.treeData).executeLocal(new ej2_data_1.Query().where(mapper.isChecked, 'equal', true, false));
                    for (var i = 0; i < resultData.length; i++) {
                        var resultId = resultData[i][this.fields.id] ? resultData[i][this.fields.id].toString() : null;
                        var resultPId = resultData[i][this.fields.parentID] ? resultData[i][this.fields.parentID].toString() : null;
                        if (this.checkedNodes.indexOf(resultId) === -1 && !(this.isLoaded)) {
                            this.checkedNodes.push(resultId);
                        }
                        if (resultData[i][this.fields.hasChildren]) {
                            var id_1 = resultData[i][this.fields.id];
                            var childData = new ej2_data_1.DataManager(this.treeData).
                                executeLocal(new ej2_data_1.Query().where(mapper.parentID, 'equal', id_1, false));
                            for (var child = 0; child < childData.length; child++) {
                                var childId = childData[child][this.fields.id] ? childData[child][this.fields.id].toString() : null;
                                if (this.checkedNodes.indexOf(childId) === -1 && this.autoCheck) {
                                    this.checkedNodes.push(childId);
                                }
                            }
                        }
                    }
                    for (var i = 0; i < this.checkedNodes.length; i++) {
                        var mapper_1 = this.fields;
                        var checkState = new ej2_data_1.DataManager(this.treeData).
                            executeLocal(new ej2_data_1.Query().where(mapper_1.id, 'equal', this.checkedNodes[i], true));
                        if (checkState[0] && this.autoCheck) {
                            this.getCheckedNodeDetails(mapper_1, checkState);
                            this.checkIndeterminateState(checkState[0]);
                        }
                        if (checkState.length > 0) {
                            var checkedId = checkState[0][this.fields.id] ? checkState[0][this.fields.id].toString() : null;
                            if (this.checkedNodes.indexOf(checkedId) > -1 && this.validNodes.indexOf(checkedId) === -1) {
                                this.validNodes.push(checkedId);
                            }
                        }
                        var checkedData = new ej2_data_1.DataManager(this.treeData).
                            executeLocal(new ej2_data_1.Query().where(mapper_1.parentID, 'equal', this.checkedNodes[i], true));
                        for (var index = 0; index < checkedData.length; index++) {
                            var checkedId = checkedData[index][this.fields.id] ? checkedData[index][this.fields.id].toString() : null;
                            if (this.checkedNodes.indexOf(checkedId) === -1 && this.autoCheck) {
                                this.checkedNodes.push(checkedId);
                            }
                            if (this.checkedNodes.indexOf(checkedId) > -1 && this.validNodes.indexOf(checkedId) === -1) {
                                this.validNodes.push(checkedId);
                            }
                        }
                    }
                }
                else if (this.dataType === 2 || (this.fields.dataSource instanceof ej2_data_1.DataManager &&
                    this.isOffline)) {
                    for (var index = 0; index < this.treeData.length; index++) {
                        var fieldId = this.treeData[index][this.fields.id] ? this.treeData[index][this.fields.id].toString() : '';
                        if (this.treeData[index][this.fields.isChecked] && !(this.isLoaded) && this.checkedNodes.indexOf(fieldId) === -1) {
                            this.checkedNodes.push(fieldId);
                        }
                        if (this.checkedNodes.indexOf(fieldId) > -1 && this.validNodes.indexOf(fieldId) === -1) {
                            this.validNodes.push(fieldId);
                        }
                        var childItems = ej2_base_8.getValue(this.fields.child.toString(), this.treeData[index]);
                        if (childItems) {
                            this.updateChildCheckState(childItems, this.treeData[index]);
                        }
                    }
                }
                this.setProperties({ checkedNodes: this.validNodes }, true);
            }
        };
        TreeView.prototype.getCheckedNodeDetails = function (mapper, checkNodes) {
            var id = checkNodes[0][this.fields.parentID] ? checkNodes[0][this.fields.parentID].toString() : null;
            var count = 0;
            var element = this.element.querySelector('[data-uid="' + checkNodes[0][this.fields.id] + '"]');
            var parentEle = this.element.querySelector('[data-uid="' + checkNodes[0][this.fields.parentID] + '"]');
            if (!element && !parentEle) {
                var len = this.parentNodeCheck.length;
                if (this.parentNodeCheck.indexOf(id) === -1) {
                    this.parentNodeCheck.push(id);
                }
                var childNodes = this.getChildNodes(this.treeData, id);
                for (var i = 0; i < childNodes.length; i++) {
                    var childId = childNodes[i][this.fields.id] ? childNodes[i][this.fields.id].toString() : null;
                    if (this.checkedNodes.indexOf(childId) !== -1) {
                        count++;
                    }
                    if (count === childNodes.length && this.checkedNodes.indexOf(id) === -1) {
                        this.checkedNodes.push(id);
                    }
                }
                var preElement = new ej2_data_1.DataManager(this.treeData).
                    executeLocal(new ej2_data_1.Query().where(mapper.id, 'equal', id, true));
                this.getCheckedNodeDetails(mapper, preElement);
            }
            else if (parentEle) {
                var check = ej2_base_7.select('.' + CHECK, parentEle);
                if (!check) {
                    this.changeState(parentEle, 'indeterminate', null, true, true);
                }
            }
        };
        TreeView.prototype.updateParentCheckState = function () {
            var indeterminate = ej2_base_7.selectAll('.' + INDETERMINATE, this.element);
            var childCheckedElement;
            for (var i = 0; i < indeterminate.length; i++) {
                var node = ej2_base_7.closest(indeterminate[i], '.' + LISTITEM);
                var nodeId = node.getAttribute('data-uid').toString();
                if (this.dataType === 1) {
                    childCheckedElement = new ej2_data_1.DataManager(this.treeData).
                        executeLocal(new ej2_data_1.Query().where(this.fields.parentID, 'equal', nodeId, true));
                }
                else {
                    childCheckedElement = this.getChildNodes(this.treeData, nodeId);
                }
                var count = 0;
                if (childCheckedElement) {
                    for (var j = 0; j < childCheckedElement.length; j++) {
                        var childId = childCheckedElement[j][this.fields.id].toString();
                        if (this.checkedNodes.indexOf(childId) !== -1) {
                            count++;
                        }
                    }
                    if (count === childCheckedElement.length) {
                        var nodeCheck = node.getAttribute('data-uid');
                        if (this.checkedNodes.indexOf(nodeCheck) === -1) {
                            this.checkedNodes.push(nodeCheck);
                        }
                        this.changeState(node, 'check', null, true, true);
                    }
                    else if (count === 0 && this.checkedNodes.length === 0) {
                        this.changeState(node, 'uncheck', null, true, true);
                    }
                }
            }
        };
        TreeView.prototype.checkIndeterminateState = function (data) {
            var element;
            if (this.dataType === 1) {
                element = this.element.querySelector('[data-uid="' + data[this.fields.parentID] + '"]');
            }
            else {
                element = this.element.querySelector('[data-uid="' + data[this.fields.id] + '"]');
            }
            if (element) {
                var ariaChecked = element.querySelector('.' + CHECKBOXWRAP).getAttribute('aria-checked');
                if (ariaChecked !== 'true') {
                    this.changeState(element, 'indeterminate', null, true, true);
                }
            }
            else if (this.dataType === 2) {
                var len = this.parentNodeCheck.length;
                if (this.parentNodeCheck.indexOf(data[this.fields.id].toString()) === -1) {
                    this.parentNodeCheck.push(data[this.fields.id].toString());
                }
            }
        };
        TreeView.prototype.updateChildCheckState = function (childItems, treeData) {
            var count = 0;
            var checkedParent = treeData[this.fields.id] ? treeData[this.fields.id].toString() : '';
            for (var index = 0; index < childItems.length; index++) {
                var checkedChild = childItems[index][this.fields.id] ? childItems[index][this.fields.id].toString() : '';
                if (childItems[index][this.fields.isChecked] && !(this.isLoaded) && this.checkedNodes.indexOf(checkedChild) === -1) {
                    this.checkedNodes.push(checkedChild);
                }
                if (this.checkedNodes.indexOf(checkedParent) !== -1 && this.checkedNodes.indexOf(checkedChild) === -1 && this.autoCheck) {
                    this.checkedNodes.push(checkedChild);
                }
                if (this.checkedNodes.indexOf(checkedChild) !== -1 && this.autoCheck) {
                    count++;
                }
                if (this.checkedNodes.indexOf(checkedChild) > -1 && this.validNodes.indexOf(checkedChild) === -1) {
                    this.validNodes.push(checkedChild);
                }
                var subChildItems = ej2_base_8.getValue(this.fields.child.toString(), childItems[index]);
                if (subChildItems) {
                    this.parentCheckData.push(treeData);
                    this.updateChildCheckState(subChildItems, childItems[index]);
                }
                if (count === childItems.length && this.autoCheck && this.checkedNodes.indexOf(checkedParent) === -1) {
                    this.checkedNodes.push(checkedParent);
                }
            }
            if (count !== 0 && this.autoCheck) {
                this.checkIndeterminateState(treeData);
                for (var len = 0; len < this.parentCheckData.length; len++) {
                    if ((treeData !== this.parentCheckData[len]) && (this.parentCheckData[len])) {
                        this.checkIndeterminateState(this.parentCheckData[len]);
                    }
                }
            }
            this.parentCheckData = [];
        };
        TreeView.prototype.beforeNodeCreate = function (e) {
            if (this.showCheckBox) {
                var checkboxEle = ej2_buttons_1.createCheckBox(this.createElement, true, { cssClass: this.touchClass });
                checkboxEle.setAttribute('role', 'checkbox');
                var icon = ej2_base_7.select('div.' + ICON, e.item);
                var id = e.item.getAttribute('data-uid');
                e.item.childNodes[0].insertBefore(checkboxEle, e.item.childNodes[0].childNodes[ej2_base_8.isNullOrUndefined(icon) ? 0 : 1]);
                var checkValue = ej2_base_8.getValue(e.fields.isChecked, e.curData);
                if (this.checkedNodes.indexOf(id) > -1) {
                    ej2_base_7.select('.' + CHECKBOXFRAME, checkboxEle).classList.add(CHECK);
                    checkboxEle.setAttribute('aria-checked', 'true');
                    this.addCheck(e.item);
                }
                else if (!ej2_base_8.isNullOrUndefined(checkValue) && checkValue.toString() === 'true') {
                    ej2_base_7.select('.' + CHECKBOXFRAME, checkboxEle).classList.add(CHECK);
                    checkboxEle.setAttribute('aria-checked', 'true');
                    this.addCheck(e.item);
                }
                else {
                    checkboxEle.setAttribute('aria-checked', 'false');
                }
                var frame = ej2_base_7.select('.' + CHECKBOXFRAME, checkboxEle);
                ej2_base_3.EventHandler.add(frame, 'mousedown', this.frameMouseHandler, this);
                ej2_base_3.EventHandler.add(frame, 'mouseup', this.frameMouseHandler, this);
            }
            if (this.fullRowSelect) {
                this.createFullRow(e.item);
            }
            if (this.allowMultiSelection && !e.item.classList.contains(SELECTED)) {
                e.item.setAttribute('aria-selected', 'false');
            }
            var fields = e.fields;
            this.addActionClass(e, fields.selected, SELECTED);
            this.addActionClass(e, fields.expanded, EXPANDED);
            if (!ej2_base_8.isNullOrUndefined(this.nodeTemplateFn)) {
                var textEle = e.item.querySelector('.' + LISTTEXT);
                var dataId = e.item.getAttribute('data-uid');
                textEle.innerHTML = '';
                this.renderNodeTemplate(e.curData, textEle, dataId);
            }
            var eventArgs = {
                node: e.item,
                nodeData: e.curData,
                text: e.text,
            };
            if (!this.isRefreshed) {
                this.trigger('drawNode', eventArgs);
            }
        };
        TreeView.prototype.frameMouseHandler = function (e) {
            var rippleSpan = ej2_base_7.select('.' + CHECKBOXRIPPLE, e.target.parentElement);
            ej2_buttons_1.rippleMouseHandler(e, rippleSpan);
        };
        TreeView.prototype.addActionClass = function (e, action, cssClass) {
            var data = e.curData;
            var actionValue = ej2_base_8.getValue(action, data);
            if (!ej2_base_8.isNullOrUndefined(actionValue) && actionValue.toString() !== 'false') {
                e.item.classList.add(cssClass);
            }
        };
        TreeView.prototype.getDataType = function (ds, mapper) {
            if (this.fields.dataSource instanceof ej2_data_1.DataManager && (this.fields.dataSource.adaptorName !== 'BlazorAdaptor')) {
                for (var i = 0; i < ds.length; i++) {
                    if (this.isOffline) {
                        if ((typeof mapper.child === 'string') && ej2_base_8.isNullOrUndefined(ej2_base_8.getValue(mapper.child, ds[i])) && !ej2_base_8.isNullOrUndefined(ej2_base_8.getValue(mapper.parentID, ds[i]))) {
                            return 1;
                        }
                    }
                    else if ((typeof mapper.child === 'string') && ej2_base_8.isNullOrUndefined(ej2_base_8.getValue(mapper.child, ds[i]))) {
                        return 1;
                    }
                }
                return 2;
            }
            for (var i = 0, len = ds.length; i < len; i++) {
                if ((typeof mapper.child === 'string') && !ej2_base_8.isNullOrUndefined(ej2_base_8.getValue(mapper.child, ds[i]))) {
                    return 2;
                }
                if (!ej2_base_8.isNullOrUndefined(ej2_base_8.getValue(mapper.parentID, ds[i])) || !ej2_base_8.isNullOrUndefined(ej2_base_8.getValue(mapper.hasChildren, ds[i]))) {
                    return 1;
                }
            }
            return 1;
        };
        TreeView.prototype.getGroupedData = function (dataSource, groupBy) {
            var cusQuery = new ej2_data_1.Query().group(groupBy);
            var ds = ej2_lists_1.ListBase.getDataSource(dataSource, cusQuery);
            var grpItem = [];
            for (var j = 0; j < ds.length; j++) {
                var itemObj = ds[j].items;
                grpItem.push(itemObj);
            }
            return grpItem;
        };
        TreeView.prototype.getSortedData = function (list) {
            if (list && this.sortOrder !== 'None') {
                list = ej2_lists_1.ListBase.getDataSource(list, ej2_lists_1.ListBase.addSorting(this.sortOrder, this.fields.text));
            }
            return list;
        };
        TreeView.prototype.finalizeNode = function (element) {
            var iNodes = ej2_base_7.selectAll('.' + IMAGE, element);
            for (var k = 0; k < iNodes.length; k++) {
                iNodes[k].setAttribute('alt', IMAGE);
            }
            if (this.isLoaded) {
                var sNodes = ej2_base_7.selectAll('.' + SELECTED, element);
                for (var i = 0; i < sNodes.length; i++) {
                    this.selectNode(sNodes[i], null);
                    break;
                }
                ej2_base_7.removeClass(sNodes, SELECTED);
            }
            var cNodes = ej2_base_7.selectAll('.' + LISTITEM + ':not(.' + EXPANDED + ')', element);
            for (var j = 0; j < cNodes.length; j++) {
                var icon = ej2_base_7.select('div.' + ICON, cNodes[j]);
                if (icon && icon.classList.contains(EXPANDABLE)) {
                    this.disableExpandAttr(cNodes[j]);
                }
            }
            var eNodes = ej2_base_7.selectAll('.' + EXPANDED, element);
            if (!this.isInitalExpand) {
                for (var i = 0; i < eNodes.length; i++) {
                    this.renderChildNodes(eNodes[i]);
                }
            }
            ej2_base_7.removeClass(eNodes, EXPANDED);
            this.updateList();
            if (this.isLoaded) {
                this.updateCheckedProp();
            }
        };
        TreeView.prototype.updateCheckedProp = function () {
            if (this.showCheckBox) {
                var nodes = [].concat([], this.checkedNodes);
                this.setProperties({ checkedNodes: nodes }, true);
            }
        };
        TreeView.prototype.ensureIndeterminate = function () {
            if (this.autoCheck) {
                var liElement = ej2_base_7.selectAll('li', this.element);
                var ulElement = void 0;
                for (var i = 0; i < liElement.length; i++) {
                    if (liElement[i].classList.contains(LISTITEM)) {
                        ulElement = ej2_base_7.select('.' + PARENTITEM, liElement[i]);
                        if (ulElement) {
                            this.ensureParentCheckState(liElement[i]);
                        }
                        else {
                            this.ensureChildCheckState(liElement[i]);
                        }
                    }
                }
            }
            else {
                var indeterminate = ej2_base_7.selectAll('.' + INDETERMINATE, this.element);
                for (var i = 0; i < indeterminate.length; i++) {
                    indeterminate[i].classList.remove(INDETERMINATE);
                }
            }
        };
        TreeView.prototype.ensureParentCheckState = function (element) {
            if (!ej2_base_8.isNullOrUndefined(element)) {
                if (element.classList.contains(ROOT)) {
                    return;
                }
                var ulElement = element;
                if (element.classList.contains(LISTITEM)) {
                    ulElement = ej2_base_7.select('.' + PARENTITEM, element);
                }
                var checkedNodes = ej2_base_7.selectAll('.' + CHECK, ulElement);
                var indeterminateNodes = ej2_base_7.selectAll('.' + INDETERMINATE, ulElement);
                var nodes = ej2_base_7.selectAll('.' + LISTITEM, ulElement);
                var checkBoxEle = element.getElementsByClassName(CHECKBOXWRAP)[0];
                if (nodes.length === checkedNodes.length) {
                    this.changeState(checkBoxEle, 'check', null, true, true);
                }
                else if (checkedNodes.length > 0 || indeterminateNodes.length > 0) {
                    this.changeState(checkBoxEle, 'indeterminate', null, true, true);
                }
                else if (checkedNodes.length === 0) {
                    this.changeState(checkBoxEle, 'uncheck', null, true, true);
                }
                var parentUL = ej2_base_7.closest(element, '.' + PARENTITEM);
                if (!ej2_base_8.isNullOrUndefined(parentUL)) {
                    var currentParent = ej2_base_7.closest(parentUL, '.' + LISTITEM);
                    this.ensureParentCheckState(currentParent);
                }
            }
        };
        TreeView.prototype.ensureChildCheckState = function (element, e) {
            if (!ej2_base_8.isNullOrUndefined(element)) {
                var childElement = ej2_base_7.select('.' + PARENTITEM, element);
                var checkBoxes = void 0;
                if (!ej2_base_8.isNullOrUndefined(childElement)) {
                    checkBoxes = ej2_base_7.selectAll('.' + CHECKBOXWRAP, childElement);
                    var isChecked = element.getElementsByClassName(CHECKBOXFRAME)[0].classList.contains(CHECK);
                    var parentCheck = element.getElementsByClassName(CHECKBOXFRAME)[0].classList.contains(INDETERMINATE);
                    var childCheck = childElement.querySelectorAll('li');
                    var expandState = childElement.parentElement.getAttribute('aria-expanded');
                    var checkedState = void 0;
                    for (var index = 0; index < checkBoxes.length; index++) {
                        var childId = childCheck[index].getAttribute('data-uid');
                        if (!ej2_base_8.isNullOrUndefined(this.currentLoadData) && !ej2_base_8.isNullOrUndefined(ej2_base_8.getValue(this.fields.isChecked, this.currentLoadData[index]))) {
                            checkedState = ej2_base_8.getValue(this.fields.isChecked, this.currentLoadData[index]) ? 'check' : 'uncheck';
                            if (this.ele !== -1) {
                                checkedState = isChecked ? 'check' : 'uncheck';
                            }
                            if ((checkedState === 'uncheck') && (!ej2_base_1.isUndefined(this.parentNodeCheck) && this.autoCheck
                                && this.parentNodeCheck.indexOf(childId) !== -1)) {
                                this.parentNodeCheck.splice(this.parentNodeCheck.indexOf(childId), 1);
                                checkedState = 'indeterminate';
                            }
                        }
                        else {
                            var isNodeChecked = checkBoxes[index].getElementsByClassName(CHECKBOXFRAME)[0].classList.contains(CHECK);
                            if (isChecked) {
                                checkedState = 'check';
                            }
                            else if (isNodeChecked && !this.isLoaded) {
                                checkedState = 'check';
                            }
                            else if (this.checkedNodes.indexOf(childId) !== -1 && this.isLoaded && (parentCheck || isChecked)) {
                                checkedState = 'check';
                            }
                            else if (childCheck[index].classList.contains(CHILD) && (!ej2_base_1.isUndefined(this.parentNodeCheck) && this.autoCheck
                                && (isChecked || parentCheck) && this.parentNodeCheck.indexOf(childId) !== -1)) {
                                checkedState = 'indeterminate';
                                this.parentNodeCheck.splice(this.parentNodeCheck.indexOf(childId), 1);
                            }
                            else if (this.dataType === 1 && (!ej2_base_1.isUndefined(this.parentNodeCheck) && this.autoCheck &&
                                (isChecked || parentCheck) && this.parentNodeCheck.indexOf(childId) !== -1)) {
                                checkedState = 'indeterminate';
                                this.parentNodeCheck.splice(this.parentNodeCheck.indexOf(childId), 1);
                            }
                            else {
                                checkedState = 'uncheck';
                            }
                        }
                        this.changeState(checkBoxes[index], checkedState, e, true, true);
                    }
                }
                if (this.autoCheck && this.isLoaded) {
                    this.updateParentCheckState();
                }
            }
        };
        TreeView.prototype.doCheckBoxAction = function (nodes, doCheck) {
            var li = ej2_base_7.selectAll('.' + LISTITEM, this.element);
            if (!ej2_base_8.isNullOrUndefined(nodes)) {
                for (var len = nodes.length; len >= 0; len--) {
                    var liEle = void 0;
                    if (nodes.length === 1) {
                        liEle = this.getElement(nodes[len - 1]);
                    }
                    else {
                        liEle = this.getElement(nodes[len]);
                    }
                    if (ej2_base_8.isNullOrUndefined(liEle)) {
                        var node = void 0;
                        node = nodes[len - nodes.length] ? nodes[len - nodes.length].toString() : nodes[len] ? nodes[len].toString() : null;
                        if (node !== '' && doCheck && node) {
                            this.setValidCheckedNode(node);
                            this.dynamicCheckState(node, doCheck);
                        }
                        else if (this.checkedNodes.indexOf(node) !== -1 && node !== '' && !doCheck) {
                            this.checkedNodes.splice(this.checkedNodes.indexOf(node), 1);
                            var childItems = this.getChildNodes(this.treeData, node);
                            if (childItems) {
                                for (var i = 0; i < childItems.length; i++) {
                                    var id = childItems[i][this.fields.id] ? childItems[i][this.fields.id].toString() : null;
                                    if (this.checkedNodes.indexOf(id) !== -1) {
                                        this.checkedNodes.splice(this.checkedNodes.indexOf(id), 1);
                                    }
                                }
                                if (this.parentNodeCheck.indexOf(node) !== -1) {
                                    this.parentNodeCheck.splice(this.parentNodeCheck.indexOf(node), 1);
                                }
                            }
                            if (node) {
                                this.dynamicCheckState(node, doCheck);
                            }
                            this.updateField(this.treeData, this.fields, node, 'isChecked', null);
                        }
                        continue;
                    }
                    var checkBox = ej2_base_7.select('.' + PARENTITEM + ' .' + CHECKBOXWRAP, liEle);
                    this.validateCheckNode(checkBox, !doCheck, liEle, null);
                }
            }
            else {
                var checkBoxes = ej2_base_7.selectAll('.' + CHECKBOXWRAP, this.element);
                if (this.loadOnDemand) {
                    for (var index = 0; index < checkBoxes.length; index++) {
                        this.updateFieldChecked(checkBoxes[index], doCheck);
                        this.changeState(checkBoxes[index], doCheck ? 'check' : 'uncheck', null, null, null, doCheck);
                    }
                }
                else {
                    for (var index = 0; index < checkBoxes.length; index++) {
                        this.updateFieldChecked(checkBoxes[index], doCheck);
                        this.changeState(checkBoxes[index], doCheck ? 'check' : 'uncheck');
                    }
                }
            }
            if (nodes) {
                for (var j = 0; j < nodes.length; j++) {
                    var node = nodes[j] ? nodes[j].toString() : '';
                    if (!doCheck) {
                        this.updateField(this.treeData, this.fields, node, 'isChecked', null);
                    }
                }
            }
            if (this.autoCheck) {
                this.updateParentCheckState();
            }
        };
        TreeView.prototype.updateFieldChecked = function (checkbox, doCheck) {
            var currLi = ej2_base_7.closest(checkbox, '.' + LISTITEM);
            var id = currLi.getAttribute('data-uid');
            var nodeDetails = this.getNodeData(currLi);
            if (nodeDetails.isChecked === 'true' && !doCheck) {
                this.updateField(this.treeData, this.fields, id, 'isChecked', null);
            }
        };
        TreeView.prototype.dynamicCheckState = function (node, doCheck) {
            if (this.dataType === 1) {
                var count = 0;
                var resultId = new ej2_data_1.DataManager(this.treeData).executeLocal(new ej2_data_1.Query().where(this.fields.id, 'equal', node, true));
                if (resultId[0]) {
                    var id = resultId[0][this.fields.id] ? resultId[0][this.fields.id].toString() : null;
                    var parent_1 = resultId[0][this.fields.parentID] ? resultId[0][this.fields.parentID].toString() : null;
                    var parentElement = this.element.querySelector('[data-uid="' + parent_1 + '"]');
                    var indeterminate = parentElement ? ej2_base_7.select('.' + INDETERMINATE, parentElement) : null;
                    var check = parentElement ? ej2_base_7.select('.' + CHECK, parentElement) : null;
                    var element = this.element.querySelector('[data-uid="' + id + '"]');
                    var childNodes = this.getChildNodes(this.treeData, parent_1);
                    if (childNodes) {
                        for (var i = 0; i < childNodes.length; i++) {
                            var childId = childNodes[i][this.fields.id] ? childNodes[i][this.fields.id].toString() : null;
                            if (this.checkedNodes.indexOf(childId) !== -1) {
                                count++;
                            }
                        }
                    }
                    if (this.checkedNodes.indexOf(node) !== -1 && parentElement && (id === node) && this.autoCheck) {
                        this.changeState(parentElement, 'indeterminate', null);
                    }
                    else if (this.checkedNodes.indexOf(node) === -1 && element && (id === node) && !doCheck) {
                        this.changeState(element, 'uncheck', null);
                    }
                    else if (this.checkedNodes.indexOf(node) !== -1 && element && (id === node) && doCheck) {
                        this.changeState(element, 'check', null);
                    }
                    else if (this.checkedNodes.indexOf(node) === -1 && !element && parentElement && (id === node) && this.autoCheck
                        && count !== 0) {
                        this.changeState(parentElement, 'indeterminate', null);
                    }
                    else if (this.checkedNodes.indexOf(node) === -1 && !element && parentElement && (id === node) && this.autoCheck
                        && count === 0) {
                        this.changeState(parentElement, 'uncheck', null);
                    }
                    else if (!element && !parentElement && (id === node) && this.autoCheck) {
                        this.updateIndeterminate(node, doCheck);
                    }
                }
            }
            else if (this.dataType === 2 || (this.fields.dataSource instanceof ej2_data_1.DataManager &&
                this.isOffline)) {
                var id = void 0;
                var parentElement = void 0;
                var check = void 0;
                for (var i = 0; i < this.treeData.length; i++) {
                    id = this.treeData[i][this.fields.id] ? this.treeData[i][this.fields.id].toString() : '';
                    parentElement = this.element.querySelector('[data-uid="' + id + '"]');
                    check = parentElement ? ej2_base_7.select('.' + CHECK, parentElement) : null;
                    if (this.checkedNodes.indexOf(id) === -1 && parentElement && check && !doCheck) {
                        this.changeState(parentElement, 'uncheck', null);
                    }
                    var subChild = ej2_base_8.getValue(this.fields.child.toString(), this.treeData[i]);
                    if (subChild) {
                        this.updateChildIndeterminate(subChild, id, node, doCheck, id);
                    }
                }
            }
        };
        TreeView.prototype.updateIndeterminate = function (node, doCheck) {
            var indeterminateData = this.getTreeData(node);
            var count = 0;
            var parent;
            if (this.dataType === 1) {
                parent = indeterminateData[0][this.fields.parentID] ? indeterminateData[0][this.fields.parentID].toString() : null;
            }
            var childNodes = this.getChildNodes(this.treeData, parent);
            if (childNodes) {
                for (var i = 0; i < childNodes.length; i++) {
                    var childId = childNodes[i][this.fields.id] ? childNodes[i][this.fields.id].toString() : null;
                    if (this.checkedNodes.indexOf(childId) !== -1) {
                        count++;
                    }
                }
            }
            var parentElement = this.element.querySelector('[data-uid="' + parent + '"]');
            if (parentElement && doCheck) {
                this.changeState(parentElement, 'indeterminate', null);
            }
            else if (!doCheck && parentElement && this.parentNodeCheck.indexOf(parent) === -1 && count !== 0) {
                this.changeState(parentElement, 'indeterminate', null);
            }
            else if (!doCheck && parentElement && this.parentNodeCheck.indexOf(parent) === -1 && count === 0) {
                this.changeState(parentElement, 'uncheck', null);
            }
            else if (!parentElement) {
                if (!doCheck && this.checkedNodes.indexOf(parent) === -1 && this.parentNodeCheck.indexOf(parent) !== -1) {
                    this.parentNodeCheck.splice(this.parentNodeCheck.indexOf(parent), 1);
                }
                else if (doCheck && this.checkedNodes.indexOf(parent) === -1 && this.parentNodeCheck.indexOf(parent) === -1) {
                    this.parentNodeCheck.push(parent);
                }
                else if (!doCheck && this.checkedNodes.indexOf(parent) !== -1 && this.parentNodeCheck.indexOf(parent) === -1
                    && count !== 0) {
                    this.parentNodeCheck.push(parent);
                }
                this.updateIndeterminate(parent, doCheck);
                if (this.checkedNodes.indexOf(parent) !== -1 && !doCheck) {
                    this.checkedNodes.splice(this.checkedNodes.indexOf(parent), 1);
                }
            }
        };
        TreeView.prototype.updateChildIndeterminate = function (subChild, parent, node, doCheck, child) {
            var count = 0;
            for (var j = 0; j < subChild.length; j++) {
                var subId = subChild[j][this.fields.id] ? subChild[j][this.fields.id].toString() : '';
                if (this.checkedNodes.indexOf(subId) !== -1) {
                    count++;
                }
                var parentElement = this.element.querySelector('[data-uid="' + parent + '"]');
                var indeterminate = parentElement ? ej2_base_7.select('.' + INDETERMINATE, parentElement) : null;
                var check = parentElement ? ej2_base_7.select('.' + CHECK, parentElement) : null;
                var element = this.element.querySelector('[data-uid="' + subId + '"]');
                var childElementCheck = element ? ej2_base_7.select('.' + CHECK, element) : null;
                if (this.checkedNodes.indexOf(node) !== -1 && parentElement && (subId === node) && this.autoCheck) {
                    this.changeState(parentElement, 'indeterminate', null);
                }
                else if (this.checkedNodes.indexOf(node) === -1 && parentElement && !element && (subId === node) && !doCheck) {
                    if (this.autoCheck) {
                        this.changeState(parentElement, 'uncheck', null);
                    }
                    else {
                        if (count !== 0) {
                            this.changeState(parentElement, 'indeterminate', null);
                        }
                        else {
                            this.changeState(parentElement, 'uncheck', null);
                        }
                    }
                }
                else if (this.checkedNodes.indexOf(node) === -1 && element && (subId === node) && !doCheck) {
                    this.changeState(element, 'uncheck', null);
                }
                else if (this.checkedNodes.indexOf(node) === -1 && indeterminate && (subId === node) && this.autoCheck && count === 0
                    && !doCheck) {
                    indeterminate.classList.remove(INDETERMINATE);
                }
                else if (this.checkedNodes.indexOf(node) === -1 && !element && check && (subId === node) && count === 0) {
                    this.changeState(parentElement, 'uncheck', null);
                }
                else if (this.checkedNodes.indexOf(subId) === -1 && element && childElementCheck && count === 0) {
                    this.changeState(element, 'uncheck', null);
                }
                else if (!element && !parentElement && (subId === node) || (this.parentNodeCheck.indexOf(parent) !== -1) && this.autoCheck) {
                    var childElement = this.element.querySelector('[data-uid="' + child + '"]');
                    if (doCheck && count !== 0) {
                        this.changeState(childElement, 'indeterminate', null);
                    }
                    else if (doCheck && count === subChild.length && this.checkedNodes.indexOf(parent) === -1) {
                        this.checkedNodes.push(parent);
                    }
                    else if (!doCheck && count === 0 && this.parentNodeCheck.indexOf(parent) !== -1) {
                        this.parentNodeCheck.splice(this.parentNodeCheck.indexOf(parent));
                    }
                    if (this.parentNodeCheck.indexOf(parent) === -1) {
                        this.parentNodeCheck.push(parent);
                    }
                }
                var innerChild = ej2_base_8.getValue(this.fields.child.toString(), subChild[j]);
                if (innerChild) {
                    this.updateChildIndeterminate(innerChild, subId, node, doCheck, child);
                }
            }
        };
        TreeView.prototype.changeState = function (wrapper, state, e, isPrevent, isAdd, doCheck) {
            var _this = this;
            var eventArgs;
            var currLi = ej2_base_7.closest(wrapper, '.' + LISTITEM);
            if (!isPrevent) {
                this.checkActionNodes = [];
                eventArgs = this.getCheckEvent(currLi, state, e);
                this.trigger('nodeChecking', eventArgs, function (observedArgs) {
                    if (!observedArgs.cancel) {
                        _this.nodeCheckAction(wrapper, state, currLi, observedArgs, e, isPrevent, isAdd, doCheck);
                    }
                });
            }
            else {
                this.nodeCheckAction(wrapper, state, currLi, eventArgs, e, isPrevent, isAdd, doCheck);
            }
        };
        TreeView.prototype.nodeCheckAction = function (wrapper, state, currLi, eventArgs, e, isPrevent, isAdd, doCheck) {
            var ariaState;
            var frameSpan = wrapper.getElementsByClassName(CHECKBOXFRAME)[0];
            if (state === 'check' && !frameSpan.classList.contains(CHECK)) {
                frameSpan.classList.remove(INDETERMINATE);
                frameSpan.classList.add(CHECK);
                this.addCheck(currLi);
                ariaState = 'true';
            }
            else if (state === 'uncheck' && (frameSpan.classList.contains(CHECK) || frameSpan.classList.contains(INDETERMINATE))) {
                ej2_base_7.removeClass([frameSpan], [CHECK, INDETERMINATE]);
                this.removeCheck(currLi);
                ariaState = 'false';
            }
            else if (state === 'indeterminate' && this.autoCheck) {
                frameSpan.classList.remove(CHECK);
                frameSpan.classList.add(INDETERMINATE);
                this.removeCheck(currLi);
                ariaState = 'mixed';
            }
            ariaState = state === 'check' ? 'true' : state === 'uncheck' ? 'false' : ariaState;
            if (!ej2_base_8.isNullOrUndefined(ariaState)) {
                wrapper.setAttribute('aria-checked', ariaState);
            }
            if (isAdd) {
                var data = [].concat([], this.checkActionNodes);
                eventArgs = this.getCheckEvent(currLi, state, e);
                if (ej2_base_1.isUndefined(isPrevent)) {
                    eventArgs.data = data;
                }
            }
            if (doCheck !== undefined) {
                this.ensureStateChange(currLi, doCheck);
            }
            if (!isPrevent) {
                if (!ej2_base_8.isNullOrUndefined(ariaState)) {
                    wrapper.setAttribute('aria-checked', ariaState);
                    this.allowServerDataBinding = true;
                    this.updateServerProperties("check");
                    this.allowServerDataBinding = false;
                    eventArgs.data[0].checked = ariaState;
                    this.trigger('nodeChecked', eventArgs);
                    this.checkActionNodes = [];
                }
            }
        };
        TreeView.prototype.addCheck = function (liEle) {
            var id = liEle.getAttribute('data-uid');
            if (!ej2_base_8.isNullOrUndefined(id) && this.checkedNodes.indexOf(id) === -1) {
                this.checkedNodes.push(id);
            }
        };
        TreeView.prototype.removeCheck = function (liEle) {
            var index = this.checkedNodes.indexOf(liEle.getAttribute('data-uid'));
            if (index > -1) {
                this.checkedNodes.splice(index, 1);
            }
        };
        TreeView.prototype.getCheckEvent = function (currLi, action, e) {
            this.checkActionNodes.push(this.getNodeData(currLi));
            var nodeData = this.checkActionNodes;
            return { action: action, cancel: false, isInteracted: ej2_base_8.isNullOrUndefined(e) ? false : true, node: currLi, data: nodeData };
        };
        TreeView.prototype.finalize = function () {
            var firstUl = ej2_base_7.select('.' + PARENTITEM, this.element);
            if (!ej2_base_1.isNullOrUndefined(firstUl)) {
                firstUl.setAttribute('role', treeAriaAttr.treeRole);
                this.setMultiSelect(this.allowMultiSelection);
                var firstNode = ej2_base_7.select('.' + LISTITEM, this.element);
                if (firstNode) {
                    ej2_base_7.addClass([firstNode], FOCUS);
                    this.updateIdAttr(null, firstNode);
                }
                this.renderReactTemplates();
                this.hasPid = this.rootData[0] ? this.rootData[0].hasOwnProperty(this.fields.parentID) : false;
                this.doExpandAction();
            }
        };
        TreeView.prototype.doExpandAction = function () {
            var eUids = this.expandedNodes;
            if (this.isInitalExpand && eUids.length > 0) {
                this.setProperties({ expandedNodes: [] }, true);
                if (this.isBlazorPlatform && !this.initialRender) {
                    return;
                }
                if (this.fields.dataSource instanceof ej2_data_1.DataManager && (this.fields.dataSource.adaptorName !== 'BlazorAdaptor')) {
                    this.expandGivenNodes(eUids);
                }
                else {
                    for (var i = 0; i < eUids.length; i++) {
                        var eNode = ej2_base_7.select('[data-uid="' + eUids[i] + '"]', this.element);
                        if (!ej2_base_8.isNullOrUndefined(eNode)) {
                            var icon = ej2_base_7.select('.' + EXPANDABLE, ej2_base_7.select('.' + TEXTWRAP, eNode));
                            if (!ej2_base_8.isNullOrUndefined(icon)) {
                                this.expandAction(eNode, icon, null);
                            }
                        }
                        else {
                            if (eUids[i] && this.expandChildren.indexOf(eUids[i]) === -1) {
                                this.expandChildren.push(eUids[i].toString());
                            }
                            continue;
                        }
                    }
                    this.afterFinalized();
                }
            }
            else {
                this.afterFinalized();
            }
        };
        TreeView.prototype.expandGivenNodes = function (arr) {
            var proxy = this;
            this.expandCallback(arr[this.index], function () {
                proxy.index++;
                if (proxy.index < arr.length) {
                    proxy.expandGivenNodes(arr);
                }
                else {
                    proxy.afterFinalized();
                }
            });
        };
        TreeView.prototype.expandCallback = function (eUid, callback) {
            var eNode = ej2_base_7.select('[data-uid="' + eUid + '"]', this.element);
            if (!ej2_base_8.isNullOrUndefined(eNode)) {
                var icon = ej2_base_7.select('.' + EXPANDABLE, ej2_base_7.select('.' + TEXTWRAP, eNode));
                if (!ej2_base_8.isNullOrUndefined(icon)) {
                    this.expandAction(eNode, icon, null, false, callback);
                }
                else {
                    callback();
                }
            }
            else {
                callback();
            }
        };
        TreeView.prototype.afterFinalized = function () {
            if (!this.isBlazorPlatform || (this.isBlazorPlatform && !this.initialRender)) {
                this.doSelectionAction();
            }
            this.updateCheckedProp();
            if (this.isBlazorPlatform) {
                if (this.initialRender) {
                    this.setCheckedNodes(this.checkedNodes);
                }
                this.updateInstance();
                this.initialRender = false;
            }
            this.isAnimate = true;
            this.isInitalExpand = false;
            if (!this.isLoaded || this.isFieldChange) {
                var eventArgs = { data: this.treeData };
                this.trigger('dataBound', eventArgs);
            }
            this.isLoaded = true;
        };
        TreeView.prototype.doSelectionAction = function () {
            var sNodes = ej2_base_7.selectAll('.' + SELECTED, this.element);
            var sUids = this.selectedNodes;
            if (sUids.length > 0) {
                this.setProperties({ selectedNodes: [] }, true);
                for (var i = 0; i < sUids.length; i++) {
                    var sNode = ej2_base_7.select('[data-uid="' + sUids[i] + '"]', this.element);
                    if (sNode && !(sNode.classList.contains('e-active'))) {
                        this.selectNode(sNode, null, true);
                    }
                    else {
                        this.selectedNodes.push(sUids[i]);
                    }
                    if (!this.allowMultiSelection) {
                        break;
                    }
                }
            }
            else {
                this.selectGivenNodes(sNodes);
            }
            ej2_base_7.removeClass(sNodes, SELECTED);
        };
        TreeView.prototype.selectGivenNodes = function (sNodes) {
            for (var i = 0; i < sNodes.length; i++) {
                if (!sNodes[i].classList.contains('e-disable')) {
                    this.selectNode(sNodes[i], null, true);
                }
                if (!this.allowMultiSelection) {
                    break;
                }
            }
        };
        TreeView.prototype.clickHandler = function (event) {
            var target = event.originalEvent.target;
            ej2_base_3.EventHandler.remove(this.element, 'contextmenu', this.preventContextMenu);
            if (!target || this.dragStartAction) {
                return;
            }
            else {
                var classList = target.classList;
                var li = ej2_base_7.closest(target, '.' + LISTITEM);
                if (!li) {
                    return;
                }
                else if (event.originalEvent.which !== 3) {
                    var rippleElement = ej2_base_7.select('.' + RIPPLEELMENT, li);
                    var rippleIcons = ej2_base_7.select('.' + ICON, li);
                    this.removeHover();
                    this.setFocusElement(li);
                    if (this.showCheckBox && !li.classList.contains('e-disable')) {
                        var checkWrapper = ej2_base_7.closest(target, '.' + CHECKBOXWRAP);
                        if (!ej2_base_8.isNullOrUndefined(checkWrapper)) {
                            var checkElement = ej2_base_7.select('.' + CHECKBOXFRAME, checkWrapper);
                            this.validateCheckNode(checkWrapper, checkElement.classList.contains(CHECK), li, event.originalEvent);
                            this.triggerClickEvent(event.originalEvent, li);
                            return;
                        }
                    }
                    if (classList.contains(EXPANDABLE)) {
                        this.expandAction(li, target, event);
                    }
                    else if (classList.contains(COLLAPSIBLE)) {
                        this.collapseNode(li, target, event);
                    }
                    else if (rippleElement && rippleIcons) {
                        if (rippleIcons.classList.contains(RIPPLE) && rippleIcons.classList.contains(EXPANDABLE)) {
                            this.expandAction(li, rippleIcons, event);
                        }
                        else if (rippleIcons.classList.contains(RIPPLE) && rippleIcons.classList.contains(COLLAPSIBLE)) {
                            this.collapseNode(li, rippleIcons, event);
                        }
                        else if (!classList.contains(PARENTITEM) && !classList.contains(LISTITEM)) {
                            this.toggleSelect(li, event.originalEvent, false);
                        }
                    }
                    else {
                        if (!classList.contains(PARENTITEM) && !classList.contains(LISTITEM)) {
                            this.toggleSelect(li, event.originalEvent, false);
                        }
                    }
                }
                this.triggerClickEvent(event.originalEvent, li);
            }
        };
        TreeView.prototype.nodeCheckedEvent = function (wrapper, isCheck, e) {
            var currLi = ej2_base_7.closest(wrapper, '.' + LISTITEM);
            var eventArgs = this.getCheckEvent(wrapper, isCheck ? 'uncheck' : 'check', e);
            eventArgs.data = eventArgs.data.splice(0, eventArgs.data.length - 1);
            this.trigger('nodeChecked', eventArgs);
        };
        TreeView.prototype.triggerClickEvent = function (e, li) {
            var eventArgs = {
                event: e,
                node: li,
            };
            this.trigger('nodeClicked', eventArgs);
        };
        TreeView.prototype.expandNode = function (currLi, icon, loaded) {
            var _this = this;
            this.renderReactTemplates();
            if (icon.classList.contains(LOAD)) {
                this.hideSpinner(icon);
            }
            if (!this.initialRender) {
                icon.classList.add('interaction');
            }
            if (loaded !== true || (loaded === true && currLi.classList.contains('e-expanded'))) {
                if (this.preventExpand !== true) {
                    ej2_base_7.removeClass([icon], EXPANDABLE);
                    ej2_base_7.addClass([icon], COLLAPSIBLE);
                    var start_1 = 0;
                    var end_1 = 0;
                    var proxy_1 = this;
                    var ul_1 = ej2_base_7.select('.' + PARENTITEM, currLi);
                    var liEle_1 = currLi;
                    this.setHeight(liEle_1, ul_1);
                    var activeElement_1 = ej2_base_7.select('.' + LISTITEM + '.' + ACTIVE, currLi);
                    if (this.isAnimate && !this.isRefreshed) {
                        this.aniObj.animate(ul_1, {
                            name: this.animation.expand.effect,
                            duration: this.animation.expand.duration,
                            timingFunction: this.animation.expand.easing,
                            begin: function (args) {
                                liEle_1.style.overflow = 'hidden';
                                if (!ej2_base_1.isNullOrUndefined(activeElement_1) && activeElement_1 instanceof HTMLElement) {
                                    activeElement_1.classList.add(ITEM_ANIMATION_ACTIVE);
                                }
                                start_1 = liEle_1.offsetHeight;
                                end_1 = ej2_base_7.select('.' + TEXTWRAP, currLi).offsetHeight;
                            },
                            progress: function (args) {
                                args.element.style.display = 'block';
                                proxy_1.animateHeight(args, start_1, end_1);
                            },
                            end: function (args) {
                                args.element.style.display = 'block';
                                if (!ej2_base_1.isNullOrUndefined(activeElement_1) && activeElement_1 instanceof HTMLElement) {
                                    activeElement_1.classList.remove(ITEM_ANIMATION_ACTIVE);
                                }
                                _this.expandedNode(liEle_1, ul_1, icon);
                            }
                        });
                    }
                    else {
                        this.expandedNode(liEle_1, ul_1, icon);
                    }
                }
            }
            else {
                var ul = ej2_base_7.select('.' + PARENTITEM, currLi);
                ul.style.display = 'none';
                if (this.fields.dataSource instanceof ej2_data_1.DataManager === true) {
                    this.preventExpand = false;
                }
            }
            if (this.initialRender) {
                icon.classList.add('interaction');
            }
        };
        TreeView.prototype.expandedNode = function (currLi, ul, icon) {
            ul.style.display = 'block';
            currLi.style.display = 'block';
            currLi.style.overflow = '';
            currLi.style.height = '';
            ej2_base_7.removeClass([icon], PROCESS);
            this.addExpand(currLi);
            this.allowServerDataBinding = true;
            this.updateServerProperties("expand");
            this.allowServerDataBinding = false;
            if (this.isLoaded && this.expandArgs && !this.isRefreshed) {
                this.expandArgs = this.getExpandEvent(currLi, null);
                this.trigger('nodeExpanded', this.expandArgs);
            }
        };
        TreeView.prototype.addExpand = function (liEle) {
            liEle.setAttribute('aria-expanded', 'true');
            ej2_base_7.removeClass([liEle], NODECOLLAPSED);
            var id = liEle.getAttribute('data-uid');
            if (!ej2_base_8.isNullOrUndefined(id) && this.expandedNodes.indexOf(id) === -1) {
                this.expandedNodes.push(id);
            }
        };
        TreeView.prototype.collapseNode = function (currLi, icon, e) {
            var _this = this;
            if (icon.classList.contains(PROCESS)) {
                return;
            }
            else {
                ej2_base_7.addClass([icon], PROCESS);
            }
            var colArgs;
            if (this.isLoaded) {
                colArgs = this.getExpandEvent(currLi, e);
                this.trigger('nodeCollapsing', colArgs, function (observedArgs) {
                    if (observedArgs.cancel) {
                        ej2_base_7.removeClass([icon], PROCESS);
                    }
                    else {
                        _this.nodeCollapseAction(currLi, icon, observedArgs);
                    }
                });
            }
            else {
                this.nodeCollapseAction(currLi, icon, colArgs);
            }
        };
        TreeView.prototype.nodeCollapseAction = function (currLi, icon, colArgs) {
            var _this = this;
            ej2_base_7.removeClass([icon], COLLAPSIBLE);
            ej2_base_7.addClass([icon], EXPANDABLE);
            var start = 0;
            var end = 0;
            var proxy = this;
            var ul = ej2_base_7.select('.' + PARENTITEM, currLi);
            var liEle = currLi;
            var activeElement = ej2_base_7.select('.' + LISTITEM + '.' + ACTIVE, currLi);
            if (this.isAnimate) {
                this.aniObj.animate(ul, {
                    name: this.animation.collapse.effect,
                    duration: this.animation.collapse.duration,
                    timingFunction: this.animation.collapse.easing,
                    begin: function (args) {
                        liEle.style.overflow = 'hidden';
                        if (!ej2_base_1.isNullOrUndefined(activeElement) && activeElement instanceof HTMLElement) {
                            activeElement.classList.add(ITEM_ANIMATION_ACTIVE);
                        }
                        start = ej2_base_7.select('.' + TEXTWRAP, currLi).offsetHeight;
                        end = liEle.offsetHeight;
                    },
                    progress: function (args) {
                        proxy.animateHeight(args, start, end);
                    },
                    end: function (args) {
                        args.element.style.display = 'none';
                        if (!ej2_base_1.isNullOrUndefined(activeElement) && activeElement instanceof HTMLElement) {
                            activeElement.classList.remove(ITEM_ANIMATION_ACTIVE);
                        }
                        _this.collapsedNode(liEle, ul, icon, colArgs);
                    }
                });
            }
            else {
                this.collapsedNode(liEle, ul, icon, colArgs);
            }
        };
        TreeView.prototype.collapsedNode = function (liEle, ul, icon, colArgs) {
            ul.style.display = 'none';
            liEle.style.overflow = '';
            liEle.style.height = '';
            ej2_base_7.removeClass([icon], PROCESS);
            this.allowServerDataBinding = true;
            this.updateServerProperties("expand");
            this.allowServerDataBinding = false;
            this.removeExpand(liEle);
            if (this.isLoaded) {
                colArgs = this.getExpandEvent(liEle, null);
                this.trigger('nodeCollapsed', colArgs);
            }
        };
        TreeView.prototype.removeExpand = function (liEle, toRemove) {
            if (toRemove) {
                liEle.removeAttribute('aria-expanded');
            }
            else {
                this.disableExpandAttr(liEle);
            }
            var index = this.expandedNodes.indexOf(liEle.getAttribute('data-uid'));
            if (index > -1) {
                this.expandedNodes.splice(index, 1);
            }
        };
        TreeView.prototype.disableExpandAttr = function (liEle) {
            liEle.setAttribute('aria-expanded', 'false');
            ej2_base_7.addClass([liEle], NODECOLLAPSED);
        };
        TreeView.prototype.setHeight = function (currLi, ul) {
            ul.style.display = 'block';
            ul.style.visibility = 'hidden';
            currLi.style.height = currLi.offsetHeight + 'px';
            ul.style.display = 'none';
            ul.style.visibility = '';
        };
        TreeView.prototype.animateHeight = function (args, start, end) {
            var remaining = (args.duration - args.timeStamp) / args.duration;
            var currentHeight = (end - start) * remaining + start;
            args.element.parentElement.style.height = currentHeight + 'px';
        };
        TreeView.prototype.renderChildNodes = function (parentLi, expandChild, callback, loaded) {
            var _this = this;
            var eicon = ej2_base_7.select('div.' + ICON, parentLi);
            if (ej2_base_8.isNullOrUndefined(eicon)) {
                return;
            }
            this.showSpinner(eicon);
            var childItems;
            if (this.fields.dataSource instanceof ej2_data_1.DataManager && (this.fields.dataSource.adaptorName !== 'BlazorAdaptor')) {
                var level = this.parents(parentLi, '.' + PARENTITEM).length;
                var mapper_2 = this.getChildFields(this.fields, level, 1);
                if (ej2_base_8.isNullOrUndefined(mapper_2) || ej2_base_8.isNullOrUndefined(mapper_2.dataSource)) {
                    ej2_base_7.detach(eicon);
                    this.removeExpand(parentLi, true);
                    return;
                }
                this.treeList.push('false');
                if (this.fields.dataSource instanceof ej2_data_1.DataManager && this.isOffline) {
                    this.treeList.pop();
                    childItems = this.getChildNodes(this.treeData, parentLi.getAttribute('data-uid'));
                    this.loadChild(childItems, mapper_2, eicon, parentLi, expandChild, callback, loaded);
                    this.updateTemplateForBlazor();
                }
                else {
                    mapper_2.dataSource.executeQuery(this.getQuery(mapper_2, parentLi.getAttribute('data-uid'))).then(function (e) {
                        _this.treeList.pop();
                        childItems = e.result;
                        if (_this.dataType === 1) {
                            _this.dataType = 2;
                        }
                        _this.loadChild(childItems, mapper_2, eicon, parentLi, expandChild, callback, loaded);
                        _this.updateTemplateForBlazor();
                    }).catch(function (e) {
                        _this.trigger('actionFailure', { error: e });
                    });
                }
            }
            else {
                childItems = this.getChildNodes(this.treeData, parentLi.getAttribute('data-uid'));
                this.currentLoadData = this.getSortedData(childItems);
                if (ej2_base_8.isNullOrUndefined(childItems) || childItems.length === 0) {
                    ej2_base_7.detach(eicon);
                    this.removeExpand(parentLi, true);
                    return;
                }
                else {
                    if (!this.isBlazorPlatform || !this.initialRender) {
                        this.listBaseOption.ariaAttributes.level = parseFloat(parentLi.getAttribute('aria-level')) + 1;
                        parentLi.appendChild(ej2_lists_1.ListBase.createList(this.createElement, this.currentLoadData, this.listBaseOption));
                    }
                    this.expandNode(parentLi, eicon, loaded);
                    this.setSelectionForChildNodes(childItems);
                    this.ensureCheckNode(parentLi);
                    this.finalizeNode(parentLi);
                    if (this.loadOnDemand && this.nodeTemplate && this.isBlazorPlatform && !this.isStringTemplate) {
                        this.updateBlazorTemplate();
                    }
                    this.disableTreeNodes(childItems);
                    this.renderSubChild(parentLi, expandChild, loaded);
                }
            }
        };
        TreeView.prototype.loadChild = function (childItems, mapper, eicon, parentLi, expandChild, callback, loaded) {
            this.currentLoadData = childItems;
            if (ej2_base_8.isNullOrUndefined(childItems) || childItems.length === 0) {
                ej2_base_7.detach(eicon);
                this.removeExpand(parentLi, true);
            }
            else {
                this.updateListProp(mapper);
                if (this.fields.dataSource instanceof ej2_data_1.DataManager && !this.isOffline) {
                    var id = parentLi.getAttribute('data-uid');
                    var nodeData = this.getNodeObject(id);
                    ej2_base_8.setValue('child', childItems, nodeData);
                }
                this.listBaseOption.ariaAttributes.level = parseFloat(parentLi.getAttribute('aria-level')) + 1;
                parentLi.appendChild(ej2_lists_1.ListBase.createList(this.createElement, childItems, this.listBaseOption));
                this.expandNode(parentLi, eicon, loaded);
                this.setSelectionForChildNodes(childItems);
                this.ensureCheckNode(parentLi);
                this.finalizeNode(parentLi);
                this.disableTreeNodes(childItems);
                this.renderSubChild(parentLi, expandChild, loaded);
            }
            if (callback) {
                callback();
            }
            if (this.treeList.length === 0 && !this.isLoaded) {
                this.finalize();
            }
        };
        TreeView.prototype.disableTreeNodes = function (childItems) {
            var i = 0;
            while (i < childItems.length) {
                var id = childItems[i][this.fields.id] ? childItems[i][this.fields.id].toString() : null;
                if (this.disableNode !== undefined && this.disableNode.indexOf(id) !== -1) {
                    this.doDisableAction([id]);
                }
                i++;
            }
        };
        TreeView.prototype.setSelectionForChildNodes = function (nodes) {
            var i;
            for (i = 0; i < nodes.length; i++) {
                var id = nodes[i][this.fields.id] ? nodes[i][this.fields.id].toString() : null;
                if (this.selectedNodes !== undefined && this.selectedNodes.indexOf(id) !== -1) {
                    this.doSelectionAction();
                }
            }
        };
        TreeView.prototype.ensureCheckNode = function (element) {
            if (this.showCheckBox) {
                this.ele = (this.checkedElement) ? this.checkedElement.indexOf(element.getAttribute('data-uid')) : null;
                if (this.autoCheck) {
                    this.ensureChildCheckState(element);
                    this.ensureParentCheckState(element);
                }
            }
            this.currentLoadData = null;
        };
        TreeView.prototype.getFields = function (mapper, nodeLevel, dataLevel) {
            if (nodeLevel === dataLevel) {
                return mapper;
            }
            else {
                return this.getFields(this.getChildMapper(mapper), nodeLevel, dataLevel + 1);
            }
        };
        TreeView.prototype.getChildFields = function (mapper, nodeLevel, dataLevel) {
            var childData;
            if (nodeLevel === dataLevel) {
                return this.getChildMapper(mapper);
            }
            else {
                return this.getChildFields(this.getChildMapper(mapper), nodeLevel, dataLevel + 1);
            }
        };
        TreeView.prototype.getChildMapper = function (mapper) {
            return (typeof mapper.child === 'string' || ej2_base_8.isNullOrUndefined(mapper.child)) ? mapper : mapper.child;
        };
        TreeView.prototype.getChildNodes = function (obj, parentId, isRoot) {
            if (isRoot === void 0) { isRoot = false; }
            var childNodes;
            if (ej2_base_8.isNullOrUndefined(obj)) {
                return childNodes;
            }
            else if (this.dataType === 1) {
                return this.getChildGroup(this.groupedData, parentId, isRoot);
            }
            else {
                if (typeof this.fields.child === 'string') {
                    for (var i = 0, objlen = obj.length; i < objlen; i++) {
                        var dataId = ej2_base_8.getValue(this.fields.id, obj[i]);
                        if (dataId && dataId.toString() === parentId) {
                            return ej2_base_8.getValue(this.fields.child, obj[i]);
                        }
                        else if (!ej2_base_8.isNullOrUndefined(ej2_base_8.getValue(this.fields.child, obj[i]))) {
                            childNodes = this.getChildNodes(ej2_base_8.getValue(this.fields.child, obj[i]), parentId);
                            if (childNodes !== undefined) {
                                break;
                            }
                        }
                    }
                }
            }
            return childNodes;
        };
        TreeView.prototype.getChildGroup = function (data, parentId, isRoot) {
            var childNodes;
            if (ej2_base_8.isNullOrUndefined(data)) {
                return childNodes;
            }
            for (var i = 0, objlen = data.length; i < objlen; i++) {
                if (!ej2_base_8.isNullOrUndefined(data[i][0]) && !ej2_base_8.isNullOrUndefined(ej2_base_8.getValue(this.fields.parentID, data[i][0]))) {
                    if (ej2_base_8.getValue(this.fields.parentID, data[i][0]).toString() === parentId) {
                        return data[i];
                    }
                }
                else if (isRoot) {
                    return data[i];
                }
                else {
                    return [];
                }
            }
            return childNodes;
        };
        TreeView.prototype.renderSubChild = function (element, expandChild, loaded) {
            if (expandChild) {
                var cIcons = ej2_base_7.selectAll('.' + EXPANDABLE, element);
                for (var i = 0, len = cIcons.length; i < len; i++) {
                    var icon = cIcons[i];
                    if (element.querySelector('.e-icons') !== cIcons[i]) {
                        var curLi = ej2_base_7.closest(icon, '.' + LISTITEM);
                        this.expandArgs = this.getExpandEvent(curLi, null);
                        if (loaded !== true) {
                            this.trigger('nodeExpanding', this.expandArgs);
                        }
                        this.renderChildNodes(curLi, expandChild, null, loaded);
                    }
                }
            }
        };
        TreeView.prototype.toggleSelect = function (li, e, multiSelect) {
            if (!li.classList.contains('e-disable')) {
                if (this.allowMultiSelection && ((e && e.ctrlKey) || multiSelect) && this.isActive(li)) {
                    this.unselectNode(li, e);
                }
                else {
                    this.selectNode(li, e, multiSelect);
                }
            }
        };
        TreeView.prototype.isActive = function (li) {
            return li.classList.contains(ACTIVE) ? true : false;
        };
        TreeView.prototype.selectNode = function (li, e, multiSelect) {
            var _this = this;
            if (ej2_base_8.isNullOrUndefined(li) || (!this.allowMultiSelection && this.isActive(li) && !ej2_base_8.isNullOrUndefined(e))) {
                this.setFocusElement(li);
                return;
            }
            var eventArgs;
            if (this.isLoaded) {
                eventArgs = this.getSelectEvent(li, 'select', e);
                this.trigger('nodeSelecting', eventArgs, function (observedArgs) {
                    if (!observedArgs.cancel) {
                        _this.nodeSelectAction(li, e, observedArgs, multiSelect);
                    }
                });
            }
            else {
                this.nodeSelectAction(li, e, eventArgs, multiSelect);
            }
        };
        TreeView.prototype.nodeSelectAction = function (li, e, eventArgs, multiSelect) {
            if (!this.allowMultiSelection || (!multiSelect && (!e || (e && !e.ctrlKey)))) {
                this.removeSelectAll();
            }
            if (this.allowMultiSelection && e && e.shiftKey) {
                if (!this.startNode) {
                    this.startNode = li;
                }
                var startIndex = this.liList.indexOf(this.startNode);
                var endIndex = this.liList.indexOf(li);
                if (startIndex > endIndex) {
                    var temp = startIndex;
                    startIndex = endIndex;
                    endIndex = temp;
                }
                for (var i = startIndex; i <= endIndex; i++) {
                    var currNode = this.liList[i];
                    if (ej2_base_7.isVisible(currNode) && !currNode.classList.contains('e-disable')) {
                        this.addSelect(currNode);
                    }
                }
            }
            else {
                this.startNode = li;
                this.addSelect(li);
            }
            this.setFocusElement(li);
            if (this.isLoaded) {
                this.allowServerDataBinding = true;
                this.updateServerProperties("select");
                this.allowServerDataBinding = false;
                eventArgs.nodeData = this.getNodeData(li);
                this.trigger('nodeSelected', eventArgs);
            }
        };
        TreeView.prototype.unselectNode = function (li, e) {
            var _this = this;
            var eventArgs;
            if (this.isLoaded) {
                eventArgs = this.getSelectEvent(li, 'un-select', e);
                this.trigger('nodeSelecting', eventArgs, function (observedArgs) {
                    if (!observedArgs.cancel) {
                        _this.allowServerDataBinding = true;
                        _this.updateServerProperties("select");
                        _this.allowServerDataBinding = false;
                        _this.nodeUnselectAction(li, observedArgs);
                    }
                });
            }
            else {
                this.nodeUnselectAction(li, eventArgs);
            }
        };
        TreeView.prototype.nodeUnselectAction = function (li, eventArgs) {
            this.removeSelect(li);
            this.setFocusElement(li);
            if (this.isLoaded) {
                this.allowServerDataBinding = true;
                this.updateServerProperties("select");
                this.allowServerDataBinding = false;
                eventArgs.nodeData = this.getNodeData(li);
                this.trigger('nodeSelected', eventArgs);
            }
        };
        TreeView.prototype.setFocusElement = function (li) {
            if (!ej2_base_8.isNullOrUndefined(li)) {
                var focusedNode = this.getFocusedNode();
                if (focusedNode) {
                    ej2_base_7.removeClass([focusedNode], FOCUS);
                }
                ej2_base_7.addClass([li], FOCUS);
                this.updateIdAttr(focusedNode, li);
            }
        };
        TreeView.prototype.addSelect = function (liEle) {
            liEle.setAttribute('aria-selected', 'true');
            ej2_base_7.addClass([liEle], ACTIVE);
            var id = liEle.getAttribute('data-uid');
            if (!ej2_base_8.isNullOrUndefined(id) && this.selectedNodes.indexOf(id) === -1) {
                this.selectedNodes.push(id);
            }
        };
        TreeView.prototype.removeSelect = function (liEle) {
            if (this.allowMultiSelection) {
                liEle.setAttribute('aria-selected', 'false');
            }
            else {
                liEle.removeAttribute('aria-selected');
            }
            ej2_base_7.removeClass([liEle], ACTIVE);
            var index = this.selectedNodes.indexOf(liEle.getAttribute('data-uid'));
            if (index > -1) {
                this.selectedNodes.splice(index, 1);
            }
        };
        TreeView.prototype.removeSelectAll = function () {
            var selectedLI = this.element.querySelectorAll('.' + ACTIVE);
            for (var _i = 0, selectedLI_1 = selectedLI; _i < selectedLI_1.length; _i++) {
                var ele = selectedLI_1[_i];
                if (this.allowMultiSelection) {
                    ele.setAttribute('aria-selected', 'false');
                }
                else {
                    ele.removeAttribute('aria-selected');
                }
            }
            ej2_base_7.removeClass(selectedLI, ACTIVE);
            this.setProperties({ selectedNodes: [] }, true);
        };
        TreeView.prototype.getSelectEvent = function (currLi, action, e) {
            var nodeData = this.getNodeData(currLi);
            return { action: action, cancel: false, isInteracted: ej2_base_8.isNullOrUndefined(e) ? false : true, node: currLi, nodeData: nodeData };
        };
        TreeView.prototype.setExpandOnType = function () {
            this.expandOnType = (this.expandOn === 'Auto') ? (ej2_base_1.Browser.isDevice ? 'Click' : 'DblClick') : this.expandOn;
        };
        TreeView.prototype.expandHandler = function (e) {
            var target = e.originalEvent.target;
            if (!target || target.classList.contains(INPUT) || target.classList.contains(ROOT) ||
                target.classList.contains(PARENTITEM) || target.classList.contains(LISTITEM) ||
                target.classList.contains(ICON) || this.showCheckBox && ej2_base_7.closest(target, '.' + CHECKBOXWRAP)) {
                return;
            }
            else {
                this.expandCollapseAction(ej2_base_7.closest(target, '.' + LISTITEM), e);
            }
        };
        TreeView.prototype.expandCollapseAction = function (currLi, e) {
            var icon = ej2_base_7.select('div.' + ICON, currLi);
            if (!icon || icon.classList.contains(PROCESS)) {
                return;
            }
            else {
                var classList = icon.classList;
                if (classList.contains(EXPANDABLE)) {
                    this.expandAction(currLi, icon, e);
                }
                else if (classList.contains(COLLAPSIBLE)) {
                    this.collapseNode(currLi, icon, e);
                }
            }
        };
        TreeView.prototype.expandAction = function (currLi, icon, e, expandChild, callback) {
            var _this = this;
            if (icon.classList.contains(PROCESS)) {
                return;
            }
            else {
                ej2_base_7.addClass([icon], PROCESS);
            }
            if (this.isLoaded && !this.isRefreshed) {
                this.expandArgs = this.getExpandEvent(currLi, e);
                this.trigger('nodeExpanding', this.expandArgs, function (observedArgs) {
                    if (observedArgs.cancel) {
                        ej2_base_7.removeClass([icon], PROCESS);
                    }
                    else {
                        _this.nodeExpandAction(currLi, icon, expandChild, callback);
                    }
                });
            }
            else {
                this.nodeExpandAction(currLi, icon, expandChild, callback);
            }
        };
        TreeView.prototype.nodeExpandAction = function (currLi, icon, expandChild, callback) {
            var ul = ej2_base_7.select('.' + PARENTITEM, currLi);
            if (ul && ul.nodeName === 'UL') {
                this.expandNode(currLi, icon);
            }
            else {
                this.renderChildNodes(currLi, expandChild, callback);
                var liEles = ej2_base_7.selectAll('.' + LISTITEM, currLi);
                for (var i = 0; i < liEles.length; i++) {
                    var id = this.getId(liEles[i]);
                    if (this.expandChildren.indexOf(id) !== -1 && this.expandChildren !== undefined) {
                        var icon_1 = ej2_base_7.select('.' + EXPANDABLE, ej2_base_7.select('.' + TEXTWRAP, liEles[i]));
                        if (!ej2_base_8.isNullOrUndefined(icon_1)) {
                            this.expandAction(liEles[i], icon_1, null);
                        }
                        this.expandChildren.splice(this.expandChildren.indexOf(id), 1);
                    }
                }
            }
        };
        TreeView.prototype.keyActionHandler = function (e) {
            var _this = this;
            var target = e.target;
            var focusedNode = this.getFocusedNode();
            if (target && target.classList.contains(INPUT)) {
                var inpEle = target;
                if (e.action === 'enter') {
                    inpEle.blur();
                    this.element.focus();
                    ej2_base_7.addClass([focusedNode], HOVER);
                }
                else if (e.action === 'escape') {
                    inpEle.value = this.oldText;
                    inpEle.blur();
                    this.element.focus();
                    ej2_base_7.addClass([focusedNode], HOVER);
                }
                return;
            }
            e.preventDefault();
            var eventArgs = {
                cancel: false,
                event: e,
                node: focusedNode,
            };
            this.trigger('keyPress', eventArgs, function (observedArgs) {
                if (!observedArgs.cancel) {
                    switch (e.action) {
                        case 'space':
                            if (_this.showCheckBox) {
                                _this.checkNode(e);
                            }
                            break;
                        case 'moveRight':
                            _this.openNode(_this.enableRtl ? false : true, e);
                            break;
                        case 'moveLeft':
                            _this.openNode(_this.enableRtl ? true : false, e);
                            break;
                        case 'shiftDown':
                            _this.shiftKeySelect(true, e);
                            break;
                        case 'moveDown':
                        case 'ctrlDown':
                        case 'csDown':
                            _this.navigateNode(true);
                            break;
                        case 'shiftUp':
                            _this.shiftKeySelect(false, e);
                            break;
                        case 'moveUp':
                        case 'ctrlUp':
                        case 'csUp':
                            _this.navigateNode(false);
                            break;
                        case 'home':
                        case 'shiftHome':
                        case 'ctrlHome':
                        case 'csHome':
                            _this.navigateRootNode(true);
                            break;
                        case 'end':
                        case 'shiftEnd':
                        case 'ctrlEnd':
                        case 'csEnd':
                            _this.navigateRootNode(false);
                            break;
                        case 'enter':
                        case 'ctrlEnter':
                        case 'shiftEnter':
                        case 'csEnter':
                            _this.toggleSelect(focusedNode, e);
                            break;
                        case 'f2':
                            if (_this.allowEditing && !focusedNode.classList.contains('e-disable')) {
                                _this.createTextbox(focusedNode, e);
                            }
                            break;
                        case 'ctrlA':
                            if (_this.allowMultiSelection) {
                                var sNodes = ej2_base_7.selectAll('.' + LISTITEM + ':not(.' + ACTIVE + ')', _this.element);
                                _this.selectGivenNodes(sNodes);
                            }
                            break;
                    }
                }
            });
        };
        TreeView.prototype.navigateToFocus = function (isUp) {
            var focusNode = this.getFocusedNode().querySelector('.' + TEXTWRAP);
            var pos = focusNode.getBoundingClientRect();
            var parent = this.getScrollParent(this.element);
            if (!ej2_base_8.isNullOrUndefined(parent)) {
                var parentPos = parent.getBoundingClientRect();
                if (pos.bottom > parentPos.bottom) {
                    parent.scrollTop += pos.bottom - parentPos.bottom;
                }
                else if (pos.top < parentPos.top) {
                    parent.scrollTop -= parentPos.top - pos.top;
                }
            }
            var isVisible = this.isVisibleInViewport(focusNode);
            if (!isVisible) {
                focusNode.scrollIntoView(isUp);
            }
        };
        TreeView.prototype.isVisibleInViewport = function (txtWrap) {
            var pos = txtWrap.getBoundingClientRect();
            return (pos.top >= 0 && pos.left >= 0 && pos.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                pos.right <= (window.innerWidth || document.documentElement.clientWidth));
        };
        TreeView.prototype.getScrollParent = function (node) {
            if (ej2_base_8.isNullOrUndefined(node)) {
                return null;
            }
            return (node.scrollHeight > node.clientHeight) ? node : this.getScrollParent(node.parentElement);
        };
        TreeView.prototype.shiftKeySelect = function (isTowards, e) {
            if (this.allowMultiSelection) {
                var focusedNode = this.getFocusedNode();
                var nextNode = isTowards ? this.getNextNode(focusedNode) : this.getPrevNode(focusedNode);
                this.removeHover();
                this.setFocusElement(nextNode);
                this.toggleSelect(nextNode, e, false);
                this.navigateToFocus(!isTowards);
            }
            else {
                this.navigateNode(isTowards);
            }
        };
        TreeView.prototype.checkNode = function (e) {
            var focusedNode = this.getFocusedNode();
            var checkWrap = ej2_base_7.select('.' + CHECKBOXWRAP, focusedNode);
            var isChecked = ej2_base_7.select(' .' + CHECKBOXFRAME, checkWrap).classList.contains(CHECK);
            if (!focusedNode.classList.contains('e-disable')) {
                if (focusedNode.getElementsByClassName("e-checkbox-disabled").length == 0) {
                    this.validateCheckNode(checkWrap, isChecked, focusedNode, e);
                }
            }
        };
        TreeView.prototype.validateCheckNode = function (checkWrap, isCheck, li, e) {
            var _this = this;
            var currLi = ej2_base_7.closest(checkWrap, '.' + LISTITEM);
            this.checkActionNodes = [];
            var ariaState = !isCheck ? 'true' : 'false';
            if (!ej2_base_8.isNullOrUndefined(ariaState)) {
                checkWrap.setAttribute('aria-checked', ariaState);
            }
            var eventArgs = this.getCheckEvent(currLi, isCheck ? 'uncheck' : 'check', e);
            this.trigger('nodeChecking', eventArgs, function (observedArgs) {
                if (!observedArgs.cancel) {
                    _this.nodeCheckingAction(checkWrap, isCheck, li, observedArgs, e);
                }
            });
        };
        TreeView.prototype.nodeCheckingAction = function (checkWrap, isCheck, li, eventArgs, e) {
            if (this.checkedElement.indexOf(li.getAttribute('data-uid')) === -1) {
                this.checkedElement.push(li.getAttribute('data-uid'));
                var child = this.getChildNodes(this.treeData, li.getAttribute('data-uid'));
                (child !== null) ? this.allCheckNode(child, this.checkedElement, null, null, false) : child = null;
            }
            this.changeState(checkWrap, isCheck ? 'uncheck' : 'check', e, true);
            if (this.autoCheck) {
                this.ensureChildCheckState(li);
                this.ensureParentCheckState(ej2_base_7.closest(ej2_base_7.closest(li, '.' + PARENTITEM), '.' + LISTITEM));
                var doCheck = void 0;
                if (eventArgs.action === 'check') {
                    doCheck = true;
                }
                else if (eventArgs.action === 'uncheck') {
                    doCheck = false;
                }
                this.ensureStateChange(li, doCheck);
            }
            this.allowServerDataBinding = true;
            this.updateServerProperties("check");
            this.allowServerDataBinding = false;
            this.nodeCheckedEvent(checkWrap, isCheck, e);
        };
        TreeView.prototype.ensureStateChange = function (li, doCheck) {
            var childElement = ej2_base_7.select('.' + PARENTITEM, li);
            var parentIndex = li.getAttribute('data-uid');
            var mapper = this.fields;
            if (this.dataType === 1 && this.autoCheck) {
                var resultData = new ej2_data_1.DataManager(this.treeData).executeLocal(new ej2_data_1.Query().where(mapper.parentID, 'equal', parentIndex, true));
                for (var i = 0; i < resultData.length; i++) {
                    var resultId = resultData[i][this.fields.id] ? resultData[i][this.fields.id].toString() : null;
                    var isCheck = resultData[i][this.fields.isChecked] ? resultData[i][this.fields.isChecked].toString() : null;
                    if (this.checkedNodes.indexOf(parentIndex) !== -1 && this.checkedNodes.indexOf(resultId) === -1) {
                        this.checkedNodes.push(resultId);
                        var childItems = this.getChildNodes(this.treeData, resultId);
                        this.getChildItems(childItems, doCheck);
                        if (this.parentNodeCheck.indexOf(resultId) !== -1) {
                            this.parentNodeCheck.splice(this.parentNodeCheck.indexOf(resultId), 1);
                        }
                    }
                    else if (this.checkedNodes.indexOf(parentIndex) === -1 && childElement === null &&
                        this.checkedNodes.indexOf(resultId) !== -1) {
                        this.checkedNodes.splice(this.checkedNodes.indexOf(resultId), 1);
                        if (isCheck === 'true') {
                            this.updateField(this.treeData, this.fields, resultId, 'isChecked', null);
                        }
                        if (this.checkedNodes.indexOf(parentIndex) === -1 && childElement === null ||
                            this.parentNodeCheck.indexOf(resultId) !== -1) {
                            var childNodes = this.getChildNodes(this.treeData, resultId);
                            this.getChildItems(childNodes, doCheck);
                            if (this.parentNodeCheck.indexOf(resultId) !== -1) {
                                this.parentNodeCheck.splice(this.parentNodeCheck.indexOf(resultId), 1);
                            }
                        }
                    }
                    else {
                        var childItems = this.getChildNodes(this.treeData, resultId);
                        this.getChildItems(childItems, doCheck);
                    }
                }
            }
            else if (this.dataType === 1 && !this.autoCheck) {
                if (!doCheck) {
                    var checkedData = new ej2_data_1.DataManager(this.treeData).executeLocal(new ej2_data_1.Query().where(mapper.isChecked, 'equal', true, false));
                    for (var i = 0; i < checkedData.length; i++) {
                        var id = checkedData[i][this.fields.id] ? checkedData[i][this.fields.id].toString() : null;
                        if (this.checkedNodes.indexOf(id) !== -1) {
                            this.checkedNodes.splice(this.checkedNodes.indexOf(id), 1);
                        }
                        this.updateField(this.treeData, this.fields, id, 'isChecked', null);
                    }
                    this.checkedNodes = [];
                }
                else {
                    for (var i = 0; i < this.treeData.length; i++) {
                        var checkedId = this.treeData[i][this.fields.id] ? this.treeData[i][this.fields.id].toString() : null;
                        if (this.checkedNodes.indexOf(checkedId) === -1) {
                            this.checkedNodes.push(checkedId);
                        }
                    }
                }
            }
            else {
                var childItems = this.getChildNodes(this.treeData, parentIndex);
                if (childItems) {
                    this.childStateChange(childItems, parentIndex, childElement, doCheck);
                }
            }
        };
        TreeView.prototype.getChildItems = function (childItems, doCheck) {
            for (var i = 0; i < childItems.length; i++) {
                var childId = childItems[i][this.fields.id] ? childItems[i][this.fields.id].toString() : null;
                var childIsCheck = childItems[i][this.fields.isChecked] ? childItems[i][this.fields.isChecked].toString() :
                    null;
                if (this.checkedNodes.indexOf(childId) !== -1 && !doCheck) {
                    this.checkedNodes.splice(this.checkedNodes.indexOf(childId), 1);
                }
                if (this.checkedNodes.indexOf(childId) === -1 && doCheck) {
                    this.checkedNodes.push(childId);
                }
                if (childIsCheck === 'true' && !doCheck) {
                    this.updateField(this.treeData, this.fields, childId, 'isChecked', null);
                }
                var subChildItems = this.getChildNodes(this.treeData, childId);
                if (subChildItems.length > 0) {
                    this.getChildItems(subChildItems, doCheck);
                }
            }
        };
        TreeView.prototype.childStateChange = function (childItems, parent, childElement, doCheck) {
            for (var i = 0; i < childItems.length; i++) {
                var checkedChild = childItems[i][this.fields.id] ? childItems[i][this.fields.id].toString() : '';
                var isCheck = childItems[i][this.fields.isChecked] ? childItems[i][this.fields.isChecked].toString() : null;
                if (this.autoCheck) {
                    if (this.checkedNodes.indexOf(parent) !== -1 && this.checkedNodes.indexOf(checkedChild) === -1) {
                        this.checkedNodes.push(checkedChild);
                        if (this.parentNodeCheck.indexOf(checkedChild) !== -1) {
                            this.parentNodeCheck.splice(this.parentNodeCheck.indexOf(checkedChild), 1);
                        }
                    }
                    else if (this.checkedNodes.indexOf(parent) === -1 && this.checkedNodes.indexOf(checkedChild) !== -1 && !doCheck) {
                        this.checkedNodes.splice(this.checkedNodes.indexOf(checkedChild), 1);
                        if (isCheck === 'true') {
                            this.updateField(this.treeData, this.fields, checkedChild, 'isChecked', null);
                        }
                    }
                }
                else if (!this.autoCheck) {
                    if (!doCheck) {
                        if (this.checkedNodes.indexOf(checkedChild) !== -1) {
                            this.checkedNodes.splice(this.checkedNodes.indexOf(checkedChild), 1);
                        }
                        this.updateField(this.treeData, this.fields, checkedChild, 'isChecked', null);
                        this.checkedNodes = [];
                    }
                    else {
                        if (this.checkedNodes.indexOf(checkedChild) === -1) {
                            this.checkedNodes.push(checkedChild);
                        }
                    }
                }
                var subChild = this.getChildNodes([childItems[i]], checkedChild);
                if (subChild) {
                    this.childStateChange(subChild, parent, childElement, doCheck);
                }
            }
        };
        TreeView.prototype.allCheckNode = function (child, newCheck, checked, childCheck, validateCheck) {
            if (child) {
                for (var length_1 = 0; length_1 < child.length; length_1++) {
                    var childId = ej2_base_8.getValue(this.fields.id, child[length_1]);
                    var check = this.element.querySelector('[data-uid="' + childId + '"]');
                    if (validateCheck !== false && this.checkedElement.indexOf(childId.toString()) === -1) {
                        if (((check === null && !ej2_base_8.isNullOrUndefined(child[length_1][this.fields.isChecked]) && newCheck.indexOf(childId.toString()) === -1)
                            || childCheck === 0 || checked === 2)) {
                            (child[length_1][this.fields.isChecked] !== false || checked === 2) ? newCheck.push(childId.toString())
                                : childCheck = null;
                            childCheck = (child[length_1][this.fields.isChecked] !== false || checked === 2) ? 0 : null;
                        }
                    }
                    if (newCheck.indexOf(childId.toString()) === -1 && ej2_base_8.isNullOrUndefined(checked)) {
                        newCheck.push(childId.toString());
                    }
                    if (ej2_base_8.getValue(this.fields.hasChildren, child[length_1]) === true ||
                        ej2_base_8.getValue(this.fields.child.toString(), child[length_1])) {
                        var id = ej2_base_8.getValue(this.fields.id, child[length_1]);
                        var childId_1 = this.getChildNodes(this.treeData, id.toString());
                        if (childId_1) {
                            (ej2_base_8.isNullOrUndefined(validateCheck)) ? this.allCheckNode(childId_1, newCheck, checked, childCheck) :
                                this.allCheckNode(childId_1, newCheck, checked, childCheck, validateCheck);
                            childCheck = null;
                        }
                    }
                    childCheck = null;
                }
            }
        };
        TreeView.prototype.openNode = function (toBeOpened, e) {
            var focusedNode = this.getFocusedNode();
            var icon = ej2_base_7.select('div.' + ICON, focusedNode);
            if (toBeOpened) {
                if (!icon) {
                    return;
                }
                else if (icon.classList.contains(EXPANDABLE)) {
                    this.expandAction(focusedNode, icon, e);
                }
                else {
                    this.focusNextNode(focusedNode, true);
                }
            }
            else {
                if (icon && icon.classList.contains(COLLAPSIBLE)) {
                    this.collapseNode(focusedNode, icon, e);
                }
                else {
                    var parentLi = ej2_base_7.closest(ej2_base_7.closest(focusedNode, '.' + PARENTITEM), '.' + LISTITEM);
                    if (!parentLi) {
                        return;
                    }
                    else {
                        if (!parentLi.classList.contains('e-disable')) {
                            this.setFocus(focusedNode, parentLi);
                            this.navigateToFocus(true);
                        }
                    }
                }
            }
        };
        TreeView.prototype.navigateNode = function (isTowards) {
            var focusedNode = this.getFocusedNode();
            this.focusNextNode(focusedNode, isTowards);
        };
        TreeView.prototype.navigateRootNode = function (isBackwards) {
            var focusedNode = this.getFocusedNode();
            var rootNode = isBackwards ? this.getRootNode() : this.getEndNode();
            if (!rootNode.classList.contains('e-disable')) {
                this.setFocus(focusedNode, rootNode);
                this.navigateToFocus(isBackwards);
            }
        };
        TreeView.prototype.getFocusedNode = function () {
            var selectedItem;
            var fNode = ej2_base_7.select('.' + LISTITEM + '.' + FOCUS, this.element);
            if (ej2_base_8.isNullOrUndefined(fNode)) {
                selectedItem = ej2_base_7.select('.' + LISTITEM, this.element);
            }
            return ej2_base_8.isNullOrUndefined(fNode) ? (ej2_base_8.isNullOrUndefined(selectedItem) ? this.element.firstElementChild : selectedItem) : fNode;
        };
        TreeView.prototype.focusNextNode = function (li, isTowards) {
            var nextNode = isTowards ? this.getNextNode(li) : this.getPrevNode(li);
            this.setFocus(li, nextNode);
            this.navigateToFocus(!isTowards);
            if (nextNode.classList.contains('e-disable')) {
                var lastChild = nextNode.lastChild;
                if (nextNode.previousSibling == null && nextNode.classList.contains('e-level-1')) {
                    this.focusNextNode(nextNode, true);
                }
                else if (nextNode.nextSibling == null && nextNode.classList.contains('e-node-collapsed')) {
                    this.focusNextNode(nextNode, false);
                }
                else if (nextNode.nextSibling == null && lastChild.classList.contains(TEXTWRAP)) {
                    this.focusNextNode(nextNode, false);
                }
                else {
                    this.focusNextNode(nextNode, isTowards);
                }
            }
        };
        TreeView.prototype.getNextNode = function (li) {
            var index = this.liList.indexOf(li);
            var nextNode;
            do {
                index++;
                nextNode = this.liList[index];
                if (ej2_base_8.isNullOrUndefined(nextNode)) {
                    return li;
                }
            } while (!ej2_base_7.isVisible(nextNode));
            return nextNode;
        };
        TreeView.prototype.getPrevNode = function (li) {
            var index = this.liList.indexOf(li);
            var prevNode;
            do {
                index--;
                prevNode = this.liList[index];
                if (ej2_base_8.isNullOrUndefined(prevNode)) {
                    return li;
                }
            } while (!ej2_base_7.isVisible(prevNode));
            return prevNode;
        };
        TreeView.prototype.getRootNode = function () {
            var index = 0;
            var rootNode;
            do {
                rootNode = this.liList[index];
                index++;
            } while (!ej2_base_7.isVisible(rootNode));
            return rootNode;
        };
        TreeView.prototype.getEndNode = function () {
            var index = this.liList.length - 1;
            var endNode;
            do {
                endNode = this.liList[index];
                index--;
            } while (!ej2_base_7.isVisible(endNode));
            return endNode;
        };
        TreeView.prototype.setFocus = function (preNode, nextNode) {
            ej2_base_7.removeClass([preNode], [HOVER, FOCUS]);
            if (!nextNode.classList.contains('e-disable')) {
                ej2_base_7.addClass([nextNode], [HOVER, FOCUS]);
                this.updateIdAttr(preNode, nextNode);
            }
        };
        TreeView.prototype.updateIdAttr = function (preNode, nextNode) {
            this.element.removeAttribute('aria-activedescendant');
            if (preNode) {
                preNode.removeAttribute('id');
            }
            nextNode.setAttribute('id', this.element.id + '_active');
            this.element.setAttribute('aria-activedescendant', this.element.id + '_active');
        };
        TreeView.prototype.focusIn = function () {
            if (!this.mouseDownStatus) {
                ej2_base_7.addClass([this.getFocusedNode()], HOVER);
            }
            this.mouseDownStatus = false;
        };
        TreeView.prototype.focusOut = function () {
            ej2_base_7.removeClass([this.getFocusedNode()], HOVER);
        };
        TreeView.prototype.onMouseOver = function (e) {
            var target = e.target;
            var classList = target.classList;
            var currentLi = ej2_base_7.closest(target, '.' + LISTITEM);
            if (!currentLi || classList.contains(PARENTITEM) || classList.contains(LISTITEM)) {
                this.removeHover();
                return;
            }
            else {
                if (currentLi && !currentLi.classList.contains('e-disable')) {
                    this.setHover(currentLi);
                }
            }
        };
        TreeView.prototype.setHover = function (li) {
            if (!li.classList.contains(HOVER)) {
                this.removeHover();
                ej2_base_7.addClass([li], HOVER);
            }
        };
        ;
        TreeView.prototype.onMouseLeave = function (e) {
            this.removeHover();
        };
        TreeView.prototype.removeHover = function () {
            var hoveredNode = ej2_base_7.selectAll('.' + HOVER, this.element);
            if (hoveredNode && hoveredNode.length) {
                ej2_base_7.removeClass(hoveredNode, HOVER);
            }
        };
        ;
        TreeView.prototype.getNodeData = function (currLi, fromDS) {
            if (!ej2_base_8.isNullOrUndefined(currLi) && currLi.classList.contains(LISTITEM) &&
                !ej2_base_8.isNullOrUndefined(ej2_base_7.closest(currLi, '.' + CONTROL)) && ej2_base_7.closest(currLi, '.' + CONTROL).classList.contains(ROOT)) {
                var id = currLi.getAttribute('data-uid');
                var text = this.getText(currLi, fromDS);
                var pNode = ej2_base_7.closest(currLi.parentNode, '.' + LISTITEM);
                var pid = pNode ? pNode.getAttribute('data-uid') : null;
                var selected = currLi.classList.contains(ACTIVE);
                var expanded = (currLi.getAttribute('aria-expanded') === 'true') ? true : false;
                var hasChildren = currLi.getAttribute('aria-expanded') !== null ? true : (ej2_base_7.select('.' + EXPANDABLE, currLi) || ej2_base_7.select('.' + COLLAPSIBLE, currLi)) != null ? true : false;
                var checked = null;
                if (this.showCheckBox) {
                    checked = ej2_base_7.select('.' + CHECKBOXWRAP, currLi).getAttribute('aria-checked');
                }
                return {
                    id: id, text: text, parentID: pid, selected: selected, expanded: expanded,
                    isChecked: checked, hasChildren: hasChildren
                };
            }
            return { id: '', text: '', parentID: '', selected: false, expanded: false, isChecked: '', hasChildren: false };
        };
        TreeView.prototype.getText = function (currLi, fromDS) {
            if (fromDS) {
                var nodeData = this.getNodeObject(currLi.getAttribute('data-uid'));
                var level = parseFloat(currLi.getAttribute('aria-level'));
                var nodeFields = this.getFields(this.fields, level, 1);
                return ej2_base_8.getValue(nodeFields.text, nodeData);
            }
            return ej2_base_7.select('.' + LISTTEXT, currLi).textContent;
        };
        TreeView.prototype.getExpandEvent = function (currLi, e) {
            var nodeData = this.getNodeData(currLi);
            return { cancel: false, isInteracted: ej2_base_8.isNullOrUndefined(e) ? false : true, node: currLi, nodeData: nodeData, event: e };
        };
        TreeView.prototype.renderNodeTemplate = function (data, textEle, dataId) {
            var tempArr = this.nodeTemplateFn(data, this, 'nodeTemplate' + dataId, this.element.id + 'nodeTemplate', this.isStringTemplate, undefined, textEle);
            if (tempArr) {
                tempArr = Array.prototype.slice.call(tempArr);
                ej2_base_7.append(tempArr, textEle);
            }
        };
        TreeView.prototype.destroyTemplate = function (liEle) {
            this.clearTemplate(['nodeTemplate' + liEle.getAttribute('data-uid')]);
        };
        TreeView.prototype.reRenderNodes = function () {
            this.updateListProp(this.fields);
            ej2_base_6.resetBlazorTemplate(this.element.id + 'nodeTemplate', 'NodeTemplate');
            if (ej2_base_1.Browser.isIE) {
                this.ulElement = this.element.querySelector('.e-list-parent.e-ul');
                this.ulElement.parentElement.removeChild(this.ulElement);
            }
            else {
                this.element.innerHTML = '';
            }
            if (!ej2_base_8.isNullOrUndefined(this.nodeTemplateFn)) {
                this.clearTemplate();
            }
            this.setTouchClass();
            this.setProperties({ selectedNodes: [], checkedNodes: [], expandedNodes: [] }, true);
            this.checkedElement = [];
            this.isLoaded = false;
            this.setDataBinding(true);
        };
        TreeView.prototype.setCssClass = function (oldClass, newClass) {
            if (!ej2_base_8.isNullOrUndefined(oldClass) && oldClass !== '') {
                ej2_base_7.removeClass([this.element], oldClass.split(' '));
            }
            if (!ej2_base_8.isNullOrUndefined(newClass) && newClass !== '') {
                ej2_base_7.addClass([this.element], newClass.split(' '));
            }
        };
        TreeView.prototype.editingHandler = function (e) {
            var target = e.target;
            if (!target || target.classList.contains(ROOT) || target.classList.contains(PARENTITEM) ||
                target.classList.contains(LISTITEM) || target.classList.contains(ICON) ||
                target.classList.contains(INPUT) || target.classList.contains(INPUTGROUP)) {
                return;
            }
            else {
                var liEle = ej2_base_7.closest(target, '.' + LISTITEM);
                this.createTextbox(liEle, e);
            }
        };
        TreeView.prototype.createTextbox = function (liEle, e) {
            var _this = this;
            var oldInpEle = ej2_base_7.select('.' + TREEINPUT, this.element);
            if (oldInpEle) {
                oldInpEle.blur();
            }
            var textEle = ej2_base_7.select('.' + LISTTEXT, liEle);
            this.updateOldText(liEle);
            var innerEle = this.createElement('input', { className: TREEINPUT, attrs: { value: this.oldText } });
            var eventArgs = this.getEditEvent(liEle, null, innerEle.outerHTML);
            this.trigger('nodeEditing', eventArgs, function (observedArgs) {
                if (!observedArgs.cancel) {
                    var inpWidth = textEle.offsetWidth + 5;
                    var style = 'width:' + inpWidth + 'px';
                    ej2_base_7.addClass([liEle], EDITING);
                    if (!ej2_base_8.isNullOrUndefined(_this.nodeTemplateFn)) {
                        _this.destroyTemplate(liEle);
                    }
                    textEle.innerHTML = eventArgs.innerHtml;
                    var inpEle = ej2_base_7.select('.' + TREEINPUT, textEle);
                    _this.inputObj = ej2_inputs_1.Input.createInput({
                        element: inpEle,
                        properties: {
                            enableRtl: _this.enableRtl,
                        }
                    }, _this.createElement);
                    _this.inputObj.container.setAttribute('style', style);
                    inpEle.focus();
                    var inputEle = inpEle;
                    inputEle.setSelectionRange(0, inputEle.value.length);
                    _this.wireInputEvents(inpEle);
                }
            });
        };
        TreeView.prototype.updateOldText = function (liEle) {
            var id = liEle.getAttribute('data-uid');
            this.editData = this.getNodeObject(id);
            var level = parseFloat(liEle.getAttribute('aria-level'));
            this.editFields = this.getFields(this.fields, level, 1);
            this.oldText = ej2_base_8.getValue(this.editFields.text, this.editData);
        };
        TreeView.prototype.inputFocusOut = function (e) {
            if (!ej2_base_7.select('.' + TREEINPUT, this.element)) {
                return;
            }
            var target = e.target;
            var newText = target.value;
            var txtEle = ej2_base_7.closest(target, '.' + LISTTEXT);
            var liEle = ej2_base_7.closest(target, '.' + LISTITEM);
            ej2_base_7.detach(this.inputObj.container);
            if (this.fields.dataSource instanceof ej2_data_1.DataManager && !this.isOffline && (this.fields.dataSource.adaptorName !== 'BlazorAdaptor')) {
                this.crudOperation('update', null, liEle, newText, null, null, true);
            }
            else {
                this.appendNewText(liEle, txtEle, newText, true);
            }
        };
        TreeView.prototype.appendNewText = function (liEle, txtEle, newText, isInput) {
            var _this = this;
            var eventArgs = this.getEditEvent(liEle, newText, null);
            this.trigger('nodeEdited', eventArgs, function (observedArgs) {
                newText = observedArgs.cancel ? observedArgs.oldText : observedArgs.newText;
                _this.updateText(liEle, txtEle, newText, isInput);
                if (observedArgs.oldText !== newText) {
                    _this.triggerEvent();
                }
            });
        };
        TreeView.prototype.updateText = function (liEle, txtEle, newText, isInput) {
            var newData = ej2_base_8.setValue(this.editFields.text, newText, this.editData);
            if (!ej2_base_8.isNullOrUndefined(this.nodeTemplateFn)) {
                txtEle.innerText = '';
                var dataId = liEle.getAttribute('data-uid');
                this.renderNodeTemplate(newData, txtEle, dataId);
                this.updateBlazorTemplate();
                this.renderReactTemplates();
            }
            else {
                txtEle.innerText = newText;
            }
            if (isInput) {
                ej2_base_7.removeClass([liEle], EDITING);
                txtEle.focus();
            }
        };
        TreeView.prototype.getElement = function (ele) {
            if (ej2_base_8.isNullOrUndefined(ele)) {
                return null;
            }
            else if (typeof ele === 'string') {
                return this.element.querySelector('[data-uid="' + ele + '"]');
            }
            else if (typeof ele === 'object') {
                return ej2_base_6.getElement(ele);
            }
            else {
                return null;
            }
        };
        TreeView.prototype.getId = function (ele) {
            if (ej2_base_8.isNullOrUndefined(ele)) {
                return null;
            }
            else if (typeof ele === 'string') {
                return ele;
            }
            else if (typeof ele === 'object') {
                return (ej2_base_6.getElement(ele)).getAttribute('data-uid');
            }
            else {
                return null;
            }
        };
        TreeView.prototype.getEditEvent = function (liEle, newText, inpEle) {
            var data = this.getNodeData(liEle);
            return { cancel: false, newText: newText, node: liEle, nodeData: data, oldText: this.oldText, innerHtml: inpEle };
        };
        TreeView.prototype.getNodeObject = function (id) {
            var childNodes;
            if (ej2_base_8.isNullOrUndefined(id)) {
                return childNodes;
            }
            else if (this.dataType === 1) {
                for (var i = 0, objlen = this.treeData.length; i < objlen; i++) {
                    var dataId = ej2_base_8.getValue(this.fields.id, this.treeData[i]);
                    if (!ej2_base_8.isNullOrUndefined(this.treeData[i]) && !ej2_base_8.isNullOrUndefined(dataId) && dataId.toString() === id) {
                        return this.treeData[i];
                    }
                }
            }
            else {
                return this.getChildNodeObject(this.treeData, this.fields, id);
            }
            return childNodes;
        };
        TreeView.prototype.getChildNodeObject = function (obj, mapper, id) {
            var newList;
            if (ej2_base_8.isNullOrUndefined(obj)) {
                return newList;
            }
            for (var i = 0, objlen = obj.length; i < objlen; i++) {
                var dataId = ej2_base_8.getValue(mapper.id, obj[i]);
                if (obj[i] && dataId && dataId.toString() === id) {
                    return obj[i];
                }
                else if (typeof mapper.child === 'string' && !ej2_base_8.isNullOrUndefined(ej2_base_8.getValue(mapper.child, obj[i]))) {
                    var childData = ej2_base_8.getValue(mapper.child, obj[i]);
                    newList = this.getChildNodeObject(childData, this.getChildMapper(mapper), id);
                    if (newList !== undefined) {
                        break;
                    }
                }
                else if (this.fields.dataSource instanceof ej2_data_1.DataManager && !ej2_base_8.isNullOrUndefined(ej2_base_8.getValue('child', obj[i]))) {
                    var child = 'child';
                    newList = this.getChildNodeObject(ej2_base_8.getValue(child, obj[i]), this.getChildMapper(mapper), id);
                    if (newList !== undefined) {
                        break;
                    }
                }
            }
            return newList;
        };
        TreeView.prototype.setDragAndDrop = function (toBind) {
            if (toBind && !this.disabled) {
                this.initializeDrag();
            }
            else {
                this.destroyDrag();
            }
        };
        TreeView.prototype.initializeDrag = function () {
            var _this = this;
            var virtualEle;
            var proxy = this;
            this.dragObj = new ej2_base_5.Draggable(this.element, {
                enableTailMode: true, enableAutoScroll: true,
                dragArea: this.dragArea,
                dragTarget: '.' + TEXTWRAP,
                helper: function (e) {
                    _this.dragTarget = e.sender.target;
                    var dragRoot = ej2_base_7.closest(_this.dragTarget, '.' + ROOT);
                    var dragWrap = ej2_base_7.closest(_this.dragTarget, '.' + TEXTWRAP);
                    _this.dragLi = ej2_base_7.closest(_this.dragTarget, '.' + LISTITEM);
                    if (_this.fullRowSelect && !dragWrap && _this.dragTarget.classList.contains(FULLROW)) {
                        dragWrap = _this.dragTarget.nextElementSibling;
                    }
                    if (!_this.dragTarget || !e.element.isSameNode(dragRoot) || !dragWrap ||
                        _this.dragTarget.classList.contains(ROOT) || _this.dragTarget.classList.contains(PARENTITEM) ||
                        _this.dragTarget.classList.contains(LISTITEM) || _this.dragLi.classList.contains('e-disable')) {
                        return false;
                    }
                    var cloneEle = (dragWrap.cloneNode(true));
                    if (ej2_base_8.isNullOrUndefined(ej2_base_7.select('div.' + ICON, cloneEle))) {
                        var icon = proxy.createElement('div', { className: ICON + ' ' + EXPANDABLE });
                        cloneEle.insertBefore(icon, cloneEle.children[0]);
                    }
                    var cssClass = DRAGITEM + ' ' + ROOT + ' ' + _this.cssClass + ' ' + (_this.enableRtl ? RTL : '');
                    virtualEle = proxy.createElement('div', { className: cssClass });
                    virtualEle.appendChild(cloneEle);
                    var nLen = _this.selectedNodes.length;
                    if (nLen > 1 && _this.allowMultiSelection && _this.dragLi.classList.contains(ACTIVE)) {
                        var cNode = proxy.createElement('span', { className: DROPCOUNT, innerHTML: '' + nLen });
                        virtualEle.appendChild(cNode);
                    }
                    document.body.appendChild(virtualEle);
                    document.body.style.cursor = '';
                    _this.dragData = _this.getNodeData(_this.dragLi);
                    return virtualEle;
                },
                dragStart: function (e) {
                    ej2_base_7.addClass([_this.element], DRAGGING);
                    var listItem = ej2_base_7.closest(e.target, '.e-list-item');
                    var level;
                    if (listItem) {
                        level = parseInt(listItem.getAttribute('aria-level'), 10);
                    }
                    var eventArgs = _this.getDragEvent(e.event, _this, null, e.target, null, virtualEle, level);
                    if (eventArgs.draggedNode.classList.contains(EDITING)) {
                        _this.dragObj.intDestroy(e.event);
                        _this.dragCancelAction(virtualEle);
                    }
                    else {
                        _this.trigger('nodeDragStart', eventArgs, function (observedArgs) {
                            if (observedArgs.cancel) {
                                _this.dragObj.intDestroy(e.event);
                                _this.dragCancelAction(virtualEle);
                            }
                            else {
                                _this.dragStartAction = true;
                            }
                            if (ej2_base_6.isBlazor()) {
                                e.bindEvents(ej2_base_6.getElement(e.dragElement));
                            }
                        });
                    }
                },
                drag: function (e) {
                    _this.dragObj.setProperties({ cursorAt: { top: (!ej2_base_8.isNullOrUndefined(e.event.targetTouches) || ej2_base_1.Browser.isDevice) ? 60 : -20 } });
                    _this.dragAction(e, virtualEle);
                },
                dragStop: function (e) {
                    ej2_base_7.removeClass([_this.element], DRAGGING);
                    _this.removeVirtualEle();
                    var dropTarget = e.target;
                    var preventTargetExpand = false;
                    var dropRoot = (ej2_base_7.closest(dropTarget, '.' + DROPPABLE));
                    var isHelperElement = true;
                    if (!dropTarget || !dropRoot) {
                        ej2_base_7.detach(e.helper);
                        document.body.style.cursor = '';
                        isHelperElement = false;
                    }
                    var listItem = ej2_base_7.closest(dropTarget, '.e-list-item');
                    var level;
                    if (listItem) {
                        level = parseInt(listItem.getAttribute('aria-level'), 10);
                    }
                    var eventArgs = _this.getDragEvent(e.event, _this, dropTarget, dropTarget, null, e.helper, level);
                    eventArgs.preventTargetExpand = preventTargetExpand;
                    if ((_this.isBlazorPlatform && _this.dragStartAction) || !_this.isBlazorPlatform) {
                        _this.trigger('nodeDragStop', eventArgs, function (observedArgs) {
                            _this.dragParent = observedArgs.draggedParentNode;
                            _this.preventExpand = observedArgs.preventTargetExpand;
                            if (observedArgs.cancel) {
                                if (e.helper.parentNode) {
                                    ej2_base_7.detach(e.helper);
                                }
                                document.body.style.cursor = '';
                                isHelperElement = false;
                            }
                            _this.dragStartAction = false;
                            if (_this.isBlazorPlatform && isHelperElement) {
                                _this.dropAction(e, true);
                            }
                        });
                    }
                }
            });
            this.dropObj = new ej2_base_5.Droppable(this.element, {
                out: function (e) {
                    if (!ej2_base_8.isNullOrUndefined(e) && !e.target.classList.contains(SIBLING)) {
                        document.body.style.cursor = 'not-allowed';
                    }
                },
                over: function (e) {
                    document.body.style.cursor = '';
                },
                drop: function (e) {
                    if (!_this.isBlazorPlatform) {
                        _this.dropAction(e);
                    }
                }
            });
        };
        TreeView.prototype.dragCancelAction = function (virtualEle) {
            ej2_base_7.detach(virtualEle);
            ej2_base_7.removeClass([this.element], DRAGGING);
            this.dragStartAction = false;
        };
        TreeView.prototype.dragAction = function (e, virtualEle) {
            var dropRoot = ej2_base_7.closest(e.target, '.' + DROPPABLE);
            var dropWrap = ej2_base_7.closest(e.target, '.' + TEXTWRAP);
            var icon = ej2_base_7.select('div.' + ICON, virtualEle);
            ej2_base_7.removeClass([icon], [DROPIN, DROPNEXT, DROPOUT, NODROP]);
            this.removeVirtualEle();
            document.body.style.cursor = '';
            var classList = e.target.classList;
            if (this.fullRowSelect && !dropWrap && !ej2_base_8.isNullOrUndefined(classList) && classList.contains(FULLROW)) {
                dropWrap = e.target.nextElementSibling;
            }
            if (dropRoot) {
                var dropLi = ej2_base_7.closest(e.target, '.' + LISTITEM);
                var checkWrapper = ej2_base_7.closest(e.target, '.' + CHECKBOXWRAP);
                var collapse = ej2_base_7.closest(e.target, '.' + COLLAPSIBLE);
                var expand = ej2_base_7.closest(e.target, '.' + EXPANDABLE);
                if (!dropRoot.classList.contains(ROOT) || (dropWrap &&
                    (!dropLi.isSameNode(this.dragLi) && !this.isDescendant(this.dragLi, dropLi)))) {
                    if (this.hasTemplate && dropLi) {
                        var templateTarget = ej2_base_7.select(this.fullRowSelect ? '.' + FULLROW : '.' + TEXTWRAP, dropLi);
                        if ((e && (!expand && !collapse) && e.event.offsetY < 7 && !checkWrapper) || (((expand && e.event.offsetY < 5) || (collapse && e.event.offsetX < 3)))) {
                            var index = this.fullRowSelect ? (1) : (0);
                            this.appendIndicator(dropLi, icon, index);
                        }
                        else if ((e && (!expand && !collapse) && !checkWrapper && templateTarget && e.event.offsetY > templateTarget.offsetHeight - 10) || ((expand && e.event.offsetY > 19) || (collapse && e.event.offsetX > 19))) {
                            var index = this.fullRowSelect ? (2) : (1);
                            this.appendIndicator(dropLi, icon, index);
                        }
                        else {
                            ej2_base_7.addClass([icon], DROPIN);
                        }
                    }
                    else {
                        if ((dropLi && e && (!expand && !collapse) && (e.event.offsetY < 7) && !checkWrapper) || (((expand && e.event.offsetY < 5) || (collapse && e.event.offsetX < 3)))) {
                            var index = this.fullRowSelect ? (1) : (0);
                            this.appendIndicator(dropLi, icon, index);
                        }
                        else if ((dropLi && e && (!expand && !collapse) && (e.target.offsetHeight > 0 && e.event.offsetY > (e.target.offsetHeight - 10)) && !checkWrapper) || (((expand && e.event.offsetY > 19) || (collapse && e.event.offsetX > 19)))) {
                            var index = this.fullRowSelect ? (2) : (1);
                            this.appendIndicator(dropLi, icon, index);
                        }
                        else {
                            ej2_base_7.addClass([icon], DROPIN);
                        }
                    }
                }
                else if (e.target.nodeName === 'LI' && (!dropLi.isSameNode(this.dragLi) && !this.isDescendant(this.dragLi, dropLi))) {
                    ej2_base_7.addClass([icon], DROPNEXT);
                    this.renderVirtualEle(e);
                }
                else if (e.target.classList.contains(SIBLING)) {
                    ej2_base_7.addClass([icon], DROPNEXT);
                }
                else {
                    ej2_base_7.addClass([icon], DROPOUT);
                }
            }
            else {
                ej2_base_7.addClass([icon], NODROP);
                document.body.style.cursor = 'not-allowed';
            }
            var listItem = ej2_base_7.closest(e.target, '.e-list-item');
            var level;
            if (listItem) {
                level = parseInt(listItem.getAttribute('aria-level'), 10);
            }
            var eventArgs = this.getDragEvent(e.event, this, e.target, e.target, null, virtualEle, level);
            if (eventArgs.dropIndicator) {
                ej2_base_7.removeClass([icon], eventArgs.dropIndicator);
            }
            this.trigger('nodeDragging', eventArgs);
            if (eventArgs.dropIndicator) {
                ej2_base_7.addClass([icon], eventArgs.dropIndicator);
            }
        };
        TreeView.prototype.appendIndicator = function (dropLi, icon, index) {
            ej2_base_7.addClass([icon], DROPNEXT);
            var virEle = this.createElement('div', { className: SIBLING });
            dropLi.insertBefore(virEle, dropLi.children[index]);
        };
        TreeView.prototype.dropAction = function (e, isBlazorDrop) {
            var offsetY = e.event.offsetY;
            var dropTarget = e.target;
            var dragObj;
            var level;
            var drop = false;
            var dragInstance;
            if (!isBlazorDrop) {
                dragInstance = e.dragData.draggable;
            }
            else {
                dragInstance = e.element;
            }
            for (var i = 0; i < dragInstance.ej2_instances.length; i++) {
                if (dragInstance.ej2_instances[i] instanceof TreeView_1) {
                    dragObj = dragInstance.ej2_instances[i];
                    break;
                }
            }
            if (dragObj && dragObj.dragTarget) {
                var dragTarget = dragObj.dragTarget;
                var dragLi = (ej2_base_7.closest(dragTarget, '.' + LISTITEM));
                var dropLi = (ej2_base_7.closest(dropTarget, '.' + LISTITEM));
                if (dropLi == null && dropTarget.classList.contains(ROOT)) {
                    dropLi = dropTarget.firstElementChild;
                }
                if (!isBlazorDrop) {
                    ej2_base_7.detach(e.droppedElement);
                }
                else {
                    ej2_base_7.detach(e.helper);
                }
                document.body.style.cursor = '';
                if (!dropLi || dropLi.isSameNode(dragLi) || this.isDescendant(dragLi, dropLi)) {
                    if (this.fields.dataSource instanceof ej2_data_1.DataManager === false) {
                        this.preventExpand = false;
                    }
                    return;
                }
                if (dragObj.allowMultiSelection && dragLi.classList.contains(ACTIVE)) {
                    var sNodes = ej2_base_7.selectAll('.' + ACTIVE, dragObj.element);
                    if (e.target.offsetHeight <= 33 && offsetY > e.target.offsetHeight - 10 && offsetY > 6) {
                        for (var i = sNodes.length - 1; i >= 0; i--) {
                            if (dropLi.isSameNode(sNodes[i]) || this.isDescendant(sNodes[i], dropLi)) {
                                continue;
                            }
                            this.appendNode(dropTarget, sNodes[i], dropLi, e, dragObj, offsetY);
                        }
                    }
                    else {
                        for (var i = 0; i < sNodes.length; i++) {
                            if (dropLi.isSameNode(sNodes[i]) || this.isDescendant(sNodes[i], dropLi)) {
                                continue;
                            }
                            this.appendNode(dropTarget, sNodes[i], dropLi, e, dragObj, offsetY);
                        }
                    }
                }
                else {
                    this.appendNode(dropTarget, dragLi, dropLi, e, dragObj, offsetY);
                }
                level = parseInt(dragLi.getAttribute('aria-level'), 10);
                drop = true;
            }
            if (this.fields.dataSource instanceof ej2_data_1.DataManager === false) {
                this.preventExpand = false;
            }
            if (!isBlazorDrop) {
                this.trigger('nodeDropped', this.getDragEvent(e.event, dragObj, dropTarget, e.target, e.dragData.draggedElement, null, level, drop));
            }
            else {
                this.trigger('nodeDropped', this.getDragEvent(e.event, dragObj, dropTarget, e.target, e.element, null, level, drop));
            }
            if (dragObj.element.id !== this.element.id) {
                dragObj.triggerEvent();
            }
            this.triggerEvent();
        };
        TreeView.prototype.appendNode = function (dropTarget, dragLi, dropLi, e, dragObj, offsetY) {
            var checkWrapper = ej2_base_7.closest(dropTarget, '.' + CHECKBOXWRAP);
            var collapse = ej2_base_7.closest(e.target, '.' + COLLAPSIBLE);
            var expand = ej2_base_7.closest(e.target, '.' + EXPANDABLE);
            if (!dragLi.classList.contains('e-disable') && !checkWrapper && ((expand && e.event.offsetY < 5) || (collapse && e.event.offsetX < 3) || (expand && e.event.offsetY > 19) || (collapse && e.event.offsetX > 19) || (!expand && !collapse))) {
                if (dropTarget.nodeName === 'LI') {
                    this.dropAsSiblingNode(dragLi, dropLi, e, dragObj);
                }
                else if (dropTarget.firstElementChild && dropTarget.classList.contains(ROOT)) {
                    if (dropTarget.firstElementChild.nodeName === 'UL') {
                        this.dropAsSiblingNode(dragLi, dropLi, e, dragObj);
                    }
                }
                else if ((dropTarget.classList.contains('e-icon-collapsible')) || (dropTarget.classList.contains('e-icon-expandable'))) {
                    this.dropAsSiblingNode(dragLi, dropLi, e, dragObj);
                }
                else {
                    this.dropAsChildNode(dragLi, dropLi, dragObj, null, e, offsetY);
                }
            }
            else {
                this.dropAsChildNode(dragLi, dropLi, dragObj, null, e, offsetY, true);
            }
        };
        TreeView.prototype.dropAsSiblingNode = function (dragLi, dropLi, e, dragObj) {
            var dropUl = ej2_base_7.closest(dropLi, '.' + PARENTITEM);
            var dragParentUl = ej2_base_7.closest(dragLi, '.' + PARENTITEM);
            var dragParentLi = ej2_base_7.closest(dragParentUl, '.' + LISTITEM);
            var pre;
            if (e.target.offsetHeight > 0 && e.event.offsetY > e.target.offsetHeight - 2) {
                pre = false;
            }
            else if (e.event.offsetY < 2) {
                pre = true;
            }
            else if (e.target.classList.contains('e-icon-expandable') || (e.target.classList.contains('e-icon-collapsible'))) {
                if ((e.event.offsetY < 5) || (e.event.offsetX < 3)) {
                    pre = true;
                }
                else if ((e.event.offsetY > 15) || (e.event.offsetX > 17)) {
                    pre = false;
                }
            }
            if ((e.target.classList.contains('e-icon-expandable')) || (e.target.classList.contains('e-icon-collapsible'))) {
                var target = e.target.closest('li');
                dropUl.insertBefore(dragLi, pre ? target : target.nextElementSibling);
            }
            else {
                dropUl.insertBefore(dragLi, pre ? e.target : e.target.nextElementSibling);
            }
            this.moveData(dragLi, dropLi, dropUl, pre, dragObj);
            this.updateElement(dragParentUl, dragParentLi);
            this.updateAriaLevel(dragLi);
            if (dragObj.element.id === this.element.id) {
                this.updateList();
            }
            else {
                dragObj.updateInstance();
                this.updateInstance();
            }
        };
        TreeView.prototype.dropAsChildNode = function (dragLi, dropLi, dragObj, index, e, pos, isCheck) {
            var dragParentUl = ej2_base_7.closest(dragLi, '.' + PARENTITEM);
            var dragParentLi = ej2_base_7.closest(dragParentUl, '.' + LISTITEM);
            var dropParentUl = ej2_base_7.closest(dropLi, '.' + PARENTITEM);
            var templateTarget;
            if (e && e.target) {
                templateTarget = ej2_base_7.select(this.fullRowSelect ? '.' + FULLROW : '.' + TEXTWRAP, dropLi);
            }
            if (e && (pos < 7) && !isCheck) {
                dropParentUl.insertBefore(dragLi, dropLi);
                this.moveData(dragLi, dropLi, dropParentUl, true, dragObj);
            }
            else if (e && (e.target.offsetHeight > 0 && pos > (e.target.offsetHeight - 10)) && !isCheck && !this.hasTemplate) {
                dropParentUl.insertBefore(dragLi, dropLi.nextElementSibling);
                this.moveData(dragLi, dropLi, dropParentUl, false, dragObj);
            }
            else if (this.hasTemplate && templateTarget && pos > templateTarget.offsetHeight - 10 && !isCheck) {
                dropParentUl.insertBefore(dragLi, dropLi.nextElementSibling);
                this.moveData(dragLi, dropLi, dropParentUl, false, dragObj);
            }
            else {
                var dropUl = this.expandParent(dropLi);
                var childLi = dropUl.childNodes[index];
                dropUl.insertBefore(dragLi, childLi);
                this.moveData(dragLi, childLi, dropUl, true, dragObj);
            }
            this.updateElement(dragParentUl, dragParentLi);
            this.updateAriaLevel(dragLi);
            if (dragObj.element.id === this.element.id) {
                this.updateList();
            }
            else {
                dragObj.updateInstance();
                this.updateInstance();
            }
        };
        TreeView.prototype.moveData = function (dragLi, dropLi, dropUl, pre, dragObj) {
            var dropParentLi = ej2_base_7.closest(dropUl, '.' + LISTITEM);
            var id = this.getId(dragLi);
            var removedData = dragObj.updateChildField(dragObj.treeData, dragObj.fields, id, null, null, true);
            var refId = this.getId(dropLi);
            var index = this.getDataPos(this.treeData, this.fields, refId);
            var parentId = this.getId(dropParentLi);
            if (this.dataType === 1) {
                this.updateField(this.treeData, this.fields, parentId, 'hasChildren', true);
                var pos = ej2_base_8.isNullOrUndefined(index) ? this.treeData.length : (pre ? index : index + 1);
                if (ej2_base_8.isNullOrUndefined(parentId) && !this.hasPid) {
                    delete removedData[0][this.fields.parentID];
                }
                else {
                    var currPid = this.isNumberTypeId ? parseFloat(parentId) : parentId;
                    ej2_base_8.setValue(this.fields.parentID, currPid, removedData[0]);
                }
                this.treeData.splice(pos, 0, removedData[0]);
                if (dragObj.element.id !== this.element.id) {
                    var childData = dragObj.removeChildNodes(id);
                    pos++;
                    for (var i = 0, len = childData.length; i < len; i++) {
                        this.treeData.splice(pos, 0, childData[i]);
                        pos++;
                    }
                    dragObj.groupedData = dragObj.getGroupedData(dragObj.treeData, dragObj.fields.parentID);
                }
                this.groupedData = this.getGroupedData(this.treeData, this.fields.parentID);
            }
            else {
                this.addChildData(this.treeData, this.fields, parentId, removedData, pre ? index : index + 1);
            }
        };
        TreeView.prototype.expandParent = function (dropLi) {
            var dropIcon = ej2_base_7.select('div.' + ICON, dropLi);
            if (dropIcon && dropIcon.classList.contains(EXPANDABLE) && this.preventExpand !== true) {
                this.expandAction(dropLi, dropIcon, null);
            }
            var dropUl = ej2_base_7.select('.' + PARENTITEM, dropLi);
            if (this.preventExpand === true && !dropUl && dropIcon) {
                this.renderChildNodes(dropLi);
            }
            dropUl = ej2_base_7.select('.' + PARENTITEM, dropLi);
            if (!ej2_base_8.isNullOrUndefined(dropUl) && this.preventExpand === true) {
                dropUl.style.display = 'none';
            }
            if (!ej2_base_8.isNullOrUndefined(dropUl) && this.preventExpand === false) {
                dropUl.style.display = 'block';
            }
            if (ej2_base_8.isNullOrUndefined(dropUl) && this.preventExpand === true) {
                if (ej2_base_8.isNullOrUndefined(dropIcon)) {
                    ej2_lists_1.ListBase.generateIcon(this.createElement, dropLi, EXPANDABLE, this.listBaseOption);
                }
                var icon = ej2_base_7.select('div.' + ICON, dropLi);
                if (icon) {
                    icon.classList.add('e-icon-expandable');
                }
                dropUl = ej2_lists_1.ListBase.generateUL(this.createElement, [], null, this.listBaseOption);
                dropLi.appendChild(dropUl);
                if (icon) {
                    ej2_base_7.removeClass([icon], COLLAPSIBLE);
                }
                else {
                    ej2_lists_1.ListBase.generateIcon(this.createElement, dropLi, EXPANDABLE, this.listBaseOption);
                }
                dropLi.setAttribute('aria-expanded', 'false');
                dropUl.style.display = 'none';
            }
            if (ej2_base_8.isNullOrUndefined(dropUl)) {
                this.trigger('nodeExpanding', this.getExpandEvent(dropLi, null));
                if (ej2_base_8.isNullOrUndefined(dropIcon)) {
                    ej2_lists_1.ListBase.generateIcon(this.createElement, dropLi, COLLAPSIBLE, this.listBaseOption);
                }
                var icon = ej2_base_7.select('div.' + ICON, dropLi);
                if (icon) {
                    ej2_base_7.removeClass([icon], EXPANDABLE);
                }
                else {
                    ej2_lists_1.ListBase.generateIcon(this.createElement, dropLi, COLLAPSIBLE, this.listBaseOption);
                    icon = ej2_base_7.select('div.' + ICON, dropLi);
                    ej2_base_7.removeClass([icon], EXPANDABLE);
                }
                dropUl = ej2_lists_1.ListBase.generateUL(this.createElement, [], null, this.listBaseOption);
                dropLi.appendChild(dropUl);
                this.addExpand(dropLi);
                this.trigger('nodeExpanded', this.getExpandEvent(dropLi, null));
            }
            return dropUl;
        };
        TreeView.prototype.updateElement = function (dragParentUl, dragParentLi) {
            if (dragParentLi && dragParentUl.childElementCount === 0) {
                var dragIcon = ej2_base_7.select('div.' + ICON, dragParentLi);
                ej2_base_7.detach(dragParentUl);
                ej2_base_7.detach(dragIcon);
                var parentId = this.getId(dragParentLi);
                this.updateField(this.treeData, this.fields, parentId, 'hasChildren', false);
                this.removeExpand(dragParentLi, true);
            }
        };
        TreeView.prototype.updateAriaLevel = function (dragLi) {
            var level = this.parents(dragLi, '.' + PARENTITEM).length;
            dragLi.setAttribute('aria-level', '' + level);
            this.updateChildAriaLevel(ej2_base_7.select('.' + PARENTITEM, dragLi), level + 1);
        };
        TreeView.prototype.updateChildAriaLevel = function (element, level) {
            if (!ej2_base_8.isNullOrUndefined(element)) {
                var cNodes = element.childNodes;
                for (var i = 0, len = cNodes.length; i < len; i++) {
                    var liEle = cNodes[i];
                    liEle.setAttribute('aria-level', '' + level);
                    this.updateChildAriaLevel(ej2_base_7.select('.' + PARENTITEM, liEle), level + 1);
                }
            }
        };
        TreeView.prototype.renderVirtualEle = function (e) {
            var pre;
            if (e.event.offsetY > e.target.offsetHeight - 2) {
                pre = false;
            }
            else if (e.event.offsetY < 2) {
                pre = true;
            }
            var virEle = this.createElement('div', { className: SIBLING });
            var index = this.fullRowSelect ? (pre ? 1 : 2) : (pre ? 0 : 1);
            e.target.insertBefore(virEle, e.target.children[index]);
        };
        TreeView.prototype.removeVirtualEle = function () {
            var sibEle = ej2_base_7.select('.' + SIBLING);
            if (sibEle) {
                ej2_base_7.detach(sibEle);
            }
        };
        TreeView.prototype.destroyDrag = function () {
            if (this.dragObj && this.dropObj) {
                this.dragObj.destroy();
                this.dropObj.destroy();
            }
        };
        TreeView.prototype.getDragEvent = function (event, obj, dropTarget, target, dragNode, cloneEle, level, drop) {
            var dropLi = dropTarget ? ej2_base_7.closest(dropTarget, '.' + LISTITEM) : null;
            var dropData = dropLi ? this.getNodeData(dropLi) : null;
            var draggedNode = obj ? obj.dragLi : dragNode;
            var draggedNodeData = obj ? obj.dragData : null;
            var newParent = dropTarget ? this.parents(dropTarget, '.' + LISTITEM) : null;
            var dragLiParent = obj.dragLi.parentElement;
            var dragParent = obj.dragLi ? ej2_base_7.closest(dragLiParent, '.' + LISTITEM) : null;
            var targetParent = null;
            var indexValue = null;
            var iconCss = [DROPNEXT, DROPIN, DROPOUT, NODROP];
            var iconClass = null;
            var node = (drop === true) ? draggedNode : dropLi;
            var index = node ? ej2_base_7.closest(node, '.e-list-parent') : null;
            var i = 0;
            var position = null;
            dragParent = (obj.dragLi && dragParent === null) ? ej2_base_7.closest(dragLiParent, '.' + ROOT) : dragParent;
            dragParent = (drop === true) ? this.dragParent : dragParent;
            if (cloneEle) {
                while (i < 4) {
                    if (ej2_base_7.select('.' + ICON, cloneEle).classList.contains(iconCss[i])) {
                        iconClass = iconCss[i];
                        break;
                    }
                    i++;
                }
            }
            if (index) {
                var dropTar = 0;
                for (i = 0; i < index.childElementCount; i++) {
                    dropTar = (drop !== true && index.children[i] === draggedNode && dropLi !== draggedNode) ? ++dropTar : dropTar;
                    if ((drop !== true && index.children[i].classList.contains('e-hover'))) {
                        indexValue = (event.offsetY >= 23) ? i + 1 : i;
                        break;
                    }
                    else if (index.children[i] === node) {
                        indexValue = (event.offsetY >= 23) ? i : i;
                        break;
                    }
                }
                indexValue = (dropTar !== 0) ? --indexValue : indexValue;
                position = (iconClass == "e-drop-in") ? "Inside" : ((event.offsetY < 7) ? "Before" : "After");
            }
            if (dropTarget) {
                if (newParent.length === 0) {
                    targetParent = null;
                }
                else if (dropTarget.classList.contains(LISTITEM)) {
                    targetParent = newParent[0];
                }
                else {
                    targetParent = newParent[1];
                }
            }
            if (dropLi === draggedNode) {
                targetParent = dropLi;
            }
            if (dropTarget && target.offsetHeight <= 33 && event.offsetY < target.offsetHeight - 10 && event.offsetY > 6) {
                targetParent = dropLi;
                if (drop !== true) {
                    level = ++level;
                    var parent_2 = targetParent ? ej2_base_7.select('.e-list-parent', targetParent) : null;
                    indexValue = (parent_2) ? parent_2.children.length : 0;
                    if (!(this.fields.dataSource instanceof ej2_data_1.DataManager) && parent_2 === null && targetParent) {
                        var parent_3 = targetParent.hasAttribute('data-uid') ?
                            this.getChildNodes(this.fields.dataSource, targetParent.getAttribute('data-uid').toString()) : null;
                        indexValue = (parent_3) ? parent_3.length : 0;
                    }
                }
            }
            return {
                cancel: false,
                clonedNode: cloneEle,
                event: event,
                draggedNode: draggedNode,
                draggedNodeData: draggedNodeData,
                droppedNode: dropLi,
                droppedNodeData: dropData,
                dropIndex: indexValue,
                dropLevel: level,
                draggedParentNode: dragParent,
                dropTarget: targetParent,
                dropIndicator: iconClass,
                target: target,
                position: position,
            };
        };
        TreeView.prototype.addFullRow = function (toAdd) {
            var len = this.liList.length;
            if (toAdd) {
                for (var i = 0; i < len; i++) {
                    this.createFullRow(this.liList[i]);
                }
            }
            else {
                for (var i = 0; i < len; i++) {
                    var rowDiv = ej2_base_7.select('.' + FULLROW, this.liList[i]);
                    ej2_base_7.detach(rowDiv);
                }
            }
        };
        TreeView.prototype.createFullRow = function (item) {
            var rowDiv = this.createElement('div', { className: FULLROW });
            item.insertBefore(rowDiv, item.childNodes[0]);
        };
        TreeView.prototype.addMultiSelect = function (toAdd) {
            if (toAdd) {
                var liEles = ej2_base_7.selectAll('.' + LISTITEM + ':not([aria-selected="true"])', this.element);
                for (var _i = 0, liEles_1 = liEles; _i < liEles_1.length; _i++) {
                    var ele = liEles_1[_i];
                    ele.setAttribute('aria-selected', 'false');
                }
            }
            else {
                var liEles = ej2_base_7.selectAll('.' + LISTITEM + '[aria-selected="false"]', this.element);
                for (var _a = 0, liEles_2 = liEles; _a < liEles_2.length; _a++) {
                    var ele = liEles_2[_a];
                    ele.removeAttribute('aria-selected');
                }
            }
        };
        TreeView.prototype.collapseByLevel = function (element, level, excludeHiddenNodes) {
            if (level > 0 && !ej2_base_8.isNullOrUndefined(element)) {
                var cNodes = this.getVisibleNodes(excludeHiddenNodes, element.childNodes);
                for (var i = 0, len = cNodes.length; i < len; i++) {
                    var liEle = cNodes[i];
                    var icon = ej2_base_7.select('.' + COLLAPSIBLE, ej2_base_7.select('.' + TEXTWRAP, liEle));
                    if (!ej2_base_8.isNullOrUndefined(icon)) {
                        this.collapseNode(liEle, icon, null);
                    }
                    this.collapseByLevel(ej2_base_7.select('.' + PARENTITEM, liEle), level - 1, excludeHiddenNodes);
                }
            }
        };
        TreeView.prototype.collapseAllNodes = function (excludeHiddenNodes) {
            var cIcons = this.getVisibleNodes(excludeHiddenNodes, ej2_base_7.selectAll('.' + COLLAPSIBLE, this.element));
            for (var i = 0, len = cIcons.length; i < len; i++) {
                var icon = cIcons[i];
                var liEle = ej2_base_7.closest(icon, '.' + LISTITEM);
                this.collapseNode(liEle, icon, null);
            }
        };
        TreeView.prototype.expandByLevel = function (element, level, excludeHiddenNodes) {
            if (level > 0 && !ej2_base_8.isNullOrUndefined(element)) {
                var eNodes = this.getVisibleNodes(excludeHiddenNodes, element.childNodes);
                for (var i = 0, len = eNodes.length; i < len; i++) {
                    var liEle = eNodes[i];
                    var icon = ej2_base_7.select('.' + EXPANDABLE, ej2_base_7.select('.' + TEXTWRAP, liEle));
                    if (!ej2_base_8.isNullOrUndefined(icon)) {
                        this.expandAction(liEle, icon, null);
                    }
                    this.expandByLevel(ej2_base_7.select('.' + PARENTITEM, liEle), level - 1, excludeHiddenNodes);
                }
            }
        };
        TreeView.prototype.expandAllNodes = function (excludeHiddenNodes) {
            var eIcons = this.getVisibleNodes(excludeHiddenNodes, ej2_base_7.selectAll('.' + EXPANDABLE, this.element));
            for (var i = 0, len = eIcons.length; i < len; i++) {
                var icon = eIcons[i];
                var liEle = ej2_base_7.closest(icon, '.' + LISTITEM);
                this.expandAction(liEle, icon, null, true);
            }
        };
        TreeView.prototype.getVisibleNodes = function (excludeHiddenNodes, nodes) {
            var vNodes = Array.prototype.slice.call(nodes);
            if (excludeHiddenNodes) {
                for (var i = 0; i < vNodes.length; i++) {
                    if (!ej2_base_7.isVisible(vNodes[i])) {
                        vNodes.splice(i, 1);
                        i--;
                    }
                }
            }
            return vNodes;
        };
        TreeView.prototype.removeNode = function (node) {
            var dragParentUl = ej2_base_7.closest(node, '.' + PARENTITEM);
            var dragParentLi = ej2_base_7.closest(dragParentUl, '.' + LISTITEM);
            if (!ej2_base_8.isNullOrUndefined(this.nodeTemplateFn)) {
                this.destroyTemplate(node);
            }
            ej2_base_7.detach(node);
            this.updateElement(dragParentUl, dragParentLi);
            this.updateInstance();
            this.removeData(node);
        };
        TreeView.prototype.updateInstance = function () {
            this.updateList();
            this.updateSelectedNodes();
            this.updateExpandedNodes();
            this.allowServerDataBinding = false;
            this.updateServerProperties("expand");
            this.updateServerProperties("check");
            this.updateServerProperties("select");
            this.allowServerDataBinding = true;
        };
        TreeView.prototype.updateServerProperties = function (action) {
            if (this.isBlazorPlatform) {
                if (action == "expand") {
                    this.isBlazorExpandedNodes = this.expandedNodes;
                    this.setProperties({ expandedNodes: [] }, true);
                }
                else if (action == "check") {
                    this.setProperties({ checkedNodes: this.checkedNodes }, true);
                }
                else {
                    this.setProperties({ selectedNodes: this.selectedNodes }, true);
                }
            }
        };
        TreeView.prototype.updateList = function () {
            this.liList = Array.prototype.slice.call(ej2_base_7.selectAll('.' + LISTITEM, this.element));
        };
        TreeView.prototype.updateSelectedNodes = function () {
            if (!this.isBlazorPlatform || (this.isBlazorPlatform && !this.initialRender)) {
                this.setProperties({ selectedNodes: [] }, true);
                var sNodes = ej2_base_7.selectAll('.' + ACTIVE, this.element);
                this.selectGivenNodes(sNodes);
            }
            else if (this.isBlazorPlatform && this.initialRender) {
                var sNodes = ej2_base_7.selectAll('.' + ACTIVE, this.element);
                for (var a = 0; a < sNodes.length; a++) {
                    var id = sNodes[a].getAttribute("data-uid").toString();
                    if (!ej2_base_8.isNullOrUndefined(id) && this.selectedNodes.indexOf(id) === -1) {
                        this.selectedNodes.push(id);
                    }
                }
            }
        };
        TreeView.prototype.updateExpandedNodes = function () {
            if (!this.isBlazorPlatform || (this.isBlazorPlatform && !this.initialRender)) {
                this.setProperties({ expandedNodes: [] }, true);
                var eNodes = ej2_base_7.selectAll('[aria-expanded="true"]', this.element);
                for (var i = 0, len = eNodes.length; i < len; i++) {
                    this.addExpand(eNodes[i]);
                }
            }
            else if (this.isBlazorPlatform && this.initialRender) {
                var eNodes = ej2_base_7.selectAll('[aria-expanded="true"]', this.element);
                for (var a = 0; a < eNodes.length; a++) {
                    var id = eNodes[a].getAttribute("data-uid").toString();
                    if (!ej2_base_8.isNullOrUndefined(id) && this.expandedNodes.indexOf(id) === -1) {
                        this.expandedNodes.push(id);
                    }
                }
            }
        };
        TreeView.prototype.removeData = function (node) {
            if (this.dataType === 1) {
                var dm = new ej2_data_1.DataManager(this.treeData);
                var id = this.getId(node);
                var data = {};
                var newId = this.isNumberTypeId ? parseFloat(id) : id;
                data[this.fields.id] = newId;
                dm.remove(this.fields.id, data);
                this.removeChildNodes(id);
            }
            else {
                var id = this.getId(node);
                this.updateChildField(this.treeData, this.fields, id, null, null, true);
            }
        };
        TreeView.prototype.removeChildNodes = function (parentId) {
            var cNodes = this.getChildGroup(this.groupedData, parentId, false);
            var childData = [];
            if (cNodes) {
                for (var i = 0, len = cNodes.length; i < len; i++) {
                    var dm = new ej2_data_1.DataManager(this.treeData);
                    var id = ej2_base_8.getValue(this.fields.id, cNodes[i]).toString();
                    var data = {};
                    var currId = this.isNumberTypeId ? parseFloat(id) : id;
                    data[this.fields.id] = currId;
                    var nodeData = dm.remove(this.fields.id, data);
                    childData.push(nodeData[0]);
                    this.removeChildNodes(id);
                }
            }
            return childData;
        };
        TreeView.prototype.doGivenAction = function (nodes, selector, toExpand) {
            for (var i = 0, len = nodes.length; i < len; i++) {
                var liEle = this.getElement(nodes[i]);
                if (ej2_base_8.isNullOrUndefined(liEle)) {
                    continue;
                }
                var icon = ej2_base_7.select('.' + selector, ej2_base_7.select('.' + TEXTWRAP, liEle));
                if (!ej2_base_8.isNullOrUndefined(icon)) {
                    toExpand ? this.expandAction(liEle, icon, null) : this.collapseNode(liEle, icon, null);
                }
            }
        };
        TreeView.prototype.addGivenNodes = function (nodes, dropLi, index, isRemote, dropEle) {
            if (nodes.length === 0) {
                return;
            }
            var sNodes = this.getSortedData(nodes);
            var level = dropLi ? parseFloat(dropLi.getAttribute('aria-level')) + 1 : 1;
            if (isRemote) {
                this.updateMapper(level);
            }
            var li = ej2_lists_1.ListBase.createListItemFromJson(this.createElement, sNodes, this.listBaseOption, level);
            var dropUl;
            if (!dropEle) {
                dropUl = dropLi ? this.expandParent(dropLi) : ej2_base_7.select('.' + PARENTITEM, this.element);
            }
            else {
                dropUl = dropEle;
            }
            var refNode = dropUl.childNodes[index];
            for (var i = 0; i < li.length; i++) {
                dropUl.insertBefore(li[i], refNode);
            }
            if (this.nodeTemplate && this.isBlazorPlatform && !this.isStringTemplate) {
                this.updateBlazorTemplate();
            }
            var id = this.getId(dropLi);
            if (this.dataType === 1) {
                this.updateField(this.treeData, this.fields, id, 'hasChildren', true);
                var refId = this.getId(refNode);
                var pos = ej2_base_8.isNullOrUndefined(refId) ? this.treeData.length : this.getDataPos(this.treeData, this.fields, refId);
                for (var j = 0; j < nodes.length; j++) {
                    if (!ej2_base_8.isNullOrUndefined(id)) {
                        var currId = this.isNumberTypeId ? parseFloat(id) : id;
                        ej2_base_8.setValue(this.fields.parentID, currId, nodes[j]);
                    }
                    this.treeData.splice(pos, 0, nodes[j]);
                    pos++;
                }
            }
            else {
                this.addChildData(this.treeData, this.fields, id, nodes, index);
            }
            this.finalizeNode(dropUl);
        };
        TreeView.prototype.updateMapper = function (level) {
            var mapper = (level === 1) ? this.fields : this.getChildFields(this.fields, level - 1, 1);
            this.updateListProp(mapper);
        };
        TreeView.prototype.updateListProp = function (mapper) {
            var prop = this.getActualProperties(mapper);
            this.listBaseOption.fields = prop;
            this.listBaseOption.fields.url = prop.hasOwnProperty('navigateUrl') ? prop.navigateUrl : 'navigateUrl';
        };
        TreeView.prototype.getDataPos = function (obj, mapper, id) {
            var pos = null;
            for (var i = 0, objlen = obj.length; i < objlen; i++) {
                var nodeId = ej2_base_8.getValue(mapper.id, obj[i]);
                if (obj[i] && nodeId && nodeId.toString() === id) {
                    return i;
                }
                else if (typeof mapper.child === 'string' && !ej2_base_8.isNullOrUndefined(ej2_base_8.getValue(mapper.child, obj[i]))) {
                    var data = ej2_base_8.getValue(mapper.child, obj[i]);
                    pos = this.getDataPos(data, this.getChildMapper(mapper), id);
                    if (pos !== null) {
                        break;
                    }
                }
                else if (this.fields.dataSource instanceof ej2_data_1.DataManager && !ej2_base_8.isNullOrUndefined(ej2_base_8.getValue('child', obj[i]))) {
                    var items = ej2_base_8.getValue('child', obj[i]);
                    pos = this.getDataPos(items, this.getChildMapper(mapper), id);
                    if (pos !== null) {
                        break;
                    }
                }
            }
            return pos;
        };
        TreeView.prototype.addChildData = function (obj, mapper, id, data, index) {
            var updated;
            if (ej2_base_8.isNullOrUndefined(id)) {
                index = ej2_base_8.isNullOrUndefined(index) ? obj.length : index;
                for (var k = 0, len = data.length; k < len; k++) {
                    obj.splice(index, 0, data[k]);
                    index++;
                }
                return updated;
            }
            for (var i = 0, objlen = obj.length; i < objlen; i++) {
                var nodeId = ej2_base_8.getValue(mapper.id, obj[i]);
                if (obj[i] && nodeId && nodeId.toString() === id) {
                    if ((typeof mapper.child === 'string' && (obj[i].hasOwnProperty(mapper.child) && obj[i][mapper.child] !== null)) ||
                        ((this.fields.dataSource instanceof ej2_data_1.DataManager && (this.fields.dataSource.adaptorName !== 'BlazorAdaptor')) && obj[i].hasOwnProperty('child'))) {
                        var key = (typeof mapper.child === 'string') ? mapper.child : 'child';
                        var childData = ej2_base_8.getValue(key, obj[i]);
                        if (ej2_base_8.isNullOrUndefined(childData)) {
                            childData = [];
                        }
                        index = ej2_base_8.isNullOrUndefined(index) ? childData.length : index;
                        for (var k = 0, len = data.length; k < len; k++) {
                            childData.splice(index, 0, data[k]);
                            index++;
                        }
                    }
                    else {
                        var key = (typeof mapper.child === 'string') ? mapper.child : 'child';
                        obj[i][key] = data;
                    }
                    return true;
                }
                else if (typeof mapper.child === 'string' && !ej2_base_8.isNullOrUndefined(ej2_base_8.getValue(mapper.child, obj[i]))) {
                    var childObj = ej2_base_8.getValue(mapper.child, obj[i]);
                    updated = this.addChildData(childObj, this.getChildMapper(mapper), id, data, index);
                    if (updated !== undefined) {
                        break;
                    }
                }
                else if ((this.fields.dataSource instanceof ej2_data_1.DataManager && (this.fields.dataSource.adaptorName !== 'BlazorAdaptor')) && !ej2_base_8.isNullOrUndefined(ej2_base_8.getValue('child', obj[i]))) {
                    var childData = ej2_base_8.getValue('child', obj[i]);
                    updated = this.addChildData(childData, this.getChildMapper(mapper), id, data, index);
                    if (updated !== undefined) {
                        break;
                    }
                }
            }
            return updated;
        };
        TreeView.prototype.doDisableAction = function (nodes) {
            var validNodes = this.nodeType(nodes);
            var validID = this.checkValidId(validNodes);
            this.validArr = [];
            for (var i = 0, len = validID.length; i < len; i++) {
                var id = validID[i][this.fields.id].toString();
                if (id && this.disableNode.indexOf(id) === -1) {
                    this.disableNode.push(id);
                }
                var liEle = this.getElement(id);
                if (liEle) {
                    liEle.setAttribute('aria-disabled', 'true');
                    ej2_base_7.addClass([liEle], DISABLE);
                }
            }
        };
        TreeView.prototype.doEnableAction = function (nodes) {
            var strNodes = this.nodeType(nodes);
            for (var i = 0, len = strNodes.length; i < len; i++) {
                var liEle = this.getElement(strNodes[i]);
                var id = strNodes[i];
                if (id && this.disableNode.indexOf(id) !== -1) {
                    this.disableNode.splice(this.disableNode.indexOf(id), 1);
                }
                if (liEle) {
                    liEle.removeAttribute('aria-disabled');
                    ej2_base_7.removeClass([liEle], DISABLE);
                }
            }
        };
        TreeView.prototype.nodeType = function (nodes) {
            var validID = [];
            for (var i = 0, len = nodes.length; i < len; i++) {
                var id = void 0;
                if (typeof nodes[i] == "string") {
                    id = (nodes[i]) ? nodes[i].toString() : null;
                }
                else if (typeof nodes[i] === "object") {
                    id = nodes[i] ? nodes[i].getAttribute("data-uid").toString() : null;
                }
                if (validID.indexOf(id) == -1) {
                    validID.push(id);
                }
            }
            return validID;
        };
        TreeView.prototype.checkValidId = function (node) {
            var _this = this;
            if (this.dataType === 1) {
                this.validArr = this.treeData.filter(function (data) {
                    return node.indexOf(data[_this.fields.id] ? data[_this.fields.id].toString() : null) !== -1;
                });
            }
            else if (this.dataType === 2) {
                for (var k = 0; k < this.treeData.length; k++) {
                    var id = this.treeData[k][this.fields.id] ? this.treeData[k][this.fields.id].toString() : null;
                    if (node.indexOf(id) !== -1) {
                        this.validArr.push(this.treeData[k]);
                    }
                    var childItems = ej2_base_8.getValue(this.fields.child.toString(), this.treeData[k]);
                    if (childItems) {
                        this.filterNestedChild(childItems, node);
                    }
                }
            }
            return this.validArr;
        };
        TreeView.prototype.filterNestedChild = function (treeData, nodes) {
            for (var k = 0; k < treeData.length; k++) {
                var id = treeData[k][this.fields.id] ? treeData[k][this.fields.id].toString() : null;
                if (nodes.indexOf(id) !== -1) {
                    this.validArr.push(treeData[k]);
                }
                var childItems = ej2_base_8.getValue(this.fields.child.toString(), treeData[k]);
                if (childItems) {
                    this.filterNestedChild(childItems, nodes);
                }
            }
        };
        TreeView.prototype.setTouchClass = function () {
            var ele = ej2_base_7.closest(this.element, '.' + BIGGER);
            this.touchClass = ej2_base_8.isNullOrUndefined(ele) ? '' : SMALL;
        };
        TreeView.prototype.updatePersistProp = function () {
            this.removeField(this.treeData, this.fields, ['selected', 'expanded']);
            var sleNodes = this.selectedNodes;
            for (var l = 0, slelen = sleNodes.length; l < slelen; l++) {
                this.updateField(this.treeData, this.fields, sleNodes[l], 'selected', true);
            }
            var enodes = this.expandedNodes;
            if (this.isBlazorPlatform) {
                enodes = this.isBlazorExpandedNodes;
            }
            for (var k = 0, nodelen = enodes.length; k < nodelen; k++) {
                this.updateField(this.treeData, this.fields, enodes[k], 'expanded', true);
            }
            if (this.showCheckBox) {
                this.removeField(this.treeData, this.fields, ['isChecked']);
                var cnodes = this.checkedNodes;
                for (var m = 0, nodelen = cnodes.length; m < nodelen; m++) {
                    this.updateField(this.treeData, this.fields, cnodes[m], 'isChecked', true);
                }
            }
        };
        TreeView.prototype.removeField = function (obj, mapper, names) {
            if (ej2_base_8.isNullOrUndefined(obj) || ej2_base_8.isNullOrUndefined(mapper)) {
                return;
            }
            for (var i = 0, objlen = obj.length; i < objlen; i++) {
                for (var j = 0; j < names.length; j++) {
                    var field = this.getMapperProp(mapper, names[j]);
                    if (!ej2_base_8.isNullOrUndefined(obj[i][field])) {
                        delete obj[i][field];
                    }
                }
                if (typeof mapper.child === 'string' && !ej2_base_8.isNullOrUndefined(ej2_base_8.getValue(mapper.child, obj[i]))) {
                    this.removeField(ej2_base_8.getValue(mapper.child, obj[i]), this.getChildMapper(mapper), names);
                }
                else if (this.fields.dataSource instanceof ej2_data_1.DataManager && !ej2_base_8.isNullOrUndefined(ej2_base_8.getValue('child', obj[i]))) {
                    this.removeField(ej2_base_8.getValue('child', obj[i]), this.getChildMapper(mapper), names);
                }
            }
        };
        TreeView.prototype.getMapperProp = function (mapper, fieldName) {
            switch (fieldName) {
                case 'selected':
                    return !ej2_base_8.isNullOrUndefined(mapper.selected) ? mapper.selected : 'selected';
                case 'expanded':
                    return !ej2_base_8.isNullOrUndefined(mapper.expanded) ? mapper.expanded : 'expanded';
                case 'isChecked':
                    return !ej2_base_8.isNullOrUndefined(mapper.isChecked) ? mapper.isChecked : 'isChecked';
                case 'hasChildren':
                    return !ej2_base_8.isNullOrUndefined(mapper.hasChildren) ? mapper.hasChildren : 'hasChildren';
                default:
                    return fieldName;
            }
        };
        TreeView.prototype.updateField = function (obj, mapper, id, key, value) {
            var childNodes;
            if (ej2_base_8.isNullOrUndefined(id)) {
                return;
            }
            else if (this.dataType === 1) {
                var newId = this.isNumberTypeId ? parseFloat(id) : id;
                var resultData = new ej2_data_1.DataManager(this.treeData).executeLocal(new ej2_data_1.Query().where(mapper.id, 'equal', newId, false));
                ej2_base_8.setValue(this.getMapperProp(mapper, key), value, resultData[0]);
            }
            else {
                this.updateChildField(obj, mapper, id, key, value);
            }
        };
        TreeView.prototype.updateChildField = function (obj, mapper, id, key, value, remove) {
            var removedData;
            if (ej2_base_8.isNullOrUndefined(obj)) {
                return removedData;
            }
            for (var i = 0, objlen = obj.length; i < objlen; i++) {
                var nodeId = ej2_base_8.getValue(mapper.id, obj[i]);
                if (obj[i] && nodeId && nodeId.toString() === id) {
                    if (remove) {
                        removedData = obj.splice(i, 1);
                    }
                    else {
                        ej2_base_8.setValue(this.getMapperProp(mapper, key), value, obj[i]);
                        removedData = [];
                    }
                    return removedData;
                }
                else if (typeof mapper.child === 'string' && !ej2_base_8.isNullOrUndefined(ej2_base_8.getValue(mapper.child, obj[i]))) {
                    var childData = ej2_base_8.getValue(mapper.child, obj[i]);
                    removedData = this.updateChildField(childData, this.getChildMapper(mapper), id, key, value, remove);
                    if (removedData !== undefined) {
                        break;
                    }
                }
                else if (this.fields.dataSource instanceof ej2_data_1.DataManager && !ej2_base_8.isNullOrUndefined(ej2_base_8.getValue('child', obj[i]))) {
                    var childItems = ej2_base_8.getValue('child', obj[i]);
                    removedData = this.updateChildField(childItems, this.getChildMapper(mapper), id, key, value, remove);
                    if (removedData !== undefined) {
                        break;
                    }
                }
            }
            return removedData;
        };
        TreeView.prototype.triggerEvent = function () {
            this.updateTemplateForBlazor();
            this.renderReactTemplates();
            var eventArgs = { data: this.treeData };
            this.trigger('dataSourceChanged', eventArgs);
        };
        TreeView.prototype.updateBlazorTemplate = function () {
            ej2_base_6.updateBlazorTemplate(this.element.id + 'nodeTemplate', 'NodeTemplate', this, false);
        };
        TreeView.prototype.clientUpdateInitial = function () {
            this.blazorInitialRender = true;
        };
        TreeView.prototype.wireInputEvents = function (inpEle) {
            ej2_base_3.EventHandler.add(inpEle, 'blur', this.inputFocusOut, this);
        };
        TreeView.prototype.wireEditingEvents = function (toBind) {
            var _this = this;
            if (toBind && !this.disabled) {
                var proxy_2 = this;
                this.touchEditObj = new ej2_base_8.Touch(this.element, {
                    tap: function (e) {
                        if (_this.isDoubleTapped(e) && e.tapCount === 2) {
                            e.originalEvent.preventDefault();
                            proxy_2.editingHandler(e.originalEvent);
                        }
                    }
                });
            }
            else {
                if (this.touchEditObj) {
                    this.touchEditObj.destroy();
                }
            }
        };
        TreeView.prototype.wireClickEvent = function (toBind) {
            if (toBind) {
                var proxy_3 = this;
                this.touchClickObj = new ej2_base_8.Touch(this.element, {
                    tap: function (e) {
                        proxy_3.clickHandler(e);
                    }
                });
            }
            else {
                if (this.touchClickObj) {
                    this.touchClickObj.destroy();
                }
            }
        };
        TreeView.prototype.wireExpandOnEvent = function (toBind) {
            var _this = this;
            if (toBind) {
                var proxy_4 = this;
                this.touchExpandObj = new ej2_base_8.Touch(this.element, {
                    tap: function (e) {
                        if ((_this.expandOnType === 'Click' || (_this.expandOnType === 'DblClick' && _this.isDoubleTapped(e) && e.tapCount === 2))
                            && e.originalEvent.which !== 3) {
                            proxy_4.expandHandler(e);
                        }
                    }
                });
            }
            else {
                if (this.touchExpandObj) {
                    this.touchExpandObj.destroy();
                }
            }
        };
        TreeView.prototype.mouseDownHandler = function (e) {
            this.mouseDownStatus = true;
            if (e.shiftKey || e.ctrlKey) {
                e.preventDefault();
            }
            if (e.ctrlKey && this.allowMultiSelection) {
                ej2_base_3.EventHandler.add(this.element, 'contextmenu', this.preventContextMenu, this);
            }
        };
        ;
        TreeView.prototype.preventContextMenu = function (e) {
            e.preventDefault();
        };
        TreeView.prototype.wireEvents = function () {
            ej2_base_3.EventHandler.add(this.element, 'mousedown', this.mouseDownHandler, this);
            this.wireClickEvent(true);
            if (this.expandOnType !== 'None') {
                this.wireExpandOnEvent(true);
            }
            ej2_base_3.EventHandler.add(this.element, 'focus', this.focusIn, this);
            ej2_base_3.EventHandler.add(this.element, 'blur', this.focusOut, this);
            ej2_base_3.EventHandler.add(this.element, 'mouseover', this.onMouseOver, this);
            ej2_base_3.EventHandler.add(this.element, 'mouseout', this.onMouseLeave, this);
            this.keyboardModule = new ej2_base_3.KeyboardEvents(this.element, {
                keyAction: this.keyActionHandler.bind(this),
                keyConfigs: this.keyConfigs,
                eventName: 'keydown',
            });
        };
        TreeView.prototype.unWireEvents = function () {
            ej2_base_3.EventHandler.remove(this.element, 'mousedown', this.mouseDownHandler);
            this.wireClickEvent(false);
            this.wireExpandOnEvent(false);
            ej2_base_3.EventHandler.remove(this.element, 'focus', this.focusIn);
            ej2_base_3.EventHandler.remove(this.element, 'blur', this.focusOut);
            ej2_base_3.EventHandler.remove(this.element, 'mouseover', this.onMouseOver);
            ej2_base_3.EventHandler.remove(this.element, 'mouseout', this.onMouseLeave);
            if (!this.disabled) {
                this.keyboardModule.destroy();
            }
        };
        TreeView.prototype.parents = function (element, selector) {
            var matched = [];
            var el = element.parentNode;
            while (!ej2_base_8.isNullOrUndefined(el)) {
                if (ej2_base_7.matches(el, selector)) {
                    matched.push(el);
                }
                el = el.parentNode;
            }
            return matched;
        };
        TreeView.prototype.isDoubleTapped = function (e) {
            var target = e.originalEvent.target;
            var secondTap;
            if (target && e.tapCount) {
                if (e.tapCount === 1) {
                    this.firstTap = ej2_base_7.closest(target, '.' + LISTITEM);
                }
                else if (e.tapCount === 2) {
                    secondTap = ej2_base_7.closest(target, '.' + LISTITEM);
                }
            }
            return (this.firstTap === secondTap);
        };
        TreeView.prototype.isDescendant = function (parent, child) {
            var node = child.parentNode;
            while (!ej2_base_8.isNullOrUndefined(node)) {
                if (node === parent) {
                    return true;
                }
                node = node.parentNode;
            }
            return false;
        };
        TreeView.prototype.showSpinner = function (element) {
            ej2_base_7.addClass([element], LOAD);
            ej2_popups_1.createSpinner({
                target: element,
                width: ej2_base_1.Browser.isDevice ? 16 : 14
            }, this.createElement);
            ej2_popups_1.showSpinner(element);
        };
        TreeView.prototype.hideSpinner = function (element) {
            ej2_popups_1.hideSpinner(element);
            element.innerHTML = '';
            ej2_base_7.removeClass([element], LOAD);
        };
        TreeView.prototype.setCheckedNodes = function (nodes) {
            nodes = JSON.parse(JSON.stringify(nodes));
            this.uncheckAll(this.checkedNodes);
            this.setIndeterminate(nodes);
            if (nodes.length > 0) {
                this.checkAll(nodes);
            }
        };
        TreeView.prototype.setValidCheckedNode = function (node) {
            if (this.dataType === 1) {
                var mapper = this.fields;
                var resultData = new ej2_data_1.DataManager(this.treeData).executeLocal(new ej2_data_1.Query().where(mapper.id, 'equal', node, true));
                if (resultData[0]) {
                    this.setChildCheckState(resultData, node, resultData[0]);
                    if (this.autoCheck) {
                        var parent_4 = resultData[0][this.fields.parentID] ? resultData[0][this.fields.parentID].toString() : null;
                        var childNodes = this.getChildNodes(this.treeData, parent_4);
                        var count = 0;
                        for (var len = 0; len < childNodes.length; len++) {
                            var childId = childNodes[len][this.fields.id].toString();
                            if (this.checkedNodes.indexOf(childId) !== -1) {
                                count++;
                            }
                        }
                        if (count === childNodes.length && this.checkedNodes.indexOf(parent_4) === -1 && parent_4) {
                            this.checkedNodes.push(parent_4);
                        }
                    }
                }
            }
            else if (this.dataType === 2) {
                for (var a = 0; a < this.treeData.length; a++) {
                    var index = this.treeData[a][this.fields.id] ? this.treeData[a][this.fields.id].toString() : '';
                    if (index === node && this.checkedNodes.indexOf(node) === -1) {
                        this.checkedNodes.push(node);
                        break;
                    }
                    var childItems = ej2_base_8.getValue(this.fields.child.toString(), this.treeData[a]);
                    if (childItems) {
                        this.setChildCheckState(childItems, node, this.treeData[a]);
                    }
                }
            }
        };
        TreeView.prototype.setChildCheckState = function (childItems, node, treeData) {
            var checkedParent;
            var count = 0;
            if (this.dataType === 1) {
                if (treeData) {
                    checkedParent = treeData[this.fields.id] ? treeData[this.fields.id].toString() : null;
                }
                for (var index = 0; index < childItems.length; index++) {
                    var checkNode = childItems[index][this.fields.id] ? childItems[index][this.fields.id].toString() : null;
                    if (treeData && checkedParent && this.autoCheck) {
                        if (this.checkedNodes.indexOf(checkedParent) !== -1 && this.checkedNodes.indexOf(checkNode) === -1) {
                            this.checkedNodes.push(checkNode);
                        }
                    }
                    if (checkNode === node && this.checkedNodes.indexOf(node) === -1) {
                        this.checkedNodes.push(node);
                    }
                    var subChildItems = this.getChildNodes(this.treeData, checkNode);
                    if (subChildItems) {
                        this.setChildCheckState(subChildItems, node, treeData);
                    }
                }
            }
            else {
                if (treeData) {
                    checkedParent = treeData[this.fields.id] ? treeData[this.fields.id].toString() : '';
                }
                for (var index = 0; index < childItems.length; index++) {
                    var checkedChild = childItems[index][this.fields.id] ? childItems[index][this.fields.id].toString() : '';
                    if (treeData && checkedParent && this.autoCheck) {
                        if (this.checkedNodes.indexOf(checkedParent) !== -1 && this.checkedNodes.indexOf(checkedChild) === -1) {
                            this.checkedNodes.push(checkedChild);
                        }
                    }
                    if (checkedChild === node && this.checkedNodes.indexOf(node) === -1) {
                        this.checkedNodes.push(node);
                    }
                    var subChildItems = ej2_base_8.getValue(this.fields.child.toString(), childItems[index]);
                    if (subChildItems) {
                        this.setChildCheckState(subChildItems, node, childItems[index]);
                    }
                    if (this.checkedNodes.indexOf(checkedChild) !== -1 && this.autoCheck) {
                        count++;
                    }
                    if (count === childItems.length && this.checkedNodes.indexOf(checkedParent) === -1 && this.autoCheck) {
                        this.checkedNodes.push(checkedParent);
                    }
                }
            }
        };
        TreeView.prototype.setIndeterminate = function (nodes) {
            for (var i = 0; i < nodes.length; i++) {
                this.setValidCheckedNode(nodes[i]);
            }
        };
        TreeView.prototype.updatePosition = function (id, newData, isRefreshChild, childValue) {
            if (this.dataType === 1) {
                var pos = this.getDataPos(this.treeData, this.fields, id);
                this.treeData.splice(pos, 1, newData);
                if (isRefreshChild) {
                    this.removeChildNodes(id);
                    for (var j = 0; j < childValue.length; j++) {
                        this.treeData.splice(pos, 0, childValue[j]);
                        pos++;
                    }
                }
                this.groupedData = this.getGroupedData(this.treeData, this.fields.parentID);
            }
            else {
                this.updateChildPosition(this.treeData, this.fields, id, [newData], undefined);
            }
        };
        TreeView.prototype.updateChildPosition = function (treeData, mapper, currID, newData, index) {
            var found;
            for (var i = 0, objlen = treeData.length; i < objlen; i++) {
                var nodeId = ej2_base_8.getValue(mapper.id, treeData[i]);
                if (treeData[i] && nodeId && nodeId.toString() === currID) {
                    treeData[i] = newData[0];
                    return true;
                }
                else if (typeof mapper.child === 'string' && !ej2_base_8.isNullOrUndefined(ej2_base_8.getValue(mapper.child, treeData[i]))) {
                    var childObj = ej2_base_8.getValue(mapper.child, treeData[i]);
                    found = this.updateChildPosition(childObj, this.getChildMapper(mapper), currID, newData, index);
                    if (found !== undefined) {
                        break;
                    }
                }
                else if (this.fields.dataSource instanceof ej2_data_1.DataManager && !ej2_base_8.isNullOrUndefined(ej2_base_8.getValue('child', treeData[i]))) {
                    var childData = ej2_base_8.getValue('child', treeData[i]);
                    found = this.updateChildPosition(childData, this.getChildMapper(mapper), currID, newData, index);
                    if (found !== undefined) {
                        break;
                    }
                }
            }
            return found;
        };
        TreeView.prototype.dynamicState = function () {
            this.setDragAndDrop(this.allowDragAndDrop);
            this.wireEditingEvents(this.allowEditing);
            if (!this.disabled) {
                this.wireEvents();
                this.setRipple();
            }
            else {
                this.unWireEvents();
                this.rippleFn();
                this.rippleIconFn();
            }
        };
        TreeView.prototype.crudOperation = function (operation, nodes, target, newText, newNode, index, prevent) {
            var _this = this;
            var data = this.fields.dataSource;
            var matchedArr = [];
            var query = this.getQuery(this.fields);
            var key = this.fields.id;
            var crud;
            var changes = {
                addedRecords: [],
                deletedRecords: [],
                changedRecords: []
            };
            var nodesID = [];
            if (nodes) {
                nodesID = this.nodeType(nodes);
            }
            else if (target) {
                if (typeof target == "string") {
                    nodesID[0] = target.toString();
                }
                else if (typeof target === "object") {
                    nodesID[0] = target.getAttribute("data-uid").toString();
                }
            }
            for (var i = 0, len = nodesID.length; i < len; i++) {
                var liEle = this.getElement(nodesID[i]);
                if (ej2_base_1.isNullOrUndefined(liEle)) {
                    continue;
                }
                var removedData = this.getNodeObject(nodesID[i]);
                matchedArr.push(removedData);
            }
            switch (operation) {
                case 'delete':
                    if (nodes.length == 1) {
                        crud = data.remove(key, matchedArr[0], query.fromTable, query);
                    }
                    else {
                        changes.deletedRecords = matchedArr;
                        crud = data.saveChanges(changes, key, query.fromTable, query);
                    }
                    crud.then(function (e) { return _this.deleteSuccess(nodesID); })
                        .catch(function (e) { return _this.dmFailure(e); });
                    break;
                case 'update':
                    matchedArr[0][this.fields.text] = newText;
                    crud = data.update(key, matchedArr[0], query.fromTable, query);
                    crud.then(function (e) { return _this.editSucess(target, newText, prevent); })
                        .catch(function (e) { return _this.dmFailure(e, target, prevent); });
                    break;
                case 'insert':
                    if (newNode.length == 1) {
                        crud = data.insert(newNode[0], query.fromTable, query);
                    }
                    else {
                        var arr = [];
                        for (var i = 0, len = newNode.length; i < len; i++) {
                            arr.push(newNode[i]);
                        }
                        changes.addedRecords = arr;
                        crud = data.saveChanges(changes, key, query.fromTable, query);
                    }
                    crud.then(function (e) {
                        var dropLi = _this.getElement(target);
                        _this.addSuccess(newNode, dropLi, index);
                        _this.preventExpand = false;
                    }).catch(function (e) { return _this.dmFailure(e); });
                    break;
            }
        };
        TreeView.prototype.deleteSuccess = function (nodes) {
            for (var i = 0, len = nodes.length; i < len; i++) {
                var liEle = this.getElement(nodes[i]);
                if (ej2_base_8.isNullOrUndefined(liEle)) {
                    continue;
                }
                this.removeNode(liEle);
            }
            if (this.dataType === 1) {
                this.groupedData = this.getGroupedData(this.treeData, this.fields.parentID);
            }
            this.triggerEvent();
        };
        TreeView.prototype.editSucess = function (target, newText, prevent) {
            var liEle = this.getElement(target);
            var txtEle = ej2_base_7.select('.' + LISTTEXT, liEle);
            this.appendNewText(liEle, txtEle, newText, prevent);
        };
        TreeView.prototype.addSuccess = function (nodes, dropLi, index) {
            var dropUl;
            var icon = dropLi ? dropLi.querySelector('.' + ICON) : null;
            var proxy = this;
            if (dropLi && icon && icon.classList.contains(EXPANDABLE) &&
                dropLi.querySelector('.' + PARENTITEM) === null) {
                proxy.renderChildNodes(dropLi, null, function () {
                    dropUl = dropLi.querySelector('.' + PARENTITEM);
                    proxy.addGivenNodes(nodes, dropLi, index, true, dropUl);
                    proxy.triggerEvent();
                });
            }
            else {
                this.addGivenNodes(nodes, dropLi, index, true);
                this.triggerEvent();
            }
        };
        TreeView.prototype.dmFailure = function (e, target, prevent) {
            if (target) {
                this.updatePreviousText(target, prevent);
            }
            this.trigger('actionFailure', { error: e });
        };
        TreeView.prototype.updatePreviousText = function (target, prevent) {
            var liEle = this.getElement(target);
            var txtEle = ej2_base_7.select('.' + LISTTEXT, liEle);
            this.updateText(liEle, txtEle, this.oldText, prevent);
        };
        TreeView.prototype.onPropertyChanged = function (newProp, oldProp) {
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                var prop = _a[_i];
                switch (prop) {
                    case 'allowDragAndDrop':
                        this.setDragAndDrop(this.allowDragAndDrop);
                        break;
                    case 'dragArea':
                        if (this.allowDragAndDrop) {
                            this.dragObj.dragArea = this.dragArea;
                        }
                        break;
                    case 'allowEditing':
                        this.wireEditingEvents(this.allowEditing);
                        break;
                    case 'allowMultiSelection':
                        if (this.selectedNodes.length > 1) {
                            var sNode = this.getElement(this.selectedNodes[0]);
                            this.isLoaded = false;
                            this.removeSelectAll();
                            this.selectNode(sNode, null);
                            this.isLoaded = true;
                        }
                        this.setMultiSelect(this.allowMultiSelection);
                        this.addMultiSelect(this.allowMultiSelection);
                        break;
                    case 'checkedNodes':
                        if (this.showCheckBox) {
                            this.checkedNodes = oldProp.checkedNodes;
                            this.setCheckedNodes(newProp.checkedNodes);
                        }
                        break;
                    case 'autoCheck':
                        if (this.showCheckBox) {
                            this.autoCheck = newProp.autoCheck;
                            this.ensureIndeterminate();
                        }
                        break;
                    case 'cssClass':
                        this.setCssClass(oldProp.cssClass, newProp.cssClass);
                        break;
                    case 'enableRtl':
                        this.setEnableRtl();
                        break;
                    case 'expandedNodes':
                        this.isAnimate = false;
                        if (!this.isBlazorPlatform) {
                            this.setProperties({ expandedNodes: [] }, true);
                        }
                        this.collapseAll();
                        this.isInitalExpand = true;
                        if (!this.isBlazorPlatform) {
                            this.setProperties({ expandedNodes: ej2_base_8.isNullOrUndefined(newProp.expandedNodes) ? [] : newProp.expandedNodes }, true);
                        }
                        this.doExpandAction();
                        this.isInitalExpand = false;
                        this.isAnimate = true;
                        break;
                    case 'expandOn':
                        this.wireExpandOnEvent(false);
                        this.setExpandOnType();
                        if (this.expandOnType !== 'None' && !this.disabled) {
                            this.wireExpandOnEvent(true);
                        }
                        break;
                    case 'disabled':
                        this.setDisabledMode();
                        this.dynamicState();
                        break;
                    case 'fields':
                        this.isAnimate = false;
                        this.isFieldChange = true;
                        this.initialRender = true;
                        if (!this.blazorInitialRender) {
                            this.reRenderNodes();
                        }
                        this.blazorInitialRender = false;
                        this.initialRender = false;
                        this.isAnimate = true;
                        this.isFieldChange = false;
                        break;
                    case 'fullRowSelect':
                        this.setFullRow(this.fullRowSelect);
                        this.addFullRow(this.fullRowSelect);
                        break;
                    case 'loadOnDemand':
                        if (this.loadOnDemand === false && !this.onLoaded) {
                            var nodes = this.element.querySelectorAll('li');
                            var i = 0;
                            while (i < nodes.length) {
                                if (nodes[i].getAttribute('aria-expanded') !== 'true') {
                                    this.renderChildNodes(nodes[i], true, null, true);
                                }
                                i++;
                            }
                            this.onLoaded = true;
                        }
                        break;
                    case 'nodeTemplate':
                        this.hasTemplate = false;
                        this.nodeTemplateFn = this.templateComplier(this.nodeTemplate);
                        this.reRenderNodes();
                        break;
                    case 'selectedNodes':
                        this.removeSelectAll();
                        this.setProperties({ selectedNodes: newProp.selectedNodes }, true);
                        this.doSelectionAction();
                        break;
                    case 'showCheckBox':
                        this.reRenderNodes();
                        break;
                    case 'sortOrder':
                        this.reRenderNodes();
                        break;
                    case 'fullRowNavigable':
                        this.setProperties({ fullRowNavigable: newProp.fullRowNavigable }, true);
                        this.listBaseOption.itemNavigable = newProp.fullRowNavigable;
                        this.reRenderNodes();
                        break;
                }
            }
        };
        TreeView.prototype.destroy = function () {
            ej2_base_6.resetBlazorTemplate(this.element.id + 'nodeTemplate', 'NodeTemplate');
            this.clearTemplate();
            this.element.removeAttribute('aria-activedescendant');
            this.element.removeAttribute('tabindex');
            this.unWireEvents();
            this.wireEditingEvents(false);
            if (!this.disabled) {
                this.rippleFn();
                this.rippleIconFn();
            }
            this.setCssClass(this.cssClass, null);
            this.setDragAndDrop(false);
            this.setFullRow(false);
            if (this.isBlazorPlatform) {
                this.ulElement = this.element.querySelector('.e-list-parent.e-ul');
            }
            if (this.ulElement && this.ulElement.parentElement) {
                this.ulElement.parentElement.removeChild(this.ulElement);
            }
            if (!this.isBlazorPlatform) {
                _super.prototype.destroy.call(this);
            }
        };
        TreeView.prototype.addNodes = function (nodes, target, index, preventTargetExpand) {
            if (ej2_base_8.isNullOrUndefined(nodes)) {
                return;
            }
            nodes = JSON.parse(JSON.stringify(nodes));
            var dropLi = this.getElement(target);
            this.preventExpand = preventTargetExpand;
            if (this.fields.dataSource instanceof ej2_data_1.DataManager && (this.fields.dataSource.adaptorName !== 'BlazorAdaptor')) {
                if (!this.isOffline) {
                    this.crudOperation('insert', null, target, null, nodes, index, this.preventExpand);
                }
                else {
                    this.addSuccess(nodes, dropLi, index);
                }
            }
            else if (this.dataType === 2) {
                this.addGivenNodes(nodes, dropLi, index);
            }
            else {
                if (dropLi) {
                    this.addGivenNodes(nodes, dropLi, index);
                }
                else {
                    nodes = this.getSortedData(nodes);
                    for (var i = 0; i < nodes.length; i++) {
                        var pid = ej2_base_8.getValue(this.fields.parentID, nodes[i]);
                        dropLi = pid ? this.getElement(pid.toString()) : pid;
                        this.addGivenNodes([nodes[i]], dropLi, index);
                    }
                }
                this.groupedData = this.getGroupedData(this.treeData, this.fields.parentID);
            }
            this.updateCheckedStateFromDS();
            if (this.showCheckBox && dropLi) {
                this.ensureParentCheckState(dropLi);
            }
            if ((this.fields.dataSource instanceof ej2_data_1.DataManager === false) || (this.fields.dataSource instanceof ej2_data_1.DataManager) && (this.fields.dataSource.adaptorName === 'BlazorAdaptor')) {
                this.preventExpand = false;
                this.triggerEvent();
            }
        };
        TreeView.prototype.beginEdit = function (node) {
            var ele = this.getElement(node);
            if (ej2_base_8.isNullOrUndefined(ele) || this.disabled) {
                return;
            }
            this.createTextbox(ele, null);
        };
        TreeView.prototype.checkAll = function (nodes) {
            if (this.showCheckBox) {
                this.doCheckBoxAction(nodes, true);
            }
        };
        TreeView.prototype.collapseAll = function (nodes, level, excludeHiddenNodes) {
            if (!ej2_base_8.isNullOrUndefined(nodes)) {
                this.doGivenAction(nodes, COLLAPSIBLE, false);
            }
            else {
                if (level > 0) {
                    this.collapseByLevel(ej2_base_7.select('.' + PARENTITEM, this.element), level, excludeHiddenNodes);
                }
                else {
                    this.collapseAllNodes(excludeHiddenNodes);
                }
            }
        };
        TreeView.prototype.disableNodes = function (nodes) {
            if (!ej2_base_8.isNullOrUndefined(nodes)) {
                this.doDisableAction(nodes);
            }
        };
        TreeView.prototype.enableNodes = function (nodes) {
            if (!ej2_base_8.isNullOrUndefined(nodes)) {
                this.doEnableAction(nodes);
            }
        };
        TreeView.prototype.ensureVisible = function (node) {
            var liEle = this.getElement(node);
            if (ej2_base_8.isNullOrUndefined(liEle)) {
                return;
            }
            var parents = this.parents(liEle, '.' + LISTITEM);
            this.expandAll(parents);
            setTimeout(function () { liEle.scrollIntoView(true); }, 450);
        };
        TreeView.prototype.expandAll = function (nodes, level, excludeHiddenNodes) {
            if (!ej2_base_8.isNullOrUndefined(nodes)) {
                this.doGivenAction(nodes, EXPANDABLE, true);
            }
            else {
                if (level > 0) {
                    this.expandByLevel(ej2_base_7.select('.' + PARENTITEM, this.element), level, excludeHiddenNodes);
                }
                else {
                    this.expandAllNodes(excludeHiddenNodes);
                }
            }
        };
        TreeView.prototype.getAllCheckedNodes = function () {
            var checkNodes = this.checkedNodes;
            return checkNodes;
        };
        TreeView.prototype.getDisabledNodes = function () {
            var disabledNodes = this.disableNode;
            return disabledNodes;
        };
        TreeView.prototype.getNode = function (node) {
            var ele = this.getElement(node);
            return this.getNodeData(ele, true);
        };
        TreeView.prototype.getTreeData = function (node) {
            var id = this.getId(node);
            this.updatePersistProp();
            if (ej2_base_8.isNullOrUndefined(id)) {
                return this.treeData;
            }
            else {
                var data = this.getNodeObject(id);
                return ej2_base_8.isNullOrUndefined(data) ? [] : [data];
            }
        };
        TreeView.prototype.moveNodes = function (sourceNodes, target, index, preventTargetExpand) {
            var dropLi = this.getElement(target);
            if (ej2_base_8.isNullOrUndefined(dropLi)) {
                return;
            }
            for (var i = 0; i < sourceNodes.length; i++) {
                var dragLi = this.getElement(sourceNodes[i]);
                if (ej2_base_8.isNullOrUndefined(dragLi) || dropLi.isSameNode(dragLi) || this.isDescendant(dragLi, dropLi)) {
                    continue;
                }
                this.preventExpand = preventTargetExpand;
                this.dropAsChildNode(dragLi, dropLi, this, index);
            }
            if (this.fields.dataSource instanceof ej2_data_1.DataManager === false) {
                this.preventExpand = false;
            }
            this.triggerEvent();
        };
        TreeView.prototype.refreshNode = function (target, newData) {
            if (ej2_base_8.isNullOrUndefined(target) || ej2_base_8.isNullOrUndefined(newData)) {
                return;
            }
            var id;
            var isRefreshChild = false;
            if (this.dataType == 1 && newData.length > 1) {
                isRefreshChild = true;
            }
            else if (this.dataType == 2 && newData.length === 1) {
                var updatedChildValue = ej2_base_8.getValue(this.fields.child.toString(), newData[0]);
                if (!ej2_base_8.isNullOrUndefined(updatedChildValue)) {
                    isRefreshChild = true;
                }
            }
            var liEle = this.getElement(target);
            id = liEle ? liEle.getAttribute('data-uid') : ((target) ? target.toString() : null);
            this.refreshData = this.getNodeObject(id);
            newData = JSON.parse(JSON.stringify(newData));
            var newNodeData;
            var parentData;
            if (this.dataType == 1 && isRefreshChild) {
                for (var k = 0; k < newData.length; k++) {
                    if (ej2_base_8.isNullOrUndefined(newData[k][this.fields.parentID])) {
                        parentData = newData[k];
                        newData.splice(k, 1);
                        break;
                    }
                }
                newNodeData = ej2_base_8.extend({}, this.refreshData, parentData);
            }
            else {
                newNodeData = ej2_base_8.extend({}, this.refreshData, newData[0]);
            }
            if (ej2_base_8.isNullOrUndefined(liEle)) {
                this.updatePosition(id, newNodeData, isRefreshChild, newData);
                return;
            }
            this.isRefreshed = true;
            var level = parseFloat(liEle.getAttribute('aria-level'));
            var newliEle = ej2_lists_1.ListBase.createListItemFromJson(this.createElement, [newNodeData], this.listBaseOption, level);
            var ul = ej2_base_7.select('.' + PARENTITEM, liEle);
            var childItems = ej2_base_8.getValue(this.fields.child.toString(), newNodeData);
            if ((isRefreshChild && ul) || (isRefreshChild && !ej2_base_8.isNullOrUndefined(childItems))) {
                var parentEle = liEle.parentElement;
                var index = Array.prototype.indexOf.call(parentEle.childNodes, liEle);
                ej2_base_4.remove(liEle);
                parentEle.insertBefore(newliEle[0], parentEle.childNodes[index]);
                this.updatePosition(id, newNodeData, isRefreshChild, newData);
                if (isRefreshChild && ul) {
                    this.expandAll([id]);
                }
            }
            else {
                var txtEle = ej2_base_7.select('.' + TEXTWRAP, liEle);
                var newTextEle = ej2_base_7.select('.' + TEXTWRAP, newliEle[0]);
                var icon = ej2_base_7.select('div.' + ICON, txtEle);
                var newIcon = ej2_base_7.select('div.' + ICON, newTextEle);
                if (icon && newIcon) {
                    if (newIcon.classList.contains(EXPANDABLE) && icon.classList.contains(COLLAPSIBLE)) {
                        ej2_base_7.removeClass([newIcon], EXPANDABLE);
                        ej2_base_7.addClass([newIcon], COLLAPSIBLE);
                    }
                    else if (newIcon.classList.contains(COLLAPSIBLE) && icon.classList.contains(EXPANDABLE)) {
                        ej2_base_7.removeClass([newIcon], COLLAPSIBLE);
                        ej2_base_7.addClass([newIcon], EXPANDABLE);
                    }
                    else if (icon.classList.contains('interaction')) {
                        ej2_base_7.addClass([newIcon], 'interaction');
                    }
                }
                ej2_base_4.remove(txtEle);
                var fullEle = ej2_base_7.select('.' + FULLROW, liEle);
                fullEle.parentNode.insertBefore(newTextEle, fullEle.nextSibling);
                this.updatePosition(id, newNodeData, isRefreshChild, newData);
            }
            liEle = this.getElement(target);
            if (newNodeData[this.fields.tooltip]) {
                liEle.setAttribute("title", newNodeData[this.fields.tooltip]);
            }
            if (newNodeData.hasOwnProperty(this.fields.htmlAttributes) && newNodeData[this.fields.htmlAttributes]) {
                var attr = {};
                ej2_base_8.merge(attr, newNodeData[this.fields.htmlAttributes]);
                if (attr.class) {
                    ej2_base_7.addClass([liEle], attr.class.split(' '));
                    delete attr.class;
                }
                else {
                    ej2_base_8.attributes(liEle, attr);
                }
            }
            if (this.selectedNodes.indexOf(id) !== -1) {
                liEle.setAttribute('aria-selected', 'true');
                ej2_base_7.addClass([liEle], ACTIVE);
            }
            this.isRefreshed = false;
            this.triggerEvent();
        };
        TreeView.prototype.removeNodes = function (nodes) {
            if (!ej2_base_8.isNullOrUndefined(nodes)) {
                if (this.fields.dataSource instanceof ej2_data_1.DataManager && !this.isOffline && (this.fields.dataSource.adaptorName !== 'BlazorAdaptor')) {
                    this.crudOperation('delete', nodes);
                }
                else {
                    this.deleteSuccess(nodes);
                }
            }
        };
        TreeView.prototype.updateNode = function (target, newText) {
            var _this = this;
            if (ej2_base_8.isNullOrUndefined(target) || ej2_base_8.isNullOrUndefined(newText) || !this.allowEditing) {
                return;
            }
            var liEle = this.getElement(target);
            if (ej2_base_8.isNullOrUndefined(liEle)) {
                return;
            }
            var txtEle = ej2_base_7.select('.' + LISTTEXT, liEle);
            this.updateOldText(liEle);
            var eventArgs = this.getEditEvent(liEle, null, null);
            this.trigger('nodeEditing', eventArgs, function (observedArgs) {
                if (!observedArgs.cancel) {
                    if (_this.fields.dataSource instanceof ej2_data_1.DataManager && !_this.isOffline && (_this.fields.dataSource.adaptorName !== 'BlazorAdaptor')) {
                        _this.crudOperation('update', null, target, newText, null, null, false);
                    }
                    else {
                        _this.appendNewText(liEle, txtEle, newText, false);
                    }
                }
            });
        };
        TreeView.prototype.uncheckAll = function (nodes) {
            if (this.showCheckBox) {
                this.doCheckBoxAction(nodes, false);
            }
        };
        var TreeView_1;
        __decorate([
            ej2_base_2.Property(false)
        ], TreeView.prototype, "allowDragAndDrop", void 0);
        __decorate([
            ej2_base_2.Property(false)
        ], TreeView.prototype, "allowEditing", void 0);
        __decorate([
            ej2_base_2.Property(false)
        ], TreeView.prototype, "allowMultiSelection", void 0);
        __decorate([
            ej2_base_2.Complex({}, NodeAnimationSettings)
        ], TreeView.prototype, "animation", void 0);
        __decorate([
            ej2_base_2.Property()
        ], TreeView.prototype, "checkedNodes", void 0);
        __decorate([
            ej2_base_2.Property('')
        ], TreeView.prototype, "cssClass", void 0);
        __decorate([
            ej2_base_2.Property(false)
        ], TreeView.prototype, "disabled", void 0);
        __decorate([
            ej2_base_2.Property(null)
        ], TreeView.prototype, "dragArea", void 0);
        __decorate([
            ej2_base_2.Property(false)
        ], TreeView.prototype, "enableHtmlSanitizer", void 0);
        __decorate([
            ej2_base_2.Property(false)
        ], TreeView.prototype, "enablePersistence", void 0);
        __decorate([
            ej2_base_2.Property()
        ], TreeView.prototype, "expandedNodes", void 0);
        __decorate([
            ej2_base_2.Property('Auto')
        ], TreeView.prototype, "expandOn", void 0);
        __decorate([
            ej2_base_2.Complex({}, FieldsSettings)
        ], TreeView.prototype, "fields", void 0);
        __decorate([
            ej2_base_2.Property(true)
        ], TreeView.prototype, "fullRowSelect", void 0);
        __decorate([
            ej2_base_2.Property(true)
        ], TreeView.prototype, "loadOnDemand", void 0);
        __decorate([
            ej2_base_2.Property()
        ], TreeView.prototype, "locale", void 0);
        __decorate([
            ej2_base_2.Property()
        ], TreeView.prototype, "nodeTemplate", void 0);
        __decorate([
            ej2_base_2.Property()
        ], TreeView.prototype, "selectedNodes", void 0);
        __decorate([
            ej2_base_2.Property('None')
        ], TreeView.prototype, "sortOrder", void 0);
        __decorate([
            ej2_base_2.Property(false)
        ], TreeView.prototype, "showCheckBox", void 0);
        __decorate([
            ej2_base_2.Property(true)
        ], TreeView.prototype, "autoCheck", void 0);
        __decorate([
            ej2_base_2.Property(false)
        ], TreeView.prototype, "fullRowNavigable", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "actionFailure", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "created", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "dataBound", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "dataSourceChanged", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "drawNode", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "destroyed", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "keyPress", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "nodeChecked", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "nodeChecking", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "nodeClicked", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "nodeCollapsed", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "nodeCollapsing", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "nodeDragging", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "nodeDragStart", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "nodeDragStop", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "nodeDropped", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "nodeEdited", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "nodeEditing", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "nodeExpanded", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "nodeExpanding", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "nodeSelected", void 0);
        __decorate([
            ej2_base_3.Event()
        ], TreeView.prototype, "nodeSelecting", void 0);
        TreeView = TreeView_1 = __decorate([
            ej2_base_2.NotifyPropertyChanges
        ], TreeView);
        return TreeView;
    }(ej2_base_1.Component));
    exports.TreeView = TreeView;
});
