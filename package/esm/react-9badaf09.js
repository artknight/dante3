import React, { useRef, useEffect } from 'react';
import './popovers/bubble-menu/bubble-menu-extension/bubble-menu.js';
import { B as BubbleMenuPlugin, a as BubbleMenuPluginKey } from './bubble-menu-plugin-b2f85c6c.js';

var BubbleMenu = function (props) {
    var element = useRef(null);
    useEffect(function () {
        var editor = props.editor, tippyOptions = props.tippyOptions;
        editor.registerPlugin(BubbleMenuPlugin({
            editor: editor,
            element: element.current,
            tippyOptions: tippyOptions,
        }));
        return function () {
            editor.unregisterPlugin(BubbleMenuPluginKey);
        };
    }, []);
    return (React.createElement("div", { ref: element, className: props.className, style: { visibility: "hidden" } }, props.children));
};

export { BubbleMenu as B };
