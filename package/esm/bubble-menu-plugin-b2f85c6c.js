import { isNodeSelection, posToDOMRect } from '@tiptap/core';
import { PluginKey, Plugin } from 'prosemirror-state';
import tippy from 'tippy.js';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

var BubbleMenuView = /** @class */ (function () {
    function BubbleMenuView(_a) {
        var editor = _a.editor, element = _a.element, view = _a.view, tippyOptions = _a.tippyOptions;
        var _this = this;
        this.preventHide = false;
        this.mousedownHandler = function () {
            _this.preventHide = true;
        };
        this.mouseupHandler = function () {
            // console.log("MOUSE UP HANDLER")
            _this.focusHandler(); // <-- call the focus here
        };
        this.focusHandler = function () {
            // console.log("FOCUSSSS")
            _this.enabled = true;
            // we use `setTimeout` to make sure `selection` is already updated
            //@ts-ignore
            setTimeout(function () { return _this.update(_this.editor.view); });
        };
        this.blurHandler = function (_a) {
            var _b;
            var event = _a.event;
            //console.log("BLUR HANDLER")
            if (_this.preventHide) {
                _this.preventHide = false;
                return;
            }
            if ((event === null || event === void 0 ? void 0 : event.relatedTarget) &&
                ((_b = _this.element.parentNode) === null || _b === void 0 ? void 0 : _b.contains(event.relatedTarget))) {
                return;
            }
            _this.hide();
        };
        this.editor = editor;
        this.element = element;
        this.view = view;
        this.enabled = false;
        this.element.addEventListener("mousedown", this.mousedownHandler, {
            capture: true,
        });
        this.view.dom.addEventListener("mouseup", this.mouseupHandler, {
            capture: true,
        });
        // console.log("INSTANTIATED") // <-- this is called twice ! why?
        //this.editor.on("focus", this.focusHandler); // <-- removed this
        this.editor.on("blur", this.blurHandler);
        this.createTooltip(tippyOptions);
        this.element.style.visibility = "visible";
    }
    BubbleMenuView.prototype.createTooltip = function (options) {
        if (options === void 0) { options = {}; }
        this.tippy = tippy(this.view.dom, __assign({ duration: 0, getReferenceClientRect: null, content: this.element, interactive: true, trigger: "manual", placement: "top", hideOnClick: "toggle" }, options));
    };
    BubbleMenuView.prototype.update = function (view, oldState) {
        var state = view.state, composing = view.composing;
        var doc = state.doc, selection = state.selection;
        //console.log("UPDATE SELECTION ON", selection.from, selection.to)
        var isSame = oldState && oldState.doc.eq(doc) && oldState.selection.eq(selection);
        if (composing || isSame) {
            return;
        }
        var empty = selection.empty, $anchor = selection.$anchor, ranges = selection.ranges;
        // support for CellSelections
        var from = Math.min.apply(Math, ranges.map(function (range) { return range.$from.pos; }));
        var to = Math.max.apply(Math, ranges.map(function (range) { return range.$to.pos; }));
        // Sometime check for `empty` is not enough.
        // Doubleclick an empty paragraph returns a node size of 2.
        // So we check also for an empty text size.
        if (empty || !$anchor.parent.textContent) {
            this.hide();
            return;
        }
        // RETURN IF NOT ENABLED
        if (!this.enabled)
            return;
        // IF PASS SET DISABLED HERE
        this.enabled = false;
        this.tippy && this.tippy.setProps({
            getReferenceClientRect: function () {
                if (isNodeSelection(view.state.selection)) {
                    var node = view.nodeDOM(from);
                    if (node && node.getBoundingClientRect) {
                        // return node.getBoundingClientRect()
                        if (node.children[0]) {
                            return node.children[0].getBoundingClientRect(); // THIS
                        }
                        else {
                            return node.getBoundingClientRect();
                        }
                    }
                }
                //@ts-ignore
                return posToDOMRect(view, from, to);
            },
        });
        this.show();
    };
    BubbleMenuView.prototype.show = function () {
        this.tippy && this.tippy.show();
    };
    BubbleMenuView.prototype.hide = function () {
        this.tippy && this.tippy.hide();
    };
    BubbleMenuView.prototype.destroy = function () {
        this.tippy.destroy();
        this.tippy = null;
        this.element.removeEventListener("mousedown", this.mousedownHandler);
        this.view.dom.removeEventListener("mouseup", this.mouseupHandler); // <-- REMOVE THE EVENT
        this.editor.off("focus", this.focusHandler);
        this.editor.off("blur", this.blurHandler);
    };
    return BubbleMenuView;
}());
var BubbleMenuPluginKey = new PluginKey("menuBubble");
var BubbleMenuPlugin = function (options) {
    return new Plugin({
        key: BubbleMenuPluginKey,
        view: function (view) { return new BubbleMenuView(__assign({ view: view }, options)); },
    });
};

export { BubbleMenuPlugin as B, __spreadArray as _, BubbleMenuPluginKey as a, BubbleMenuView as b };
