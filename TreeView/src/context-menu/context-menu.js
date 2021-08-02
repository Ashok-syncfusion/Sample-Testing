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
define(["require", "exports", "@syncfusion/ej2-base", "@syncfusion/ej2-popups", "../common/menu-base"], function (require, exports, ej2_base_1, ej2_popups_1, menu_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContextMenu = (function (_super) {
        __extends(ContextMenu, _super);
        function ContextMenu(options, element) {
            return _super.call(this, options, element) || this;
        }
        ContextMenu.prototype.preRender = function () {
            this.isMenu = false;
            this.element.id = this.element.id || ej2_base_1.getUniqueID('ej2-contextmenu');
            _super.prototype.preRender.call(this);
        };
        ContextMenu.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            ej2_base_1.attributes(this.element, { 'role': 'context menu', 'tabindex': '0' });
            this.element.style.zIndex = ej2_popups_1.getZindexPartial(this.element).toString();
        };
        ContextMenu.prototype.open = function (top, left, target) {
            _super.prototype.openMenu.call(this, null, null, top, left, null, target);
        };
        ContextMenu.prototype.close = function () {
            _super.prototype.closeMenu.call(this);
        };
        ContextMenu.prototype.onPropertyChanged = function (newProp, oldProp) {
            _super.prototype.onPropertyChanged.call(this, newProp, oldProp);
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                var prop = _a[_i];
                switch (prop) {
                    case 'filter':
                        this.close();
                        this.filter = newProp.filter;
                        break;
                    case 'target':
                        this.unWireEvents(oldProp.target);
                        this.wireEvents();
                        break;
                }
            }
        };
        ContextMenu.prototype.getModuleName = function () {
            return 'contextmenu';
        };
        __decorate([
            ej2_base_1.Property('')
        ], ContextMenu.prototype, "target", void 0);
        __decorate([
            ej2_base_1.Property('')
        ], ContextMenu.prototype, "filter", void 0);
        __decorate([
            ej2_base_1.Collection([], menu_base_1.MenuItem)
        ], ContextMenu.prototype, "items", void 0);
        ContextMenu = __decorate([
            ej2_base_1.NotifyPropertyChanges
        ], ContextMenu);
        return ContextMenu;
    }(menu_base_1.MenuBase));
    exports.ContextMenu = ContextMenu;
});
