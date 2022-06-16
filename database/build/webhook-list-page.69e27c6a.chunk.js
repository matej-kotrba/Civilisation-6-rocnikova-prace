(self["webpackChunk_2_rocnikova_prace"] = self["webpackChunk_2_rocnikova_prace"] || []).push([[4121],{

/***/ 36825:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(32800);
  } else {}
  

/***/ }),

/***/ 32800:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,n){ true?module.exports=n(__webpack_require__(53547),__webpack_require__(78384)):0}(this,(function(e,n){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=121)}({0:function(e,n,t){e.exports=t(19)()},1:function(n,t){n.exports=e},10:function(e,n,t){var r=t(25),o=t(26),i=t(22),a=t(27);e.exports=function(e,n){return r(e)||o(e,n)||i(e,n)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},121:function(e,n,t){"use strict";t.r(n),t.d(n,"Switch",(function(){return _}));var r,o,i=t(5),a=t.n(i),u=t(4),s=t.n(u),c=t(3),f=t.n(c),l=t(1),d=t.n(l),p=t(0),b=t.n(p),m=t(2),h=t.n(m),g=t(9),y=t(6),v=["label","onChange","onLabel","offLabel","selected","visibleLabels"],x=h.a.div(r||(r=f()(["\n  background: ",";\n  border: none;\n  border-radius: 16px;\n  position: relative;\n  height: ","rem;\n  width: ","rem;\n\n  & span {\n    font-size: ",";\n  }\n\n  &:before {\n    content: '';\n    background: ",";\n    width: 1rem;\n    height: 1rem;\n    border-radius: 50%;\n    position: absolute;\n    transition: all 0.5s;\n    left: ",";\n    top: ",";\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    &:before {\n      transition: none;\n    }\n  }\n"])),(function(e){return e.theme.colors.danger500}),1.5,2.5,(function(e){return e.visibleLabels?"1rem":0}),(function(e){return e.theme.colors.neutral0}),(function(e){return e.theme.spaces[1]}),(function(e){return e.theme.spaces[1]})),O=h.a.button(o||(o=f()(["\n  background: transparent;\n  padding: 0;\n  border: none;\n\n  &[aria-checked='true'] "," {\n    background: ",";\n  }\n\n  &[aria-checked='true'] ",":before {\n    transform: translateX(1rem);\n  }\n"])),x,(function(e){return e.theme.colors.success500}),x),_=d.a.forwardRef((function(e,n){var t=e.label,r=e.onChange,o=e.onLabel,i=e.offLabel,u=e.selected,c=e.visibleLabels,f=s()(e,v);return d.a.createElement(O,a()({ref:n,role:"switch","aria-checked":u,"aria-label":t,onClick:r,visibleLabels:c,type:"button"},f),d.a.createElement(g.Flex,null,d.a.createElement(x,null,d.a.createElement("span",null,o),d.a.createElement("span",null,i)),c&&d.a.createElement(y.Box,{as:"span","aria-hidden":!0,paddingLeft:2,color:u?"success600":"danger600"},u?o:i)))}));_.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1},_.propTypes={label:b.a.string.isRequired,offLabel:b.a.string,onChange:b.a.func.isRequired,onLabel:b.a.string,selected:b.a.bool.isRequired,visibleLabels:b.a.bool},_.displayName="Switch"},13:function(e,n){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},19:function(e,n,t){"use strict";var r=t(20);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},2:function(e,t){e.exports=n},20:function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r},e.exports.default=e.exports,e.exports.__esModule=!0},22:function(e,n,t){var r=t(21);e.exports=function(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,n){e.exports=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},25:function(e,n){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},26:function(e,n){e.exports=function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}},e.exports.default=e.exports,e.exports.__esModule=!0},27:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,n){e.exports=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))},e.exports.default=e.exports,e.exports.__esModule=!0},4:function(e,n,t){var r=t(24);e.exports=function(e,n){if(null==e)return{};var t,o,i=r(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i},e.exports.default=e.exports,e.exports.__esModule=!0},5:function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,t.apply(this,arguments)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,n,t){"use strict";t.r(n),t.d(n,"Box",(function(){return d}));var r,o=t(3),i=t.n(o),a=t(0),u=t.n(a),s=t(2),c=t.n(s),f=t(7),l={color:!0},d=c.a.div.withConfig({shouldForwardProp:function(e,n){return!l[e]&&n(e)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(e){var n=e.fontSize;return e.theme.fontSizes[n]||n}),(function(e){var n=e.theme,t=e.background;return n.colors[t]}),(function(e){var n=e.theme,t=e.color;return n.colors[t]}),(function(e){var n=e.theme,t=e.padding;return Object(f.a)("padding",t,n)}),(function(e){var n=e.theme,t=e.paddingTop;return Object(f.a)("padding-top",t,n)}),(function(e){var n=e.theme,t=e.paddingRight;return Object(f.a)("padding-right",t,n)}),(function(e){var n=e.theme,t=e.paddingBottom;return Object(f.a)("padding-bottom",t,n)}),(function(e){var n=e.theme,t=e.paddingLeft;return Object(f.a)("padding-left",t,n)}),(function(e){var n=e.theme,t=e.marginLeft;return Object(f.a)("margin-left",t,n)}),(function(e){var n=e.theme,t=e.marginRight;return Object(f.a)("margin-right",t,n)}),(function(e){var n=e.theme,t=e.marginTop;return Object(f.a)("margin-top",t,n)}),(function(e){var n=e.theme,t=e.marginBottom;return Object(f.a)("margin-bottom",t,n)}),(function(e){var n=e.theme;return e.hiddenS?"".concat(n.mediaQueries.tablet," { display: none; }"):void 0}),(function(e){var n=e.theme;return e.hiddenXS?"".concat(n.mediaQueries.mobile," { display: none; }"):void 0}),(function(e){var n=e.theme,t=e.hasRadius,r=e.borderRadius;return t?n.borderRadius:r}),(function(e){return e.borderStyle}),(function(e){return e.borderWidth}),(function(e){var n=e.borderColor;return e.theme.colors[n]}),(function(e){var n=e.theme,t=e.borderColor,r=e.borderStyle,o=e.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(n.colors[t])}),(function(e){var n=e.theme,t=e.shadow;return n.shadows[t]}),(function(e){return e.pointerEvents}),(function(e){var n=e._hover,t=e.theme;return n?n(t):void 0}),(function(e){return e.display}),(function(e){return e.position}),(function(e){var n=e.left;return e.theme.spaces[n]||n}),(function(e){var n=e.right;return e.theme.spaces[n]||n}),(function(e){var n=e.top;return e.theme.spaces[n]||n}),(function(e){var n=e.bottom;return e.theme.spaces[n]||n}),(function(e){return e.zIndex}),(function(e){return e.overflow}),(function(e){return e.cursor}),(function(e){var n=e.width;return e.theme.spaces[n]||n}),(function(e){var n=e.maxWidth;return e.theme.spaces[n]||n}),(function(e){var n=e.minWidth;return e.theme.spaces[n]||n}),(function(e){var n=e.height;return e.theme.spaces[n]||n}),(function(e){var n=e.maxHeight;return e.theme.spaces[n]||n}),(function(e){var n=e.minHeight;return e.theme.spaces[n]||n}),(function(e){return e.transition}),(function(e){return e.transform}),(function(e){return e.animation}),(function(e){return e.shrink}),(function(e){return e.grow}),(function(e){return e.basis}),(function(e){return e.flex}),(function(e){return e.textAlign}),(function(e){return e.textTransform}),(function(e){return e.lineHeight}),(function(e){return e.cursor}));d.displayName="Box",d.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},d.propTypes={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])}},7:function(e,n,t){"use strict";var r=t(10),o=t.n(r),i=t(13),a=t.n(i);n.a=function(e,n,t){var r=n;if(Array.isArray(n)||"object"!==a()(n)||(r=[null==n?void 0:n.desktop,null==n?void 0:n.tablet,null==n?void 0:n.mobile]),void 0!==r){if(Array.isArray(r)){var i=r,u=o()(i,3),s=u[0],c=u[1],f=u[2],l="".concat(e,": ").concat(t.spaces[s],";");return void 0!==c&&(l+="".concat(t.mediaQueries.tablet,"{\n          ").concat(e,": ").concat(t.spaces[c],";\n        }")),void 0!==f&&(l+="".concat(t.mediaQueries.mobile,"{\n          ").concat(e,": ").concat(t.spaces[f],";\n        }")),l}var d=t.spaces[r]||r;return"".concat(e,": ").concat(d,";")}}},9:function(e,n,t){"use strict";t.r(n),t.d(n,"Flex",(function(){return p}));var r,o=t(3),i=t.n(o),a=t(0),u=t.n(a),s=t(2),c=t.n(s),f=t(6),l=t(7),d={direction:!0},p=c()(f.Box).withConfig({shouldForwardProp:function(e,n){return!d[e]&&n(e)}})(r||(r=i()(["\n  align-items: ",";\n  display: ",";\n  flex-direction: ",";\n  flex-wrap: ",";\n  ","};\n  justify-content: ",";\n"])),(function(e){return e.alignItems}),(function(e){return e.inline?"inline-flex":"flex"}),(function(e){return e.direction}),(function(e){return e.wrap}),(function(e){var n=e.gap,t=e.theme;return Object(l.a)("gap",n,t)}),(function(e){return e.justifyContent}));p.defaultProps={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},p.propTypes={alignItems:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.number]),direction:u.a.string,gap:u.a.oneOfType([u.a.shape({desktop:u.a.number,mobile:u.a.number,tablet:u.a.number}),u.a.number,u.a.arrayOf(u.a.number),u.a.string]),inline:u.a.bool,justifyContent:u.a.string,reverse:u.a.bool,wrap:u.a.string}}})}));

/***/ }),

/***/ 77967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Webhooks_ProtectedListView)
});

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/react/index.js
var react = __webpack_require__(53547);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(92699);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(35395);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/EmptyStateLayout.js
var EmptyStateLayout = __webpack_require__(92543);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Flex.js
var Flex = __webpack_require__(40264);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(9524);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/IconButton.js
var IconButton = __webpack_require__(49549);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/BaseCheckbox.js
var BaseCheckbox = __webpack_require__(46458);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Table.js
var Table = __webpack_require__(43546);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(33483);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(64459);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(19631);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Switch.js
var Switch = __webpack_require__(36825);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Main.js
var Main = __webpack_require__(80117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/LiveRegions.js
var LiveRegions = __webpack_require__(67422);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(94117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Plus.js
var Plus = __webpack_require__(89326);
var Plus_default = /*#__PURE__*/__webpack_require__.n(Plus);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Pencil.js
var Pencil = __webpack_require__(56204);
var Pencil_default = /*#__PURE__*/__webpack_require__.n(Pencil);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Trash.js
var Trash = __webpack_require__(62982);
var Trash_default = /*#__PURE__*/__webpack_require__.n(Trash);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/EmptyDocuments.js
var EmptyDocuments = __webpack_require__(26485);
var EmptyDocuments_default = /*#__PURE__*/__webpack_require__.n(EmptyDocuments);
// EXTERNAL MODULE: ./node_modules/immer/dist/immer.cjs.production.min.js
var immer_cjs_production_min = __webpack_require__(8041);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/ListView/reducer.js


const initialState = {
  webhooks: [],
  webhooksToDelete: [],
  webhookToDelete: null,
  loadingWebhooks: true
};
const reducer = (state, action) => (0,immer_cjs_production_min["default"])(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA_SUCCEEDED": {
      draftState.webhooks = action.data;
      draftState.loadingWebhooks = false;
      break;
    }
    case "TOGGLE_LOADING": {
      draftState.loadingWebhooks = !state.loadingWebhooks;
      break;
    }
    case "SET_WEBHOOK_ENABLED": {
      set_default()(draftState, ["webhooks", ...action.keys], action.value);
      break;
    }
    case "SET_WEBHOOK_TO_DELETE": {
      draftState.webhookToDelete = action.id;
      break;
    }
    case "SET_WEBHOOKS_TO_DELETE": {
      if (action.value) {
        draftState.webhooksToDelete.push(action.id);
      } else {
        draftState.webhooksToDelete = state.webhooksToDelete.filter((id) => id !== action.id);
      }
      break;
    }
    case "SET_ALL_WEBHOOKS_TO_DELETE": {
      if (state.webhooksToDelete.length === 0) {
        draftState.webhooksToDelete = state.webhooks.map((webhook) => webhook.id);
      } else {
        draftState.webhooksToDelete = [];
      }
      break;
    }
    case "WEBHOOKS_DELETED": {
      draftState.webhooks = state.webhooks.filter((webhook) => !state.webhooksToDelete.includes(webhook.id));
      draftState.webhooksToDelete = [];
      break;
    }
    case "WEBHOOK_DELETED": {
      draftState.webhooks = state.webhooks.filter((_, index) => index !== action.index);
      draftState.webhookToDelete = null;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const ListView_reducer = (reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/ListView/index.js
/* provided dependency */ var console = __webpack_require__(25108);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
























const ListView = () => {
  const {
    isLoading,
    allowedActions: { canCreate, canRead, canUpdate, canDelete }
  } = (0,build.useRBAC)(permissions/* default.settings.webhooks */.Z.settings.webhooks);
  const toggleNotification = (0,build.useNotification)();
  const isMounted = (0,react.useRef)(true);
  const { formatMessage } = (0,react_intl.useIntl)();
  const [showModal, setShowModal] = (0,react.useState)(false);
  const [{ webhooks, webhooksToDelete, webhookToDelete, loadingWebhooks }, dispatch] = (0,react.useReducer)(ListView_reducer, initialState);
  const { notifyStatus } = (0,LiveRegions.useNotifyAT)();
  (0,build.useFocusWhenNavigate)();
  const { push } = (0,react_router_dom_min.useHistory)();
  const { pathname } = (0,react_router_dom_min.useLocation)();
  const rowsCount = webhooks.length;
  const webhooksToDeleteLength = webhooksToDelete.length;
  const getWebhookIndex = (id) => webhooks.findIndex((webhook) => webhook.id === id);
  (0,react.useEffect)(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  (0,react.useEffect)(() => {
    if (canRead) {
      fetchWebHooks();
    }
  }, [canRead]);
  const fetchWebHooks = () => __async(undefined, null, function* () {
    try {
      const { data } = yield (0,build.request)("/admin/webhooks", {
        method: "GET"
      });
      if (isMounted.current) {
        dispatch({
          type: "GET_DATA_SUCCEEDED",
          data
        });
        notifyStatus("webhooks have been loaded");
      }
    } catch (err) {
      console.log(err);
      if (isMounted.current) {
        if (err.code !== 20) {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error" }
          });
        }
        dispatch({
          type: "TOGGLE_LOADING"
        });
      }
    }
  });
  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const handleConfirmDelete = () => {
    if (webhookToDelete) {
      handleConfirmDeleteOne();
    } else {
      handleConfirmDeleteAll();
    }
  };
  const handleConfirmDeleteOne = () => __async(undefined, null, function* () {
    try {
      yield (0,build.request)(`/admin/webhooks/${webhookToDelete}`, {
        method: "DELETE"
      });
      dispatch({
        type: "WEBHOOK_DELETED",
        index: getWebhookIndex(webhookToDelete)
      });
    } catch (err) {
      if (err.code !== 20) {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
      }
    }
    setShowModal(false);
  });
  const handleConfirmDeleteAll = () => __async(undefined, null, function* () {
    const body = {
      ids: webhooksToDelete
    };
    try {
      yield (0,build.request)("/admin/webhooks/batch-delete", {
        method: "POST",
        body
      });
      if (isMounted.current) {
        dispatch({
          type: "WEBHOOKS_DELETED"
        });
      }
    } catch (err) {
      if (isMounted.current) {
        if (err.code !== 20) {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error" }
          });
        }
      }
    }
    setShowModal(false);
  });
  const handleDeleteClick = (id) => {
    setShowModal(true);
    if (id !== "all") {
      dispatch({
        type: "SET_WEBHOOK_TO_DELETE",
        id
      });
    }
  };
  const handleEnabledChange = (value, id) => __async(undefined, null, function* () {
    const webhookIndex = getWebhookIndex(id);
    const initialWebhookProps = webhooks[webhookIndex];
    const keys = [webhookIndex, "isEnabled"];
    const body = __spreadProps(__spreadValues({}, initialWebhookProps), {
      isEnabled: value
    });
    delete body.id;
    try {
      dispatch({
        type: "SET_WEBHOOK_ENABLED",
        keys,
        value
      });
      yield (0,build.request)(`/admin/webhooks/${id}`, {
        method: "PUT",
        body
      });
    } catch (err) {
      if (isMounted.current) {
        dispatch({
          type: "SET_WEBHOOK_ENABLED",
          keys,
          value: !value
        });
        if (err.code !== 20) {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error" }
          });
        }
      }
    }
  });
  const handleSelectAllCheckbox = () => {
    dispatch({
      type: "SET_ALL_WEBHOOKS_TO_DELETE"
    });
  };
  const handleSelectOneCheckbox = (value, id) => {
    dispatch({
      type: "SET_WEBHOOKS_TO_DELETE",
      value,
      id
    });
  };
  const handleGoTo = (to) => {
    push(`${pathname}/${to}`);
  };
  return /* @__PURE__ */ react.createElement(Layout.Layout, null, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, {
    name: "Webhooks"
  }), /* @__PURE__ */ react.createElement(Main.Main, {
    "aria-busy": isLoading || loadingWebhooks
  }, /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
    title: formatMessage({ id: "Settings.webhooks.title", defaultMessage: "Webhooks" }),
    subtitle: formatMessage({
      id: "Settings.webhooks.list.description",
      defaultMessage: "Get POST changes notifications"
    }),
    primaryAction: canCreate && !loadingWebhooks && /* @__PURE__ */ react.createElement(build.LinkButton, {
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
      variant: "default",
      to: `${pathname}/create`,
      size: "L"
    }, formatMessage({
      id: "Settings.webhooks.list.button.add",
      defaultMessage: "Create new webhook"
    }))
  }), webhooksToDeleteLength > 0 && canDelete && /* @__PURE__ */ react.createElement(Layout.ActionLayout, {
    startActions: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
      variant: "epsilon",
      textColor: "neutral600"
    }, formatMessage({
      id: "Settings.webhooks.to.delete",
      defaultMessage: "{webhooksToDeleteLength, plural, one {# asset} other {# assets}} selected"
    }, { webhooksToDeleteLength })), /* @__PURE__ */ react.createElement(Button.Button, {
      onClick: () => handleDeleteClick("all"),
      startIcon: /* @__PURE__ */ react.createElement((Trash_default()), null),
      size: "L",
      variant: "danger-light"
    }, formatMessage({
      id: "global.delete",
      defaultMessage: "Delete"
    })))
  }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, isLoading || loadingWebhooks ? /* @__PURE__ */ react.createElement(Box.Box, {
    background: "neutral0",
    padding: 6,
    shadow: "filterShadow",
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null)) : /* @__PURE__ */ react.createElement(react.Fragment, null, rowsCount > 0 ? /* @__PURE__ */ react.createElement(Table.Table, {
    colCount: 5,
    rowCount: rowsCount + 1,
    footer: /* @__PURE__ */ react.createElement(Table.TFooter, {
      onClick: () => canCreate ? handleGoTo("create") : {},
      icon: /* @__PURE__ */ react.createElement((Plus_default()), null)
    }, formatMessage({
      id: "Settings.webhooks.list.button.add",
      defaultMessage: "Create new webhook"
    }))
  }, /* @__PURE__ */ react.createElement(Table.Thead, null, /* @__PURE__ */ react.createElement(Table.Tr, null, /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(BaseCheckbox.BaseCheckbox, {
    "aria-label": formatMessage({
      id: "global.select-all-entries",
      defaultMessage: "Select all entries"
    }),
    indeterminate: webhooksToDeleteLength > 0 && webhooksToDeleteLength < rowsCount,
    value: webhooksToDeleteLength === rowsCount,
    onValueChange: handleSelectAllCheckbox
  })), /* @__PURE__ */ react.createElement(Table.Th, {
    width: "20%"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({
    id: "global.name",
    defaultMessage: "Name"
  }))), /* @__PURE__ */ react.createElement(Table.Th, {
    width: "60%"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({
    id: "Settings.webhooks.form.url",
    defaultMessage: "URL"
  }))), /* @__PURE__ */ react.createElement(Table.Th, {
    width: "20%"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({
    id: "Settings.webhooks.list.th.status",
    defaultMessage: "Status"
  }))), /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden.VisuallyHidden, null, formatMessage({
    id: "Settings.webhooks.list.th.actions",
    defaultMessage: "Actions"
  }))))), /* @__PURE__ */ react.createElement(Table.Tbody, null, webhooks.map((webhook) => /* @__PURE__ */ react.createElement(Table.Tr, __spreadValues({
    key: webhook.id
  }, (0,build.onRowClick)({
    fn: () => handleGoTo(webhook.id),
    condition: canUpdate
  })), /* @__PURE__ */ react.createElement(Table.Td, __spreadValues({}, build.stopPropagation), /* @__PURE__ */ react.createElement(BaseCheckbox.BaseCheckbox, {
    "aria-label": `${formatMessage({
      id: "global.select",
      defaultMessage: "Select"
    })} ${webhook.name}`,
    value: webhooksToDelete == null ? void 0 : webhooksToDelete.includes(webhook.id),
    onValueChange: (value) => handleSelectOneCheckbox(value, webhook.id),
    id: "select",
    name: "select"
  })), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "semiBold",
    textColor: "neutral800"
  }, webhook.name)), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral800"
  }, webhook.url)), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Flex.Flex, __spreadValues({}, build.stopPropagation), /* @__PURE__ */ react.createElement(Switch.Switch, {
    onLabel: formatMessage({
      id: "global.enabled",
      defaultMessage: "Enabled"
    }),
    offLabel: formatMessage({
      id: "global.disabled",
      defaultMessage: "Disabled"
    }),
    label: `${webhook.name} ${formatMessage({
      id: "Settings.webhooks.list.th.status",
      defaultMessage: "Status"
    })}`,
    selected: webhook.isEnabled,
    onChange: () => handleEnabledChange(!webhook.isEnabled, webhook.id),
    visibleLabels: true
  }))), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Stack.Stack, __spreadValues({
    horizontal: true,
    spacing: 1
  }, build.stopPropagation), canUpdate && /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: () => {
      handleGoTo(webhook.id);
    },
    label: formatMessage({
      id: "Settings.webhooks.events.update",
      defaultMessage: "Update"
    }),
    icon: /* @__PURE__ */ react.createElement((Pencil_default()), null),
    noBorder: true
  }), canDelete && /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: () => handleDeleteClick(webhook.id),
    label: formatMessage({
      id: "global.delete",
      defaultMessage: "Delete"
    }),
    icon: /* @__PURE__ */ react.createElement((Trash_default()), null),
    noBorder: true,
    id: `delete-${webhook.id}`
  }))))))) : /* @__PURE__ */ react.createElement(EmptyStateLayout.EmptyStateLayout, {
    icon: /* @__PURE__ */ react.createElement((EmptyDocuments_default()), {
      width: "160px"
    }),
    content: formatMessage({
      id: "Settings.webhooks.list.empty.description",
      defaultMessage: "No webhooks found"
    }),
    action: /* @__PURE__ */ react.createElement(Button.Button, {
      variant: "secondary",
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
      onClick: () => canCreate ? handleGoTo("create") : {}
    }, formatMessage({
      id: "Settings.webhooks.list.button.add",
      defaultMessage: "Create new webhook"
    }))
  })))), /* @__PURE__ */ react.createElement(build.ConfirmDialog, {
    isOpen: showModal,
    onToggleDialog: handleToggleModal,
    onConfirm: handleConfirmDelete
  }));
};
/* harmony default export */ const Webhooks_ListView = (ListView);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/ProtectedListView/index.js




const ProtectedListView = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, {
  permissions: permissions/* default.settings.webhooks.main */.Z.settings.webhooks.main
}, /* @__PURE__ */ react.createElement(Webhooks_ListView, null));
/* harmony default export */ const Webhooks_ProtectedListView = (ProtectedListView);


/***/ })

}]);