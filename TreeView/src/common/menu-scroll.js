define(["require", "exports", "@syncfusion/ej2-base", "./v-scroll", "./h-scroll"], function (require, exports, ej2_base_1, v_scroll_1, h_scroll_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function addScrolling(createElement, container, content, scrollType, enableRtl, offset) {
        var containerOffset;
        var contentOffset;
        var parentElem = container.parentElement;
        if (scrollType === 'vscroll') {
            containerOffset = offset || container.getBoundingClientRect().height;
            contentOffset = content.getBoundingClientRect().height;
        }
        else {
            containerOffset = container.getBoundingClientRect().width;
            contentOffset = content.getBoundingClientRect().width;
        }
        if (containerOffset < contentOffset) {
            return createScrollbar(createElement, container, content, scrollType, enableRtl, offset);
        }
        else if (parentElem) {
            var width = parentElem.getBoundingClientRect().width;
            if (width < containerOffset) {
                contentOffset = width;
                container.style.maxWidth = width + 'px';
                return createScrollbar(createElement, container, content, scrollType, enableRtl, offset);
            }
            return content;
        }
        else {
            return content;
        }
    }
    exports.addScrolling = addScrolling;
    function createScrollbar(createElement, container, content, scrollType, enableRtl, offset) {
        var scrollEle = createElement('div', { className: 'e-menu-' + scrollType });
        container.appendChild(scrollEle);
        scrollEle.appendChild(content);
        if (offset) {
            scrollEle.style.overflow = 'hidden';
            scrollEle.style.height = offset + 'px';
        }
        else {
            scrollEle.style.maxHeight = container.style.maxHeight;
            container.style.overflow = 'hidden';
        }
        var scrollObj;
        if (scrollType === 'vscroll') {
            scrollObj = new v_scroll_1.VScroll({ enableRtl: enableRtl }, scrollEle);
            scrollObj.scrollStep = ej2_base_1.select('.e-' + scrollType + '-bar', container).offsetHeight / 2;
        }
        else {
            scrollObj = new h_scroll_1.HScroll({ enableRtl: enableRtl }, scrollEle);
            scrollObj.scrollStep = ej2_base_1.select('.e-' + scrollType + '-bar', container).offsetWidth;
        }
        return scrollEle;
    }
    function destroyScroll(scrollObj, element, skipEle) {
        if (scrollObj) {
            var menu = ej2_base_1.select('.e-menu-parent', element);
            if (menu) {
                if (!skipEle || skipEle === menu) {
                    scrollObj.destroy();
                    element.parentElement.appendChild(menu);
                    ej2_base_1.detach(element);
                }
            }
            else {
                scrollObj.destroy();
                ej2_base_1.detach(element);
            }
        }
    }
    exports.destroyScroll = destroyScroll;
});
