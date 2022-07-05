import { d as _slicedToArray, G as fontColor } from '../icons-402d57b8.js';
import React, { useState, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';

function useDebounce(value, delay) {
  // State and setters for debounced value
  var _useState = useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      debouncedValue = _useState2[0],
      setDebouncedValue = _useState2[1];

  useEffect(function () {
    // Update debounced value after delay
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay); // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.

    return function () {
      clearTimeout(handler);
    };
  }, [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

function DanteTooltipColor(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = useState(props.value),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var debouncedValue = useDebounce(value, 200);

  function toggle(ev) {
    // let selection = this.props.editorState.getSelection()
    // prevent unselection of selection
    ev.preventDefault();
    setOpen(!open);
  }

  useEffect(function () {
    if (debouncedValue) {
      props.handleClick(value);
    }
  }, [debouncedValue] // Only call effect if debounced search term changes
  );

  function currentValue() {
    /*let selection = this.props.editorState.getSelection()
    if (!selection.isCollapsed()) {
      return this.props.styles[this.props.style_type].current(this.props.editorState)
    } else {
      return
    }*/
  }

  function renderColor() {
    var v = currentValue() || props.value;

    if (open) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          position: "absolute",
          top: "50px",
          left: "236px"
        }
      }, /*#__PURE__*/React.createElement(HexColorPicker, {
        color: v,
        onChange: function onChange(color, e) {
          setValue(color); //handleChange(e, color);
          //this.handleClick(e,  color )
        }
      }));
    }
  }

  return /*#__PURE__*/React.createElement("li", {
    className: "dante-menu-button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dante-icon",
    onMouseDown: toggle
  }, fontColor()), renderColor());
}

export { DanteTooltipColor as default };
