"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=Quantity;var _react=_interopRequireDefault(require("react")),_Quantity=_interopRequireDefault(require("./Quantity.styles"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function Quantity(a){var b=a.title,c=a.detail,d=(0,_Quantity.default)();return/*#__PURE__*/_react.default.createElement("div",{className:d.quantity},/*#__PURE__*/_react.default.createElement("div",{className:d.title},b),/*#__PURE__*/_react.default.createElement("div",{className:d.detail},c))}