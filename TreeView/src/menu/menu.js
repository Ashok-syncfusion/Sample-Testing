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
define(["require", "exports", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "../common/menu-base"], function (require, exports, ej2_base_1, ej2_base_2, menu_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VMENU = 'e-vertical';
    var SCROLLABLE = 'e-scrollable';
    var HAMBURGER = 'e-hamburger';
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu(options, element) {
            var _this = _super.call(this, options, element) || this;
            _this.tempItems = [];
            return _this;
        }
        Menu.prototype.getModuleName = function () {
            return 'menu';
        };
        Menu.prototype.preRender = function () {
            this.isMenu = true;
            this.element.id = this.element.id || ej2_base_2.getUniqueID('ej2-menu');
            if (this.template) {
                try {
                    if (document.querySelectorAll(this.template).length) {
                        this.template = document.querySelector(this.template).innerHTML.trim();
                        this.clearChanges();
                    }
                }
                catch (e) {
                }
            }
            else {
                this.updateMenuItems(this.items);
            }
            _super.prototype.preRender.call(this);
        };
        Menu.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            ej2_base_1.attributes(this.element, { 'role': 'menubar', 'tabindex': '0' });
            if (this.orientation === 'Vertical') {
                this.element.classList.add(VMENU);
                if (this.hamburgerMode && !this.target) {
                    this.element.previousElementSibling.classList.add(VMENU);
                }
                this.element.setAttribute('aria-orientation', 'vertical');
            }
            else {
                if (ej2_base_2.Browser.isDevice && !this.enableScrolling) {
                    this.element.parentElement.classList.add(SCROLLABLE);
                }
            }
            if (this.hamburgerMode) {
                this.element.parentElement.classList.add(HAMBURGER);
                if (this.orientation === 'Horizontal') {
                    this.element.classList.add('e-hide-menu');
                }
            }
        };
        Menu.prototype.updateMenuItems = function (items) {
            this.tempItems = items;
            this.items = [];
            this.tempItems.map(this.createMenuItems, this);
            this.setProperties({ items: this.items }, true);
            this.tempItems = [];
        };
        Menu.prototype.onPropertyChanged = function (newProp, oldProp) {
            var _this = this;
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                var prop = _a[_i];
                switch (prop) {
                    case 'orientation':
                        if (newProp.orientation === 'Vertical') {
                            this.element.classList.add(VMENU);
                            if (this.hamburgerMode) {
                                if (!this.target) {
                                    this.element.previousElementSibling.classList.add(VMENU);
                                }
                                this.element.classList.remove('e-hide-menu');
                            }
                            this.element.setAttribute('aria-orientation', 'vertical');
                        }
                        else {
                            this.element.classList.remove(VMENU);
                            if (this.hamburgerMode) {
                                if (!this.target) {
                                    this.element.previousElementSibling.classList.remove(VMENU);
                                }
                                this.element.classList.add('e-hide-menu');
                            }
                            this.element.removeAttribute('aria-orientation');
                        }
                        break;
                    case 'items':
                        if (!Object.keys(oldProp.items).length) {
                            this.updateMenuItems(newProp.items);
                        }
                        break;
                    case 'hamburgerMode':
                        if (!this.element.previousElementSibling) {
                            _super.prototype.createHeaderContainer.call(this);
                        }
                        if (newProp.hamburgerMode) {
                            this.element.parentElement.classList.add(HAMBURGER);
                            [].slice.call(this.element.getElementsByClassName('e-blankicon')).forEach(function (li) {
                                li.style[_this.enableRtl ? 'paddingRight' : 'paddingLeft'] = '';
                            });
                        }
                        else {
                            this.element.parentElement.classList.remove(HAMBURGER);
                            if (this.orientation === 'Vertical') {
                                this.setBlankIconStyle(this.element);
                            }
                        }
                        if (this.orientation === 'Vertical') {
                            if (!this.target) {
                                this.element.previousElementSibling.classList.add(VMENU);
                            }
                            this.element.classList.remove('e-hide-menu');
                        }
                        else {
                            if (this.target) {
                                this.element.previousElementSibling.classList.add(VMENU);
                            }
                            else {
                                this.element.previousElementSibling.classList.remove(VMENU);
                            }
                            this.element.classList[newProp.hamburgerMode ? 'add' : 'remove']('e-hide-menu');
                        }
                        break;
                    case 'title':
                        if (this.hamburgerMode && this.element.previousElementSibling) {
                            newProp.title = (this.enableHtmlSanitizer) ? ej2_base_2.SanitizeHtmlHelper.sanitize(newProp.title) : newProp.title;
                            this.element.previousElementSibling.querySelector('.e-menu-title').innerHTML = newProp.title;
                        }
                        break;
                    case 'target':
                        if (this.hamburgerMode) {
                            this.unWireEvents(oldProp.target);
                            this.wireEvents();
                            if (this.orientation === 'Horizontal') {
                                if (!newProp.target) {
                                    if (!this.element.previousElementSibling) {
                                        _super.prototype.createHeaderContainer.call(this);
                                    }
                                    this.element.previousElementSibling.classList.remove(VMENU);
                                }
                                else {
                                    this.element.previousElementSibling.classList.add(VMENU);
                                }
                                this.element.classList.add('e-hide-menu');
                            }
                        }
                        break;
                }
            }
            _super.prototype.onPropertyChanged.call(this, newProp, oldProp);
        };
        Menu.prototype.createMenuItems = function (item) {
            var idx;
            var i;
            var items = this.items;
            var pIdField = this.getField('parentId');
            if (item[pIdField]) {
                idx = this.getIndex(item[pIdField].toString(), true);
                for (i = 0; i < idx.length; i++) {
                    if (!items[idx[i]].items) {
                        items[idx[i]].items = [];
                    }
                    items = items[idx[i]].items;
                }
                items.push(item);
            }
            else {
                this.items.push(item);
            }
        };
        Menu.prototype.open = function () {
            _super.prototype.openHamburgerMenu.call(this);
        };
        Menu.prototype.close = function () {
            _super.prototype.closeHamburgerMenu.call(this);
        };
        __decorate([
            ej2_base_1.Property('Horizontal')
        ], Menu.prototype, "orientation", void 0);
        __decorate([
            ej2_base_1.Property('')
        ], Menu.prototype, "target", void 0);
        __decorate([
            ej2_base_1.Property(null)
        ], Menu.prototype, "template", void 0);
        __decorate([
            ej2_base_1.Property(false)
        ], Menu.prototype, "enableScrolling", void 0);
        __decorate([
            ej2_base_1.Property(false)
        ], Menu.prototype, "hamburgerMode", void 0);
        __decorate([
            ej2_base_1.Property('Menu')
        ], Menu.prototype, "title", void 0);
        __decorate([
            ej2_base_1.Property(false)
        ], Menu.prototype, "enableHtmlSanitizer", void 0);
        __decorate([
            ej2_base_2.Complex({ itemId: 'id', text: 'text', parentId: 'parentId', iconCss: 'iconCss', url: 'url', separator: 'separator', children: 'items' }, menu_base_1.FieldSettings)
        ], Menu.prototype, "fields", void 0);
        Menu = __decorate([
            ej2_base_1.NotifyPropertyChanges
        ], Menu);
        return Menu;
    }(menu_base_1.MenuBase));
    exports.Menu = Menu;
});
