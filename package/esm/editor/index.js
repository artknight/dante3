import { _ as __spreadArray } from '../bubble-menu-plugin-b2f85c6c.js';
import React, { Component } from 'react';
import { mergeAttributes, ReactNodeViewRenderer, NodeViewWrapper, NodeViewContent, useEditor, EditorContent, FloatingMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import TextStyle from '@tiptap/extension-text-style';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Focus from '@tiptap/extension-focus';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import { ThemeProvider } from '@emotion/react';
import { _ as _defineProperty, a as _taggedTemplateLiteral, b as _extends, i as image, c as _objectSpread2, e as embed, d as _slicedToArray, v as video, f as _inherits, g as _createSuper, h as _classCallCheck, j as _assertThisInitialized, k as _createClass, l as videoRecorderIcon, m as divider, n as giphyLogo, s as speech, o as add } from '../icons-402d57b8.js';
import { Node, nodeInputRule } from '@tiptap/core';
import styled from '@emotion/styled';
import { math, lighten, opacify } from 'polished';
import '../image-c0dabe31.js';
import axios from 'axios';
import '../popovers/bubble-menu/bubble-menu-extension/bubble-menu.js';
import 'react-colorful';
import { Placeholder } from '../plugins/tipTapPlaceholder.js';
import { Color } from '../plugins/colorStyle.js';
import lowlight from 'lowlight';
import PropTypes from 'prop-types';
import mediumZoom from 'medium-zoom';
import { useCountdownTimer } from 'use-countdown-timer';
import MenuBar from '../popovers/menuBar.js';
import 'prosemirror-state';
import 'tippy.js';
import 'prosemirror-view';
import '../react-9badaf09.js';
import '../popovers/color.js';

var dante_font_family_sans = "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji";
var dante_font_family_sans_serif = "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"; // const dante_font_family_sans = `'jaf-bernino-sans', 'Playfair Display', 'Open Sans', "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Verdana, sans_serif;`;
// const dante_font_family_sans_serif = `'freight-text-pro', 'Merriweather', Georgia, Cambria, "Times New Roman", Times, serif;`;
// const dante_font_family_sans_serif = `'freight-text-pro','Playfair Display', 'Merriweather', Georgia, Cambria, "Times New Roman", Times, serif;`;

var tooltip_size = "32px";
var dante_control_color = "#333333";
var dante_inversed_color = "#FFFFFF";
var dante_accent_color = "#5BD974";
var dante_text_color = "#4a4a4a";
var theme = {
  dante_font_family_serif: dante_font_family_sans_serif,
  dante_font_family_sans: dante_font_family_sans,
  dante_font_family_mono: "Menlo, Monaco, Consolas, \"Courier New\", \"Courier\", monospace;",
  dante_font_family_base: dante_font_family_sans,
  // Editor
  dante_editor_font_size: "1.4rem",
  dante_editor_line_height: "1.9",
  //dante_font_family_sans_serif: "comic-sans",
  dante_visual_debugger: "false",
  dante_text_color: dante_text_color,
  dante_inversed_color: dante_inversed_color,
  dante_accent_color: dante_accent_color,
  dante_control_color: dante_control_color,
  dante_popover_color: dante_inversed_color,
  //dante_font_size_base:  '24px',
  //line_height_base:     '1.428571429', // 20/14
  tooltip_color: "#999",
  tooltip_background_color: "#fff",
  tooltip_border_color: "#999",
  tooltip_color_opacity: "0.44",
  tooltip_color_opacity_hover: "0.9",
  tooltip_background_opacity: "0",
  tooltip_border_width: "1px",
  tooltip_border_radius: "999em",
  tooltip_caret_size: "12px",
  menu_tone: "#444",
  tooltip_button_spacing: "9px",
  tooltip_menu_spacing: "22px",
  tooltip_items: 10,
  // Fix this and remove it
  tooltip_item_delay: 30,
  tooltip_size: tooltip_size,
  tooltip_line_height: tooltip_size,
  tooltip_default_transition: "100ms border-color, 100ms color",
  tooltip_forward_transition: "transform 100ms",
  tooltip_backward_transition: "transform 250ms",
  dante_code_background: "#000",
  dante_code_color: "#fff",
  // Menu
  //background: #2A2B32;
  dante_menu_height: "42px",
  dante_menu_background: dante_control_color,
  dante_menu_color: dante_inversed_color,
  dante_menu_border_radius: "4px",
  dante_menu_box_shadow: "0 1px 4px 1px #90909087",
  dante_menu_icon_size: "16px",
  dante_menu_icon_color: dante_inversed_color,
  dante_menu_icon_accent: dante_accent_color,
  dante_menu_divider_color: "#3D3E49",
  dante_menu_border_width: "0px",
  dante_menu_border_color: "none",
  dante_menu_caret_size: "8px",
  dante_bg_color: "transparent",
  // highlight theme
  // highlight theme
  // find other themes at https://highlightjs.org/static/demo/
  // https://github.com/highlightjs/highlight.js/tree/main/src/styles
  hljs_color: "#aaaaaa",
  hljs_background: "#000000",
  hljs_emphasis_color: "#a8a8a2",
  hljs_literal_color: "#ff55ff",
  hljs_selector_class_color: "#aaaaff",
  hljs_name_color: "#ffff55",
  hljs_title_color: "#aaaaaa",
  hljs_variable_color: "#ff5555",
  hljs_class_title_color: "#8888ff",
  hljs_link_color: "#ff55ff",
  hljs_deletion_color: "#55ffff"
};

function extensionFactory(options) {
  return Node.create({
    name: options.name,
    group: options.group || "block",
    content: "inline*",
    selectable: true,
    draggable: true,
    atom: options.atom || false,
    defaultOptions: options.options || {},
    priority: options.priority || 1,
    onBeforeCreate: function onBeforeCreate(_ref) {
      var editor = _ref.editor;
      // Before the view is created.
      options.onBeforeCreate && options.onBeforeCreate(editor);
    },
    onCreate: function onCreate(_ref2) {
      var editor = _ref2.editor;
      // The editor is ready.
      options.onCreate && options.onCreate(editor);
    },
    onUpdate: function onUpdate(_ref3) {
      var editor = _ref3.editor;
      // The content has changed.
      options.onUpdate && options.onUpdate(editor);
    },
    onSelectionUpdate: function onSelectionUpdate(_ref4) {
      var editor = _ref4.editor;
      // The selection has changed.
      options.onSelectionUpdate && options.onSelectionUpdate(editor);
    },
    onTransaction: function onTransaction(_ref5) {
      var editor = _ref5.editor;
          _ref5.transaction;
      // The editor state has changed.
      options.onTransaction && options.onTransaction(editor);
    },
    onFocus: function onFocus(_ref6) {
      var editor = _ref6.editor;
          _ref6.event;
      // The editor is focused.
      options.onFocus && options.onFocus(editor);
    },
    onBlur: function onBlur(_ref7) {
      var editor = _ref7.editor;
          _ref7.event;
      // The editor isn’t focused anymore.
      options.onBlur && options.onBlur(editor);
    },
    onDestroy: function onDestroy() {
      // The editor is being destroyed.
      options.onDestroy && options.onDestroy();
    },
    addKeyboardShortcuts: function addKeyboardShortcuts() {
      if (!options.keyboardShortcuts) return {};
      return options.keyboardShortcuts && options.keyboardShortcuts(this.editor);
    },
    addCommands: function addCommands() {
      return _defineProperty({}, "insert".concat(options.name), function insert(attributes) {
        return function (_ref8) {
          var chain = _ref8.chain;
          return chain().insertContent({
            type: options.name,
            attrs: {
              url: ""
            }
          }).run(); //.insertNode(options.name, attributes)
          //.insertText(" ")
          //.run();
        };
      });
    },
    addAttributes: function addAttributes() {
      return options.attributes || {};
    },
    parseHTML: function parseHTML() {
      return options.parseHTML || [{
        tag: options.tag
      }];
    },
    renderHTML: function renderHTML(_ref10) {
      var HTMLAttributes = _ref10.HTMLAttributes;
      console.log(HTMLAttributes);
      var attributes = options.dataSerializer ? options.dataSerializer(HTMLAttributes) : HTMLAttributes;
      return [options.tag, mergeAttributes(attributes)];
    },
    addNodeView: function addNodeView() {
      return ReactNodeViewRenderer(options.component);
    },
    addInputRules: function addInputRules() {
      var _this = this;

      if (!options.addInputRules) return [];
      return options.addInputRules().map(function (rule) {
        return nodeInputRule({
          find: rule,
          type: _this.type
        });
      });
    }
  });
}

var _templateObject$a;
var StyleWrapper$5 = styled(NodeViewWrapper)(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral(["\n  .content {\n    background: ", ";\n    padding: 1.2em;\n    padding-top: 0.5em;\n    padding-bottom: 0.5em;\n\n    select,\n    .language {\n      float: right;\n      color: ", ";\n      background-color: ", ";\n    }\n\n    margin-bottom: 10px;\n    margin-top: 10px;\n  }\n\n  /*\n  Qt Creator dark color scheme\n  */\n\n  .hljs {\n    color: ", ";\n    background: ", ";\n  }\n\n  .hljs-strong,\n  .hljs-emphasis {\n    color: ", ";\n  }\n\n  .hljs-bullet,\n  .hljs-quote,\n  .hljs-number,\n  .hljs-regexp,\n  .hljs-literal {\n    color: ", ";\n  }\n\n  .hljs-code .hljs-selector-class {\n    color: ", ";\n  }\n\n  .hljs-emphasis,\n  .hljs-stronge,\n  .hljs-type {\n    font-style: italic;\n  }\n\n  .hljs-keyword,\n  .hljs-selector-tag,\n  .hljs-function,\n  .hljs-section,\n  .hljs-symbol,\n  .hljs-name {\n    color: ", ";\n  }\n\n  .hljs-subst,\n  .hljs-tag,\n  .hljs-title {\n    color: ", ";\n  }\n\n  .hljs-attribute {\n    color: ", ";\n  }\n\n  .hljs-variable,\n  .hljs-params,\n  .hljs-title.class_,\n  .hljs-class .hljs-title {\n    color: ", ";\n  }\n\n  .hljs-string,\n  .hljs-selector-id,\n  .hljs-selector-attr,\n  .hljs-selector-pseudo,\n  .hljs-type,\n  .hljs-built_in,\n  .hljs-template-tag,\n  .hljs-template-variable,\n  .hljs-addition,\n  .hljs-link {\n    color: ", ";\n  }\n\n  .hljs-comment,\n  .hljs-meta,\n  .hljs-deletion {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.hljs_background;
}, function (props) {
  return props.theme.dante_text_color;
}, function (props) {
  return props.theme.dante_inversed_color;
}, function (props) {
  return props.theme.hljs_color;
}, function (props) {
  return props.theme.hljs_background;
}, function (props) {
  return props.theme.hljs_emphasis;
}, function (props) {
  return props.theme.hljs_literal_color;
}, function (props) {
  return props.theme.hljs_selector_class_color;
}, function (props) {
  return props.theme.hljs_name_color;
}, function (props) {
  return props.theme.hljs_title_color;
}, function (props) {
  return props.theme.hljs_attribute_color;
}, function (props) {
  return props.theme.hljs_variable_color;
}, function (props) {
  return props.theme.hljs_link_color;
}, function (props) {
  return props.theme.hljs_deletion_color;
});
function Code(props) {
  console.log(props.selected);

  function changeLanguage(e) {
    props.updateAttributes({
      language: e.target.value
    });
  }

  function language() {
    return props.node.attrs.language || "auto";
  }

  return /*#__PURE__*/React.createElement(StyleWrapper$5, {
    selected: props.selected
  }, /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, props.editor.isEditable && /*#__PURE__*/React.createElement("select", {
    contentEditable: false,
    onChange: changeLanguage,
    value: language()
  }, /*#__PURE__*/React.createElement("option", {
    value: "null"
  }, "auto"), /*#__PURE__*/React.createElement("option", {
    disabled: true
  }, "\u2014"), props.extension.options.lowlight.listLanguages().map(function (o) {
    return /*#__PURE__*/React.createElement("option", {
      value: o,
      key: o
    }, o);
  })), !props.editor.isEditable && /*#__PURE__*/React.createElement("span", {
    className: "language"
  }, language()), /*#__PURE__*/React.createElement(NodeViewContent, {
    as: "pre",
    className: "hljs"
  })));
}
var CodeBlockConfig = function CodeBlockConfig() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = {
    name: "CodeBlock",
    tag: "code-block",
    component: Code,
    attributes: {
      url: {
        default: ""
      }
    }
  };
  return Object.assign(config, options);
};

var _templateObject$9, _templateObject2$4, _templateObject3$3;
var EditorContainer = styled.div(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["\n  //@import url(\"//fonts.googleapis.com/css?family=Merriweather:400,700,400italic,700italic|Open+Sans:400,300,700,800\");\n\n  //@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,800&display=swap');\n\n  font-family: ", " !important;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  font-style: normal;\n  font-size: ", ";\n  line-height: ", ";\n  color: ", ";\n  background-color: ", ";\n\n  text-rendering: optimizeLegibility;\n\n  .ProseMirror {\n    &:focus-visible {\n      outline-color: transparent;\n      outline-width: 0px;\n    }\n  }\n\n  @media (max-width: 500px) {\n    font-size: ", ";\n    line-height: ", ";\n  }\n\n  .public-DraftEditorPlaceholder-root {\n    color: ", ";\n    position: absolute;\n    z-index: 0;\n    font-size: ", ";\n    background-color: transparent;\n  }\n\n  .graf--h2,\n  .graf--h3,\n  .graf--h4,\n  .graf--h5,\n  .graf--h6,\n  .graf--h7,\n  .postList,\n  .graf--hr,\n  .graf--figure,\n  .graf--blockquote,\n  .graf--pullquote,\n  .graf--p,\n  .graf--pre {\n    margin: 0;\n    //position:relative;\n  }\n\n  li {\n    counter-reset: ol0;\n    margin-left: 1.5em;\n  }\n\n  ul {\n    list-style-type: disc;\n    position: relative;\n  }\n\n  ol {\n    list-style-type: decimal;\n    position: relative;\n  }\n\n  li {\n    .graf--p {\n      margin: 0px;\n    }\n  }\n\n  ul[data-type=\"taskList\"] {\n    list-style: none;\n    padding: 0;\n\n    li {\n      display: flex;\n      align-items: center;\n\n      > label {\n        flex: 0 0 auto;\n        margin-right: 0.5rem;\n      }\n    }\n  }\n\n  .graf--code {\n    position: relative;\n    overflow: visible;\n\n    background: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    margin-bottom: 20px;\n    padding: 20px;\n    white-space: pre-wrap;\n    color: ", ";\n\n    .dante-code-syntax {\n      color: ", ";\n      position: absolute;\n      top: 4px;\n      right: 4px;\n      width: 165px;\n    }\n  }\n\n  .graf--pre {\n    background: #000 !important;\n    font-family: ", ";\n    font-size: 16px;\n    margin-bottom: 20px;\n    padding: 20px;\n    white-space: pre-wrap;\n    color: #fff !important;\n  }\n\n  .postList {\n    margin-bottom: 30px;\n  }\n\n  .graf--p {\n    code {\n      font-family: ", ";\n      background-color: #faf594;\n      color: ", ";\n      -webkit-box-decoration-break: clone;\n      box-decoration-break: clone;\n      font-weight: 200;\n      padding: 3px;\n    }\n  }\n\n  .graf--p,\n  .graf--blockquote,\n  .graf--pullquote {\n    margin-bottom: 30px;\n  }\n\n  .graf--code {\n    line-height: 1em;\n  }\n\n  .graf--p.dante--spinner {\n    position: relative;\n  }\n\n  .graf--hr {\n    hr {\n      border: 1px solid #ccc;\n      margin: 26px;\n    }\n  }\n\n  .public-DraftStyleDefault-pre {\n    overflow: inherit;\n  }\n\n  h1.graf--h {\n    font-family: ", ";\n    font-size: ", ";\n    font-style: normal;\n    font-weight: 800;\n    letter-spacing: -0.04em;\n    line-height: 1;\n    margin-bottom: 0.4em;\n    margin-left: -3px;\n    margin-top: 40px;\n    padding-top: 0;\n  }\n\n  h2.graf--h {\n    font-family: ", ";\n    font-size: ", ";\n    font-style: normal;\n    font-weight: 600;\n    letter-spacing: -0.04em;\n    line-height: 1;\n    margin-bottom: 0.4em;\n    margin-left: -3px;\n    margin-top: 40px;\n    padding-top: 0;\n  }\n\n  h3.graf--h {\n    font-family: ", ";\n    letter-spacing: -0.02em;\n    font-weight: 700;\n    font-style: normal;\n    font-size: ", ";\n    margin-left: -1.8px;\n    line-height: 1.2;\n    margin-top: 40px;\n    margin-bottom: 0.7em;\n    font-weight: 300;\n  }\n\n  h4.graf--h {\n    font-family: ", ";\n    letter-spacing: -0.02em;\n    font-weight: 300;\n    font-style: normal;\n    font-size: ", ";\n    margin-left: -1.5px;\n    line-height: 1.2;\n    color: ", ";\n    margin-top: 40px;\n    margin-bottom: 0.6em;\n  }\n\n  @media (max-width: 500px) {\n    h1.graf--h {\n      margin-top: 10px;\n      font-size: ", ";\n      line-height: ", ";\n    }\n\n    h2.graf--h {\n      margin-top: 10px;\n      font-size: ", ";\n      line-height: ", ";\n    }\n\n    h3.graf--h {\n      margin-top: 10px;\n      font-size: ", ";\n      line-height: ", ";\n    }\n  }\n\n  @media (max-width: 500px) {\n    .graf--h2 {\n      font-size: 2.6em;\n    }\n    .graf--h3 {\n      font-size: 1.6em;\n    }\n    .graf--h4 {\n      font-size: 1.4em;\n    }\n  }\n\n  .section--first .graf--h2.graf--first,\n  .section--first .graf--h3.graf--first,\n  .section--first .graf--h4.graf--first {\n    margin-top: 0;\n    padding-top: 0;\n  }\n\n  h2.graf--h + h2.graf--h {\n    margin-top: -8px;\n  }\n\n  h2.graf--h + h3.graf--h,\n  h2.graf--h + h4.graf--h {\n    margin-top: -6px;\n  }\n\n  h3.graf--h3 + h4.graf--h4,\n  h4.graf--h4 + h2.graf--h2 {\n    margin-top: 2px;\n  }\n\n  h3.graf--h3 + h4.graf--h4,\n  h4.graf--h4 + h3.graf--h3 {\n    margin-top: -2px;\n  }\n\n  h2.graf--h2 + .postList,\n  h3.graf--h3 + .postList,\n  h4.graf--h4 + .postList {\n    margin-top: 10px;\n  }\n\n  h2.graf--h + .graf--p.graf--empty,\n  h3.graf--h + .graf--p.graf--empty,\n  h4.graf--h + .graf--p.graf--empty {\n    margin-bottom: -7px;\n    margin-top: -7px;\n  }\n\n  h2.graf--h + .graf--p.graf--empty + h1.graf--h,\n  h3.graf--h + .graf--p.graf--empty + h1.graf--h,\n  h4.graf--h + .graf--p.graf--empty + h1.graf--h {\n    margin-top: -5px;\n  }\n\n  h2.graf--h + .graf--p.graf--empty + h3.graf--h,\n  h3.graf--h + .graf--p.graf--empty + h3.graf--h,\n  h4.graf--h + .graf--p.graf--empty + h3.graf--h,\n  h2.graf--h + .graf--p.graf--empty + h4.graf--h,\n  h3.graf--h + .graf--p.graf--empty + h4.graf--h,\n  h4.graf--h + .graf--p.graf--empty + h4.graf--h {\n    margin-top: -8px;\n  }\n\n  .graf--blockquote,\n  blockquote {\n    font-family: ", ";\n    border-left: 3px solid rgba(0, 0, 0, 0.8);\n\n    font-style: italic;\n    font-weight: 400;\n    letter-spacing: 0.16px;\n    letter-spacing: 0.02rem;\n    margin-left: -12px;\n    padding-left: 15px;\n    margin-bottom: 25px;\n    //font-size: 1.2em;\n    line-height: 1.5em;\n    margin-top: 20px;\n  }\n  .graf--blockquote + .graf--blockquote {\n    margin-top: -30px;\n    padding-top: 30px;\n  }\n\n  .graf--pullquote {\n    line-height: 1.4;\n    text-align: center;\n    font-size: 3.2em;\n    margin: 48px -160px;\n    border: none;\n    padding: 0;\n    font-family: ", ";\n    letter-spacing: 0.01rem;\n    font-weight: 400;\n    font-style: italic;\n    -webkit-transition: margin 100ms;\n    transition: margin 100ms;\n  }\n\n  .graf--pre + .graf--pre {\n    margin-top: -20px;\n  }\n\n  .graf--figure {\n    box-sizing: border-box;\n    clear: both;\n    margin-bottom: 30px;\n    outline: medium none;\n    position: relative;\n\n    &.is-mediaFocused .graf-image,\n    &.is-mediaFocused iframe {\n      box-shadow: 0 0 0 3px #57ad68;\n    }\n  }\n\n  .graf--mixtapeEmbed {\n    a {\n      text-decoration: none;\n    }\n    &.is-mediaFocused {\n      box-shadow: 0 0 0 1px #57ad68;\n    }\n\n    .graf--media-embed-close {\n      position: absolute;\n      top: 1px;\n      display: inline-block;\n      font-size: 2em;\n      width: 20px;\n      right: 10px;\n      text-shadow: 0px 0px 0px white;\n    }\n\n    border-color: ", ";\n    border-radius: 5px;\n    border-style: solid;\n    border-width: 1px;\n    box-sizing: border-box;\n    //color: rgba(0, 0, 0, 0.6);\n    font-family: ", ";\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 300;\n    letter-spacing: -0.02em;\n    margin-bottom: 40px;\n    margin-top: 40px;\n    max-height: 310px;\n    //max-width: 700px;\n    overflow: hidden;\n    padding: 30px;\n    position: relative;\n\n    .is-postEditMode iframe {\n      border: 3px solid rgba(255, 255, 255, 0);\n    }\n\n    .mixtapeImage {\n      background-position: center center;\n      background-repeat: no-repeat;\n      background-size: cover;\n      float: right;\n      height: 310px;\n      margin: -30px -30px 0 25px;\n      width: 310px;\n    }\n\n    .mixtapeImage--empty {\n      height: 0;\n      width: 0;\n    }\n\n    .markup--mixtapeEmbed-strong {\n      //color: #000;\n      display: block;\n      font-family: $dante-font-family-sans;\n      font-size: 30px;\n      font-style: normal;\n      font-weight: 300;\n      letter-spacing: -0.02em;\n      line-height: 1.2;\n      margin-bottom: 0px;\n    }\n\n    .markup--mixtapeEmbed-em {\n      display: block;\n      font-size: 16px;\n      font-style: normal;\n      margin-bottom: 10px;\n      max-height: 120px;\n      overflow: hidden;\n    }\n  }\n\n  .graf--h4 + .graf--figure,\n  .graf--h3 + .graf--figure,\n  .graf--h2 + .graf--figure {\n    margin-top: 15px;\n  }\n\n  .graf--first {\n    margin-top: 0;\n    padding-top: 0;\n  }\n\n  /*.graf--empty {\n    margin-bottom: -7px;\n    margin-top: -7px;\n  }*/\n\n  p[data-align=\"center\"],\n  .graf--h2[data-align=\"center\"],\n  .graf--h3[data-align=\"center\"],\n  .graf--h4[data-align=\"center\"],\n  .graf--blockquote[data-align=\"center\"] {\n    text-align: center;\n  }\n\n  .markup--anchor,\n  .graf--sectionCaption {\n    cursor: text;\n  }\n  .markup--anchor {\n    text-decoration: underline;\n    color: inherit;\n  }\n\n  .graf--divider {\n    margin-bottom: 30px;\n  }\n\n  .graf--divider span {\n    text-align: center;\n    width: 100%;\n    display: block;\n  }\n\n  .graf--divider span:before {\n    line-height: 1;\n    user-select: none;\n    font-weight: 400;\n    font-size: 25px;\n    letter-spacing: 18px;\n    content: \"...\";\n    display: inline-block;\n    margin-left: 0.6em;\n    position: relative;\n    color: ", ";\n    top: -3px;\n  }\n\n  .graf--layoutOutsetLeft {\n    margin-left: -160px;\n  }\n\n  .graf--layoutFillWidth {\n    margin-left: -200px;\n    margin-right: -200px;\n  }\n\n  .graf--layoutOutsetLeft {\n    width: 75%;\n  }\n  .graf--layoutInsetLeft,\n  .graf--layoutOutsetLeft {\n    float: left;\n    margin-right: 30px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n\n  .imageCaption {\n    //top: 0;\n    text-align: center;\n    margin-top: 0;\n    font-family: ", ";\n    letter-spacing: 0;\n    font-weight: 400;\n    font-size: 13px;\n    line-height: 1.4;\n    color: ", ";\n    outline: 0;\n    z-index: 300;\n    margin-top: 10px;\n    //position: relative;\n\n    .danteDefaultPlaceholder {\n      margin-bottom: -18px !important;\n      display: block;\n    }\n  }\n\n  // FIGURE WRAPPER\n\n  .aspectRatioPlaceholder {\n    margin: 0 auto;\n    position: relative;\n    width: 100%;\n  }\n\n  .graf-image:before,\n  .iframeContainer:before {\n    .is-postEditMode & {\n      bottom: 0;\n      content: \"\";\n      left: 0;\n      position: absolute;\n      right: 0;\n      top: 0;\n      z-index: 500;\n    }\n  }\n\n  .aspectRatioPlaceholder.is-locked .graf-image,\n  .aspectRatioPlaceholder.is-locked .graf-imageAnchor {\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  .graf-image,\n  .graf-imageAnchor,\n  .iframeContainer > iframe,\n  .iframeContainer {\n    box-sizing: border-box;\n    display: block;\n    margin: auto;\n    max-width: 100%;\n  }\n\n  .aspectRatioPlaceholder {\n    .image-upoader-loader {\n      position: absolute;\n      bottom: 0px;\n      left: 0%;\n      background-color: #fff;\n      width: 100%;\n      /* height: 3px; */\n      text-align: center;\n      top: 0px;\n      vertical-align: text-bottom;\n      opacity: 0.7;\n      p {\n        line-height: 5px;\n        /* font-weight: 700; */\n        /* text-transform: uppercase; */\n        font-size: 14px;\n        margin-top: 49%;\n      }\n    }\n  }\n\n  div[contenteditable=\"false\"] {\n    .danteDefaultPlaceholder {\n      display: none;\n    }\n  }\n\n  div[contenteditable=\"false\"] {\n    a.markup--anchor {\n      cursor: pointer;\n    }\n  }\n\n  figcaption .public-DraftStyleDefault-block {\n    text-align: center;\n  }\n\n  @media (max-width: 1200px) {\n    .imageCaption,\n    .postField--outsetCenterImage > .imageCaption {\n      position: relative;\n      width: 100%;\n      text-align: center;\n      left: 0;\n      margin-top: 10px;\n    }\n  }\n\n  figure.graf--layoutOutsetLeft {\n    .imageCaption,\n    .postField--outsetCenterImage > .imageCaption {\n      position: relative;\n      width: 100%;\n      text-align: center;\n      left: 0;\n      margin-top: 10px;\n    }\n  }\n\n  figure.is-defaultValue .imageCaption,\n  .graf--sectionCaption.is-defaultValue {\n    display: none;\n  }\n\n  .graf--figure.is-mediaFocused .imageCaption,\n  .graf--figure.is-defaultValue.is-selected .imageCaption,\n  section.is-mediaFocused .graf--sectionCaption,\n  .graf--sectionCaption.is-defaultValue.is-selected {\n    display: block;\n  }\n\n  .ProseMirror .empty-node::before {\n    position: absolute;\n    color: #aaa;\n    cursor: text;\n  }\n\n  .ProseMirror .empty-node:hover::before {\n    color: #777;\n  }\n\n  .ProseMirror h1.empty-node::before {\n    content: \"Title\";\n  }\n\n  /*.ProseMirror p.empty-node:first-of-type::before {\n    content: 'Contents';\n  }*/\n\n  /* Placeholder (at the top) */\n  .ProseMirror p.is-editor-empty:first-of-type::before {\n    content: attr(data-placeholder);\n    float: left;\n    color: #ced4da;\n    pointer-events: none;\n    height: 0;\n  }\n\n  .ProseMirror .is-node-empty:first-of-type::before {\n    content: attr(data-placeholder);\n    float: left;\n    color: #ced4da;\n    pointer-events: none;\n    height: 0;\n  }\n\n  /* Give a remote user a caret */\n  .collaboration-cursor__caret {\n    position: relative;\n    margin-left: -1px;\n    margin-right: -1px;\n    border-left: 1px solid #0d0d0d;\n    border-right: 1px solid #0d0d0d;\n    word-break: normal;\n    pointer-events: none;\n  }\n\n  /* Render the username above the caret */\n  .collaboration-cursor__label {\n    position: absolute;\n    top: -1.4em;\n    left: -1px;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    user-select: none;\n    color: #0d0d0d;\n    padding: 0.1rem 0.3rem;\n    border-radius: 3px 3px 3px 0;\n    white-space: nowrap;\n  }\n"])), function (props) {
  return props.theme.dante_font_family_serif;
}, function (props) {
  return props.theme.dante_editor_font_size;
}, function (props) {
  return props.theme.dante_editor_line_height;
}, function (props) {
  return props.theme.dante_text_color;
}, function (props) {
  return props.theme.dante_bg_color;
}, function (props) {
  return math("".concat(props.theme.dante_editor_font_size, " * 0.9"));
}, function (props) {
  return props.theme.dante_editor_line_height;
}, function (props) {
  return lighten(0.1, props.theme.dante_text_color);
}, function (props) {
  return math("".concat(props.theme.dante_editor_font_size, "* 0.9"));
}, function (props) {
  return props.theme.dante_code_background;
}, function (props) {
  return props.theme.dante_font_family_mono;
}, function (props) {
  return props.theme.dante_editor_font_size;
}, function (props) {
  return props.theme.dante_code_color;
}, function (props) {
  return props.theme.dante_code_background;
}, function (props) {
  return props.theme.dante_font_family_mono;
}, function (props) {
  return props.theme.dante_font_family_mono;
}, function (props) {
  return props.theme.dante_control_color;
}, function (props) {
  return props.theme.dante_font_family_sans;
}, function (props) {
  return math("".concat(props.theme.dante_editor_font_size, " * 3.2"));
}, function (props) {
  return props.theme.dante_font_family_sans;
}, function (props) {
  return math("".concat(props.theme.dante_editor_font_size, " * 2"));
}, function (props) {
  return props.theme.dante_font_family_sans;
}, function (props) {
  return math("".concat(props.theme.dante_editor_font_size, " * 1.3"));
}, function (props) {
  return props.theme.dante_font_family_sans;
}, function (props) {
  return math("".concat(props.theme.dante_editor_font_size, " * 1.2"));
}, function (props) {
  return lighten(0.3, props.theme.dante_text_color);
}, function (props) {
  return math("".concat(props.theme.dante_editor_font_size, " * 1.6"));
}, function (props) {
  return math("".concat(props.theme.dante_editor_line_height, " * 0.6"));
}, function (props) {
  return math("".concat(props.theme.dante_editor_font_size, " * 1.2"));
}, function (props) {
  return math("".concat(props.theme.dante_editor_line_height, " * 0.6"));
}, function (props) {
  return math("".concat(props.theme.dante_editor_font_size, " * 0.9"));
}, function (props) {
  return math("".concat(props.theme.dante_editor_line_height, " * 0.6"));
}, function (props) {
  return props.theme.dante_font_family_serif;
}, function (props) {
  return props.theme.dante_font_family_serif;
}, function (props) {
  return props.theme.dante_control_color;
}, function (props) {
  return props.theme.dante_font_family_sans;
}, function (_ref) {
  var theme = _ref.theme;
  return theme.dante_text_color;
}, function (props) {
  return props.theme.dante_font_family_sans;
}, function (props) {
  return lighten(0.2, props.theme.dante_text_color);
});
var InlinetooltipWrapper = styled.div(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["\n  // BASE\n  position: absolute;\n  z-index: 10;\n  width: ", ";\n  height: ", ";\n  -webkit-transition: opacity 100ms, width 0 linear 250ms;\n  transition: opacity 100ms, width 0 linear 250ms;\n  padding: 0;\n  font-size: 0;\n\n  opacity: 0;\n  pointer-events: none;\n\n  &.is-active {\n    opacity: 1;\n    pointer-events: auto;\n  }\n  &.is-scaled {\n    -webkit-transition-delay: 0;\n    transition-delay: 0;\n    width: auto;\n\n    .control {\n            -webkit-transition: -webkit-", ", ", ";\n              transition: ", ", ", ";\n       -webkit-transform: rotate(45deg) !important;\n           -ms-transform: rotate(45deg) !important;\n               transform: rotate(45deg) !important;\n            border-color: ", ";\n                   color: ", ";\n    }\n\n    .scale {\n       -webkit-transform: scale(1) !important;\n           -ms-transform: scale(1) !important;\n               transform: scale(1) !important;\n      -webkit-transition: -webkit-", ", ", " !important;\n              transition: ", ", ", " !important;\n    }\n\n  }\n\n  // MENU\n  .inlineTooltip-menu {\n    display: inline-block;\n    margin-left: ", ";\n    svg path{\n      fill: ", ";\n    }\n  }\n\n  .inlineTooltip-menu-fixed {\n    display: inline-block;\n    margin-left: 0px !important;\n  }\n\n  // BUTTON\n  .inlineTooltip-button {\n\n    // BASE\n\n    float: left;\n    margin-right: ", ";\n    display: inline-block;\n    position: relative;\n    outline: 0;\n    padding: 0;\n    vertical-align: bottom;\n    box-sizing: border-box;\n    border-radius: ", ";\n    cursor: pointer;\n    font-size: 14px;\n    text-decoration: none;\n    font-family: ", ";\n    letter-spacing: -0.02em;\n    font-weight: 400;\n    font-style: normal;\n    white-space: nowrap;\n    text-rendering: auto;\n    text-align: center;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -moz-font-feature-settings: \"liga\" on;\n    width: ", ";\n    height: ", ";\n    line-height: ", ";\n    -webkit-transition: 100ms border-color, 100ms color;\n    transition: 100ms border-color, 100ms color;\n    background: ", ";\n    border: ", " solid;\n    border-color: ", ";\n    color: ", ";\n\n    &:hover {\n      border-color: ", "\n      color: rgba(", ", ", ");\n    }\n\n    svg {\n      display: inline !important;\n      vertical-align: unset !important;\n    }\n\n    svg path {\n      fill: ", ";\n    }\n\n    // SCALE\n    &.scale {\n   \n       -webkit-transform: scale(0);\n           -ms-transform: scale(0);\n               transform: scale(0);\n      -webkit-transition: -webkit-", ", ", ";\n              transition: ", ", ", ";\n\n\n      svg path {\n        fill: ", ";\n      }\n    }\n\n    // CONTROL\n    &.control {\n      \n      display: block;\n      position: absolute;\n      margin-right: ", ";\n      padding-top: 4px;\n\n      -webkit-transition: -webkit-", ", ", ";\n              transition: ", ", ", ";\n       -webkit-transform: rotate(0);\n           -ms-transform: rotate(0);\n               transform: rotate(0);\n    }\n\n"])), function (props) {
  return props.theme.tooltip_size;
}, function (props) {
  return props.theme.tooltip_size;
}, function (props) {
  return props.theme.tooltip_backward_transition;
}, function (props) {
  return props.theme.tooltip_default_transition;
}, function (props) {
  return props.theme.tooltip_backward_transition;
}, function (props) {
  return props.theme.tooltip_default_transition;
}, function (props) {
  return props.theme.tooltip_color;
}, function (props) {
  return props.theme.tooltip_color;
}, function (props) {
  return props.theme.tooltip_backward_transition;
}, function (props) {
  return props.theme.tooltip_default_transition;
}, function (props) {
  return props.theme.tooltip_backward_transition;
}, function (props) {
  return props.theme.tooltip_default_transition;
}, function (props) {
  return math("".concat(props.theme.tooltip_size, " + ").concat(props.theme.tooltip_menu_spacing));
}, function (props) {
  return props.theme.tooltip_color;
}, function (props) {
  return props.theme.tooltip_button_spacing;
}, function (props) {
  return props.theme.tooltip_border_radius;
}, function (props) {
  return props.theme.dante_font_family_sans;
}, function (props) {
  return props.theme.tooltip_size;
}, function (props) {
  return props.theme.tooltip_size;
}, function (props) {
  return props.theme.tooltip_line_height;
}, function (props) {
  return props.theme.tooltip_background_color;
}, function (props) {
  return props.theme.tooltip_border_width;
}, function (props) {
  return opacify(0.2, props.theme.tooltip_border_color);
}, function (props) {
  return props.theme.tooltip_color;
}, function (props) {
  return opacify(0.4, props.theme.tooltip_border_color);
}, function (props) {
  return props.theme.tooltip_color;
}, function (props) {
  return props.theme.tooltip_color_opacity_hover;
}, function (props) {
  return props.theme.tooltip_color;
}, function (props) {
  return props.theme.tooltip_forward_transition;
}, function (props) {
  return props.theme.tooltip_default_transition;
}, function (props) {
  return props.theme.tooltip_forward_transition;
}, function (props) {
  return props.theme.tooltip_default_transition;
}, function (props) {
  return props.theme.tooltip_color;
}, function (props) {
  return props.theme.tooltip_menu_spacing;
}, function (props) {
  return props.theme.tooltip_forward_transition;
}, function (props) {
  return props.theme.tooltip_default_transition;
}, function (props) {
  return props.theme.tooltip_forward_transition;
}, function (props) {
  return props.theme.tooltip_default_transition;
});
styled.div(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteral(["\n  position: fixed;\n  padding: 20px;\n  height: 100vh;\n  background-color: #ccc;\n  top: 0px;\n  right: 0px;\n  width: 200px;\n  font-size: 0.8em;\n  .close {\n    width: 20px;\n    heigth: 20px;\n  }\n  .log-wrapper {\n    overflow-y: auto;\n    height: 100vh;\n  }\n"])));

function isEmpty(obj) {
  return obj && // 👈 null and undefined check
  Object.keys(obj).length === 0 && obj.constructor === Object;
}

function ReactMediumZoom(props) {
  /*static propTypes = {
    text: PropTypes.string,
    onOpen: PropTypes.func,
    onClosed: PropTypes.func
  }*/
  var imgRef = React.useRef();
  var zoom = React.useRef(mediumZoom());
  React.useEffect(function () {
    if (!props.editable) {
      zoom.current.attach(imgRef.current, {
        margin: 40,
        background: "#000"
      }); //.on('open', props.onOpen)
      //.on('closed', props.onClosed)
    }

    if (props.editable) {
      zoom.current.detach(imgRef.current);
    }
  }, [props.editable]);

  var imgProps = _extends({}, props);

  return /*#__PURE__*/React.createElement("img", _extends({
    ref: imgRef
  }, imgProps, {
    alt: imgRef
  }));
}

var _templateObject$8;
var StyleWrapper$4 = styled(NodeViewWrapper)(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral([""])));
function ImageBlock(props) {
  // console.log("IMAGE:", props);
  var imageUrl = props.node.attrs.url || props.node.attrs.src;
  React.useEffect(function () {
    replaceImg();
  }, []);

  function setImage(url) {
    props.updateAttributes({
      url: url
    });
  }

  function replaceImg() {
    var img = new Image();
    img.src = imageUrl; //props.node.attrs.src;
    // setImage(img.src)
    // exit only when not blob and not forceUload
    //if (!img.src.includes("blob:") && !props.node.attrs.forceUpload) {
    //  return;
    //}
    //if(props.node.attrs.aspect_ratio) return

    img.onload = function () {
      props.updateAttributes({
        width: img.width,
        height: img.height,
        aspect_ratio: getAspectRatio(img.width, img.height)
      });
      return handleUpload();
    };
  }

  function startLoader() {
    props.updateAttributes({
      loading: true
    });
  }

  function stopLoader() {
    props.updateAttributes({
      loading: false
    });
  }

  function handleUpload() {
    startLoader();
    uploadFile();
  }

  function formatData() {
    var formData = new FormData();

    if (props.node.attrs.file) {
      var formName = props.extension.options.upload_formName || 'file';
      formData.append(formName, props.node.attrs.file);
      return formData;
    } else {
      // TODO: check this
      formData.append("url", props.node.attrs.src);
      return formData;
    }
  }

  function uploadFile() {
    // custom upload handler
    if (props.extension.options.upload_handler) {
      return props.extension.options.upload_handler(formatData().get("file"), props);
    }

    if (!props.extension.options.upload_url) {
      stopLoader();
      return;
    } //this.props.blockProps.addLock()


    function getUploadUrl() {
      var url = props.extension.options.upload_url;

      if (typeof url === "function") {
        return url();
      } else {
        return url;
      }
    }

    function getUploadHeaders() {
      return props.extension.options.upload_headers || {};
    }

    axios({
      method: 'post',
      url: getUploadUrl(),
      headers: getUploadHeaders(),
      data: formatData(),
      onUploadProgress: function onUploadProgress(e) {
        console.log("PROCVESSS ", e);
        return updateProgressBar(e);
      }
    }).then(function (result) {
      uploadCompleted(result.data.url);

      if (props.extension.options.upload_callback) {
        return props.extension.options.upload_callback(result, props);
      }
    }).catch(function (error) {
      //this.uploadFailed()
      console.log("ERROR: got error uploading file ".concat(error));

      if (props.extension.options.upload_error_callback) {
        return props.extension.options.upload_error_callback(error, props);
      }
    });
    return function (json_response) {
      // return uploadCompleted("https://i.imgur.com/XUWx1hA.jpeg");
      return uploadCompleted(json_response.url);
    };
  }

  function uploadCompleted(url) {
    setImage(url); //this.props.blockProps.removeLock()

    stopLoader();
  }

  function updateProgressBar(e) {
    var complete = props.node.attrs.loading_progress;

    if (e.lengthComputable) {
      complete = e.loaded / e.total * 100;
      complete = complete != null ? complete : {
        complete: 0
      };
      props.updateAttributes({
        loading_progress: complete
      });
      console.log("complete: ".concat(complete));
    }
  }

  function getAspectRatio(w, h) {
    var maxWidth = 1000;
    var maxHeight = 1000;
    var ratio = 0;
    var width = w; // Current image width

    var height = h; // Current image height
    // Check if the current width is larger than the max

    if (width > maxWidth) {
      ratio = maxWidth / width; // get ratio for scaling image

      height = height * ratio; // Reset height to match scaled image

      width = width * ratio; // Reset width to match scaled image
      // Check if current height is larger than max
    } else if (height > maxHeight) {
      ratio = maxHeight / height; // get ratio for scaling image

      width = width * ratio; // Reset width to match scaled image

      height = height * ratio; // Reset height to match scaled image
    }

    var fill_ratio = height / width * 100;
    var result = {
      width: width,
      height: height,
      ratio: fill_ratio
    }; // console.log result

    return result;
  }

  function setActive() {
    props.editor.commands.setNodeSelection(props.getPos());
  }

  function handleClick(e) {
    console.log("clicked, ", e);
    setActive();
  }

  function directionClass() {
    switch (props.node.attrs.direction) {
      case "left":
        return "graf--layoutOutsetLeft";

      case "center":
        return "";

      case "wide":
        return "sectionLayout--fullWidth";

      case "fill":
        return "graf--layoutFillWidth";

      default:
        return "";
    }
  }

  function parseAspectRatio() {
    if (typeof props.node.attrs.aspect_ratio === "string") {
      try {
        return JSON.parse(props.node.attrs.aspect_ratio);
      } catch (error) {
        return {};
      }
    } else {
      return props.node.attrs.aspect_ratio;
    }
  }

  var _parseAspectRatio = parseAspectRatio(),
      width = _parseAspectRatio.width,
      height = _parseAspectRatio.height,
      ratio = _parseAspectRatio.ratio;

  return /*#__PURE__*/React.createElement(StyleWrapper$4, {
    selected: props.selected,
    as: "figure",
    className: "graf graf--figure ".concat(directionClass(), " ").concat(props.selected ? "is-selected is-mediaFocused" : "")
  }, /*#__PURE__*/React.createElement("div", {
    onClick: handleClick,
    className: "aspectRatioPlaceholder is-locked",
    style: {
      maxHeight: height,
      maxWidth: width
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aspect-ratio-fill",
    style: {
      paddingBottom: "".concat(ratio, "%")
    }
  }), /*#__PURE__*/React.createElement(ReactMediumZoom, {
    src: imageUrl,
    height: width,
    width: height,
    className: "graf-image ".concat(props.editor.isEditable ? ".no-zoom" : ""),
    disabled: props.editor.isEditable,
    contentEditable: false,
    editable: props.editor.isEditable,
    onOpen: function onOpen() {
      return false;
    },
    onClosed: function onClosed() {
      return console.log("Image closed");
    }
  })), /*#__PURE__*/React.createElement(NodeViewContent, {
    as: "figcaption",
    className: "imageCaption"
  }, props.node.content.size === 0 && /*#__PURE__*/React.createElement("span", {
    className: "danteDefaultPlaceholder"
  }, "type a caption (optional)")));
}
var ImageBlockConfig = function ImageBlockConfig() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = {
    name: "ImageBlock",
    icon: image,
    tag: "image-block",
    component: ImageBlock,
    atom: false,
    attributes: {
      url: {
        default: null
      },
      src: {
        default: null
      },
      width: {
        default: ""
      },
      height: {
        default: ""
      },
      loading: {
        default: false
      },
      loading_progress: {
        default: 0
      },
      caption: {
        default: "caption!"
      },
      direction: {
        default: "center"
      },
      file: {
        default: null
      },
      aspect_ratio: {
        default: {
          width: 200,
          height: 200,
          ratio: 100
        }
      }
    },
    dataSerializer: function dataSerializer(data) {
      return _objectSpread2(_objectSpread2({}, data), {}, {
        aspect_ratio: JSON.stringify(data.aspect_ratio),
        file: null
      });
    },
    options: {
      upload_handler: function upload_handler(file, ctx) {
        console.log("UPLOADED FILE", file);
      }
    },
    parseHTML: [{
      tag: "image-block"
    }, {
      tag: "img[src]"
    }],
    widget_options: {
      displayOnInlineTooltip: true,
      insertion: "upload",
      insert_block: "image"
    },
    keyboardShortcuts: function keyboardShortcuts(editor) {
      return {
        Enter: function Enter(_ref) {
          var editor = _ref.editor;

          if (editor.isActive("ImageBlock")) {
            //editor.commands.selectNodeForward()
            editor.commands.insertContent({
              type: "paragraph"
            });
            editor.chain().focus() //.insertContent("<strong>It's happening</strong>")
            .toggleNode("paragraph", "paragraph", {}).run();
            return true;
          }
        }
      };
    }
  };
  return Object.assign(config, options);
};

var _templateObject$7;
var StyleWrapper$3 = styled(NodeViewWrapper)(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n  ", "\n"])), function (props) {
  return "border: 3px solid ".concat(props.selected ? "purple" : "black", ";");
});
function EmbedBlock(props) {
  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      error = _React$useState2[0],
      setError = _React$useState2[1];

  React.useEffect(function () {
    initializeCard();
  }, []);

  function picture() {
    if (props.node.attrs.embed_data.images && props.node.attrs.embed_data.images.length > 0) {
      return props.node.attrs.embed_data.images[0].url;
    } else if (props.node.attrs.embed_data.thumbnail_url) {
      return props.node.attrs.embed_data.thumbnail_url;
    } else if (props.node.attrs.embed_data.image) {
      return props.node.attrs.embed_data.image;
    } else {
      return null;
    }
  }

  function classForImage() {
    if (picture()) {
      return "";
    } else {
      return "mixtapeImage--empty u-ignoreBlock";
    }
  }

  function deleteSelf() {
    props.deleteNode();
  }

  function updateData(data) {
    props.updateAttributes({
      embed_data: data
    });
  }

  function dataForUpdate() {
    return props.node.attrs;
  }

  function initializeCard() {
    if (!dataForUpdate()) {
      return;
    } // ensure data isnt already loaded
    // unless @dataForUpdate().endpoint or @dataForUpdate().provisory_text


    if (!dataForUpdate().provisory_text) {
      return;
    }

    return axios({
      method: "get",
      url: "".concat(props.extension.options.endpoint).concat(dataForUpdate().provisory_text, "&scheme=https")
    }).then(function (result) {
      return updateData(result.data); //JSON.parse(data.responseText)
    }).catch(function (error) {
      setError(error.response.data.error_message);
      return console.log("TODO: error");
    });
  }

  function handleClick(e) {//if(!this.props.blockProps.getEditor().props.read_only){
    //  e.preventDefault()
    //}
  }

  function parseEmbedData() {
    if (typeof props.node.attrs.embed_data === "string") {
      try {
        return JSON.parse(props.node.attrs.embed_data);
      } catch (error) {
        return {};
      }
    } else {
      return props.node.attrs.embed_data;
    }
  }

  var embed_data = parseEmbedData();
  return /*#__PURE__*/React.createElement(StyleWrapper$3, {
    selected: props.selected,
    className: "graf graf--mixtapeEmbed ".concat(props.selected ? "is-selected is-mediaFocused" : "")
  }, /*#__PURE__*/React.createElement(NodeViewContent, null, /*#__PURE__*/React.createElement("span", {
    contentEditable: false
  }, picture() ? /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    className: "js-mixtapeImage mixtapeImage ".concat(classForImage()),
    href: embed_data.url,
    style: {
      backgroundImage: "url('".concat(picture(), "')")
    },
    rel: "noreferrer"
  }) : undefined, error ? /*#__PURE__*/React.createElement("h2", null, error) : undefined, //!this.props.blockProps.getEditor().props.read_only
  props.editor.isEditable ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "graf--media-embed-close",
    onClick: deleteSelf
  }, "x") : null, /*#__PURE__*/React.createElement("a", {
    className: "markup--anchor markup--mixtapeEmbed-anchor",
    target: "_blank",
    href: embed_data.url,
    onClick: handleClick,
    contentEditable: false,
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "markup--strong markup--mixtapeEmbed-strong"
  }, embed_data.title), /*#__PURE__*/React.createElement("em", {
    className: "markup--em markup--mixtapeEmbed-em"
  }, embed_data.description)), /*#__PURE__*/React.createElement("span", {
    contentEditable: false
  }, embed_data.provider_url || embed_data.url))));
}
var EmbedBlockConfig = function EmbedBlockConfig() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = {
    icon: embed,
    name: "EmbedBlock",
    tag: "embed-block",
    component: EmbedBlock,
    widget_options: {
      displayOnInlineTooltip: true,
      insertion: "placeholder",
      insert_block: "embed"
    },
    options: {
      endpoint: "//noembed.com/embed?url=",
      placeholder: "Paste a link to embed content from another site (e.g. Twitter) and press Enter"
    },
    attributes: {
      embed_data: {
        default: {}
      },
      provisory_text: {
        default: null
      }
    },
    dataSerializer: function dataSerializer(data) {
      return _objectSpread2(_objectSpread2({}, data), {}, {
        embed_data: JSON.stringify(data.embed_data)
      });
    }
  };
  return Object.assign(config, options);
};

var _templateObject$6;
var StyleWrapper$2 = styled(NodeViewWrapper)(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral([""])));
function VideoBlock(props) {
  React.useEffect(function () {
    if (!isEmpty(props.node.attrs.embed_data)) {
      return;
    } // ensure data isnt already loaded


    if (!dataForUpdate().provisory_text) {
      return;
    }

    axios({
      method: "get",
      url: "".concat(props.extension.options.endpoint).concat(dataForUpdate().provisory_text, "&scheme=https")
    }).then(function (result) {
      updateData(result.data);
    }).catch(function (error) {
      return console.log("TODO: error");
    });
  }, []);

  function updateData(data) {
    props.updateAttributes({
      embed_data: data
    });
  }

  function dataForUpdate() {
    return props.node.attrs;
  }

  function renderEmbedHtml() {
    var embed_data = parseEmbedData();

    if (dataForUpdate().mediaRenderHandler) {
      return dataForUpdate().mediaRenderHandler();
    } else {
      return embed_data.media ? embed_data.media.html : embed_data.html;
    }
  }

  function parseEmbedData() {
    if (typeof props.node.attrs.embed_data === "string") {
      try {
        return JSON.parse(props.node.attrs.embed_data);
      } catch (error) {
        return {};
      }
    } else {
      return props.node.attrs.embed_data;
    }
  }

  return /*#__PURE__*/React.createElement(StyleWrapper$2, {
    as: "figure",
    className: "graf--figure graf--iframe graf--first ".concat(props.selected ? "is-selected is-mediaFocused" : ""),
    tabIndex: "0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iframeContainer",
    dangerouslySetInnerHTML: {
      __html: renderEmbedHtml()
    }
  }), /*#__PURE__*/React.createElement(NodeViewContent, {
    as: "figcaption",
    className: "imageCaption"
  }, props.node.content.size === 0 && /*#__PURE__*/React.createElement("span", {
    className: "danteDefaultPlaceholder"
  }, props.extension.options.caption)));
}
var VideoBlockConfig = function VideoBlockConfig() {
  return {
    icon: video,
    name: "VideoBlock",
    tag: "video-block",
    component: VideoBlock,
    atom: false,
    widget_options: {
      displayOnInlineTooltip: true,
      insertion: "placeholder",
      insert_block: "video"
    },
    options: {
      endpoint: "//noembed.com/embed?url=",
      placeholder: "Paste a YouTube, Vine, Vimeo, or other video link, and press Enter",
      caption: "Type caption for embed (optional)"
    },
    attributes: {
      embed_data: {
        default: {}
      },
      provisory_text: {
        default: null
      }
    },
    dataSerializer: function dataSerializer(data) {
      return _objectSpread2(_objectSpread2({}, data), {}, {
        embed_data: JSON.stringify(data.embed_data)
      });
    }
  };
};
/*
export const VideoBlockConfig = (options={})=>{
  let config = {
      title: 'insert video',
      editable: true,
      type: 'video',
      icon: video,
      block: VideoBlock,
      renderable: true,
      breakOnContinuous: true,
      wrapper_class: "graf--figure graf--iframe",
      selected_class: " is-selected is-mediaFocused",
      widget_options: {
        displayOnInlineTooltip: true,
        insertion: "placeholder",
        insert_block: "video"
      },
      options: {
        endpoint: '//noembed.com/embed?url=',
        placeholder: 'Paste a YouTube, Vine, Vimeo, or other video link, and press Enter',
        caption: 'Type caption for embed (optional)'
      },

      handleEnterWithoutText(ctx, block) {
        const { editorState } = ctx.state
        return ctx.onChange(addNewBlockAt(editorState, block.getKey()))
      },

      handleEnterWithText(ctx, block) {
        const { editorState } = ctx.state
        return ctx.onChange(addNewBlockAt(editorState, block.getKey()))
      }
  }

  return Object.assign(config, options)
}
*/

var _templateObject$5;
var StyleWrapper$1 = styled(NodeViewWrapper)(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n  .editable-content {\n    color: ", ";\n    background: ", ";\n    //border-color: ", ";\n    //border-width: 1px;\n    padding: 10px;\n    border-radius: 5px;\n    box-shadow: 0px 1px 3px 0px #9e9e9e54;\n    ::after {\n      content: attr(data-placeholder);\n      color: #b5b4b4;\n      font-size: 0.6em;\n      width: 100%;\n      border-top: 1px solid #c1c1c1;\n      padding-top: 1px;\n    }\n    button {\n      float: right;\n    }\n  }\n"])), function (props) {
  return props.theme.dante_text_color;
}, function (props) {
  return props.theme.dante_bg_color;
}, function (props) {
  return props.theme.dante_text_color;
});
function PlaceholderBlock(props) {
  console.log(props.node.attrs.blockKind);
  return /*#__PURE__*/React.createElement(StyleWrapper$1, {
    selected: props.selected
  }, /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement(NodeViewContent, {
    className: "editable-content",
    "data-placeholder": props.node.attrs.blockKind.options.placeholder
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return props.deleteNode();
    }
  }, "x"))));
}
var PlaceholderBlockConfig = function PlaceholderBlockConfig() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = {
    name: "PlaceholderBlock",
    tag: "placeholder-block",
    component: PlaceholderBlock,
    onUpdate: function onUpdate(editor) {//console.log("CONTENT CHANGED ON PLACEHOLDER!!!", editor)
    },
    keyboardShortcuts: function keyboardShortcuts(editor) {
      return {
        Enter: function Enter(_ref) {
          var editor = _ref.editor;

          //getNodeType('PlaceholderBlock' , editor.schema)
          //if (
          //  editor.view?.trackWrites?.pmViewDesc?.parent?.spec?.extension
          //    ?.name === "PlaceholderBlock"
          //)
          if (editor.isActive("PlaceholderBlock")) {
            /*console.log("YES MADA!", editor.view?.trackWrites?.pmViewDesc);
            const comp =
              editor.view.trackWrites.pmViewDesc.parent.node.attrs.blockKind
                .name;
            const text = editor.view.trackWrites.pmViewDesc.node.text;*/
            var parentComp = editor.state.selection.$anchor.parent;
            var comp = parentComp.attrs.blockKind;
            var text = parentComp.textContent;
            if (!(comp !== null && comp !== void 0 && comp.name)) return;
            editor.chain().toggleNode(comp.name, comp.name, {
              provisory_text: text
            }).run();
          } //return editor.commands.toggleBulletList()


          return false;
        }
      };
    },
    attributes: {
      blockKind: {
        default: {}
      }
    }
  };
  return Object.assign(config, options);
};

var ReactMediaRecorder = /*#__PURE__*/function (_Component) {
  _inherits(ReactMediaRecorder, _Component);

  var _super = _createSuper(ReactMediaRecorder);

  function ReactMediaRecorder(props) {
    var _this;

    _classCallCheck(this, ReactMediaRecorder);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "stopStream", function () {
      _this.mediaRecorder = null;
      _this.mediaChunk = [];

      if (_this.stream) {
        _this.stream.stop();

        _this.stream = null;
      }
    });

    _this.state = {
      asked: false,
      permission: false,
      available: false,
      recording: false,
      paused: false
    };
    _this.stream = null;
    _this.mediaRecorder = null;
    _this.mediaChunk = [];
    _this.start = _this.start.bind(_assertThisInitialized(_this));
    _this.stop = _this.stop.bind(_assertThisInitialized(_this));
    _this.pause = _this.pause.bind(_assertThisInitialized(_this));
    _this.resume = _this.resume.bind(_assertThisInitialized(_this));
    _this.initMediaRecorder = _this.initMediaRecorder.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ReactMediaRecorder, [{
    key: "init",
    value: function init() {
      if (typeof window === "undefined") return;

      if (window.location.protocol !== "https:" && window.location.hostname !== "localhost") {
        console.warn("getUserMedia() must be run from a secure origin: https or localhost.\nChanging protocol to https.");
      }

      if (!navigator.mediaDevices && !navigator.getUserMedia) {
        console.warn("Your browser doesn't support navigator.mediaDevices.getUserMedia and navigator.getUserMedia.");
      }

      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia; // stop hack
      // from http://stackoverflow.com/questions/11642926/stop-close-webcam-which-is-opened-by-navigator-getusermedia

      var MediaStream = window.MediaStream || window.webkitMediaStream;

      if (typeof MediaStream !== "undefined" && !("stop" in MediaStream.prototype)) {
        MediaStream.prototype.stop = function () {
          this.getAudioTracks().forEach(function (track) {
            track.stop();
          });
          this.getVideoTracks().forEach(function (track) {
            track.stop();
          });
        };
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.init();
      this.props.width;
      this.props.height;
      var constraints = this.props.constraints;

      var handleSuccess = function handleSuccess(stream, cb) {
        _this2.stream = stream;
        _this2.mediaChunk = [];

        _this2.setState({
          permission: true,
          asked: true,
          recording: false
        });

        _this2.props.onGranted();

        _this2.initMediaRecorder();

        cb();
      };

      var handleFailed = function handleFailed(err) {
        _this2.setState({
          asked: false
        });

        _this2.props.onDenied(err);
      };

      this.askPermission = function (cb) {
        if (navigator.mediaDevices) {
          navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
            return handleSuccess(stream, cb);
          }).catch(handleFailed);
        } else if (navigator.getUserMedia) {
          navigator.getUserMedia(constraints, handleSuccess, handleFailed);
        } else {
          var errMessage = "Browser doesn't support UserMedia API. Please try with another browser.";
          console.warn(errMessage);

          _this2.props.onError(new Error(errMessage));
        }
      };
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopStream();
    }
  }, {
    key: "initMediaRecorder",
    value: function initMediaRecorder() {
      var _this3 = this;

      try {
        var options = {};
        var types = ["video/webm;codecs=vp8", "video/webm", ""];
        if (this.props.mimeType) types.unshift(this.props.mimeType);

        for (var i = 0; i < types.length; i++) {
          var type = types[i];

          if (MediaRecorder.isTypeSupported(type)) {
            options.mimeType = type;
            break;
          }

          console.warn("".concat(type, " is not supported on your browser."));
        }

        var mediaRecorder = new MediaRecorder(this.stream, options);

        mediaRecorder.ondataavailable = function (ev) {
          if (ev.data && ev.data.size > 0) {
            _this3.mediaChunk.push(ev.data);
          }
        };

        this.mediaRecorder = mediaRecorder;
        this.setState({
          available: true
        });
      } catch (err) {
        //console.log(err);
        console.error("Failed to initialize MediaRecorder.", err);
        this.setState({
          available: false
        });
      }
    }
  }, {
    key: "start",
    value: function start() {
      var _this4 = this;

      this.askPermission(function () {
        if (!_this4.state.available) return;
        _this4.mediaChunk = [];

        _this4.mediaRecorder.start(_this4.props.timeSlice);

        _this4.setState({
          recording: true
        });

        _this4.props.onStart(_this4.stream);
      });
    }
  }, {
    key: "pause",
    value: function pause() {
      if (!this.state.recording) return;
      if (this.mediaRecorder.state === "inactive") return;
      this.mediaRecorder.stop();
      this.setState({
        paused: true
      });
      this.props.onPause();
    }
  }, {
    key: "resume",
    value: function resume() {
      if (!this.state.recording) return;
      this.initMediaRecorder();
      this.mediaRecorder.start(this.props.timeSlice);
      this.setState({
        paused: false
      });
      this.props.onResume(this.stream);
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!this.state.available) return;
      if (this.mediaRecorder.state === "inactive") return;
      this.mediaRecorder.stop();
      this.setState({
        recording: false
      });
      var blob = new Blob(this.mediaChunk, {
        type: "video/webm"
      });
      this.props.onStop(blob);
      this.stopStream();
    }
  }, {
    key: "render",
    value: function render() {
      this.state.asked;
      this.state.permission;
      this.state.recording;
      this.state.available;
      return /*#__PURE__*/React.createElement("div", {
        className: this.props.className
      }, this.props.render({
        start: this.start,
        stop: this.stop,
        pause: this.pause,
        resume: this.resume
      }));
    }
  }]);

  return ReactMediaRecorder;
}(Component);

ReactMediaRecorder.propTypes = {
  constraints: PropTypes.object,
  className: PropTypes.string,
  timeSlice: PropTypes.number,
  mimeType: PropTypes.string,
  render: PropTypes.func,
  onGranted: PropTypes.func,
  onDenied: PropTypes.func,
  onStart: PropTypes.func,
  onStop: PropTypes.func,
  onPause: PropTypes.func,
  onResume: PropTypes.func,
  onError: PropTypes.func
};
ReactMediaRecorder.defaultProps = {
  constraints: {
    audio: true,
    video: true
  },
  className: "",
  timeSlice: 0,
  mimeType: "",
  render: function render() {},
  onGranted: function onGranted() {},
  onDenied: function onDenied() {},
  onStart: function onStart() {},
  onStop: function onStop() {},
  onPause: function onPause() {},
  onResume: function onResume() {},
  onError: function onError() {}
};

var _templateObject$4, _templateObject2$3, _templateObject3$2, _templateObject4$2, _templateObject5$2, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
var VideoContainer = styled.div(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 0px;\n  margin-bottom: 10px;\n  //border: 1px solid ", ";\n  box-shadow: ", ";\n  border-radius: 10px;\n  position: relative;\n"])), function (props) {
  return props.theme.inversed_color;
}, function (props) {
  return props.theme.dante_control_color;
}, function (props) {
  return props.theme.dante_menu_box_shadow;
});
var VideoBody = styled.div(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["\n  padding-bottom: 20px;\n"])));
var green = "#00ab6b";
var red = "#e61742";
var gray = "#bbbbbb";
styled.div(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["\n  background: ", ";\n  position: absolute;\n  height: 13px;\n  width: 13px;\n  border-radius: 50%;\n  display: inline-block;\n  position: absolute;\n  top: 58px;\n  right: 25px;\n  box-shadow: inset -1px -2px 14px 0px #841744;\n"])), function (props) {
  return props.active ? red : green;
});
var EditorControls = styled.div(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral(["\n  position: absolute;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  -ms-flex-pack: center;\n  //margin-top: 25px;\n  //margin-left: 17px;\n  height: 100%;\n  z-index: 10;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  .controls-recording {\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n"])));
var StatusBar = styled.div(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteral(["\n  z-index: 10;\n  position: absolute;\n  height: 80%;\n  width: 100%;\n  background: ", ";\n  display: ", ";\n  align-items: center;\n\n  opacity: ", ";\n"])), function (props) {
  return props.loading ? "white" : "transparent";
}, function (props) {
  return props.loading ? "flex" : "none";
}, function (props) {
  return props.loading ? "0.9" : "1";
});
var VideoPlayer = styled.video(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  background: black;\n"])));
var SecondsLeft = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  //position: absolute;\n  font-size: 1rem;\n  right: 39px;\n  top: 19px;\n  font-size: 2em;\n  color: white;\n"])));
var RecButton = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: inline-block;\n  cursor: pointer;\n  -webkit-transition: all 0.25s ease;\n  transition: all 0.25s ease;\n  margin: 7px 17px;\n  text-indent: 36px;\n\n  text-indent: 36px;\n  color: #d9ece5;\n  text-shadow: 0px 1px 0px #101010;\n\n  &:hover {\n    //color: ", "\n    color: #d9ece5;\n  }\n\n  &:before {\n    position: absolute;\n    width: 26px;\n    height: 26px;\n    top: 4px;\n    content: \"\";\n    border-radius: 50px;\n    background: #e80415;\n    cursor: pointer;\n    left: 4px;\n  }\n\n  &.recording {\n    &:before {\n      position: absolute;\n      width: 20px;\n      height: 20px;\n      top: 6px;\n      content: \"\";\n      border-radius: 2px;\n      background: #e80415;\n      cursor: pointer;\n      left: 7px;\n    }\n  }\n\n  &:after {\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    top: 6px;\n    left: 6px;\n    content: \"\";\n    -webkit-transform: translate(-6px, -6px);\n    -ms-transform: translate(-6px, -6px);\n    -webkit-transform: translate(-6px, -6px);\n    -ms-transform: translate(-6px, -6px);\n    -webkit-transform: translate(-6px, -6px);\n    -ms-transform: translate(-6px, -6px);\n    transform: translate(-6px, -6px);\n    border-radius: 50%;\n    border: 2px solid #fff;\n    cursor: pointer;\n  }\n"])), green);
var Button = styled.button(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin: 11px;\n  outline: none;\n  height: 37px;\n  /* margin-right: 10px; */\n  /* text-align: center; */\n  border-radius: 40px;\n  background: ", ";\n  border: 2px solid ", ";\n  color: #ffffff;\n  -webkit-letter-spacing: 1px;\n  -moz-letter-spacing: 1px;\n  -ms-letter-spacing: 1px;\n  letter-spacing: 1px;\n  text-shadow: 0;\n  cursor: pointer;\n  -webkit-transition: all 0.25s ease;\n  transition: all 0.25s ease;\n\n  font-size: 12px;\n  font-weight: bold;\n\n  cursor: pointer;\n  transition: all 0.25s ease;\n  &:hover {\n    color: white;\n    background: ", ";\n  }\n  &:active {\n    //letter-spacing: 2px;\n    letter-spacing: 2px;\n  }\n  //&:after {\n  //  content:\"SUBMIT\";\n  //}\n\n  &.onclic {\n    width: 24px !important;\n    border-color: ", ";\n    border-width: 3px;\n    font-size: 0;\n    border-left-color: ", ";\n    animation: rotating 2s 0.25s linear infinite;\n\n    &:after {\n      content: \"\";\n    }\n    &:hover {\n      color: $green;\n      background: white;\n    }\n  }\n\n  &.right {\n    float: right;\n    margin-right: 26px;\n  }\n\n  @keyframes rotating {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"])), green, green, green, gray, green);

function VideoRecorderBlock(props) {
  var file = null;
  var app = React.useRef();
  var mediaRecorder = React.useRef();
  var video = React.useRef();

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2);
      _React$useState2[0];
      var setGranted = _React$useState2[1];

  var _React$useState3 = React.useState(""),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      rejectedReason = _React$useState4[0],
      setRejectedReason = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      fileReady = _React$useState6[0],
      setFileReady = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      loading = _React$useState8[0],
      setLoading = _React$useState8[1];

  var _React$useState9 = React.useState(null),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      loadingProgress = _React$useState10[0],
      setLoadingProgress = _React$useState10[1];

  var _useCountdownTimer = useCountdownTimer({
    timer: props.extension.options.seconds_to_record,
    onExpire: function onExpire() {
      mediaRecorder.current && mediaRecorder.current.stop();
    }
  }),
      countdown = _useCountdownTimer.countdown,
      start = _useCountdownTimer.start,
      reset = _useCountdownTimer.reset,
      pause = _useCountdownTimer.pause,
      isRunning = _useCountdownTimer.isRunning;

  React.useEffect(function () {
    //video = app.current.querySelector('video');
    if (props.node.attrs.url) {
      setUrlToVideo(props.node.attrs.url);
      playMode();
    }
  }, []);
  React.useEffect(function () {
    if (!props.node.attrs.url || props.node.attrs.url === "") return;
    video.current.src = props.node.attrs.url;
  }, [props.node.attrs.url]);

  function handleGranted() {
    setGranted(true);
    console.log("Permission Granted!");
  }

  function handleDenied(err) {
    setRejectedReason(err.name);
    console.log("Permission Denied!", err);
  }
  /*React.useEffect(()=>{
    if(recording && secondsLeft === props.extension.seconds_to_record){
    }
  }, [recording, secondsLeft])*/


  function handleStart(stream) {
    setFileReady(false);
    setStreamToVideo(stream);
    console.log("Recording Started."); // max seconds to record video

    if (!props.extension.options.seconds_to_record) return;
    start();
  }

  function handleStop(blob) {
    reset();
    setFileReady(true);
    releaseStreamFromVideo();
    console.log("Recording Stopped.");
    file = blob;
    setStreamToVideo(file);
    playMode();
  }

  function confirm() {
    downloadVideo(file);
  }

  function handlePause() {
    releaseStreamFromVideo();
    pause();
  }

  function handleResume(stream) {
    setStreamToVideo(stream);
    pause();
  }

  function handleError(err) {
    console.log(err);
  }

  function recordMode() {
    video.current.loop = false;
    video.current.controls = false;
    video.current.muted = true;
  }

  function playMode() {
    video.current.loop = false;
    video.current.controls = true;
    video.current.muted = true;
  }

  function setStreamToVideo(stream) {
    //let video = app.current.querySelector('video');
    recordMode(); // is a mediastream

    try {
      video.current.srcObject = stream;
    } catch (error) {
      video.current.src = URL.createObjectURL(stream);
    }
  }

  function setUrlToVideo(url) {
    playMode();
    video.current.src = url;
  }

  function releaseStreamFromVideo() {
    video.current.src = "";
    video.current.srcObject = null;
  }

  function downloadVideo(blob) {
    //video.current.loop = true
    setStreamToVideo(blob);
    playMode();
    uploadFile(blob);
  }

  function formatData() {
    var formData = new FormData();

    if (file) {
      var formName = props.extension.options.upload_formName || "file";
      formData.append(formName, file);
      return formData;
    } else {
      //formData.append('url', this.props.blockProps.data.get("url"))
      formData.append("url", props.node.attrs.url);
      return formData;
    }
  }

  function getUploadUrl() {
    var url = props.extension.options.upload_url;

    if (typeof url === "function") {
      return url();
    } else {
      return url;
    }
  }

  function getUploadHeaders() {
    return props.extension.options.upload_headers || {};
  }

  function stopLoader() {
    setLoading(false);
    setFileReady(false);
  }

  function uploadFile(blob) {
    var _this = this;

    file = blob; // custom upload handler

    if (props.extension.options.upload_handler) {
      return props.extension.options.upload_handler(formatData().get("file"), props, {
        uploadCompleted: uploadCompleted,
        updateProgressBar: updateProgressBar,
        uploadFailed: uploadFailed
      });
    }

    if (!props.extension.options.upload_url) {
      stopLoader();
      return;
    }

    setLoading(true);
    axios({
      method: "post",
      url: getUploadUrl(),
      headers: getUploadHeaders(),
      data: formatData(),
      onUploadProgress: function onUploadProgress(e) {
        return updateProgressBar(e);
      }
    }).then(function (result) {
      uploadCompleted(result.data.url);

      if (props.extension.options.upload_callback) {
        return props.extension.options.upload_callback(result, _this);
      }
    }).catch(function (error) {
      uploadFailed();
      console.log("ERROR: got error uploading file ".concat(error));

      if (props.extension.options.upload_error_callback) {
        return props.extension.options.upload_error_callback(error, _this);
      }
    });
    return function (json_response) {
      return uploadCompleted(json_response.url);
    };
  }

  function uploadFailed() {
    //this.props.blockProps.removeLock()
    stopLoader();
  }

  function uploadCompleted(url) {
    props.updateAttributes({
      url: url
    }); //this.setState({ url }, this.updateData)
    //this.props.blockProps.removeLock()

    stopLoader();
    file = null;
    setUrlToVideo(url);
  }

  function updateProgressBar(e) {
    var complete = loadingProgress;

    if (e.lengthComputable) {
      complete = e.loaded / e.total * 100;
      complete = complete != null ? complete : {
        complete: 0
      };
      setLoadingProgress(complete);
      return console.log("complete: ".concat(complete));
    }
  }

  function isReadOnly() {
    return !props.editor.isEditable;
  }

  return /*#__PURE__*/React.createElement(NodeViewWrapper, null, /*#__PURE__*/React.createElement(VideoContainer, {
    ref: app
  }, /*#__PURE__*/React.createElement(ReactMediaRecorder, {
    ref: mediaRecorder,
    constraints: {
      audio: {
        sampleSize: 16,
        channelCount: 2,
        echoCancellation: true,
        noiseSuppression: false
      },
      video: true
    },
    timeSlice: 10,
    onGranted: handleGranted,
    onDenied: handleDenied,
    onStart: function onStart(stream) {
      return handleStart(stream);
    },
    onStop: handleStop,
    onPause: handlePause,
    onResume: handleResume,
    onError: handleError,
    render: function render(_ref) {
      var start = _ref.start,
          stop = _ref.stop;
          _ref.pause;
          _ref.resume;
      return /*#__PURE__*/React.createElement("div", null, !isReadOnly() && /*#__PURE__*/React.createElement(StatusBar, {
        contentEditable: false,
        loading: loading
      }, loading && /*#__PURE__*/React.createElement(Loader, {
        toggle: loading,
        progress: loadingProgress
      })), /*#__PURE__*/React.createElement(VideoBody, null, !isReadOnly() && /*#__PURE__*/React.createElement(EditorControls, {
        contentEditable: false
      }, /*#__PURE__*/React.createElement("div", {
        className: "controls-recording"
      }, !loading && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RecButton, {
        onClick: function onClick(e) {
          e.preventDefault();
          isRunning ? stop() : start();
        },
        disabled: isRunning,
        className: isRunning ? "recording" : ""
      }, isRunning ? "recording. (".concat(countdown / 1000, " seconds left)") : "press button to start recording", rejectedReason && /*#__PURE__*/React.createElement("span", null, rejectedReason)), /*#__PURE__*/React.createElement(SecondsLeft, null))), fileReady && !loading && /*#__PURE__*/React.createElement(Button, {
        onClick: function onClick(e) {
          e.preventDefault();
          confirm();
        }
      }, "confirm recording upload ?")), /*#__PURE__*/React.createElement(VideoPlayer, {
        autoPlay: true,
        muted: true,
        ref: video
      }), /*#__PURE__*/React.createElement(NodeViewContent, {
        as: "figcaption",
        className: "imageCaption"
      }, props.node.content.size === 0 && /*#__PURE__*/React.createElement("span", {
        className: "danteDefaultPlaceholder"
      }, "type a caption (optional)"))));
    }
  })));
}

function Loader(_ref2) {
  var toggle = _ref2.toggle,
      progress = _ref2.progress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, toggle && /*#__PURE__*/React.createElement("div", {
    className: "image-upoader-loader",
    style: {
      width: "100%",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", null, progress === 100 ? "processing video..." : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", null, "uploading video "), Math.round(progress), "%"))));
}

var VideoRecorderBlockConfig = function VideoRecorderBlockConfig() {
  return {
    name: "VideoRecorderBlock",
    icon: videoRecorderIcon,
    tag: "recorded-video",
    component: VideoRecorderBlock,
    atom: false,
    attributes: {
      url: {
        default: null
      },
      src: {
        default: null
      },
      width: {
        default: ""
      },
      height: {
        default: ""
      },
      loading: {
        default: false
      },
      loading_progress: {
        default: 0
      },
      caption: {
        default: "caption!"
      },
      direction: {
        default: "center"
      },
      file: {
        default: null
      }
    },
    wrapper_class: "graf graf--video",
    selected_class: "is-selected",
    selectedFn: function selectedFn(_block) {},

    /* handleEnterWithoutText(ctx, block) {
    const { editorState } = ctx.state
    return ctx.onChange(addNewBlockAt(editorState, block.getKey()))
    },
    handleEnterWithText(ctx, block) {
    const { editorState } = ctx.state
    return ctx.onChange(RichUtils.insertSoftNewline(editorState))
    //return ctx.onChange(addNewBlockAt(editorState, block.getKey()))
    }, */
    widget_options: {
      displayOnInlineTooltip: true,
      insertion: "insertion",
      insert_block: "image"
    },
    options: {
      upload_formName: "file",

      /*upload_handler: (file, props, { uploadCompleted }) => {
        console.log("UPLOADED video");
        const url =
          "https://video.twimg.com/ext_tw_video/1388976569348235264/pu/vid/960x720/mCVk3dF_nGTgIZLX.mp4?tag=12";
        uploadCompleted(url);
      },*/
      seconds_to_record: 10000
    }
  };
};

var _templateObject$3;
var StyleWrapper = styled(NodeViewWrapper)(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral([""])));
function DividerBlock(props) {
  return /*#__PURE__*/React.createElement(StyleWrapper, {
    selected: props.selected,
    className: "graf graf--divider is-selected"
  }, /*#__PURE__*/React.createElement("span", null));
}
var DividerBlockConfig = function DividerBlockConfig() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = {
    icon: divider,
    name: "DividerBlock",
    tag: "divider-block",
    atom: true,
    component: DividerBlock,
    attributes: {},
    widget_options: {
      displayOnInlineTooltip: true,
      insertion: "insertion",
      insert_block: "divider-block"
    },
    priority: 1,
    parseHTML: [{
      tag: "divider-block"
    }, {
      tag: "HR"
    }],
    addInputRules: function addInputRules() {
      return [/^(?:---|—-|___\s|\*\*\*\s)$/];
    }
  };
  return Object.assign(config, options);
};

var _templateObject$2, _templateObject2$2, _templateObject3$1, _templateObject4$1, _templateObject5$1;
//import attribution from "../../../images/Poweredby_100px-White_VertText.png";

var GiphyBlock$1 = styled.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  //position: absolute;\n  //left: 128px;\n  //bottom: 48px;\n  //z-index: 10000;\n  //height: 251px;\n  //background: white;\n  //border: 1px solid #abaaaa;\n  //border-radius: 3px;\n  //width: 223px;\n  //box-shadow: 1px 1px 1px #ece3e3;\n"])));
var GridListOverflow = styled.div(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n  height: 187px;\n  overflow: auto;\n"])));
var GridList = styled.div(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n  display: flex;\n  display: flex;\n  flex-flow: row wrap;\n  margin-left: 0px;\n  width: 100%;\n  img {\n    flex: auto;\n    height: 250px;\n    min-width: 150px;\n    margin: 0 0px 8px 0;\n  }\n"])));
var Container = styled.div(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n  padding: 10px;\n  //background: \"#ccc\";\n"])));
var PickerBlock = styled.div(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 4px;\n\n  &:before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 8px;\n    background: #c4e17f;\n    background-image: -webkit-linear-gradient(\n      left,\n      #fff35c,\n      #fff35c,\n      #ff6666,\n      #ff6666,\n      #9933ff,\n      #9933ff,\n      #00ccff,\n      #00ccff,\n      #00ff99,\n      #00ff99\n    );\n    background-image: -moz-linear-gradient(\n      left,\n      #fff35c,\n      #fff35c,\n      #ff6666,\n      #ff6666,\n      #9933ff,\n      #9933ff,\n      #00ccff,\n      #00ccff,\n      #00ff99,\n      #00ff99\n    );\n    background-image: -o-linear-gradient(\n      left,\n      #fff35c,\n      #fff35c,\n      #ff6666,\n      #ff6666,\n      #9933ff,\n      #9933ff,\n      #00ccff,\n      #00ccff,\n      #00ff99,\n      #00ff99\n    );\n    background-image: linear-gradient(\n      left,\n      #fff35c,\n      #fff35c,\n      #ff6666,\n      #ff6666,\n      #9933ff,\n      #9933ff,\n      #00ccff,\n      #00ccff,\n      #00ff99,\n      #00ff99\n    );\n  }\n"])));

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onSearchSubmit", function (e) {
      if (e.key !== "Enter") {
        return;
      }

      var term = _this.input_ref.value;

      _this.search(term);
    });

    _defineProperty(_assertThisInitialized(_this), "search", function (term) {
      var kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "search";
      var url = kind === "search" ? "https://api.giphy.com/v1/gifs/search?q=".concat(term) : "https://api.giphy.com/v1/gifs/trending?q=".concat(term);
      var link = "".concat(url, "&limit=").concat(_this.state.limit, "&api_key=").concat(_this.props.apiKey);
      axios.get(link).then(function (response) {
        // handle success
        _this.setState({
          gifs: response.data.data
        }); // console.log(response);

      }).catch(function (error) {
        // handle error
        console.log(error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "limitSubmit", function (limit) {
      _this.setState({
        limit: limit
      }, function () {
        console.log("LIMIT:", this.state.limit);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var term = e.target.value;

      _this.setState({
        term: term
      });
    });

    _this.state = {
      gifs: [],
      limit: 10,
      term: ""
    };
    _this.input_ref = null;
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.search("", "trend");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(GiphyBlock$1, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(PickerBlock, null, /*#__PURE__*/React.createElement("input", {
        ref: function ref(c) {
          return _this2.input_ref = c;
        },
        type: "text",
        placeholder: "search gif",
        value: this.state.term,
        onChange: this.handleChange,
        onKeyDown: this.onSearchSubmit
      })), /*#__PURE__*/React.createElement(GridListOverflow, null, /*#__PURE__*/React.createElement(GridList, null, this.state.gifs.map(function (o) {
        return /*#__PURE__*/React.createElement("img", {
          alt: "giphy",
          key: "giphy-".concat(o.id),
          onClick: function onClick(_e) {
            return _this2.props.handleSelected(o);
          },
          height: o.images.fixed_width_downsampled.height,
          width: o.images.fixed_width_downsampled.width,
          src: o.images.fixed_width_downsampled.url
        });
      }))), /*#__PURE__*/React.createElement("div", {
        className: "flex justify-center mt-2"
      })));
    }
  }]);

  return App;
}(React.Component);

var _templateObject$1, _templateObject2$1;

var Modal = styled.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  //background-color: ", ";\n  position: fixed;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n"])), function (props) {
  return props.theme.dante_control_color;
});
var ModalWrapper = styled.div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  padding: 1.5rem;\n  overflow: hidden;\n  max-width: 28rem;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  display: inline-block;\n  border-radius: 0.3rem;\n  position: relative;\n  box-shadow: 1px 2px 7px 0px #27262673;\n  border: 1px solid #2f2f2f3b;\n  background-color: ", ";\n\n  input {\n    padding: 0.4em;\n    border: 1px solid #ccc;\n    width: 100%;\n  }\n"])), function (props) {
  return props.theme.dante_inversed_color;
});

var GiphyBlock = /*#__PURE__*/function (_React$Component) {
  _inherits(GiphyBlock, _React$Component);

  var _super = _createSuper(GiphyBlock);

  function GiphyBlock(props) {
    var _this;

    _classCallCheck(this, GiphyBlock);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "defaultData", function () {
      //const existing_data = this.props.block.getData().toJS();
      //return existing_data.embed_data || {};
      return {};
    });

    _defineProperty(_assertThisInitialized(_this), "deleteSelf", function (e) {
      e.preventDefault();

      _this.props.deleteNode();
    });

    _defineProperty(_assertThisInitialized(_this), "getAspectRatio", function (w, h) {
      var maxWidth = 1000;
      var maxHeight = 1000;
      var ratio = 0;
      var width = w; // Current image width

      var height = h; // Current image height
      // Check if the current width is larger than the max

      if (width > maxWidth) {
        ratio = maxWidth / width; // get ratio for scaling image

        height = height * ratio; // Reset height to match scaled image

        width = width * ratio; // Reset width to match scaled image
        // Check if current height is larger than max
      } else if (height > maxHeight) {
        ratio = maxHeight / height; // get ratio for scaling image

        width = width * ratio; // Reset width to match scaled image

        height = height * ratio; // Reset height to match scaled image
      }

      var fill_ratio = height / width * 100;
      var result = {
        width: width,
        height: height,
        ratio: fill_ratio
      }; // console.log result

      return result;
    });

    _defineProperty(_assertThisInitialized(_this), "selectImage", function (giphyblock) {
      var _giphyblock$images$or = giphyblock.images.original,
          url = _giphyblock$images$or.url,
          height = _giphyblock$images$or.height,
          width = _giphyblock$images$or.width;

      _this.props.editor.commands.insertContent({
        type: "ImageBlock",
        attrs: {
          url: url,
          aspect_ratio: _this.getAspectRatio(width, height),
          forceUpload: true
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selfDestroy", function () {
      _this.props.deleteNode();
    });

    _this.state = {
      open: true
    };
    return _this;
  }

  _createClass(GiphyBlock, [{
    key: "componentDidMount",
    value: function componentDidMount() {// console.log("GIPYH", this.props);
      //this.props.blockProps.toggleEditable();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // console.log(this.state.collection)
      return /*#__PURE__*/React.createElement(NodeViewWrapper, {
        className: "dante-giphy-wrapper"
      }, /*#__PURE__*/React.createElement("div", {
        contentEditable: false
      }, /*#__PURE__*/React.createElement(Modal, null, /*#__PURE__*/React.createElement(ModalWrapper, null, /*#__PURE__*/React.createElement("button", {
        onClick: this.selfDestroy
      }, "close"), /*#__PURE__*/React.createElement(App, {
        apiKey: this.props.extension.config.defaultOptions.key,
        handleSelected: function handleSelected(data) {
          _this2.selectImage(data);
        }
      })))));
    }
  }]);

  return GiphyBlock;
}(React.Component);
var GiphyBlockConfig = function GiphyBlockConfig() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = {
    icon: giphyLogo,
    name: "GiphyBlock",
    tag: "giphy-block",
    component: GiphyBlock,
    atom: true,
    widget_options: {
      displayOnInlineTooltip: true,
      insertion: "insertion",
      insert_block: "GiphyBlock"
    },
    options: {
      placeholder: "Search any gif on giphy",
      key: "97g39PuUZ6Q49VdTRBvMYXRoKZYd1ScZ"
    },
    attributes: {}
  };
  return Object.assign(config, options);
};
/*
export const GiphyBlockConfig = (options = {}) => {
  const config = {
    title: "add an image",
    type: "giphy",
    icon: GiphyLogo,
    block: GiphyBlock,
    editable: false,
    renderable: true,
    breakOnContinuous: true,
    wrapper_class: "graf graf--figure",
    selected_class: "is-selected is-mediaFocused",
    widget_options: {
      displayOnInlineTooltip: true,
      insertion: "insertion",
      insert_block: "giphy",
      // insertion: "func",
      // funcHandler: options.handleFunc,
    },
    options: {
      placeholder: "Search any gif on giphy",
    },
  };

  return Object.assign(config, options);
};*/

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var StartButton = styled.a(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  background-color: #ff5e5e;\n  width: 50px;\n  height: 50px;\n  display: block;\n  margin: 0 auto;\n  cursor: pointer;\n  text-align: center;\n  box-shadow: ", ";\n  svg {\n    margin-top: 12px;\n    fill: white;\n    display: inline;\n    vertical-align: unset !important;\n    &:hover {\n      fill: #222;\n    }\n  }\n"])), function (props) {
  return props.recording ? "inset -1px 1px 0px 0px #270101" : "inset 0px -1px 0px 0px #270101";
});
var RecorderWrapper = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 0px auto;\n  text-align: center;\n"])));
var RecorderLegend = styled.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: #797878;\n  font-size: 0.789em;\n  text-transform: uppercase;\n  font-family: futura-pt;\n"])));
var SpeechRecorderWrapper = styled(NodeViewWrapper)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background: #ccc;\n  padding: 20px;\n  background: #fdffd4;\n  padding: 21px;\n  border: 1px solid #f0f1d9;\n  position: relative;\n"])));
var DeleteSelf = styled.button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 10px;\n  top: 1px;\n"])));

var SpeechToTextBlock = /*#__PURE__*/function (_React$Component) {
  _inherits(SpeechToTextBlock, _React$Component);

  var _super = _createSuper(SpeechToTextBlock);

  function SpeechToTextBlock(props) {
    var _this;

    _classCallCheck(this, SpeechToTextBlock);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "deleteSelf", function (e) {
      e.preventDefault();

      _this.recognition.stop();

      _this.props.deleteNode();
    });

    _defineProperty(_assertThisInitialized(_this), "startButton", function (e) {
      e.preventDefault();

      if (_this.state.recording) {
        _this.recognition.stop();
      } else {
        _this.recognition.start();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resetRecorder", function (e) {
      e.preventDefault();

      _this.recognition.stop();

      _this.setState({
        transcript: []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "convert", function (e) {
      e.preventDefault();

      _this.recognition.stop();

      _this.props.editor.chain().focus().toggleNode("paragraph", "paragraph", {}).insertContent(_this.state.transcript.map(function (o) {
        return o;
      }).join(" ")).run();
    });

    _defineProperty(_assertThisInitialized(_this), "deleteSelf", function () {
      _this.props.deleteNode();
    });

    _this.state = {
      error: "",
      transcript: [],
      recording: false
    };
    return _this;
  }

  _createClass(SpeechToTextBlock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!("webkitSpeechRecognition" in window)) {
        alert("no speech recognition");
      } else {
        this.recognition = new window.webkitSpeechRecognition();
        this.recognition.continuous = true;
        this.recognition.interimResults = true;

        this.recognition.onstart = function (event) {
          _this2.setState({
            recording: true
          });
        };

        this.recognition.onresult = function (event) {
          var res = [];

          for (var i = 0; i < event.results.length; ++i) {
            res.push(event.results[i][0].transcript);
          }

          _this2.setState({
            transcript: res
          });
        };

        this.recognition.onerror = function (event) {
          console.log(event);
        };

        this.recognition.onend = function () {
          _this2.setState({
            recording: false
          });
        };
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/React.createElement(SpeechRecorderWrapper, null, this.props.editor.isEditable ? /*#__PURE__*/React.createElement(DeleteSelf, {
        href: "#",
        className: "graf--media-embed-close",
        onClick: this.deleteSelf
      }, "x") : null, /*#__PURE__*/React.createElement(RecorderWrapper, null, /*#__PURE__*/React.createElement(StartButton, {
        id: "start_button",
        className: "".concat(this.state.recording ? "recordingButton" : ""),
        recording: this.state.recording,
        onClick: function onClick(e) {
          _this3.startButton(e);
        }
      }, speech()), /*#__PURE__*/React.createElement(RecorderLegend, null, this.state.recording ? "stop dictation" : "start dictation"), this.state.transcript.length > 0 && /*#__PURE__*/React.createElement("div", {
        className: "d-flex justify-content-center"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: this.convert,
        className: "btn btn-success mr-1"
      }, "confirm"), /*#__PURE__*/React.createElement("button", {
        alt: "reset",
        onClick: this.resetRecorder,
        className: "btn btn-link"
      }, "or cancel"))), /*#__PURE__*/React.createElement(NodeViewContent, null, this.state.transcript.map(function (o) {
        return o;
      })));
    }
  }]);

  return SpeechToTextBlock;
}(React.Component);
var SpeechToTextBlockConfig = function SpeechToTextBlockConfig() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = {
    icon: speech,
    name: "SpeechToText",
    tag: "speech-to-text",
    component: SpeechToTextBlock,
    atom: true,
    widget_options: {
      displayOnInlineTooltip: true,
      insertion: "insertion",
      insert_block: "SpeechToText"
    },
    options: {},
    attributes: {}
  };
  return Object.assign(config, options);
};

//export {DanteImagePopoverConfig}
//export {DanteAnchorPopoverConfig} //'./popovers/addButton'
//export {DanteInlineTooltipConfig}
//export {DanteTooltipConfig}
var defaultPlugins = [
    ImageBlockConfig(),
    CodeBlockConfig(),
    DividerBlockConfig(),
    PlaceholderBlockConfig(),
    EmbedBlockConfig(),
    VideoBlockConfig(),
    GiphyBlockConfig(),
    VideoRecorderBlockConfig(),
    SpeechToTextBlockConfig(),
];

var AddButton = React.forwardRef(function (props, ref) {
    var display = props.display, position = props.position, widgets = props.widgets, editor = props.editor, fixed = props.fixed;
    var _a = React.useState(false), scaled = _a[0], setScaled = _a[1];
    var _b = React.useState(fixed ? "100%" : "0px"), scaledWidth = _b[0], setScaledWidth = _b[1];
    var fileInput = React.useRef(null);
    React.useEffect(function () {
        var val = scaled ? "300px" : "0";
        setScaledWidth(val);
    }, [scaled]);
    React.useEffect(function () {
        editor.on("selectionUpdate", function (_a) {
            _a.editor; _a.s;
            // The selection has changed.
            setScaled(false);
        });
    }, []);
    function scaledClass() {
        if (scaled || fixed) {
            return "is-scaled";
        }
        else {
            return "";
        }
    }
    function activeClass() {
        //if @props.show then "is-active" else ""
        if (isActive()) {
            return "is-active";
        }
        else {
            return "";
        }
    }
    function isActive() {
        return display && editor.isEditable;
    }
    function scale() {
        if (scaled)
            return;
        setScaled(true);
    }
    function collapse() {
        if (!scaled)
            return;
        setScaled(false);
    }
    function _toggleScaled(ev) {
        ev.preventDefault();
        if (scaled) {
            return collapse();
        }
        else {
            return scale();
        }
    }
    function getItems() {
        return widgets.filter(function (o) {
            return o.widget_options
                ? o.widget_options.displayOnInlineTooltip
                : null;
        });
    }
    function clickOnFileUpload(e, block) {
        fileInput.current.click();
        //this.collapse()
        //return this.hide()
    }
    function handlePlaceholder(block) {
        editor.commands.insertContent({
            type: "PlaceholderBlock",
            attrs: {
                blockKind: block
            }
        });
        console.log("placeholder: to be implemented", block);
    }
    function handleInsertion(block) {
        editor.commands.insertContent({
            type: block.name,
            attrs: {}
        });
        console.log("insertion: to be implemented", block);
    }
    function clickHandler(e, type) {
        //console.log("TYPE", type);
        var request_block = widgets.find(function (o) { return o.tag === type; });
        switch (request_block.widget_options.insertion) {
            case "upload":
                return clickOnFileUpload();
            case "placeholder":
                return handlePlaceholder(request_block);
            case "insertion":
                return handleInsertion(request_block);
            default:
                return console.log("WRONG TYPE FOR ".concat(request_block.widget_options.insertion));
        }
    }
    function insertImage(file) {
        if (!file)
            return;
        ({
            url: URL.createObjectURL(file),
            file: file
        });
        // cleans input image value
        fileInput.current.value = "";
        /*editor.chain()
          .focus()
          .setImage({ src: URL.createObjectURL(file) })
          .run()*/
        editor.commands.insertContent({
            type: "ImageBlock",
            attrs: {
                file: file,
                url: URL.createObjectURL(file)
            }
        });
    }
    function handleFileInput(e) {
        var fileList = e.target.files;
        // TODO: support multiple file uploads
        /*
        Object.keys(fileList).forEach (o)=>
          @.insertImage(fileList[0])
        */
        return insertImage(fileList[0]);
    }
    return (React.createElement(InlinetooltipWrapper, { ref: ref, className: "inlineTooltip ".concat(activeClass(), " ").concat(scaledClass()), style: position },
        !fixed && (React.createElement("button", { type: "button", className: "inlineTooltip-button control", title: "Close Menu", "data-action": "inline-menu", onClick: _toggleScaled }, add())),
        React.createElement("div", { className: "inlineTooltip-menu ".concat(fixed ? "inlineTooltip-menu-fixed" : ""), style: { width: "".concat(fixed ? "-1" : scaledWidth) } },
            getItems().map(function (item, i) {
                return (React.createElement(InlineTooltipItem, { title: "", item: item, key: i, clickHandler: clickHandler }));
            }),
            React.createElement("input", { type: "file", accept: "image/*", style: { display: "none" }, ref: fileInput, multiple: true, onChange: handleFileInput }))));
});
function InlineTooltipItem(_a) {
    var item = _a.item, clickHandler = _a.clickHandler, title = _a.title;
    function onMouseDown(e) {
        e.preventDefault();
        return clickHandler(e, item.tag);
    }
    return (React.createElement("button", { type: "button", className: "inlineTooltip-button scale", title: title, onMouseDown: onMouseDown, onClick: function (e) { return e.preventDefault(); }, style: { fontSize: "21px" } }, React.createElement("span", { className: "tooltip-icon" }, item.icon())));
}

function Editor(_a) {
    var widgets = _a.widgets, theme$1 = _a.theme, fixed = _a.fixed, content = _a.content, onUpdate = _a.onUpdate, readOnly = _a.readOnly, bodyPlaceholder = _a.bodyPlaceholder, extensions = _a.extensions;
    function basePlugins() {
        return [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                    HTMLAttributes: {
                        class: "graf graf--h",
                    },
                },
                paragraph: {
                    HTMLAttributes: {
                        class: "graf graf--p",
                    },
                },
                listItem: {
                    HTMLAttributes: {
                        class: "graf graf--li",
                    },
                },
                orderedList: {
                    HTMLAttributes: {
                        class: "graf graf--ol",
                    },
                },
            }),
            //Image,
            Placeholder.configure({
                placeholder: bodyPlaceholder || "Write something …",
            }),
            TextStyle,
            Color,
            Focus,
            Link.extend({
                addNodeView: function () {
                    return ReactNodeViewRenderer(Code);
                },
                //renderHTML({ HTMLAttributes }) {
                //  return ['a', HTMLAttributes, 0]
                //},
            }).configure({
                HTMLAttributes: {
                    class: "markup--anchor",
                },
            }),
            CodeBlockLowlight.extend({
                addNodeView: function () {
                    return ReactNodeViewRenderer(Code);
                },
            }).configure({ lowlight: lowlight }),
            OrderedList,
            ListItem,
            TaskList,
            TaskItem,
        ];
    }
    function optionalPlugins() {
        if (widgets)
            return widgets;
        return defaultPlugins;
    }
    function newPluginsConfig() {
        return optionalPlugins().map(function (o) { return extensionFactory(o); });
    }
    function pluginsConfig() {
        var newExtensions = extensions ? extensions : [];
        return basePlugins().concat(__spreadArray(__spreadArray([], newPluginsConfig(), true), newExtensions));
    }
    var editor = useEditor({
        extensions: pluginsConfig(),
        content: content,
        editable: !readOnly,
        onUpdate: function (_a) {
            var editor = _a.editor;
            // The content has changed.
            // console.log("changed!", editor.getJSON());
            onUpdate && onUpdate(editor);
            //setLog(JSON.parse(JSON.stringify(editor.getJSON())))
        },
    });
    //window.editor = editor;
    function isPopOverEnabledFor(a) {
        //console.log("ENABLED FOR ", editor.state.selection.$anchor.parent);
        var comp = editor.state.selection.$anchor.parent;
        if (comp.type.name === "paragraph")
            return true;
    }
    var resolvedTheme = theme$1 ? theme$1 : theme;
    return (React.createElement(ThemeProvider, { theme: resolvedTheme },
        React.createElement(EditorContainer
        //style={{width: '600px', margin: '0 auto'}}
        , null,
            React.createElement("div", null,
                React.createElement(MenuBar, { fixed: fixed, editor: editor }),
                React.createElement(EditorContent, { editor: editor }),
                editor && !fixed && (React.createElement(FloatingMenu, { editor: editor }, isPopOverEnabledFor() && (React.createElement("div", { style: { position: "absolute", top: -15, left: -60 } },
                    React.createElement(AddButton
                    //ref={sideBarControls}
                    , { 
                        //ref={sideBarControls}
                        fixed: fixed, position: {}, editor: editor, display: true , widgets: optionalPlugins() }))))),
                fixed && editor && (React.createElement(AddButton
                //ref={sideBarControls}
                //position={bounds}
                , { 
                    //ref={sideBarControls}
                    //position={bounds}
                    fixed: fixed, editor: editor, position: { width: "100%" }, display: true , widgets: optionalPlugins() }))))));
}

export { Editor as default };
