"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=SideBar;var _react=_interopRequireDefault(require("react")),_Fab=_interopRequireDefault(require("@material-ui/core/Fab")),_Tooltip=_interopRequireDefault(require("@material-ui/core/Tooltip")),_clsx=_interopRequireDefault(require("clsx")),_SideBar=_interopRequireDefault(require("./SideBar.styles")),_Logo=_interopRequireDefault(require("../../../assets/Logo")),_Lightning=_interopRequireDefault(require("../../icons/Lightning")),_User=_interopRequireDefault(require("../../icons/User")),_Talking=_interopRequireDefault(require("../../icons/Talking")),_Muscles=_interopRequireDefault(require("../../icons/Muscles")),_Headset=_interopRequireDefault(require("../../icons/Headset")),_Config=_interopRequireDefault(require("../../icons/Config"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function SideBar(){var a=(0,_SideBar.default)();return/*#__PURE__*/_react.default.createElement("nav",{className:a.sidebar},/*#__PURE__*/_react.default.createElement("div",{className:a.logo},/*#__PURE__*/_react.default.createElement(_Fab.default,{color:"inherit","aria-label":"add",className:(0,_clsx.default)(a.fab,a.white),size:"medium"},/*#__PURE__*/_react.default.createElement(_Logo.default,null))),/*#__PURE__*/_react.default.createElement("div",{className:a.menu},/*#__PURE__*/_react.default.createElement("div",null,/*#__PURE__*/_react.default.createElement(_Tooltip.default,{title:"Add","aria-label":"add",placement:"right"},/*#__PURE__*/_react.default.createElement(_Fab.default,{color:"primary","aria-label":"add",className:a.fab,size:"medium",href:"/"},/*#__PURE__*/_react.default.createElement(_Lightning.default,null))),/*#__PURE__*/_react.default.createElement(_Tooltip.default,{title:"Add","aria-label":"add",placement:"right"},/*#__PURE__*/_react.default.createElement(_Fab.default,{color:"primary","aria-label":"add",className:a.fab,size:"medium"},/*#__PURE__*/_react.default.createElement(_User.default,null))),/*#__PURE__*/_react.default.createElement(_Tooltip.default,{title:"Add","aria-label":"add",placement:"right"},/*#__PURE__*/_react.default.createElement(_Fab.default,{color:"primary","aria-label":"add",className:a.fab,size:"medium"},/*#__PURE__*/_react.default.createElement(_Muscles.default,null))),/*#__PURE__*/_react.default.createElement(_Tooltip.default,{title:"Add","aria-label":"add",placement:"right"},/*#__PURE__*/_react.default.createElement(_Fab.default,{color:"primary","aria-label":"add",className:a.fab,size:"medium"},/*#__PURE__*/_react.default.createElement(_Talking.default,null)))),/*#__PURE__*/_react.default.createElement("div",null,/*#__PURE__*/_react.default.createElement(_Tooltip.default,{title:"Add","aria-label":"add",placement:"right"},/*#__PURE__*/_react.default.createElement(_Fab.default,{color:"primary","aria-label":"add",className:a.fab,size:"medium"},/*#__PURE__*/_react.default.createElement(_Headset.default,null))),/*#__PURE__*/_react.default.createElement(_Tooltip.default,{title:"Add","aria-label":"add",placement:"right"},/*#__PURE__*/_react.default.createElement(_Fab.default,{color:"primary","aria-label":"add",className:a.fab,size:"medium"},/*#__PURE__*/_react.default.createElement(_Config.default,null))))))}