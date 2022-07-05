import { d as _slicedToArray, p as close, q as bold, r as italic, t as h1, u as h2, w as h3, x as insertunorderedlist, y as insertorderedlist, z as code, A as blockquote, B as link } from '../icons-402d57b8.js';
import React, { useState } from 'react';
import { A as AnchorStyle, I as ImageTooltip } from '../image-c0dabe31.js';
import { B as BubbleMenu } from '../react-9badaf09.js';
import DanteTooltipColor from './color.js';
import 'axios';
import '@emotion/styled';
import 'polished';
import './bubble-menu/bubble-menu-extension/bubble-menu.js';
import '@tiptap/core';
import '../bubble-menu-plugin-b2f85c6c.js';
import 'prosemirror-state';
import 'tippy.js';
import 'react-colorful';

function DanteTooltipLink(_ref) {
  var enableLinkMode = _ref.enableLinkMode,
      selected = _ref.selected;

  function promptForLink(ev) {
    /*let selection = this.props.editorState.getSelection()
    if (!selection.isCollapsed()) {
      return this.props.enableLinkMode(ev)
    }*/
    return enableLinkMode(ev);
  }

  return /*#__PURE__*/React.createElement("li", {
    className: "dante-menu-button ".concat(selected ? "active" : ""),
    onMouseDown: promptForLink
  }, /*#__PURE__*/React.createElement("span", {
    className: "dante-icon"
  }, link()));
}

function MenuBar(_ref2) {
  var editor = _ref2.editor,
      fixed = _ref2.fixed;

  var _useState = useState({
    link_mode: false,
    menu_style: {
      minWidth: "200px"
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      linkState = _useState2[0],
      setLinkState = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      show = _useState4[0];
      _useState4[1];

  if (!editor) {
    return null;
  }

  function displayLinkMode() {
    if (linkState.link_mode) {
      return "dante-menu--linkmode";
    } else {
      return "";
    }
  }

  function itemClass(kind) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!opts) return "dante-menu-button ".concat(editor.isActive(kind) ? "active" : "");
    return "dante-menu-button ".concat(editor.isActive(kind, opts) ? "active" : "");
  }

  function handleInputEnter(e) {
    if (e.which === 13) {
      return confirmLink(e);
    }
  }

  function confirmLink(e) {
    e.preventDefault();
    var url = e.currentTarget.value;

    if (url === "") {
      editor.chain().focus().unsetLink().run();
    } else {
      editor.chain().focus().setLink({
        href: url
      }).run();
    }

    _disableLinkMode(e);
  }

  function _enableLinkMode(ev) {
    ev.preventDefault();
    setLinkState({
      link_mode: true,
      menu_style: {
        minWidth: "200px"
      }
    });
  }

  function _disableLinkMode(ev) {
    ev.preventDefault();
    setLinkState({
      link_mode: false,
      url: "",
      menu_style: {}
    });
  }

  function _clickBlockInlineStyle(style) {
    editor.chain().focus().setColor(style).run();
  }

  function fixedStyles() {
    if (!fixed) return {
      width: "".concat(11 * 43, "px")
    };
    if (fixed) return {
      position: "sticky",
      top: "0"
    };
  }

  function renderMenu() {
    if (!editor.isEditable) return null;
    if (editor.isActive("ImageBlock")) return null;
    return /*#__PURE__*/React.createElement(AnchorStyle, {
      fixed: fixed,
      className: "dante-menu ".concat(displayLinkMode()),
      style: fixedStyles()
    }, /*#__PURE__*/React.createElement("div", {
      className: "dante-menu-linkinput",
      style: {
        width: "".concat(11 * 43, "px")
      }
    }, /*#__PURE__*/React.createElement("input", {
      className: "dante-menu-input",
      placeholder: "put your souce here",
      onKeyPress: handleInputEnter //defaultValue={ this.getDefaultValue() }

    }), /*#__PURE__*/React.createElement("div", {
      className: "dante-menu-button",
      onMouseDown: _disableLinkMode
    }, /*#__PURE__*/React.createElement("span", {
      className: "dante-icon"
    }, close()))), /*#__PURE__*/React.createElement("div", {
      className: "dante-menu-buttons",
      style: linkState.menu_style
    }, /*#__PURE__*/React.createElement("li", {
      onClick: function onClick() {
        return editor.chain().focus().toggleBold().run();
      },
      className: itemClass("bold")
    }, /*#__PURE__*/React.createElement("span", {
      className: "dante-icon"
    }, bold())), /*#__PURE__*/React.createElement("li", {
      onClick: function onClick() {
        return editor.chain().focus().toggleItalic().run();
      },
      className: itemClass("italic")
    }, /*#__PURE__*/React.createElement("span", {
      className: "dante-icon"
    }, italic())), /*#__PURE__*/React.createElement(DanteTooltipColor, {
      styles: {},
      editor: editor,
      enableLinkMode: _enableLinkMode,
      value: "#000",
      style_type: "color",
      handleClick: _clickBlockInlineStyle,
      show: show
    }), /*#__PURE__*/React.createElement(DanteTooltipLink, {
      selected: editor.isActive("link"),
      editor: editor,
      enableLinkMode: _enableLinkMode
    }), /*#__PURE__*/React.createElement("li", {
      onClick: function onClick() {
        return editor.chain().focus().toggleHeading({
          level: 1
        }).run();
      },
      className: itemClass("heading", {
        level: 1
      })
    }, /*#__PURE__*/React.createElement("span", {
      className: "dante-icon"
    }, h1())), /*#__PURE__*/React.createElement("li", {
      onClick: function onClick() {
        return editor.chain().focus().toggleHeading({
          level: 2
        }).run();
      },
      className: itemClass("heading", {
        level: 2
      })
    }, /*#__PURE__*/React.createElement("span", {
      className: "dante-icon"
    }, h2())), /*#__PURE__*/React.createElement("li", {
      onClick: function onClick() {
        return editor.chain().focus().toggleHeading({
          level: 3
        }).run();
      },
      className: itemClass("heading", {
        level: 3
      })
    }, /*#__PURE__*/React.createElement("span", {
      className: "dante-icon"
    }, h3())), /*#__PURE__*/React.createElement("li", {
      onClick: function onClick() {
        return editor.chain().focus().toggleBulletList().run();
      },
      className: itemClass("bulletList")
    }, /*#__PURE__*/React.createElement("span", {
      className: "dante-icon"
    }, insertunorderedlist())), /*#__PURE__*/React.createElement("li", {
      onClick: function onClick() {
        return editor.chain().focus().toggleOrderedList().run();
      },
      className: itemClass("orderedList")
    }, /*#__PURE__*/React.createElement("span", {
      className: "dante-icon"
    }, insertorderedlist())), /*#__PURE__*/React.createElement("li", {
      onClick: function onClick() {
        return editor.chain().focus().toggleCodeBlock().run();
      },
      className: itemClass("codeBlock")
    }, /*#__PURE__*/React.createElement("span", {
      className: "dante-icon"
    }, code())), /*#__PURE__*/React.createElement("li", {
      onClick: function onClick() {
        return editor.chain().focus().toggleBlockquote().run();
      },
      className: itemClass("blockquote")
    }, /*#__PURE__*/React.createElement("span", {
      className: "dante-icon"
    }, blockquote()))));
  }

  function renderImageTooptip() {
    if (!editor.isEditable) return;
    if (!editor.isActive("ImageBlock")) return null;
    return /*#__PURE__*/React.createElement(ImageTooltip, {
      item: {},
      handleClick: function handleClick(e) {
        var _editor$view, _editor$view$lastSele, _editor$view$lastSele2;

        //console.log("AAA", e);
        editor.commands.updateAttributes("ImageBlock", {
          direction: e
        });
        var pos = editor === null || editor === void 0 ? void 0 : (_editor$view = editor.view) === null || _editor$view === void 0 ? void 0 : (_editor$view$lastSele = _editor$view.lastSelectedViewDesc) === null || _editor$view$lastSele === void 0 ? void 0 : (_editor$view$lastSele2 = _editor$view$lastSele.spec) === null || _editor$view$lastSele2 === void 0 ? void 0 : _editor$view$lastSele2.getPos(); //console.log("POS", pos);

        pos && editor.commands.setNodeSelection(pos);
      }
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, fixed && renderMenu(), !fixed && /*#__PURE__*/React.createElement(BubbleMenu, {
    editor: editor
  }, renderMenu(), renderImageTooptip()));
}

export { MenuBar as default };
