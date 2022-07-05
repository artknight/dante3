import { Extension } from '@tiptap/core';
import { B as BubbleMenuPlugin } from '../../../bubble-menu-plugin-b2f85c6c.js';
import 'prosemirror-state';
import 'tippy.js';

var BubbleMenu = Extension.create({
    name: "bubbleMenu",
    defaultOptions: {
        element: null,
        tippyOptions: {},
    },
    addProseMirrorPlugins: function () {
        if (!this.options.element) {
            return [];
        }
        return [
            BubbleMenuPlugin({
                editor: this.editor,
                element: this.options.element,
                tippyOptions: this.options.tippyOptions,
            }),
        ];
    },
});

export { BubbleMenu };
