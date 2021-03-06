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
define(["require", "exports", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "../toolbar/toolbar"], function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4, ej2_base_5, ej2_base_6, ej2_base_7, toolbar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CLS_TAB = 'e-tab';
    var CLS_HEADER = 'e-tab-header';
    var CLS_BLA_TEM = 'blazor-template';
    var CLS_CONTENT = 'e-content';
    var CLS_NEST = 'e-nested';
    var CLS_ITEMS = 'e-items';
    var CLS_ITEM = 'e-item';
    var CLS_TEMPLATE = 'e-template';
    var CLS_RTL = 'e-rtl';
    var CLS_ACTIVE = 'e-active';
    var CLS_DISABLE = 'e-disable';
    var CLS_HIDDEN = 'e-hidden';
    var CLS_FOCUS = 'e-focused';
    var CLS_ICONS = 'e-icons';
    var CLS_ICON = 'e-icon';
    var CLS_ICON_TAB = 'e-icon-tab';
    var CLS_ICON_CLOSE = 'e-close-icon';
    var CLS_CLOSE_SHOW = 'e-close-show';
    var CLS_TEXT = 'e-tab-text';
    var CLS_INDICATOR = 'e-indicator';
    var CLS_WRAP = 'e-tab-wrap';
    var CLS_TEXT_WRAP = 'e-text-wrap';
    var CLS_TAB_ICON = 'e-tab-icon';
    var CLS_TB_ITEMS = 'e-toolbar-items';
    var CLS_TB_ITEM = 'e-toolbar-item';
    var CLS_TB_POP = 'e-toolbar-pop';
    var CLS_TB_POPUP = 'e-toolbar-popup';
    var CLS_HOR_NAV = 'e-hor-nav';
    var CLS_POPUP_OPEN = 'e-popup-open';
    var CLS_POPUP_CLOSE = 'e-popup-close';
    var CLS_PROGRESS = 'e-progress';
    var CLS_IGNORE = 'e-ignore';
    var CLS_OVERLAY = 'e-overlay';
    var CLS_HSCRCNT = 'e-hscroll-content';
    var CLS_VSCRCNT = 'e-vscroll-content';
    var CLS_VTAB = 'e-vertical-tab';
    var CLS_VERTICAL = 'e-vertical';
    var CLS_VLEFT = 'e-vertical-left';
    var CLS_VRIGHT = 'e-vertical-right';
    var CLS_HBOTTOM = 'e-horizontal-bottom';
    var CLS_FILL = 'e-fill-mode';
    var TABITEMPREFIX = 'tabitem_';
    var TabActionSettings = (function (_super) {
        __extends(TabActionSettings, _super);
        function TabActionSettings() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            ej2_base_1.Property('SlideLeftIn')
        ], TabActionSettings.prototype, "effect", void 0);
        __decorate([
            ej2_base_1.Property(600)
        ], TabActionSettings.prototype, "duration", void 0);
        __decorate([
            ej2_base_1.Property('ease')
        ], TabActionSettings.prototype, "easing", void 0);
        return TabActionSettings;
    }(ej2_base_2.ChildProperty));
    exports.TabActionSettings = TabActionSettings;
    var TabAnimationSettings = (function (_super) {
        __extends(TabAnimationSettings, _super);
        function TabAnimationSettings() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            ej2_base_1.Complex({ effect: 'SlideLeftIn', duration: 600, easing: 'ease' }, TabActionSettings)
        ], TabAnimationSettings.prototype, "previous", void 0);
        __decorate([
            ej2_base_1.Complex({ effect: 'SlideRightIn', duration: 600, easing: 'ease' }, TabActionSettings)
        ], TabAnimationSettings.prototype, "next", void 0);
        return TabAnimationSettings;
    }(ej2_base_2.ChildProperty));
    exports.TabAnimationSettings = TabAnimationSettings;
    var Header = (function (_super) {
        __extends(Header, _super);
        function Header() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            ej2_base_1.Property('')
        ], Header.prototype, "text", void 0);
        __decorate([
            ej2_base_1.Property('')
        ], Header.prototype, "iconCss", void 0);
        __decorate([
            ej2_base_1.Property('left')
        ], Header.prototype, "iconPosition", void 0);
        return Header;
    }(ej2_base_2.ChildProperty));
    exports.Header = Header;
    var TabItem = (function (_super) {
        __extends(TabItem, _super);
        function TabItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            ej2_base_1.Complex({}, Header)
        ], TabItem.prototype, "header", void 0);
        __decorate([
            ej2_base_1.Property(null)
        ], TabItem.prototype, "headerTemplate", void 0);
        __decorate([
            ej2_base_1.Property('')
        ], TabItem.prototype, "content", void 0);
        __decorate([
            ej2_base_1.Property('')
        ], TabItem.prototype, "cssClass", void 0);
        __decorate([
            ej2_base_1.Property(false)
        ], TabItem.prototype, "disabled", void 0);
        __decorate([
            ej2_base_1.Property(true)
        ], TabItem.prototype, "visible", void 0);
        __decorate([
            ej2_base_1.Property()
        ], TabItem.prototype, "id", void 0);
        return TabItem;
    }(ej2_base_2.ChildProperty));
    exports.TabItem = TabItem;
    var Tab = (function (_super) {
        __extends(Tab, _super);
        function Tab(options, element) {
            var _this = _super.call(this, options, element) || this;
            _this.show = {};
            _this.hide = {};
            _this.maxHeight = 0;
            _this.title = 'Close';
            _this.lastIndex = 0;
            _this.isAdd = false;
            _this.isIconAlone = false;
            _this.draggableItems = [];
            _this.resizeContext = _this.refreshActElePosition.bind(_this);
            _this.keyConfigs = {
                tab: 'tab',
                home: 'home',
                end: 'end',
                enter: 'enter',
                space: 'space',
                delete: 'delete',
                moveLeft: 'leftarrow',
                moveRight: 'rightarrow',
                moveUp: 'uparrow',
                moveDown: 'downarrow'
            };
            return _this;
        }
        Tab.prototype.destroy = function () {
            var _this = this;
            if (this.isReact) {
                this.clearTemplate();
            }
            if (!ej2_base_4.isNullOrUndefined(this.tbObj)) {
                this.tbObj.destroy();
            }
            this.unWireEvents();
            ['role', 'aria-disabled', 'aria-activedescendant', 'tabindex', 'aria-orientation'].forEach(function (val) {
                _this.element.removeAttribute(val);
            });
            this.expTemplateContent();
            if (!this.isTemplate) {
                while (this.element.firstElementChild) {
                    ej2_base_4.remove(this.element.firstElementChild);
                }
            }
            else {
                var cntEle = ej2_base_2.select('.' + CLS_TAB + ' > .' + CLS_CONTENT, this.element);
                this.element.classList.remove(CLS_TEMPLATE);
                if (!ej2_base_4.isNullOrUndefined(cntEle)) {
                    cntEle.innerHTML = this.cnt;
                }
            }
            _super.prototype.destroy.call(this);
            this.trigger('destroyed');
        };
        Tab.prototype.refresh = function () {
            if (this.isReact) {
                this.clearTemplate();
            }
            if (!this.isServerRendered) {
                _super.prototype.refresh.call(this);
            }
            else if (this.isServerRendered && this.loadOn !== 'Dynamic') {
                this.setActiveBorder();
            }
            if (this.isReact) {
                this.renderReactTemplates();
            }
        };
        Tab.prototype.preRender = function () {
            var nested = ej2_base_1.closest(this.element, '.' + CLS_CONTENT);
            this.prevIndex = 0;
            this.isNested = false;
            this.isPopup = false;
            this.initRender = true;
            this.isSwipeed = false;
            this.itemIndexArray = [];
            this.templateEle = [];
            if (!ej2_base_4.isNullOrUndefined(nested)) {
                nested.parentElement.classList.add(CLS_NEST);
                this.isNested = true;
            }
            var name = ej2_base_3.Browser.info.name;
            var css = (name === 'msie') ? 'e-ie' : (name === 'edge') ? 'e-edge' : (name === 'safari') ? 'e-safari' : '';
            ej2_base_4.setStyleAttribute(this.element, { 'width': ej2_base_3.formatUnit(this.width), 'height': ej2_base_3.formatUnit(this.height) });
            this.setCssClass(this.element, this.cssClass, true);
            ej2_base_1.attributes(this.element, { role: 'tablist', 'aria-disabled': 'false', 'aria-activedescendant': '' });
            this.setCssClass(this.element, css, true);
            this.updatePopAnimationConfig();
        };
        Tab.prototype.render = function () {
            this.btnCls = this.createElement('span', { className: CLS_ICONS + ' ' + CLS_ICON_CLOSE, attrs: { title: this.title } });
            this.tabId = this.element.id.length > 0 ? ('-' + this.element.id) : ej2_base_6.getRandomId();
            this.renderContainer();
            this.wireEvents();
            this.initRender = false;
        };
        Tab.prototype.renderContainer = function () {
            if (this.isServerRendered) {
                this.isTemplate = false;
                return;
            }
            var ele = this.element;
            this.items.forEach(function (item, index) {
                if (ej2_base_4.isNullOrUndefined(item.id) && !ej2_base_4.isNullOrUndefined(item.setProperties)) {
                    item.setProperties({ id: TABITEMPREFIX + index.toString() }, true);
                }
            });
            if (this.items.length > 0 && ele.children.length === 0) {
                ele.appendChild(this.createElement('div', { className: CLS_CONTENT }));
                this.setOrientation(this.headerPlacement, this.createElement('div', { className: CLS_HEADER }));
                this.isTemplate = false;
            }
            else if (this.element.children.length > 0) {
                this.isTemplate = true;
                ele.classList.add(CLS_TEMPLATE);
                var header = ele.querySelector('.' + CLS_HEADER);
                if (header && this.headerPlacement === 'Bottom') {
                    this.setOrientation(this.headerPlacement, header);
                }
            }
            if (!ej2_base_4.isNullOrUndefined(ej2_base_2.select('.' + CLS_HEADER, this.element)) && !ej2_base_4.isNullOrUndefined(ej2_base_2.select('.' + CLS_CONTENT, this.element))) {
                this.renderHeader();
                this.tbItems = ej2_base_2.select('.' + CLS_HEADER + ' .' + CLS_TB_ITEMS, this.element);
                if (!ej2_base_4.isNullOrUndefined(this.tbItems)) {
                    ej2_base_5.rippleEffect(this.tbItems, { selector: '.e-tab-wrap' });
                }
                this.renderContent();
                if (ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element).length > 0) {
                    this.tbItems = ej2_base_2.select('.' + CLS_HEADER + ' .' + CLS_TB_ITEMS, this.element);
                    this.bdrLine = this.createElement('div', { className: CLS_INDICATOR + ' ' + CLS_HIDDEN + ' ' + CLS_IGNORE });
                    var scrCnt = ej2_base_2.select('.' + this.scrCntClass, this.tbItems);
                    if (!ej2_base_4.isNullOrUndefined(scrCnt)) {
                        scrCnt.insertBefore(this.bdrLine, scrCnt.firstChild);
                    }
                    else {
                        this.tbItems.insertBefore(this.bdrLine, this.tbItems.firstChild);
                    }
                    this.setContentHeight(true);
                    this.select(this.selectedItem);
                }
                if (!ej2_base_4.isNullOrUndefined(this.tbItem)) {
                    for (var i = 0; i < this.items.length; i++) {
                        var tabID = this.items[i].id;
                        this.tbItem[i].setAttribute('data-id', tabID);
                    }
                }
                this.setRTL(this.enableRtl);
            }
        };
        Tab.prototype.serverItemsChanged = function () {
            this.enableAnimation = false;
            this.setActive(this.selectedItem, true);
            if (this.loadOn !== 'Dynamic' && !ej2_base_4.isNullOrUndefined(this.cntEle)) {
                var itemCollection = [].slice.call(this.cntEle.children);
                var content_1 = CLS_CONTENT + this.tabId + '_' + this.selectedItem;
                itemCollection.forEach(function (item) {
                    if (item.classList.contains(CLS_ACTIVE) && item.id !== content_1) {
                        item.classList.remove(CLS_ACTIVE);
                    }
                    if (item.id === content_1) {
                        item.classList.add(CLS_ACTIVE);
                    }
                });
                this.prevIndex = this.selectedItem;
                this.triggerAnimation(CLS_ITEM + this.tabId + '_' + this.selectedItem, false);
            }
            this.enableAnimation = true;
        };
        Tab.prototype.headerReady = function () {
            this.initRender = true;
            this.hdrEle = this.getTabHeader();
            this.setOrientation(this.headerPlacement, this.hdrEle);
            if (!ej2_base_4.isNullOrUndefined(this.hdrEle)) {
                this.tbObj = (this.hdrEle && this.hdrEle.ej2_instances[0]);
            }
            this.tbObj.clicked = this.clickHandler.bind(this);
            this.tbObj.on('onItemsChanged', this.serverItemsChanged.bind(this));
            this.tbItems = ej2_base_2.select('.' + CLS_HEADER + ' .' + CLS_TB_ITEMS, this.element);
            if (!ej2_base_4.isNullOrUndefined(this.tbItems)) {
                ej2_base_5.rippleEffect(this.tbItems, { selector: '.e-tab-wrap' });
            }
            if (ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element).length > 0) {
                this.bdrLine = ej2_base_2.select('.' + CLS_INDICATOR + '.' + CLS_IGNORE, this.element);
                var scrollCnt = ej2_base_2.select('.' + this.scrCntClass, this.tbItems);
                if (!ej2_base_4.isNullOrUndefined(scrollCnt)) {
                    scrollCnt.insertBefore(this.bdrLine, scrollCnt.firstElementChild);
                }
                else {
                    this.tbItems.insertBefore(this.bdrLine, this.tbItems.firstElementChild);
                }
                this.select(this.selectedItem);
            }
            this.cntEle = ej2_base_2.select('.' + CLS_TAB + ' > .' + CLS_CONTENT, this.element);
            if (!ej2_base_4.isNullOrUndefined(this.cntEle)) {
                this.touchModule = new ej2_base_5.Touch(this.cntEle, { swipe: this.swipeHandler.bind(this) });
            }
            if (this.loadOn === 'Demand') {
                var id = this.setActiveContent();
                this.triggerAnimation(id, false);
            }
            this.initRender = false;
            this.renderComplete();
        };
        Tab.prototype.setActiveContent = function () {
            var id = CLS_ITEM + this.tabId + '_' + this.selectedItem;
            var item = this.getTrgContent(this.cntEle, this.extIndex(id));
            if (!ej2_base_4.isNullOrUndefined(item)) {
                item.classList.add(CLS_ACTIVE);
            }
            return id;
        };
        Tab.prototype.renderHeader = function () {
            var _this = this;
            var hdrPlace = this.headerPlacement;
            var tabItems = [];
            this.hdrEle = this.getTabHeader();
            this.addVerticalClass();
            if (!this.isTemplate) {
                tabItems = this.parseObject(this.items, 0);
            }
            else {
                if (this.element.children.length > 1 && this.element.children[1].classList.contains(CLS_HEADER)) {
                    this.setProperties({ headerPlacement: 'Bottom' }, true);
                }
                var count = this.hdrEle.children.length;
                var hdrItems = [];
                for (var i = 0; i < count; i++) {
                    hdrItems.push(this.hdrEle.children.item(i).innerHTML);
                }
                if (count > 0) {
                    while (this.hdrEle.firstElementChild) {
                        ej2_base_1.detach(this.hdrEle.firstElementChild);
                    }
                    var tabItems_1 = this.createElement('div', { className: CLS_ITEMS });
                    this.hdrEle.appendChild(tabItems_1);
                    hdrItems.forEach(function (item, index) {
                        _this.lastIndex = index;
                        var attr = {
                            className: CLS_ITEM, id: CLS_ITEM + _this.tabId + '_' + index,
                            attrs: { role: 'tab', 'aria-controls': CLS_CONTENT + _this.tabId + '_' + index, 'aria-selected': 'false' }
                        };
                        var txt = _this.createElement('span', {
                            className: CLS_TEXT, innerHTML: item, attrs: { 'role': 'presentation' }
                        }).outerHTML;
                        var cont = _this.createElement('div', {
                            className: CLS_TEXT_WRAP, innerHTML: txt + _this.btnCls.outerHTML
                        }).outerHTML;
                        var wrap = _this.createElement('div', { className: CLS_WRAP, innerHTML: cont, attrs: { tabIndex: '-1' } });
                        tabItems_1.appendChild(_this.createElement('div', attr));
                        ej2_base_4.selectAll('.' + CLS_ITEM, tabItems_1)[index].appendChild(wrap);
                    });
                }
            }
            this.tbObj = new toolbar_1.Toolbar({
                width: (hdrPlace === 'Left' || hdrPlace === 'Right') ? 'auto' : '100%',
                height: (hdrPlace === 'Left' || hdrPlace === 'Right') ? '100%' : 'auto',
                overflowMode: this.overflowMode,
                items: (tabItems.length !== 0) ? tabItems : [],
                clicked: this.clickHandler.bind(this),
                scrollStep: this.scrollStep,
                enableHtmlSanitizer: this.enableHtmlSanitizer
            });
            this.tbObj.isStringTemplate = true;
            this.tbObj.createElement = this.createElement;
            this.tbObj.appendTo(this.hdrEle);
            ej2_base_1.attributes(this.hdrEle, { 'aria-label': 'tab-header' });
            this.updateOrientationAttribute();
            this.setCloseButton(this.showCloseButton);
        };
        Tab.prototype.renderContent = function () {
            this.cntEle = ej2_base_2.select('.' + CLS_CONTENT, this.element);
            var hdrItem = ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element);
            if (this.isTemplate) {
                this.cnt = (this.cntEle.children.length > 0) ? this.cntEle.innerHTML : '';
                var contents = this.cntEle.children;
                for (var i = 0; i < hdrItem.length; i++) {
                    if (contents.length - 1 >= i) {
                        contents.item(i).className += CLS_ITEM;
                        ej2_base_1.attributes(contents.item(i), { 'role': 'tabpanel', 'aria-labelledby': CLS_ITEM + this.tabId + '_' + i });
                        contents.item(i).id = CLS_CONTENT + this.tabId + '_' + i;
                    }
                }
            }
        };
        Tab.prototype.reRenderItems = function () {
            this.renderContainer();
            if (!ej2_base_4.isNullOrUndefined(this.cntEle)) {
                this.touchModule = new ej2_base_5.Touch(this.cntEle, { swipe: this.swipeHandler.bind(this) });
            }
        };
        Tab.prototype.parseObject = function (items, index) {
            var _this = this;
            var tbCount = ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element).length;
            var tItems = [];
            var txtWrapEle;
            var spliceArray = [];
            var i = 0;
            items.forEach(function (item, i) {
                var pos = (ej2_base_4.isNullOrUndefined(item.header) || ej2_base_4.isNullOrUndefined(item.header.iconPosition)) ? '' : item.header.iconPosition;
                var css = (ej2_base_4.isNullOrUndefined(item.header) || ej2_base_4.isNullOrUndefined(item.header.iconCss)) ? '' : item.header.iconCss;
                if ((ej2_base_4.isNullOrUndefined(item.headerTemplate)) && (ej2_base_4.isNullOrUndefined(item.header) || ej2_base_4.isNullOrUndefined(item.header.text) ||
                    ((item.header.text.length === 0)) && (css === ''))) {
                    spliceArray.push(i);
                    return;
                }
                var txt = item.headerTemplate || item.header.text;
                if (typeof txt === 'string' && _this.enableHtmlSanitizer) {
                    txt = ej2_base_6.SanitizeHtmlHelper.sanitize(txt);
                }
                _this.lastIndex = ((tbCount === 0) ? i : ((_this.isReplace) ? (index + i) : (_this.lastIndex + 1)));
                var disabled = (item.disabled) ? ' ' + CLS_DISABLE + ' ' + CLS_OVERLAY : '';
                var hidden = (item.visible === false) ? ' ' + CLS_HIDDEN : '';
                txtWrapEle = _this.createElement('div', { className: CLS_TEXT, attrs: { 'role': 'presentation' } });
                var tHtml = ((txt instanceof Object) ? txt.outerHTML : txt);
                var txtEmpty = (!ej2_base_4.isNullOrUndefined(tHtml) && tHtml !== '');
                if (!ej2_base_4.isNullOrUndefined(txt.tagName)) {
                    txtWrapEle.appendChild(txt);
                }
                else {
                    _this.headerTextCompile(txtWrapEle, txt, i);
                }
                var tEle;
                var icon = _this.createElement('span', {
                    className: CLS_ICONS + ' ' + CLS_TAB_ICON + ' ' + CLS_ICON + '-' + pos + ' ' + css
                });
                var tCont = _this.createElement('div', { className: CLS_TEXT_WRAP });
                tCont.appendChild(txtWrapEle);
                if ((txt !== '' && txt !== undefined) && css !== '') {
                    if ((pos === 'left' || pos === 'top')) {
                        tCont.insertBefore(icon, tCont.firstElementChild);
                    }
                    else {
                        tCont.appendChild(icon);
                    }
                    tEle = txtWrapEle;
                    _this.isIconAlone = false;
                }
                else {
                    tEle = ((css === '') ? txtWrapEle : icon);
                    if (tEle === icon) {
                        ej2_base_1.detach(txtWrapEle);
                        tCont.appendChild(icon);
                        _this.isIconAlone = true;
                    }
                }
                var wrapAttrs = (item.disabled) ? {} : { tabIndex: '-1' };
                tCont.appendChild(_this.btnCls.cloneNode(true));
                var wrap = _this.createElement('div', { className: CLS_WRAP, attrs: wrapAttrs });
                wrap.appendChild(tCont);
                if (_this.itemIndexArray === []) {
                    _this.itemIndexArray.push(CLS_ITEM + _this.tabId + '_' + _this.lastIndex);
                }
                else {
                    _this.itemIndexArray.splice((index + i), 0, CLS_ITEM + _this.tabId + '_' + _this.lastIndex);
                }
                var attrObj = {
                    id: CLS_ITEM + _this.tabId + '_' + _this.lastIndex, role: 'tab', 'aria-selected': 'false'
                };
                var tItem = { htmlAttributes: attrObj, template: wrap };
                tItem.cssClass = ((item.cssClass !== undefined) ? item.cssClass : ' ') + ' ' + disabled + ' ' + hidden
                    + ((css !== '') ? 'e-i' + pos : '') + ' ' + ((!txtEmpty) ? CLS_ICON : '');
                if (pos === 'top' || pos === 'bottom') {
                    _this.element.classList.add('e-vertical-icon');
                }
                tItems.push(tItem);
                i++;
            });
            if (!this.isAdd) {
                spliceArray.forEach(function (spliceItemIndex) {
                    _this.items.splice(spliceItemIndex, 1);
                });
            }
            if (this.isIconAlone) {
                this.element.classList.add(CLS_ICON_TAB);
            }
            else {
                this.element.classList.remove(CLS_ICON_TAB);
            }
            return tItems;
        };
        Tab.prototype.removeActiveClass = function () {
            var tabHeader = this.getTabHeader();
            if (tabHeader) {
                var tabItems = ej2_base_4.selectAll('.' + CLS_TB_ITEM + '.' + CLS_ACTIVE, tabHeader);
                [].slice.call(tabItems).forEach(function (node) { return node.classList.remove(CLS_ACTIVE); });
            }
        };
        Tab.prototype.checkPopupOverflow = function (ele) {
            this.tbPop = ej2_base_2.select('.' + CLS_TB_POP, this.element);
            var popIcon = ej2_base_2.select('.e-hor-nav', this.element);
            var tbrItems = ej2_base_2.select('.' + CLS_TB_ITEMS, this.element);
            var lastChild = tbrItems.lastChild;
            var isOverflow = false;
            if (!this.isVertical() && ((this.enableRtl && ((popIcon.offsetLeft + popIcon.offsetWidth) > tbrItems.offsetLeft))
                || (!this.enableRtl && popIcon.offsetLeft < tbrItems.offsetWidth))) {
                isOverflow = true;
            }
            else if (this.isVertical() && (popIcon.offsetTop < lastChild.offsetTop + lastChild.offsetHeight)) {
                isOverflow = true;
            }
            if (isOverflow) {
                ele.classList.add(CLS_TB_POPUP);
                this.tbPop.insertBefore(ele, ej2_base_4.selectAll('.' + CLS_TB_POPUP, this.tbPop)[0]);
            }
            return true;
        };
        Tab.prototype.popupHandler = function (target) {
            var ripEle = target.querySelector('.e-ripple-element');
            if (!ej2_base_4.isNullOrUndefined(ripEle)) {
                ripEle.outerHTML = '';
                target.querySelector('.' + CLS_WRAP).classList.remove('e-ripple');
            }
            this.tbItem = ej2_base_4.selectAll('.' + CLS_TB_ITEMS + ' .' + CLS_TB_ITEM, this.hdrEle);
            var lastChild = this.tbItem[this.tbItem.length - 1];
            if (this.tbItem.length !== 0) {
                target.classList.remove(CLS_TB_POPUP);
                target.removeAttribute('style');
                this.tbItems.appendChild(target);
                this.actEleId = target.id;
                if (this.checkPopupOverflow(lastChild)) {
                    var prevEle = this.tbItems.lastChild.previousElementSibling;
                    this.checkPopupOverflow(prevEle);
                }
                this.isPopup = true;
            }
            return ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.tbItems).length - 1;
        };
        Tab.prototype.updateOrientationAttribute = function () {
            ej2_base_1.attributes(this.element, { 'aria-orientation': (this.isVertical() ? 'vertical' : 'horizontal') });
        };
        Tab.prototype.setCloseButton = function (val) {
            var trg = ej2_base_2.select('.' + CLS_HEADER, this.element);
            if (val === true) {
                trg.classList.add(CLS_CLOSE_SHOW);
            }
            else {
                trg.classList.remove(CLS_CLOSE_SHOW);
            }
            this.tbObj.refreshOverflow();
            this.refreshActElePosition();
        };
        Tab.prototype.prevCtnAnimation = function (prev, current) {
            var animation;
            var checkRTL = this.enableRtl || this.element.classList.contains(CLS_RTL);
            if (this.isPopup || prev <= current) {
                if (this.animation.previous.effect === 'SlideLeftIn') {
                    animation = {
                        name: 'SlideLeftOut',
                        duration: this.animation.previous.duration, timingFunction: this.animation.previous.easing
                    };
                }
                else {
                    animation = null;
                }
            }
            else {
                if (this.animation.next.effect === 'SlideRightIn') {
                    animation = {
                        name: 'SlideRightOut',
                        duration: this.animation.next.duration, timingFunction: this.animation.next.easing
                    };
                }
                else {
                    animation = null;
                }
            }
            return animation;
        };
        Tab.prototype.triggerPrevAnimation = function (oldCnt, prevIndex) {
            var _this = this;
            var animateObj = this.prevCtnAnimation(prevIndex, this.selectedItem);
            if (!ej2_base_4.isNullOrUndefined(animateObj)) {
                animateObj.begin = function () {
                    ej2_base_4.setStyleAttribute(oldCnt, { 'position': 'absolute' });
                    oldCnt.classList.add(CLS_PROGRESS);
                    oldCnt.classList.add('e-view');
                };
                animateObj.end = function () {
                    oldCnt.style.display = 'none';
                    oldCnt.classList.remove(CLS_ACTIVE);
                    oldCnt.classList.remove(CLS_PROGRESS);
                    oldCnt.classList.remove('e-view');
                    ej2_base_4.setStyleAttribute(oldCnt, { 'display': '', 'position': '' });
                    if (oldCnt.childNodes.length === 0 && !_this.isTemplate) {
                        ej2_base_1.detach(oldCnt);
                    }
                };
                new ej2_base_5.Animation(animateObj).animate(oldCnt);
            }
            else {
                oldCnt.classList.remove(CLS_ACTIVE);
            }
        };
        Tab.prototype.triggerAnimation = function (id, value) {
            var _this = this;
            var prevIndex = this.prevIndex;
            var oldCnt;
            var newCnt;
            if (!this.isServerRendered || (this.isServerRendered && this.loadOn !== 'Dynamic')) {
                var itemCollection = [].slice.call(this.element.querySelector('.' + CLS_CONTENT).children);
                itemCollection.forEach(function (item) {
                    if (item.id === _this.prevActiveEle) {
                        oldCnt = item;
                    }
                });
                var prevEle = this.tbItem[prevIndex];
                newCnt = this.getTrgContent(this.cntEle, this.extIndex(id));
                if (ej2_base_4.isNullOrUndefined(oldCnt) && !ej2_base_4.isNullOrUndefined(prevEle)) {
                    var idNo = this.extIndex(prevEle.id);
                    oldCnt = this.getTrgContent(this.cntEle, idNo);
                }
            }
            else {
                newCnt = this.cntEle.firstElementChild;
            }
            if (!ej2_base_4.isNullOrUndefined(newCnt)) {
                this.prevActiveEle = newCnt.id;
            }
            if (this.initRender || value === false || this.animation === {} || ej2_base_4.isNullOrUndefined(this.animation)) {
                if (oldCnt && oldCnt !== newCnt) {
                    oldCnt.classList.remove(CLS_ACTIVE);
                }
                return;
            }
            var cnt = ej2_base_2.select('.' + CLS_CONTENT, this.element);
            var animateObj;
            if (this.prevIndex > this.selectedItem && !this.isPopup) {
                var openEff = this.animation.previous.effect;
                animateObj = {
                    name: ((openEff === 'None') ? '' : ((openEff !== 'SlideLeftIn') ? openEff : 'SlideLeftIn')),
                    duration: this.animation.previous.duration,
                    timingFunction: this.animation.previous.easing
                };
            }
            else if (this.isPopup || this.prevIndex < this.selectedItem || this.prevIndex === this.selectedItem) {
                var clsEff = this.animation.next.effect;
                animateObj = {
                    name: ((clsEff === 'None') ? '' : ((clsEff !== 'SlideRightIn') ? clsEff : 'SlideRightIn')),
                    duration: this.animation.next.duration,
                    timingFunction: this.animation.next.easing
                };
            }
            animateObj.progress = function () {
                cnt.classList.add(CLS_PROGRESS);
                _this.setActiveBorder();
            };
            animateObj.end = function () {
                cnt.classList.remove(CLS_PROGRESS);
                newCnt.classList.add(CLS_ACTIVE);
            };
            if (!this.initRender && !ej2_base_4.isNullOrUndefined(oldCnt)) {
                this.triggerPrevAnimation(oldCnt, prevIndex);
            }
            this.isPopup = false;
            if (animateObj.name === '') {
                newCnt.classList.add(CLS_ACTIVE);
            }
            else {
                new ej2_base_5.Animation(animateObj).animate(newCnt);
            }
        };
        Tab.prototype.keyPressed = function (trg) {
            var trgParent = ej2_base_1.closest(trg, '.' + CLS_HEADER + ' .' + CLS_TB_ITEM);
            var trgIndex = this.getEleIndex(trgParent);
            if (!ej2_base_4.isNullOrUndefined(this.popEle) && trg.classList.contains('e-hor-nav')) {
                (this.popEle.classList.contains(CLS_POPUP_OPEN)) ? this.popObj.hide(this.hide) : this.popObj.show(this.show);
            }
            else if (trg.classList.contains('e-scroll-nav')) {
                trg.click();
            }
            else {
                if (!ej2_base_4.isNullOrUndefined(trgParent) && trgParent.classList.contains(CLS_ACTIVE) === false) {
                    this.select(trgIndex);
                    if (!ej2_base_4.isNullOrUndefined(this.popEle)) {
                        this.popObj.hide(this.hide);
                    }
                }
            }
        };
        Tab.prototype.getTabHeader = function () {
            if (ej2_base_4.isNullOrUndefined(this.element)) {
                return undefined;
            }
            var headers = [].slice.call(this.element.children).filter(function (e) { return e.classList.contains(CLS_HEADER); });
            if (headers.length > 0) {
                return headers[0];
            }
            else {
                var wrap = [].slice.call(this.element.children).filter(function (e) { return !e.classList.contains(CLS_BLA_TEM); })[0];
                if (!wrap) {
                    return undefined;
                }
                return [].slice.call(wrap.children).filter(function (e) { return e.classList.contains(CLS_HEADER); })[0];
            }
        };
        Tab.prototype.getEleIndex = function (item) {
            return Array.prototype.indexOf.call(ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.getTabHeader()), item);
        };
        Tab.prototype.extIndex = function (id) {
            return id.replace(CLS_ITEM + this.tabId + '_', '');
        };
        Tab.prototype.expTemplateContent = function () {
            var _this = this;
            this.templateEle.forEach(function (eleStr) {
                if (!ej2_base_4.isNullOrUndefined(_this.element.querySelector(eleStr))) {
                    document.body.appendChild(_this.element.querySelector(eleStr)).style.display = 'none';
                }
            });
        };
        Tab.prototype.templateCompile = function (ele, cnt, index) {
            var tempEle = this.createElement('div');
            this.compileElement(tempEle, cnt, 'content', index);
            if (tempEle.childNodes.length !== 0) {
                ele.appendChild(tempEle);
            }
            if (this.isReact) {
                this.renderReactTemplates();
            }
        };
        Tab.prototype.compileElement = function (ele, val, prop, index) {
            var templateFn;
            if (typeof val === 'string') {
                val = val.trim();
                ele.innerHTML = ej2_base_6.SanitizeHtmlHelper.sanitize(val);
            }
            else {
                templateFn = ej2_base_5.compile(val);
            }
            var templateFUN;
            if (!ej2_base_4.isNullOrUndefined(templateFn)) {
                templateFUN = templateFn({}, this, prop);
            }
            if (!ej2_base_4.isNullOrUndefined(templateFn) && templateFUN.length > 0) {
                [].slice.call(templateFUN).forEach(function (el) {
                    ele.appendChild(el);
                });
            }
        };
        Tab.prototype.headerTextCompile = function (element, text, index) {
            this.compileElement(element, text, 'headerTemplate', index);
        };
        Tab.prototype.getContent = function (ele, cnt, callType, index) {
            var eleStr;
            if (typeof cnt === 'string' || ej2_base_4.isNullOrUndefined(cnt.innerHTML)) {
                if (typeof cnt === 'string' && this.enableHtmlSanitizer) {
                    cnt = ej2_base_6.SanitizeHtmlHelper.sanitize(cnt);
                }
                if (cnt[0] === '.' || cnt[0] === '#') {
                    if (document.querySelectorAll(cnt).length) {
                        var eleVal = document.querySelector(cnt);
                        eleStr = eleVal.outerHTML.trim();
                        if (callType === 'clone') {
                            ele.appendChild(eleVal.cloneNode(true));
                        }
                        else {
                            ele.appendChild(eleVal);
                            eleVal.style.display = '';
                        }
                    }
                    else {
                        this.templateCompile(ele, cnt, index);
                    }
                }
                else {
                    this.templateCompile(ele, cnt, index);
                }
            }
            else {
                ele.appendChild(cnt);
            }
            if (!ej2_base_4.isNullOrUndefined(eleStr)) {
                if (this.templateEle.indexOf(cnt.toString()) === -1) {
                    this.templateEle.push(cnt.toString());
                }
            }
        };
        Tab.prototype.getTrgContent = function (cntEle, no) {
            var ele;
            if (this.element.classList.contains(CLS_NEST)) {
                ele = ej2_base_2.select('.' + CLS_NEST + '> .' + CLS_CONTENT + ' > #' + CLS_CONTENT + this.tabId + '_' + no, this.element);
            }
            else {
                ele = this.findEle(cntEle.children, CLS_CONTENT + this.tabId + '_' + no);
            }
            return ele;
        };
        Tab.prototype.findEle = function (items, key) {
            var ele;
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === key) {
                    ele = items[i];
                    break;
                }
            }
            return ele;
        };
        Tab.prototype.isVertical = function () {
            var isVertical = (this.headerPlacement === 'Left' || this.headerPlacement === 'Right') ? true : false;
            this.scrCntClass = (isVertical) ? CLS_VSCRCNT : CLS_HSCRCNT;
            return isVertical;
        };
        Tab.prototype.addVerticalClass = function () {
            if (this.isVertical()) {
                var tbPos = (this.headerPlacement === 'Left') ? CLS_VLEFT : CLS_VRIGHT;
                ej2_base_4.addClass([this.hdrEle], [CLS_VERTICAL, tbPos]);
                if (!this.element.classList.contains(CLS_NEST)) {
                    ej2_base_4.addClass([this.element], [CLS_VTAB, tbPos]);
                }
                else {
                    ej2_base_4.addClass([this.hdrEle], [CLS_VTAB, tbPos]);
                }
            }
            if (this.headerPlacement === 'Bottom') {
                ej2_base_4.addClass([this.hdrEle], [CLS_HBOTTOM]);
            }
        };
        Tab.prototype.updatePopAnimationConfig = function () {
            this.show = { name: (this.isVertical() ? 'FadeIn' : 'SlideDown'), duration: 100 };
            this.hide = { name: (this.isVertical() ? 'FadeOut' : 'SlideUp'), duration: 100 };
        };
        Tab.prototype.changeOrientation = function (place) {
            this.setOrientation(place, this.hdrEle);
            var isVertical = this.hdrEle.classList.contains(CLS_VERTICAL) ? true : false;
            ej2_base_4.removeClass([this.element], [CLS_VTAB]);
            ej2_base_4.removeClass([this.hdrEle], [CLS_VERTICAL, CLS_VLEFT, CLS_VRIGHT]);
            if (isVertical !== this.isVertical()) {
                this.changeToolbarOrientation();
            }
            this.addVerticalClass();
            this.updateOrientationAttribute();
            this.setActiveBorder();
            this.focusItem();
        };
        Tab.prototype.focusItem = function () {
            var curActItem = ej2_base_2.select(' #' + CLS_ITEM + this.tabId + '_' + this.selectedItem, this.hdrEle);
            if (!ej2_base_4.isNullOrUndefined(curActItem)) {
                curActItem.firstElementChild.focus();
            }
        };
        Tab.prototype.serverChangeOrientation = function (newProp, oldProp) {
            this.setOrientation(newProp, this.hdrEle);
            ej2_base_4.removeClass([this.element], [CLS_VTAB]);
            var newValue = newProp === 'Left' || newProp === 'Right';
            var oldValue = oldProp === 'Left' || oldProp === 'Right';
            if (newValue !== oldValue) {
                this.changeToolbarOrientation();
            }
            if (this.isVertical()) {
                ej2_base_4.addClass([this.element], [CLS_VTAB]);
            }
            this.updateOrientationAttribute();
            this.setActiveBorder();
            this.focusItem();
        };
        Tab.prototype.changeToolbarOrientation = function () {
            this.tbObj.setProperties({ height: (this.isVertical() ? '100%' : 'auto'), width: (this.isVertical() ? 'auto' : '100%') }, true);
            this.tbObj.changeOrientation();
            this.updatePopAnimationConfig();
        };
        Tab.prototype.setOrientation = function (place, ele) {
            var headerPos = Array.prototype.indexOf.call(this.element.children, ele);
            var contentPos = Array.prototype.indexOf.call(this.element.children, this.element.querySelector('.' + CLS_CONTENT));
            if (place === 'Bottom' && (contentPos > headerPos)) {
                this.element.appendChild(ele);
            }
            else {
                ej2_base_4.removeClass([ele], [CLS_HBOTTOM]);
                this.element.insertBefore(ele, ej2_base_2.select('.' + CLS_CONTENT, this.element));
            }
        };
        Tab.prototype.setCssClass = function (ele, cls, val) {
            if (cls === '') {
                return;
            }
            var list = cls.split(' ');
            for (var i = 0; i < list.length; i++) {
                if (val) {
                    ele.classList.add(list[i]);
                }
                else {
                    ele.classList.remove(list[i]);
                }
            }
        };
        Tab.prototype.setContentHeight = function (val) {
            if (this.element.classList.contains(CLS_FILL)) {
                ej2_base_4.removeClass([this.element], [CLS_FILL]);
            }
            if (ej2_base_4.isNullOrUndefined(this.cntEle)) {
                return;
            }
            var hdrEle = this.getTabHeader();
            if (this.heightAdjustMode === 'None') {
                if (this.height === 'auto') {
                    return;
                }
                else {
                    if (!this.isVertical()) {
                        ej2_base_4.setStyleAttribute(this.cntEle, { 'height': (this.element.offsetHeight - hdrEle.offsetHeight) + 'px' });
                    }
                }
            }
            else if (this.heightAdjustMode === 'Fill') {
                ej2_base_4.addClass([this.element], [CLS_FILL]);
                ej2_base_4.setStyleAttribute(this.element, { 'height': '100%' });
                ej2_base_4.setStyleAttribute(this.cntEle, { 'height': (this.element.offsetHeight - hdrEle.offsetHeight) + 'px' });
            }
            else if (this.heightAdjustMode === 'Auto') {
                if (this.isTemplate === true) {
                    var cnt = ej2_base_4.selectAll('.' + CLS_CONTENT + ' > .' + CLS_ITEM, this.element);
                    for (var i = 0; i < cnt.length; i++) {
                        cnt[i].setAttribute('style', 'display:block; visibility: visible');
                        this.maxHeight = Math.max(this.maxHeight, this.getHeight(cnt[i]));
                        cnt[i].style.removeProperty('display');
                        cnt[i].style.removeProperty('visibility');
                    }
                }
                else {
                    this.cntEle = ej2_base_2.select('.' + CLS_CONTENT, this.element);
                    if (val === true) {
                        this.cntEle.appendChild(this.createElement('div', {
                            id: (CLS_CONTENT + this.tabId + '_' + 0), className: CLS_ITEM + ' ' + CLS_ACTIVE,
                            attrs: { 'role': 'tabpanel', 'aria-labelledby': CLS_ITEM + this.tabId + '_' + 0 }
                        }));
                    }
                    var ele = this.cntEle.children.item(0);
                    for (var i = 0; i < this.items.length; i++) {
                        this.getContent(ele, this.items[i].content, 'clone', i);
                        this.maxHeight = Math.max(this.maxHeight, this.getHeight(ele));
                        while (ele.firstChild) {
                            ele.removeChild(ele.firstChild);
                        }
                    }
                    this.clearTemplate(['content']);
                    this.templateEle = [];
                    this.getContent(ele, this.items[0].content, 'render', 0);
                    ele.classList.remove(CLS_ACTIVE);
                }
                ej2_base_4.setStyleAttribute(this.cntEle, { 'height': this.maxHeight + 'px' });
            }
            else {
                ej2_base_4.setStyleAttribute(this.cntEle, { 'height': 'auto' });
            }
        };
        Tab.prototype.getHeight = function (ele) {
            var cs = window.getComputedStyle(ele);
            return ele.offsetHeight + parseFloat(cs.getPropertyValue('padding-top')) + parseFloat(cs.getPropertyValue('padding-bottom')) +
                parseFloat(cs.getPropertyValue('margin-top')) + parseFloat(cs.getPropertyValue('margin-bottom'));
        };
        Tab.prototype.setActiveBorder = function () {
            var trgHdrEle = this.getTabHeader();
            var trg = ej2_base_2.select('.' + CLS_TB_ITEM + '.' + CLS_ACTIVE, trgHdrEle);
            if (trg === null) {
                return;
            }
            if (this.isServerRendered && trg.classList.contains(CLS_TB_POPUP)) {
                this.popupHandler(trg);
            }
            var root = ej2_base_1.closest(trg, '.' + CLS_TAB);
            if (this.element !== root) {
                return;
            }
            this.tbItems = ej2_base_2.select('.' + CLS_TB_ITEMS, trgHdrEle);
            var bar = ej2_base_2.select('.' + CLS_INDICATOR, trgHdrEle);
            var scrollCnt = ej2_base_2.select('.' + CLS_TB_ITEMS + ' .' + this.scrCntClass, trgHdrEle);
            if (this.isVertical()) {
                ej2_base_4.setStyleAttribute(bar, { 'left': '', 'right': '' });
                var tbHeight = (ej2_base_4.isNullOrUndefined(scrollCnt)) ? this.tbItems.offsetHeight : scrollCnt.offsetHeight;
                if (tbHeight !== 0) {
                    ej2_base_4.setStyleAttribute(bar, { 'top': trg.offsetTop + 'px', 'height': trg.offsetHeight + 'px' });
                }
                else {
                    ej2_base_4.setStyleAttribute(bar, { 'top': 0, 'height': 0 });
                }
            }
            else {
                if (this.overflowMode === 'MultiRow') {
                    var bar_1 = ej2_base_2.select('.' + CLS_INDICATOR, this.element);
                    ej2_base_4.setStyleAttribute(bar_1, { 'top': trg.offsetHeight + trg.offsetTop + 'px', 'height': '' });
                }
                else {
                    ej2_base_4.setStyleAttribute(bar, { 'top': '', 'height': '' });
                }
                var tbWidth = (ej2_base_4.isNullOrUndefined(scrollCnt)) ? this.tbItems.offsetWidth : scrollCnt.offsetWidth;
                if (tbWidth !== 0) {
                    ej2_base_4.setStyleAttribute(bar, { 'left': trg.offsetLeft + 'px', 'right': tbWidth - (trg.offsetLeft + trg.offsetWidth) + 'px' });
                }
                else {
                    ej2_base_4.setStyleAttribute(bar, { 'left': 'auto', 'right': 'auto' });
                }
            }
            if (!ej2_base_4.isNullOrUndefined(this.bdrLine)) {
                this.bdrLine.classList.remove(CLS_HIDDEN);
            }
        };
        Tab.prototype.setActive = function (value, skipDataBind) {
            if (skipDataBind === void 0) { skipDataBind = false; }
            this.tbItem = ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.getTabHeader());
            var trg = this.tbItem[value];
            if (this.isServerRendered && trg) {
                value = parseInt(trg.getAttribute('data-index'), 10);
            }
            if (value < 0 || isNaN(value) || this.tbItem.length === 0) {
                return;
            }
            if (value >= 0 && !skipDataBind) {
                this.allowServerDataBinding = false;
                this.setProperties({ selectedItem: value }, true);
                this.allowServerDataBinding = true;
                if (!this.initRender) {
                    this.serverDataBind();
                }
            }
            if (trg.classList.contains(CLS_ACTIVE)) {
                this.setActiveBorder();
                return;
            }
            if (!this.isTemplate) {
                var prev = this.tbItem[this.prevIndex];
                if (!ej2_base_4.isNullOrUndefined(prev)) {
                    prev.removeAttribute('aria-controls');
                }
                ej2_base_1.attributes(trg, { 'aria-controls': CLS_CONTENT + this.tabId + '_' + value });
            }
            var id = trg.id;
            this.removeActiveClass();
            trg.classList.add(CLS_ACTIVE);
            trg.setAttribute('aria-selected', 'true');
            var no = Number(this.extIndex(id));
            if (ej2_base_4.isNullOrUndefined(this.prevActiveEle)) {
                this.prevActiveEle = CLS_CONTENT + this.tabId + '_' + no;
            }
            ej2_base_1.attributes(this.element, { 'aria-activedescendant': id });
            if (this.isTemplate) {
                if (ej2_base_2.select('.' + CLS_CONTENT, this.element).children.length > 0) {
                    var trg_1 = this.findEle(ej2_base_2.select('.' + CLS_CONTENT, this.element).children, CLS_CONTENT + this.tabId + '_' + no);
                    if (!ej2_base_4.isNullOrUndefined(trg_1)) {
                        trg_1.classList.add(CLS_ACTIVE);
                    }
                    this.triggerAnimation(id, this.enableAnimation);
                }
            }
            else if (!this.isServerRendered || (this.isServerRendered && this.loadOn === 'Init')) {
                this.cntEle = ej2_base_2.select('.' + CLS_TAB + ' > .' + CLS_CONTENT, this.element);
                var item = this.getTrgContent(this.cntEle, this.extIndex(id));
                if (ej2_base_4.isNullOrUndefined(item)) {
                    this.cntEle.appendChild(this.createElement('div', {
                        id: CLS_CONTENT + this.tabId + '_' + this.extIndex(id), className: CLS_ITEM + ' ' + CLS_ACTIVE,
                        attrs: { role: 'tabpanel', 'aria-labelledby': CLS_ITEM + this.tabId + '_' + this.extIndex(id) }
                    }));
                    var eleTrg = this.getTrgContent(this.cntEle, this.extIndex(id));
                    var itemIndex = Array.prototype.indexOf.call(this.itemIndexArray, id);
                    this.getContent(eleTrg, this.items[itemIndex].content, 'render', itemIndex);
                }
                else {
                    item.classList.add(CLS_ACTIVE);
                }
                this.triggerAnimation(id, this.enableAnimation);
            }
            this.setActiveBorder();
            this.refreshItemVisibility(trg);
            if (!this.initRender && !skipDataBind) {
                trg.firstElementChild.focus();
                var eventArg = {
                    previousItem: this.prevItem,
                    previousIndex: this.prevIndex,
                    selectedItem: trg,
                    selectedIndex: value,
                    selectedContent: ej2_base_2.select('#' + CLS_CONTENT + this.tabId + '_' + this.selectingID, this.content),
                    isSwiped: this.isSwipeed
                };
                this.trigger('selected', eventArg);
            }
        };
        Tab.prototype.contentReady = function () {
            var id = this.setActiveContent();
            this.triggerAnimation(id, this.enableAnimation);
        };
        Tab.prototype.setItems = function (items) {
            this.isReplace = true;
            this.tbItems = ej2_base_2.select('.' + CLS_TB_ITEMS, this.getTabHeader());
            this.tbObj.items = this.parseObject(items, 0);
            this.tbObj.dataBind();
            this.isReplace = false;
        };
        Tab.prototype.setRTL = function (value) {
            this.tbObj.enableRtl = value;
            this.tbObj.dataBind();
            this.setCssClass(this.element, CLS_RTL, value);
            this.refreshActiveBorder();
        };
        Tab.prototype.refreshActiveBorder = function () {
            if (!ej2_base_4.isNullOrUndefined(this.bdrLine)) {
                this.bdrLine.classList.add(CLS_HIDDEN);
            }
            this.setActiveBorder();
        };
        Tab.prototype.showPopup = function (config) {
            var tbPop = ej2_base_2.select('.e-popup.e-toolbar-pop', this.hdrEle);
            if (tbPop.classList.contains('e-popup-close')) {
                var tbPopObj = (tbPop && tbPop.ej2_instances[0]);
                tbPopObj.position.X = (this.headerPlacement === 'Left') ? 'left' : 'right';
                tbPopObj.dataBind();
                tbPopObj.show(config);
            }
        };
        Tab.prototype.bindDraggable = function () {
            var _this = this;
            if (this.allowDragAndDrop) {
                var items = this.element.querySelectorAll('.' + CLS_TB_ITEM);
                items.forEach(function (element) {
                    _this.initializeDrag(element);
                });
            }
        };
        Tab.prototype.wireEvents = function () {
            this.bindDraggable();
            window.addEventListener('resize', this.resizeContext);
            ej2_base_5.EventHandler.add(this.element, 'mouseover', this.hoverHandler, this);
            ej2_base_5.EventHandler.add(this.element, 'keydown', this.spaceKeyDown, this);
            if (!ej2_base_4.isNullOrUndefined(this.cntEle)) {
                this.touchModule = new ej2_base_5.Touch(this.cntEle, { swipe: this.swipeHandler.bind(this) });
            }
            this.keyModule = new ej2_base_3.KeyboardEvents(this.element, { keyAction: this.keyHandler.bind(this), keyConfigs: this.keyConfigs });
            this.tabKeyModule = new ej2_base_3.KeyboardEvents(this.element, {
                keyAction: this.keyHandler.bind(this),
                keyConfigs: { openPopup: 'shift+f10', tab: 'tab', shiftTab: 'shift+tab' },
                eventName: 'keydown'
            });
        };
        Tab.prototype.unWireEvents = function () {
            if (!ej2_base_4.isNullOrUndefined(this.keyModule)) {
                this.keyModule.destroy();
            }
            if (!ej2_base_4.isNullOrUndefined(this.tabKeyModule)) {
                this.tabKeyModule.destroy();
            }
            if (!ej2_base_4.isNullOrUndefined(this.cntEle) && !ej2_base_4.isNullOrUndefined(this.touchModule)) {
                this.touchModule.destroy();
            }
            window.removeEventListener('resize', this.resizeContext);
            ej2_base_5.EventHandler.remove(this.element, 'mouseover', this.hoverHandler);
            ej2_base_5.EventHandler.remove(this.element, 'keydown', this.spaceKeyDown);
            this.element.classList.remove(CLS_RTL);
            this.element.classList.remove(CLS_FOCUS);
        };
        Tab.prototype.clickHandler = function (args) {
            this.element.classList.remove(CLS_FOCUS);
            var trg = args.originalEvent.target;
            var trgParent = ej2_base_1.closest(trg, '.' + CLS_TB_ITEM);
            var trgIndex = this.getEleIndex(trgParent);
            if (trg.classList.contains(CLS_ICON_CLOSE)) {
                this.removeTab(trgIndex);
            }
            else if (this.isVertical() && ej2_base_1.closest(trg, '.' + CLS_HOR_NAV)) {
                this.showPopup(this.show);
            }
            else {
                this.isPopup = false;
                if (this.isServerRendered && !ej2_base_4.isNullOrUndefined(trgParent)) {
                    if (parseInt(trgParent.getAttribute('data-index'), 10) !== this.selectedItem) {
                        this.select(trgIndex);
                    }
                }
                else if (!ej2_base_4.isNullOrUndefined(trgParent) && (trgIndex !== this.selectedItem || trgIndex !== this.prevIndex)) {
                    this.select(trgIndex, args.originalEvent);
                }
            }
        };
        Tab.prototype.swipeHandler = function (e) {
            if (e.velocity < 3 && ej2_base_4.isNullOrUndefined(e.originalEvent.changedTouches)) {
                return;
            }
            if (e.originalEvent) {
                e.originalEvent.stopPropagation();
            }
            this.isSwipeed = true;
            if (e.swipeDirection === 'Right' && this.selectedItem !== 0) {
                for (var k = this.selectedItem - 1; k >= 0; k--) {
                    if (!this.tbItem[k].classList.contains(CLS_HIDDEN)) {
                        this.select(k);
                        break;
                    }
                }
            }
            else if (e.swipeDirection === 'Left' && (this.selectedItem !== ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element).length - 1)) {
                for (var i = this.selectedItem + 1; i < this.tbItem.length; i++) {
                    if (!this.tbItem[i].classList.contains(CLS_HIDDEN)) {
                        this.select(i);
                        break;
                    }
                }
            }
            this.isSwipeed = false;
        };
        Tab.prototype.spaceKeyDown = function (e) {
            if ((e.keyCode === 32 && e.which === 32) || (e.keyCode === 35 && e.which === 35)) {
                var clstHead = ej2_base_1.closest(e.target, '.' + CLS_HEADER);
                if (!ej2_base_4.isNullOrUndefined(clstHead)) {
                    e.preventDefault();
                }
            }
        };
        Tab.prototype.keyHandler = function (e) {
            if (this.element.classList.contains(CLS_DISABLE)) {
                return;
            }
            this.element.classList.add(CLS_FOCUS);
            var trg = e.target;
            var tabHeader = this.getTabHeader();
            var actEle = ej2_base_2.select('.' + CLS_ACTIVE, tabHeader);
            this.popEle = ej2_base_2.select('.' + CLS_TB_POP, tabHeader);
            if (!ej2_base_4.isNullOrUndefined(this.popEle)) {
                this.popObj = this.popEle.ej2_instances[0];
            }
            var item = ej2_base_1.closest(document.activeElement, '.' + CLS_TB_ITEM);
            var trgParent = ej2_base_1.closest(trg, '.' + CLS_TB_ITEM);
            switch (e.action) {
                case 'space':
                case 'enter':
                    if (trg.parentElement.classList.contains(CLS_DISABLE)) {
                        return;
                    }
                    if (e.action === 'enter' && trg.classList.contains('e-hor-nav')) {
                        this.showPopup(this.show);
                        break;
                    }
                    this.keyPressed(trg);
                    break;
                case 'tab':
                case 'shiftTab':
                    if (trg.classList.contains(CLS_WRAP)
                        && ej2_base_1.closest(trg, '.' + CLS_TB_ITEM).classList.contains(CLS_ACTIVE) === false) {
                        trg.setAttribute('tabindex', '-1');
                    }
                    if (this.popObj && ej2_base_2.isVisible(this.popObj.element)) {
                        this.popObj.hide(this.hide);
                    }
                    actEle.children.item(0).setAttribute('tabindex', '0');
                    break;
                case 'moveLeft':
                case 'moveRight':
                    if (!ej2_base_4.isNullOrUndefined(item)) {
                        this.refreshItemVisibility(item);
                    }
                    break;
                case 'openPopup':
                    e.preventDefault();
                    if (!ej2_base_4.isNullOrUndefined(this.popEle) && this.popEle.classList.contains(CLS_POPUP_CLOSE)) {
                        this.popObj.show(this.show);
                    }
                    break;
                case 'delete':
                    if (this.showCloseButton === true && !ej2_base_4.isNullOrUndefined(trgParent)) {
                        var nxtSib = trgParent.nextSibling;
                        if (!ej2_base_4.isNullOrUndefined(nxtSib) && nxtSib.classList.contains(CLS_TB_ITEM)) {
                            nxtSib.firstElementChild.focus();
                        }
                        this.removeTab(this.getEleIndex(trgParent));
                    }
                    this.setActiveBorder();
                    break;
            }
        };
        Tab.prototype.refreshActElePosition = function () {
            var activeEle = ej2_base_2.select('.' + CLS_TB_ITEM + '.' + CLS_TB_POPUP + '.' + CLS_ACTIVE, this.element);
            if (!ej2_base_4.isNullOrUndefined(activeEle)) {
                this.select(this.getEleIndex(activeEle));
            }
            this.refreshActiveBorder();
        };
        Tab.prototype.refreshItemVisibility = function (target) {
            var scrCnt = ej2_base_2.select('.' + this.scrCntClass, this.tbItems);
            if (!this.isVertical() && !ej2_base_4.isNullOrUndefined(scrCnt)) {
                var scrBar = ej2_base_2.select('.e-hscroll-bar', this.tbItems);
                var scrStart = scrBar.scrollLeft;
                var scrEnd = scrStart + scrBar.offsetWidth;
                var eleStart = target.offsetLeft;
                var eleWidth = target.offsetWidth;
                var eleEnd = target.offsetLeft + target.offsetWidth;
                if ((scrStart < eleStart) && (scrEnd < eleEnd)) {
                    var eleViewRange = scrEnd - eleStart;
                    scrBar.scrollLeft = scrStart + (eleWidth - eleViewRange);
                }
                else {
                    if ((scrStart > eleStart) && (scrEnd > eleEnd)) {
                        var eleViewRange = eleEnd - scrStart;
                        scrBar.scrollLeft = scrStart - (eleWidth - eleViewRange);
                    }
                }
            }
            else {
                return;
            }
        };
        Tab.prototype.hoverHandler = function (e) {
            var trg = e.target;
            if (!ej2_base_4.isNullOrUndefined(trg.classList) && trg.classList.contains(CLS_ICON_CLOSE)) {
                trg.setAttribute('title', new ej2_base_3.L10n('tab', { closeButtonTitle: this.title }, this.locale).getConstant('closeButtonTitle'));
            }
        };
        Tab.prototype.evalOnPropertyChangeItems = function (newProp, oldProp) {
            if (!(newProp.items instanceof Array && oldProp.items instanceof Array)) {
                var changedProp = Object.keys(newProp.items);
                for (var i = 0; i < changedProp.length; i++) {
                    var index = parseInt(Object.keys(newProp.items)[i], 10);
                    var property = Object.keys(newProp.items[index])[0];
                    var oldVal = Object(oldProp.items[index])[property];
                    var newVal = Object(newProp.items[index])[property];
                    var hdrItem = ej2_base_2.select('.' + CLS_TB_ITEMS + ' #' + CLS_ITEM + this.tabId + '_' + index, this.element);
                    var cntItem = ej2_base_2.select('.' + CLS_CONTENT + ' #' + CLS_CONTENT + this.tabId + '_' + index, this.element);
                    if (property === 'header' || property === 'headerTemplate') {
                        var icon = (ej2_base_4.isNullOrUndefined(this.items[index].header) ||
                            ej2_base_4.isNullOrUndefined(this.items[index].header.iconCss)) ? '' : this.items[index].header.iconCss;
                        var textVal = this.items[index].headerTemplate || this.items[index].header.text;
                        if ((textVal === '') && (icon === '')) {
                            this.removeTab(index);
                        }
                        else {
                            var arr = [];
                            arr.push(this.items[index]);
                            this.items.splice(index, 1);
                            this.itemIndexArray.splice(index, 1);
                            this.tbObj.items.splice(index, 1);
                            var isHiddenEle = hdrItem.classList.contains(CLS_HIDDEN);
                            ej2_base_1.detach(hdrItem);
                            this.isReplace = true;
                            this.addTab(arr, index);
                            if (isHiddenEle) {
                                this.hideTab(index);
                            }
                            this.isReplace = false;
                        }
                    }
                    if (property === 'content' && !ej2_base_4.isNullOrUndefined(cntItem)) {
                        var strVal = typeof newVal === 'string' || ej2_base_4.isNullOrUndefined(newVal.innerHTML);
                        if (strVal && (newVal[0] === '.' || newVal[0] === '#') && newVal.length) {
                            var eleVal = document.querySelector(newVal);
                            cntItem.appendChild(eleVal);
                            eleVal.style.display = '';
                        }
                        else if (newVal === '' && oldVal[0] === '#') {
                            document.body.appendChild(this.element.querySelector(oldVal)).style.display = 'none';
                            cntItem.innerHTML = newVal;
                        }
                        else if (typeof newVal !== 'function') {
                            cntItem.innerHTML = newVal;
                        }
                    }
                    if (property === 'cssClass') {
                        if (!ej2_base_4.isNullOrUndefined(hdrItem)) {
                            hdrItem.classList.remove(oldVal);
                            hdrItem.classList.add(newVal);
                        }
                        if (!ej2_base_4.isNullOrUndefined(cntItem)) {
                            cntItem.classList.remove(oldVal);
                            cntItem.classList.add(newVal);
                        }
                    }
                    if (property === 'disabled') {
                        this.enableTab(index, ((newVal === true) ? false : true));
                    }
                    if (property === 'visible') {
                        this.hideTab(index, ((newVal === true) ? false : true));
                    }
                }
            }
            else {
                this.lastIndex = 0;
                if (ej2_base_4.isNullOrUndefined(this.tbObj)) {
                    this.reRenderItems();
                }
                else {
                    if (this.isRect) {
                        this.clearTemplate();
                    }
                    this.setItems(newProp.items);
                    if (this.templateEle.length > 0) {
                        this.expTemplateContent();
                    }
                    this.templateEle = [];
                    var selectElement = ej2_base_2.select('.' + CLS_TAB + ' > .' + CLS_CONTENT, this.element);
                    while (selectElement.firstElementChild && !ej2_base_6.isBlazor()) {
                        ej2_base_1.detach(selectElement.firstElementChild);
                    }
                    this.select(this.selectedItem);
                }
            }
        };
        Tab.prototype.initializeDrag = function (target) {
            var _this = this;
            this.dragArea = !ej2_base_4.isNullOrUndefined(this.dragArea) ? this.dragArea : '#' + this.element.id + ' ' + ('.' + CLS_HEADER);
            var dragObj = new ej2_base_6.Draggable(target, {
                dragArea: this.dragArea,
                dragTarget: '.' + CLS_TB_ITEM,
                clone: true,
                helper: this.helper.bind(this),
                dragStart: this.itemDragStart.bind(this),
                drag: function (e) {
                    var dragIndex = _this.getEleIndex(_this.dragItem);
                    var dropIndex;
                    var dropItem;
                    var dragArgs = {
                        draggedItem: _this.dragItem,
                        event: e.event,
                        target: e.target,
                        droppedItem: e.target.closest('.' + CLS_TB_ITEM),
                        clonedElement: _this.cloneElement,
                        index: dragIndex
                    };
                    if (!ej2_base_4.isNullOrUndefined(e.target.closest('.' + CLS_TAB)) && !e.target.closest('.' + CLS_TAB).isEqualNode(_this.element) &&
                        _this.dragArea !== '.' + CLS_HEADER) {
                        _this.trigger('dragging', dragArgs);
                    }
                    else {
                        if (!(e.target.closest(_this.dragArea)) && _this.overflowMode !== 'Popup') {
                            document.body.style.cursor = 'not-allowed';
                            ej2_base_4.addClass([_this.cloneElement], CLS_HIDDEN);
                            if (_this.dragItem.classList.contains(CLS_HIDDEN)) {
                                ej2_base_4.removeClass([_this.dragItem], CLS_HIDDEN);
                            }
                            _this.dragItem.querySelector('.' + CLS_WRAP).style.visibility = 'visible';
                        }
                        else {
                            document.body.style.cursor = '';
                            _this.dragItem.querySelector('.' + CLS_WRAP).style.visibility = 'hidden';
                            if (_this.cloneElement.classList.contains(CLS_HIDDEN)) {
                                ej2_base_4.removeClass([_this.cloneElement], CLS_HIDDEN);
                            }
                        }
                        if (_this.overflowMode === 'Scrollable' && !ej2_base_4.isNullOrUndefined(_this.element.querySelector('.e-hscroll'))) {
                            var scrollRightNavEle = _this.element.querySelector('.e-scroll-right-nav');
                            var scrollLeftNavEle = _this.element.querySelector('.e-scroll-left-nav');
                            var hscrollBar = _this.element.querySelector('.e-hscroll-bar');
                            if (!ej2_base_4.isNullOrUndefined(scrollRightNavEle) && Math.abs((scrollRightNavEle.offsetWidth / 2) +
                                scrollRightNavEle.offsetLeft) > _this.cloneElement.offsetLeft + _this.cloneElement.offsetWidth) {
                                hscrollBar.scrollLeft -= 10;
                            }
                            if (!ej2_base_4.isNullOrUndefined(scrollLeftNavEle) && Math.abs((scrollLeftNavEle.offsetLeft + scrollLeftNavEle.offsetWidth) -
                                _this.cloneElement.offsetLeft) > (scrollLeftNavEle.offsetWidth / 2)) {
                                hscrollBar.scrollLeft += 10;
                            }
                        }
                        _this.cloneElement.style.pointerEvents = 'none';
                        var x = _this.cloneElement.getBoundingClientRect().left;
                        var y = _this.cloneElement.getBoundingClientRect().top;
                        var ele = document.elementFromPoint(x, y);
                        dropItem = ej2_base_1.closest(ele, '.' + CLS_TB_ITEM);
                        var scrollContentWidth = 0;
                        if (_this.overflowMode === 'Scrollable' && !ej2_base_4.isNullOrUndefined(_this.element.querySelector('.e-hscroll'))) {
                            scrollContentWidth = _this.element.querySelector('.e-hscroll-content').offsetWidth;
                        }
                        if (dropItem != null && !dropItem.isSameNode(_this.dragItem) &&
                            dropItem.closest('.' + CLS_TAB).isSameNode(_this.dragItem.closest('.' + CLS_TAB))) {
                            dropIndex = _this.getEleIndex(dropItem);
                            if (dropIndex < dragIndex &&
                                (Math.abs((dropItem.offsetLeft + dropItem.offsetWidth) -
                                    _this.cloneElement.offsetLeft) > (dropItem.offsetWidth / 2))) {
                                _this.dragAction(dropItem, dragIndex, dropIndex);
                            }
                            if (dropIndex > dragIndex &&
                                (Math.abs(dropItem.offsetWidth / 2) + dropItem.offsetLeft -
                                    scrollContentWidth) < _this.cloneElement.offsetLeft + _this.cloneElement.offsetWidth) {
                                _this.dragAction(dropItem, dragIndex, dropIndex);
                            }
                        }
                        _this.droppedIndex = _this.getEleIndex(_this.dragItem);
                        _this.trigger('dragging', dragArgs);
                    }
                },
                dragStop: this.itemDragStop.bind(this)
            });
            this.draggableItems.push(dragObj);
        };
        Tab.prototype.helper = function (e) {
            this.cloneElement = this.createElement('div');
            if (e.element) {
                this.cloneElement = (e.element.cloneNode(true));
                ej2_base_4.addClass([this.cloneElement], 'e-tab-clone-element');
                if (this.element.querySelector('.' + CLS_HEADER).classList.contains(CLS_CLOSE_SHOW)) {
                    ej2_base_4.addClass([this.cloneElement], CLS_CLOSE_SHOW);
                }
                ej2_base_4.removeClass([this.cloneElement.querySelector('.' + CLS_WRAP)], 'e-ripple');
                if (!ej2_base_4.isNullOrUndefined(this.cloneElement.querySelector('.e-ripple-element'))) {
                    ej2_base_4.remove(this.cloneElement.querySelector('.e-ripple-element'));
                }
                document.body.appendChild(this.cloneElement);
            }
            return this.cloneElement;
        };
        Tab.prototype.itemDragStart = function (e) {
            var _this = this;
            this.draggingItems = this.items.map(function (x) { return x; });
            this.dragItem = e.element;
            var dragArgs = {
                draggedItem: e.element,
                event: e.event,
                target: e.target,
                droppedItem: null,
                index: this.getEleIndex(this.dragItem),
                clonedElement: this.cloneElement,
                cancel: false
            };
            this.trigger('onDragStart', dragArgs, function (tabitemDragArgs) {
                if (tabitemDragArgs.cancel) {
                    ej2_base_1.detach(_this.cloneElement);
                }
                else {
                    _this.removeActiveClass();
                    ej2_base_4.addClass([_this.tbItems.querySelector('.' + CLS_INDICATOR)], CLS_HIDDEN);
                    _this.dragItem.querySelector('.' + CLS_WRAP).style.visibility = 'hidden';
                }
                if (ej2_base_6.isBlazor()) {
                    e.bindEvents(ej2_base_7.getElement(e.dragElement));
                }
            });
        };
        Tab.prototype.dragAction = function (dropItem, dragsIndex, dropIndex) {
            if (this.items.length > 0) {
                var item = this.draggingItems[dragsIndex];
                this.draggingItems.splice(dragsIndex, 1);
                this.draggingItems.splice(dropIndex, 0, item);
            }
            if (this.overflowMode === 'MultiRow') {
                dropItem.parentNode.insertBefore(this.dragItem, dropItem.nextElementSibling);
            }
            if (dragsIndex > dropIndex) {
                if (!(this.dragItem.parentElement).isSameNode(dropItem.parentElement)) {
                    if (this.overflowMode === 'Extended') {
                        if (dropItem.isSameNode(dropItem.parentElement.lastChild)) {
                            var popupContainer = this.dragItem.parentNode;
                            dropItem.parentNode.insertBefore(this.dragItem, dropItem);
                            popupContainer.insertBefore(dropItem.parentElement.lastChild, popupContainer.childNodes[0]);
                        }
                        else {
                            this.dragItem.parentNode.insertBefore((dropItem.parentElement.lastChild), this.dragItem.parentElement.childNodes[0]);
                            dropItem.parentNode.insertBefore(this.dragItem, dropItem);
                        }
                    }
                    else {
                        var lastEle = (dropItem.parentElement).lastChild;
                        if (dropItem.isSameNode(lastEle)) {
                            var popupContainer = this.dragItem.parentNode;
                            dropItem.parentNode.insertBefore(this.dragItem, dropItem);
                            popupContainer.insertBefore(lastEle, popupContainer.childNodes[0]);
                        }
                        else {
                            this.dragItem.parentNode.insertBefore((dropItem.parentElement).lastChild, this.dragItem.parentElement.childNodes[0]);
                            dropItem.parentNode.insertBefore(this.dragItem, dropItem);
                        }
                    }
                }
                else {
                    this.dragItem.parentNode.insertBefore(this.dragItem, dropItem);
                }
            }
            if (dragsIndex < dropIndex) {
                if (!(this.dragItem.parentElement).isSameNode(dropItem.parentElement)) {
                    if (this.overflowMode === 'Extended') {
                        this.dragItem.parentElement.appendChild(dropItem.parentElement.firstElementChild);
                        dropItem.parentNode.insertBefore(this.dragItem, dropItem.nextSibling);
                    }
                    else {
                        this.dragItem.parentNode.insertBefore((dropItem.parentElement).lastChild, this.dragItem.parentElement.childNodes[0]);
                        dropItem.parentNode.insertBefore(this.dragItem, dropItem);
                    }
                }
                else {
                    this.dragItem.parentNode.insertBefore(dropItem, this.dragItem);
                }
            }
        };
        Tab.prototype.itemDragStop = function (e) {
            var _this = this;
            ej2_base_1.detach(this.cloneElement);
            this.dragItem.querySelector('.' + CLS_WRAP).style.visibility = 'visible';
            document.body.style.cursor = '';
            var dragStopArgs = {
                draggedItem: this.dragItem,
                event: e.event,
                target: e.target,
                droppedItem: this.tbItem[this.droppedIndex],
                clonedElement: null,
                index: this.droppedIndex,
                cancel: false
            };
            this.trigger('dragged', dragStopArgs, function (tabItemDropArgs) {
                if (tabItemDropArgs.cancel) {
                    _this.refresh();
                }
                else {
                    if (_this.items.length > 0 && _this.draggingItems.length > 0) {
                        _this.items = _this.draggingItems;
                        _this.selectedItem = _this.droppedIndex;
                        _this.refresh();
                    }
                    else {
                        _this.dragItem.querySelector('.' + CLS_WRAP).style.visibility = '';
                        ej2_base_4.removeClass([_this.tbItems.querySelector('.' + CLS_INDICATOR)], CLS_HIDDEN);
                        _this.select(_this.droppedIndex);
                    }
                }
            });
        };
        Tab.prototype.enableTab = function (index, value) {
            var tbItems = ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element)[index];
            if (ej2_base_4.isNullOrUndefined(tbItems)) {
                return;
            }
            if (value === true) {
                tbItems.classList.remove(CLS_DISABLE, CLS_OVERLAY);
                tbItems.firstElementChild.setAttribute('tabindex', '-1');
            }
            else {
                tbItems.classList.add(CLS_DISABLE, CLS_OVERLAY);
                tbItems.firstElementChild.removeAttribute('tabindex');
                if (tbItems.classList.contains(CLS_ACTIVE)) {
                    this.select(index + 1);
                }
            }
            if (!ej2_base_4.isNullOrUndefined(this.items[index])) {
                this.items[index].disabled = !value;
                this.dataBind();
            }
            tbItems.setAttribute('aria-disabled', (value === true) ? 'false' : 'true');
        };
        Tab.prototype.addTab = function (items, index) {
            var _this = this;
            var addArgs = { addedItems: items, cancel: false };
            if (!this.isReplace) {
                this.trigger('adding', addArgs, function (tabAddingArgs) {
                    if (!tabAddingArgs.cancel) {
                        _this.addingTabContent(items, index);
                    }
                });
            }
            else {
                this.addingTabContent(items, index);
            }
            if (this.isReact) {
                this.renderReactTemplates();
            }
        };
        Tab.prototype.addingTabContent = function (items, index) {
            var _this = this;
            var lastEleIndex = 0;
            this.hdrEle = ej2_base_2.select('.' + CLS_HEADER, this.element);
            if (ej2_base_4.isNullOrUndefined(this.hdrEle)) {
                this.items = items;
                this.reRenderItems();
            }
            else {
                var itemsCount = ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element).length;
                if (itemsCount !== 0) {
                    lastEleIndex = this.lastIndex + 1;
                }
                if (ej2_base_4.isNullOrUndefined(index)) {
                    index = itemsCount - 1;
                }
                if (itemsCount < index || index < 0 || isNaN(index)) {
                    return;
                }
                if (itemsCount === 0 && !ej2_base_4.isNullOrUndefined(this.hdrEle)) {
                    this.hdrEle.style.display = '';
                }
                if (!ej2_base_4.isNullOrUndefined(this.bdrLine)) {
                    this.bdrLine.classList.add(CLS_HIDDEN);
                }
                this.tbItems = ej2_base_2.select('.' + CLS_TB_ITEMS, this.getTabHeader());
                this.isAdd = true;
                var tabItems = this.parseObject(items, index);
                this.isAdd = false;
                var i_1 = 0;
                var textValue_1;
                items.forEach(function (item, place) {
                    textValue_1 = item.headerTemplate || item.header.text;
                    if (!(ej2_base_4.isNullOrUndefined(item.headerTemplate || item.header) ||
                        ej2_base_4.isNullOrUndefined(textValue_1) || (textValue_1.length === 0) && ej2_base_4.isNullOrUndefined(item.header.iconCss))) {
                        _this.items.splice((index + i_1), 0, item);
                        i_1++;
                    }
                    if (_this.isTemplate && !ej2_base_4.isNullOrUndefined(item.header) && !ej2_base_4.isNullOrUndefined(item.header.text)) {
                        var no = lastEleIndex + place;
                        var ele = _this.createElement('div', {
                            id: CLS_CONTENT + _this.tabId + '_' + no, className: CLS_ITEM,
                            attrs: { role: 'tabpanel', 'aria-labelledby': CLS_ITEM + '_' + no }
                        });
                        _this.cntEle.insertBefore(ele, _this.cntEle.children[(index + place)]);
                        var eleTrg = _this.getTrgContent(_this.cntEle, no.toString());
                        _this.getContent(eleTrg, item.content, 'render', index);
                    }
                });
                this.tbObj.addItems(tabItems, index);
                if (!this.isReplace) {
                    this.trigger('added', { addedItems: items });
                }
                if (this.selectedItem === index) {
                    this.select(index);
                }
                else {
                    this.setActiveBorder();
                }
                this.bindDraggable();
            }
        };
        Tab.prototype.removeTab = function (index) {
            var _this = this;
            var trg = ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element)[index];
            if (ej2_base_4.isNullOrUndefined(trg)) {
                return;
            }
            var removeArgs = { removedItem: trg, removedIndex: index, cancel: false };
            this.trigger('removing', removeArgs, function (tabRemovingArgs) {
                if (!tabRemovingArgs.cancel) {
                    _this.tbObj.removeItems(index);
                    if (_this.allowDragAndDrop && (index !== Array.prototype.indexOf.call(_this.itemIndexArray, trg.id))) {
                        index = Array.prototype.indexOf.call(_this.itemIndexArray, trg.id);
                    }
                    _this.items.splice(index, 1);
                    _this.itemIndexArray.splice(index, 1);
                    _this.refreshActiveBorder();
                    var cntTrg = ej2_base_2.select('#' + CLS_CONTENT + _this.tabId + '_' + _this.extIndex(trg.id), ej2_base_2.select('.' + CLS_CONTENT, _this.element));
                    if (!ej2_base_4.isNullOrUndefined(cntTrg)) {
                        ej2_base_1.detach(cntTrg);
                    }
                    _this.trigger('removed', tabRemovingArgs);
                    if (trg.classList.contains(CLS_ACTIVE)) {
                        index = (index > ej2_base_4.selectAll('.' + CLS_TB_ITEM + ':not(.' + CLS_TB_POPUP + ')', _this.element).length - 1) ? index - 1 : index;
                        _this.enableAnimation = false;
                        _this.selectedItem = index;
                        _this.select(index);
                    }
                    if (ej2_base_4.selectAll('.' + CLS_TB_ITEM, _this.element).length === 0) {
                        _this.hdrEle.style.display = 'none';
                    }
                    _this.enableAnimation = true;
                }
            });
        };
        Tab.prototype.hideTab = function (index, value) {
            var items;
            var item = ej2_base_4.selectAll('.' + CLS_TB_ITEM, this.element)[index];
            if (ej2_base_4.isNullOrUndefined(item)) {
                return;
            }
            if (ej2_base_4.isNullOrUndefined(value)) {
                value = true;
            }
            this.bdrLine.classList.add(CLS_HIDDEN);
            if (value === true) {
                item.classList.add(CLS_HIDDEN);
                items = ej2_base_4.selectAll('.' + CLS_TB_ITEM + ':not(.' + CLS_HIDDEN + ')', this.tbItems);
                if (items.length !== 0 && item.classList.contains(CLS_ACTIVE)) {
                    if (index !== 0) {
                        for (var i = index - 1; i >= 0; i--) {
                            if (!this.tbItem[i].classList.contains(CLS_HIDDEN)) {
                                this.select(i);
                                break;
                            }
                            else if (i === 0) {
                                for (var k = index + 1; k < this.tbItem.length; k++) {
                                    if (!this.tbItem[k].classList.contains(CLS_HIDDEN)) {
                                        this.select(k);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    else {
                        for (var k = index + 1; k < this.tbItem.length; k++) {
                            if (!this.tbItem[k].classList.contains(CLS_HIDDEN)) {
                                this.select(k);
                                break;
                            }
                        }
                    }
                }
                else if (items.length === 0) {
                    this.element.classList.add(CLS_HIDDEN);
                }
            }
            else {
                this.element.classList.remove(CLS_HIDDEN);
                items = ej2_base_4.selectAll('.' + CLS_TB_ITEM + ':not(.' + CLS_HIDDEN + ')', this.tbItems);
                item.classList.remove(CLS_HIDDEN);
                if (items.length === 0) {
                    this.select(index);
                }
            }
            this.setActiveBorder();
            item.setAttribute('aria-hidden', '' + value);
            if (!this.isServerRendered && this.overflowMode === 'Popup' && this.tbObj) {
                this.tbObj.refreshOverflow();
            }
        };
        Tab.prototype.select = function (args, event) {
            var _this = this;
            var tabHeader = this.getTabHeader();
            this.tbItems = ej2_base_2.select('.' + CLS_TB_ITEMS, tabHeader);
            this.tbItem = ej2_base_4.selectAll('.' + CLS_TB_ITEM, tabHeader);
            this.content = ej2_base_2.select('.' + CLS_CONTENT, this.element);
            this.prevItem = this.tbItem[this.prevIndex];
            if (ej2_base_4.isNullOrUndefined(this.selectedItem) || (this.selectedItem < 0) || (this.tbItem.length <= this.selectedItem) || isNaN(this.selectedItem)) {
                this.selectedItem = 0;
            }
            else {
                this.selectedID = this.extIndex(this.tbItem[this.selectedItem].id);
            }
            var trg = this.tbItem[args];
            if (ej2_base_4.isNullOrUndefined(trg)) {
                this.selectedID = '0';
            }
            else {
                this.selectingID = this.extIndex(trg.id);
            }
            if (!ej2_base_4.isNullOrUndefined(this.prevItem) && !this.prevItem.classList.contains(CLS_DISABLE)) {
                this.prevItem.children.item(0).setAttribute('tabindex', '-1');
            }
            var eventArg = {
                event: event,
                previousItem: this.prevItem,
                previousIndex: this.prevIndex,
                selectedItem: this.tbItem[this.selectedItem],
                selectedIndex: this.selectedItem,
                selectedContent: !ej2_base_4.isNullOrUndefined(this.content) ?
                    ej2_base_2.select('#' + CLS_CONTENT + this.tabId + '_' + this.selectedID, this.content) : null,
                selectingItem: trg,
                selectingIndex: args,
                selectingContent: !ej2_base_4.isNullOrUndefined(this.content) ?
                    ej2_base_2.select('#' + CLS_CONTENT + this.tabId + '_' + this.selectingID, this.content) : null,
                isSwiped: this.isSwipeed,
                cancel: false
            };
            if (!this.initRender) {
                this.trigger('selecting', eventArg, function (selectArgs) {
                    if (!selectArgs.cancel) {
                        _this.selectingContent(args);
                    }
                });
            }
            else {
                this.selectingContent(args);
            }
        };
        Tab.prototype.selectingContent = function (args) {
            if (typeof args === 'number') {
                if (!ej2_base_4.isNullOrUndefined(this.tbItem[args]) && (this.tbItem[args].classList.contains(CLS_DISABLE) ||
                    this.tbItem[args].classList.contains(CLS_HIDDEN))) {
                    for (var i = args + 1; i < this.items.length; i++) {
                        if (this.items[i].disabled === false && this.items[i].visible === true) {
                            args = i;
                            break;
                        }
                        else {
                            args = 0;
                        }
                    }
                }
                if (this.tbItem.length > args && args >= 0 && !isNaN(args)) {
                    this.prevIndex = this.selectedItem;
                    if (this.tbItem[args].classList.contains(CLS_TB_POPUP)) {
                        this.setActive(this.popupHandler(this.tbItem[args]));
                        if ((!ej2_base_4.isNullOrUndefined(this.items) && this.items.length > 0) && this.allowDragAndDrop) {
                            this.tbItem = ej2_base_4.selectAll('.' + CLS_TB_ITEMS + ' .' + CLS_TB_ITEM, this.hdrEle);
                            var item = this.items[args];
                            this.items.splice(args, 1);
                            this.items.splice(this.tbItem.length - 1, 0, item);
                        }
                    }
                    else {
                        this.setActive(args);
                    }
                }
                else {
                    this.setActive(0);
                }
            }
            else if (args instanceof (HTMLElement)) {
                this.setActive(this.getEleIndex(args));
            }
        };
        Tab.prototype.getItemIndex = function (tabItemId) {
            var tabIndex;
            for (var i = 0; i < this.tbItem.length; i++) {
                var value = this.tbItem[i].getAttribute('data-id');
                if (tabItemId === value) {
                    tabIndex = i;
                    break;
                }
            }
            return tabIndex;
        };
        Tab.prototype.disable = function (value) {
            this.setCssClass(this.element, CLS_DISABLE, value);
            this.element.setAttribute('aria-disabled', '' + value);
        };
        Tab.prototype.getPersistData = function () {
            return this.addOnPersist(['selectedItem', 'actEleId']);
        };
        Tab.prototype.getModuleName = function () {
            return 'tab';
        };
        Tab.prototype.onPropertyChanged = function (newProp, oldProp) {
            var _this = this;
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                var prop = _a[_i];
                switch (prop) {
                    case 'width':
                        ej2_base_4.setStyleAttribute(this.element, { width: ej2_base_3.formatUnit(newProp.width) });
                        break;
                    case 'height':
                        ej2_base_4.setStyleAttribute(this.element, { height: ej2_base_3.formatUnit(newProp.height) });
                        if (!this.isServerRendered) {
                            this.setContentHeight(false);
                        }
                        break;
                    case 'cssClass':
                        if (oldProp.cssClass !== '') {
                            this.setCssClass(this.element, oldProp.cssClass, false);
                            this.setCssClass(this.element, newProp.cssClass, true);
                        }
                        else {
                            this.setCssClass(this.element, newProp.cssClass, true);
                        }
                        break;
                    case 'items':
                        if (!this.isServerRendered) {
                            this.evalOnPropertyChangeItems(newProp, oldProp);
                        }
                        break;
                    case 'showCloseButton':
                        this.setCloseButton(newProp.showCloseButton);
                        break;
                    case 'selectedItem':
                        if (!this.isServerRendered) {
                            this.selectedItem = oldProp.selectedItem;
                            this.select(newProp.selectedItem);
                        }
                        break;
                    case 'headerPlacement':
                        if (this.isServerRendered) {
                            this.serverChangeOrientation(newProp.headerPlacement, oldProp.headerPlacement);
                        }
                        else {
                            this.changeOrientation(newProp.headerPlacement);
                        }
                        break;
                    case 'enableRtl':
                        this.setRTL(newProp.enableRtl);
                        break;
                    case 'overflowMode':
                        this.tbObj.overflowMode = newProp.overflowMode;
                        this.tbObj.dataBind();
                        this.refreshActElePosition();
                        break;
                    case 'heightAdjustMode':
                        if (!this.isServerRendered) {
                            this.setContentHeight(false);
                            this.select(this.selectedItem);
                        }
                        break;
                    case 'scrollStep':
                        if (this.tbObj) {
                            this.tbObj.scrollStep = this.scrollStep;
                        }
                        break;
                    case 'allowDragAndDrop':
                        this.bindDraggable();
                        break;
                    case 'dragArea':
                        if (this.allowDragAndDrop) {
                            this.draggableItems.forEach(function (item) {
                                item.dragArea = _this.dragArea;
                            });
                            this.refresh();
                        }
                        break;
                }
            }
        };
        Tab.prototype.refreshActiveTab = function () {
            if (this.isReact) {
                this.clearTemplate();
            }
            if (!this.isTemplate) {
                if (this.element.querySelector('.' + CLS_TB_ITEM + '.' + CLS_ACTIVE)) {
                    ej2_base_1.detach(this.element.querySelector('.' + CLS_TB_ITEM + '.' + CLS_ACTIVE).children[0]);
                    ej2_base_1.detach(this.element.querySelector('.' + CLS_CONTENT).querySelector('.' + CLS_ACTIVE).children[0]);
                    var item = this.items[this.selectedItem];
                    var pos = (ej2_base_4.isNullOrUndefined(item.header) || ej2_base_4.isNullOrUndefined(item.header.iconPosition)) ? '' : item.header.iconPosition;
                    var css = (ej2_base_4.isNullOrUndefined(item.header) || ej2_base_4.isNullOrUndefined(item.header.iconCss)) ? '' : item.header.iconCss;
                    var text = item.headerTemplate || item.header.text;
                    var txtWrap = this.createElement('div', { className: CLS_TEXT, attrs: { 'role': 'presentation' } });
                    if (!ej2_base_4.isNullOrUndefined(text.tagName)) {
                        txtWrap.appendChild(text);
                    }
                    else {
                        this.headerTextCompile(txtWrap, text, this.selectedItem);
                    }
                    var tEle = void 0;
                    var icon = this.createElement('span', {
                        className: CLS_ICONS + ' ' + CLS_TAB_ICON + ' ' + CLS_ICON + '-' + pos + ' ' + css
                    });
                    var tConts = this.createElement('div', { className: CLS_TEXT_WRAP });
                    tConts.appendChild(txtWrap);
                    if ((text !== '' && text !== undefined) && css !== '') {
                        if ((pos === 'left' || pos === 'top')) {
                            tConts.insertBefore(icon, tConts.firstElementChild);
                        }
                        else {
                            tConts.appendChild(icon);
                        }
                        tEle = txtWrap;
                        this.isIconAlone = false;
                    }
                    else {
                        tEle = ((css === '') ? txtWrap : icon);
                        if (tEle === icon) {
                            ej2_base_1.detach(txtWrap);
                            tConts.appendChild(icon);
                            this.isIconAlone = true;
                        }
                    }
                    var wrapAtt = (item.disabled) ? {} : { tabIndex: '-1' };
                    tConts.appendChild(this.btnCls.cloneNode(true));
                    var wraper = this.createElement('div', { className: CLS_WRAP, attrs: wrapAtt });
                    wraper.appendChild(tConts);
                    if (pos === 'top' || pos === 'bottom') {
                        this.element.classList.add('e-vertical-icon');
                    }
                    this.element.querySelector('.' + CLS_TB_ITEM + '.' + CLS_ACTIVE).appendChild(wraper);
                    var crElem = this.createElement('div');
                    var cnt = item.content;
                    var eleStr = void 0;
                    if (typeof cnt === 'string' || ej2_base_4.isNullOrUndefined(cnt.innerHTML)) {
                        if (typeof cnt === 'string' && this.enableHtmlSanitizer) {
                            cnt = ej2_base_6.SanitizeHtmlHelper.sanitize(cnt);
                        }
                        if (cnt[0] === '.' || cnt[0] === '#') {
                            if (document.querySelectorAll(cnt).length) {
                                var eleVal = document.querySelector(cnt);
                                eleStr = eleVal.outerHTML.trim();
                                crElem.appendChild(eleVal);
                                eleVal.style.display = '';
                            }
                            else {
                                this.compileElement(crElem, cnt, 'content', this.selectedItem);
                            }
                        }
                        else {
                            this.compileElement(crElem, cnt, 'content', this.selectedItem);
                        }
                    }
                    else {
                        crElem.appendChild(cnt);
                    }
                    if (!ej2_base_4.isNullOrUndefined(eleStr)) {
                        if (this.templateEle.indexOf(cnt.toString()) === -1) {
                            this.templateEle.push(cnt.toString());
                        }
                    }
                    this.element.querySelector('.' + CLS_ITEM + '.' + CLS_ACTIVE).appendChild(crElem);
                }
            }
            else {
                var tabItems = this.element.querySelector('.' + CLS_TB_ITEMS);
                var element = this.element.querySelector('.' + CLS_TB_ITEM + '.' + CLS_ACTIVE);
                var id = element.id;
                var num = (id.indexOf('_'));
                var index = parseInt(id.substring(num + 1), 10);
                var header = element.innerText;
                var detachContent = this.element.querySelector('.' + CLS_CONTENT).querySelector('.' + CLS_ACTIVE).children[0];
                var mainContents = detachContent.innerHTML;
                ej2_base_1.detach(element);
                ej2_base_1.detach(detachContent);
                var attr = {
                    className: CLS_TB_ITEM + ' ' + CLS_TEMPLATE + ' ' + CLS_ACTIVE, id: CLS_ITEM + this.tabId + '_' + index,
                    attrs: {
                        role: 'tab', 'aria-controls': CLS_CONTENT + this.tabId + '_' + index,
                        'aria-disabled': 'false', 'aria-selected': 'true'
                    }
                };
                var txtString = this.createElement('span', {
                    className: CLS_TEXT, innerHTML: header, attrs: { 'role': 'presentation' }
                }).outerHTML;
                var conte = this.createElement('div', {
                    className: CLS_TEXT_WRAP, innerHTML: txtString + this.btnCls.outerHTML
                }).outerHTML;
                var wrap = this.createElement('div', { className: CLS_WRAP, innerHTML: conte, attrs: { tabIndex: '-1' } });
                tabItems.insertBefore(this.createElement('div', attr), tabItems.children[index + 1]);
                this.element.querySelector('.' + CLS_TB_ITEM + '.' + CLS_ACTIVE).appendChild(wrap);
                var crElem = this.createElement('div', { innerHTML: mainContents });
                this.element.querySelector('.' + CLS_CONTENT).querySelector('.' + CLS_ACTIVE).appendChild(crElem);
            }
            if (this.isReact) {
                this.renderReactTemplates();
            }
        };
        __decorate([
            ej2_base_1.Collection([], TabItem)
        ], Tab.prototype, "items", void 0);
        __decorate([
            ej2_base_1.Property('100%')
        ], Tab.prototype, "width", void 0);
        __decorate([
            ej2_base_1.Property('auto')
        ], Tab.prototype, "height", void 0);
        __decorate([
            ej2_base_1.Property('')
        ], Tab.prototype, "cssClass", void 0);
        __decorate([
            ej2_base_1.Property(0)
        ], Tab.prototype, "selectedItem", void 0);
        __decorate([
            ej2_base_1.Property('Top')
        ], Tab.prototype, "headerPlacement", void 0);
        __decorate([
            ej2_base_1.Property('Content')
        ], Tab.prototype, "heightAdjustMode", void 0);
        __decorate([
            ej2_base_1.Property('Scrollable')
        ], Tab.prototype, "overflowMode", void 0);
        __decorate([
            ej2_base_1.Property('Dynamic')
        ], Tab.prototype, "loadOn", void 0);
        __decorate([
            ej2_base_1.Property(false)
        ], Tab.prototype, "enablePersistence", void 0);
        __decorate([
            ej2_base_1.Property(false)
        ], Tab.prototype, "enableHtmlSanitizer", void 0);
        __decorate([
            ej2_base_1.Property(false)
        ], Tab.prototype, "showCloseButton", void 0);
        __decorate([
            ej2_base_1.Property()
        ], Tab.prototype, "scrollStep", void 0);
        __decorate([
            ej2_base_1.Property()
        ], Tab.prototype, "dragArea", void 0);
        __decorate([
            ej2_base_1.Property(false)
        ], Tab.prototype, "allowDragAndDrop", void 0);
        __decorate([
            ej2_base_1.Complex({}, TabAnimationSettings)
        ], Tab.prototype, "animation", void 0);
        __decorate([
            ej2_base_1.Event()
        ], Tab.prototype, "created", void 0);
        __decorate([
            ej2_base_1.Event()
        ], Tab.prototype, "adding", void 0);
        __decorate([
            ej2_base_1.Event()
        ], Tab.prototype, "added", void 0);
        __decorate([
            ej2_base_1.Event()
        ], Tab.prototype, "selecting", void 0);
        __decorate([
            ej2_base_1.Event()
        ], Tab.prototype, "selected", void 0);
        __decorate([
            ej2_base_1.Event()
        ], Tab.prototype, "removing", void 0);
        __decorate([
            ej2_base_1.Event()
        ], Tab.prototype, "removed", void 0);
        __decorate([
            ej2_base_1.Event()
        ], Tab.prototype, "onDragStart", void 0);
        __decorate([
            ej2_base_1.Event()
        ], Tab.prototype, "dragging", void 0);
        __decorate([
            ej2_base_1.Event()
        ], Tab.prototype, "dragged", void 0);
        __decorate([
            ej2_base_1.Event()
        ], Tab.prototype, "destroyed", void 0);
        Tab = __decorate([
            ej2_base_2.NotifyPropertyChanges
        ], Tab);
        return Tab;
    }(ej2_base_1.Component));
    exports.Tab = Tab;
});
