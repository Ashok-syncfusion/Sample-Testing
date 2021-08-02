define(["require", "exports", "./h-scroll", "./v-scroll", "./menu-scroll", "./menu-base", "./menu-base"], function (require, exports, h_scroll_1, v_scroll_1, menu_scroll_1, menu_base_1, menu_base_2) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(h_scroll_1);
    __export(v_scroll_1);
    __export(menu_scroll_1);
    exports.MenuAnimationSettings = menu_base_1.MenuAnimationSettings;
    exports.MenuItem = menu_base_2.MenuItem;
});
