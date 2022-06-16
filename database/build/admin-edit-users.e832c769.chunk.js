"use strict";
(self["webpackChunk_2_rocnikova_prace"] = self["webpackChunk_2_rocnikova_prace"] || []).push([[4263],{

/***/ 86294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Users_ProtectedEditPage)
});

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/react/index.js
var react = __webpack_require__(53547);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var src_permissions = __webpack_require__(92699);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(78718);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(57557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(94117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(64459);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Grid.js
var Grid = __webpack_require__(39272);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(35395);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(33483);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Main.js
var Main = __webpack_require__(80117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(9524);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/ArrowLeft.js
var ArrowLeft = __webpack_require__(87760);
var ArrowLeft_default = /*#__PURE__*/__webpack_require__.n(ArrowLeft);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Check.js
var Check = __webpack_require__(22754);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 8 modules
var utils = __webpack_require__(58836);
// EXTERNAL MODULE: ./.cache/admin/src/core/utils/index.js + 2 modules
var core_utils = __webpack_require__(63955);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/EditPage/utils/api.js
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

const fetchUser = (id) => __async(undefined, null, function* () {
  const { data } = yield core_utils/* axiosInstance.get */.be.get(`/admin/users/${id}`);
  return data.data;
});
const putUser = (id, body) => __async(undefined, null, function* () {
  const { data } = yield core_utils/* axiosInstance.put */.be.put(`/admin/users/${id}`, body);
  return data.data;
});


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/EditPage/utils/layout.js
const layout = [
  [
    {
      intlLabel: {
        id: "Auth.form.firstname.label",
        defaultMessage: "First name"
      },
      name: "firstname",
      placeholder: {
        id: "Auth.form.firstname.placeholder",
        defaultMessage: "e.g. Kai"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    },
    {
      intlLabel: {
        id: "Auth.form.lastname.label",
        defaultMessage: "Last name"
      },
      name: "lastname",
      placeholder: {
        id: "Auth.form.lastname.placeholder",
        defaultMessage: "e.g. Doe"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      }
    }
  ],
  [
    {
      intlLabel: {
        id: "Auth.form.email.label",
        defaultMessage: "Email"
      },
      name: "email",
      placeholder: {
        id: "Auth.form.email.placeholder",
        defaultMessage: "e.g. kai.doe@strapi.io"
      },
      type: "email",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    },
    {
      intlLabel: {
        id: "Auth.form.username.label",
        defaultMessage: "Username"
      },
      name: "username",
      placeholder: {
        id: "Auth.form.username.placeholder",
        defaultMessage: "e.g. Kai_Doe"
      },
      type: "email",
      size: {
        col: 6,
        xs: 12
      }
    }
  ],
  [
    {
      intlLabel: {
        id: "global.password",
        defaultMessage: "Password"
      },
      name: "password",
      type: "password",
      size: {
        col: 6,
        xs: 12
      }
    },
    {
      intlLabel: {
        id: "Auth.form.confirmPassword.label",
        defaultMessage: "Password confirmation"
      },
      name: "confirmPassword",
      type: "password",
      size: {
        col: 6,
        xs: 12
      }
    }
  ],
  [
    {
      intlLabel: {
        id: "Auth.form.active.label",
        defaultMessage: "Active"
      },
      name: "isActive",
      type: "bool",
      size: {
        col: 6,
        xs: 12
      }
    }
  ]
];
/* harmony default export */ const utils_layout = (layout);

// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/index.js + 3 modules
var users = __webpack_require__(8278);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/components/SelectRoles/index.js
var SelectRoles = __webpack_require__(7676);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/EditPage/index.js
/* provided dependency */ var console = __webpack_require__(25108);
function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function _regeneratorRuntime(){return exports;};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key];}try{define({},"");}catch(err){define=function define(obj,key,value){return obj[key]=value;};}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return generator._invoke=function(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult();}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult;}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg);}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done};}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg);}};}(innerFn,self,context),generator;}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)};}catch(err){return{type:"throw",arg:err};}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,function(){return this;});var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){define(prototype,method,function(arg){return this._invoke(method,arg);});});}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==(0,esm_typeof/* default */.Z)(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject);},function(err){invoke("throw",err,resolve,reject);}):PromiseImpl.resolve(value).then(function(unwrapped){result.value=unwrapped,resolve(result);},function(error){return invoke("throw",error,resolve,reject);});}reject(record.arg);}var previousPromise;this._invoke=function(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl(function(resolve,reject){invoke(method,arg,resolve,reject);});}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg();};}function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(undefined===method){if(context.delegate=null,"throw"===context.method){if(delegate.iterator["return"]&&(context.method="return",context.arg=undefined,maybeInvokeDelegate(delegate,context),"throw"===context.method))return ContinueSentinel;context.method="throw",context.arg=new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=undefined),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel);}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry);}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record;}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0);}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;){if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;}return next.value=undefined,next.done=!0,next;};return next.next=next;}}return{next:doneResult};}function doneResult(){return{value:undefined,done:!0};}return GeneratorFunction.prototype=GeneratorFunctionPrototype,define(Gp,"constructor",GeneratorFunctionPrototype),define(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name));},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun;},exports.awrap=function(arg){return{__await:arg};},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,function(){return this;}),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next();});},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,function(){return this;}),define(Gp,"toString",function(){return"[object Generator]";}),exports.keys=function(object){var keys=[];for(var key in object){keys.push(key);}return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next;}return next.done=!0,next;};},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this){"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined);}},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval;},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=undefined),!!caught;}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc);}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc);}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break;}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record);},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel;},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel;}},"catch":function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=undefined),ContinueSentinel;}},exports;}var MagicLink=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(77791)/* ["default"] */ .Z);}return (__webpack_require__(26010)/* ["default"] */ .Z);}();var fieldsToPick=['email','firstname','lastname','username','isActive','roles'];var EditPage=function EditPage(_ref){var canUpdate=_ref.canUpdate;var _useIntl=(0,react_intl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useRouteMatch=(0,react_router_dom_min.useRouteMatch)('/settings/users/:id'),id=_useRouteMatch.params.id;var _useHistory=(0,react_router_dom_min.useHistory)(),push=_useHistory.push;var _useAppInfos=(0,build.useAppInfos)(),setUserDisplayName=_useAppInfos.setUserDisplayName;var toggleNotification=(0,build.useNotification)();var _useOverlayBlocker=(0,build.useOverlayBlocker)(),lockApp=_useOverlayBlocker.lockApp,unlockApp=_useOverlayBlocker.unlockApp;(0,build.useFocusWhenNavigate)();var _useQuery=(0,lib.useQuery)(['user',id],function(){return fetchUser(id);},{retry:false,keepPreviousData:false,staleTime:1000*20,onError:function onError(err){var status=err.response.status;// Redirect the use to the homepage if is not allowed to read
if(status===403){toggleNotification({type:'info',message:{id:'notification.permission.not-allowed-read',defaultMessage:'You are not allowed to see this document'}});push('/');}console.log(err.response.status);}}),status=_useQuery.status,data=_useQuery.data;var handleSubmit=/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(body,actions){var _data,userInfos,userDisplayName,errors,fieldsErrors;return _regeneratorRuntime().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:lockApp();_context.prev=1;_context.next=4;return putUser(id,omit_default()(body,'confirmPassword'));case 4:_data=_context.sent;toggleNotification({type:'success',message:formatMessage({id:'notification.success.saved',defaultMessage:'Saved'})});userInfos=build.auth.getUserInfo();// The user is updating himself
if(id.toString()===userInfos.id.toString()){build.auth.setUserInfo(_data);userDisplayName=get_default()(body,'username')||(0,utils/* getFullName */.Pp)(body.firstname,body.lastname);setUserDisplayName(userDisplayName);}actions.setValues(pick_default()(body,fieldsToPick));_context.next=17;break;case 11:_context.prev=11;_context.t0=_context["catch"](1);// FIXME when API errors are ready
errors=(0,utils/* formatAPIErrors */.Iz)(_context.t0.response.data);fieldsErrors=Object.keys(errors).reduce(function(acc,current){acc[current]=errors[current].id;return acc;},{});actions.setErrors(fieldsErrors);toggleNotification({type:'warning',message:get_default()(_context.t0,'response.data.message','notification.error')});case 17:unlockApp();case 18:case"end":return _context.stop();}}},_callee,null,[[1,11]]);}));return function handleSubmit(_x,_x2){return _ref2.apply(this,arguments);};}();var isLoading=status!=='success';var headerLabel=isLoading?{id:'app.containers.Users.EditPage.header.label-loading',defaultMessage:'Edit user'}:{id:'app.containers.Users.EditPage.header.label',defaultMessage:'Edit {name}'};var initialData=Object.keys(pick_default()(data,fieldsToPick)).reduce(function(acc,current){if(current==='roles'){acc[current]=((data===null||data===void 0?void 0:data.roles)||[]).map(function(_ref3){var id=_ref3.id;return id;});return acc;}acc[current]=data===null||data===void 0?void 0:data[current];return acc;},{});var headerLabelName=initialData.username||(0,utils/* getFullName */.Pp)(initialData.firstname,initialData.lastname);var title=formatMessage(headerLabel,{name:headerLabelName});if(isLoading){return/*#__PURE__*/react.createElement(Main.Main,{"aria-busy":"true"},/*#__PURE__*/react.createElement(build.SettingsPageTitle,{name:"Users"}),/*#__PURE__*/react.createElement(Layout.HeaderLayout,{primaryAction:/*#__PURE__*/react.createElement(Button.Button,{disabled:true,startIcon:/*#__PURE__*/react.createElement((Check_default()),null),type:"button",size:"L"},formatMessage({id:'global.save',defaultMessage:'Save'})),title:title,navigationAction:/*#__PURE__*/react.createElement(build.Link,{startIcon:/*#__PURE__*/react.createElement((ArrowLeft_default()),null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},formatMessage({id:'global.back',defaultMessage:'Back'}))}),/*#__PURE__*/react.createElement(Layout.ContentLayout,null,/*#__PURE__*/react.createElement(build.LoadingIndicatorPage,null)));}return/*#__PURE__*/react.createElement(Main.Main,null,/*#__PURE__*/react.createElement(build.SettingsPageTitle,{name:"Users"}),/*#__PURE__*/react.createElement(dist.Formik,{onSubmit:handleSubmit,initialValues:initialData,validateOnChange:false,validationSchema:users/* editValidation */.YM},function(_ref4){var errors=_ref4.errors,values=_ref4.values,handleChange=_ref4.handleChange,isSubmitting=_ref4.isSubmitting;return/*#__PURE__*/react.createElement(build.Form,null,/*#__PURE__*/react.createElement(Layout.HeaderLayout,{primaryAction:/*#__PURE__*/react.createElement(Button.Button,{disabled:isSubmitting||!canUpdate,startIcon:/*#__PURE__*/react.createElement((Check_default()),null),loading:isSubmitting,type:"submit",size:"L"},formatMessage({id:'global.save',defaultMessage:'Save'})),title:title,navigationAction:/*#__PURE__*/react.createElement(build.Link,{startIcon:/*#__PURE__*/react.createElement((ArrowLeft_default()),null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},formatMessage({id:'global.back',defaultMessage:'Back'}))}),/*#__PURE__*/react.createElement(Layout.ContentLayout,null,(data===null||data===void 0?void 0:data.registrationToken)&&/*#__PURE__*/react.createElement(Box.Box,{paddingBottom:6},/*#__PURE__*/react.createElement(MagicLink,{registrationToken:data.registrationToken})),/*#__PURE__*/react.createElement(Stack.Stack,{spacing:7},/*#__PURE__*/react.createElement(Box.Box,{background:"neutral0",hasRadius:true,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},/*#__PURE__*/react.createElement(Stack.Stack,{spacing:4},/*#__PURE__*/react.createElement(Typography.Typography,{variant:"delta",as:"h2"},formatMessage({id:'app.components.Users.ModalCreateBody.block-title.details',defaultMessage:'Details'})),/*#__PURE__*/react.createElement(Grid.Grid,{gap:5},utils_layout.map(function(row){return row.map(function(input){return/*#__PURE__*/react.createElement(Grid.GridItem,(0,esm_extends/* default */.Z)({key:input.name},input.size),/*#__PURE__*/react.createElement(build.GenericInput,(0,esm_extends/* default */.Z)({},input,{disabled:!canUpdate,error:errors[input.name],onChange:handleChange,value:values[input.name]||''})));});})))),/*#__PURE__*/react.createElement(Box.Box,{background:"neutral0",hasRadius:true,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},/*#__PURE__*/react.createElement(Stack.Stack,{spacing:4},/*#__PURE__*/react.createElement(Typography.Typography,{variant:"delta",as:"h2"},formatMessage({id:'global.roles',defaultMessage:"User's role"})),/*#__PURE__*/react.createElement(Grid.Grid,{gap:5},/*#__PURE__*/react.createElement(Grid.GridItem,{col:6,xs:12},/*#__PURE__*/react.createElement(SelectRoles/* default */.Z,{disabled:!canUpdate,error:errors.roles,onChange:handleChange,value:values.roles}))))))));}));};EditPage.propTypes={canUpdate:(prop_types_default()).bool.isRequired};/* harmony default export */ const Users_EditPage = (EditPage);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ProtectedEditPage/index.js






const ProtectedEditPage = () => {
  const toggleNotification = (0,build.useNotification)();
  const permissions = (0,react.useMemo)(() => {
    return {
      read: src_permissions/* default.settings.users.read */.Z.settings.users.read,
      update: src_permissions/* default.settings.users.update */.Z.settings.users.update
    };
  }, []);
  const {
    isLoading,
    allowedActions: { canRead, canUpdate }
  } = (0,build.useRBAC)(permissions);
  const { state } = (0,react_router_dom_min.useLocation)();
  const from = (0,lodash.get)(state, "from", "/");
  (0,react.useEffect)(() => {
    if (!isLoading) {
      if (!canRead && !canUpdate) {
        toggleNotification({
          type: "info",
          message: {
            id: "notification.permission.not-allowed-read",
            defaultMessage: "You are not allowed to see this document"
          }
        });
      }
    }
  }, [isLoading, canRead, canUpdate, toggleNotification]);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
  }
  if (!canRead && !canUpdate) {
    return /* @__PURE__ */ react.createElement(react_router_dom_min.Redirect, {
      to: from
    });
  }
  return /* @__PURE__ */ react.createElement(Users_EditPage, {
    canUpdate
  });
};
/* harmony default export */ const Users_ProtectedEditPage = (ProtectedEditPage);


/***/ }),

/***/ 53073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53547);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _strapi_design_system_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49549);
/* harmony import */ var _strapi_design_system_IconButton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_IconButton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68547);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strapi_icons_Duplicate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54279);
/* harmony import */ var _strapi_icons_Duplicate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_Duplicate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74855);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97132);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);







const Envelope = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
  transform: "translate(-23 -9)",
  fill: "#4B515A",
  fillRule: "evenodd",
  fontSize: "32",
  fontFamily: "AppleColorEmoji, Apple Color Emoji"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tspan", {
  x: "23",
  y: "36"
}, "\u2709\uFE0F")));
const MagicLinkWrapper = ({ children, target }) => {
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__.useNotification)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
  const handleCopy = () => {
    toggleNotification({ type: "info", message: { id: "notification.link-copied" } });
  };
  const copyLabel = formatMessage({
    id: "app.component.CopyToClipboard.label",
    defaultMessage: "Copy to clipboard"
  });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_2__.ContentBox, {
    endAction: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__.CopyToClipboard, {
      onCopy: handleCopy,
      text: target
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_IconButton__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
      label: copyLabel,
      noBorder: true,
      icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement((_strapi_icons_Duplicate__WEBPACK_IMPORTED_MODULE_3___default()), null)
    })),
    title: target,
    titleEllipsis: true,
    subtitle: children,
    icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Envelope, null),
    iconBackground: "neutral100"
  });
};
MagicLinkWrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)]).isRequired,
  target: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicLinkWrapper);


/***/ }),

/***/ 26010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53547);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97132);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_utils_basename__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71242);
/* harmony import */ var _MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53073);





const MagicLink = ({ registrationToken }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const target = `${window.location.origin}${_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}auth/register?registrationToken=${registrationToken}`;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    target
  }, formatMessage({
    id: "app.components.Users.MagicLink.connect",
    defaultMessage: "Copy and share this link to give access to this user"
  }));
};
MagicLink.defaultProps = {
  registrationToken: ""
};
MagicLink.propTypes = {
  registrationToken: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicLink);


/***/ }),

/***/ 7676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53547);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97132);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _strapi_design_system_Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2632);
/* harmony import */ var _strapi_design_system_Select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23724);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78384);
/* harmony import */ var _strapi_icons_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79386);
/* harmony import */ var _strapi_icons_Loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_Loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63955);
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








const rotation = styled_components__WEBPACK_IMPORTED_MODULE_4__.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
const LoadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  animation: ${rotation} 2s infinite linear;
`;
const Loader = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingWrapper, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement((_strapi_icons_Loader__WEBPACK_IMPORTED_MODULE_2___default()), null));
const fetchData = () => __async(undefined, null, function* () {
  const { data } = yield _core_utils__WEBPACK_IMPORTED_MODULE_3__/* .axiosInstance.get */ .be.get("/admin/roles");
  return data.data;
});
const SelectRoles = ({ disabled, error, onChange, value }) => {
  const { status, data } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)(["roles"], fetchData, {
    staleTime: 5e4
  });
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const label = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles",
    defaultMessage: "User's roles"
  });
  const hint = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles.description",
    defaultMessage: "A user can have one or several roles"
  });
  const placeholder = formatMessage({
    id: "app.components.Select.placeholder",
    defaultMessage: "Select"
  });
  const startIcon = status === "loading" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Loader, null) : void 0;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Select__WEBPACK_IMPORTED_MODULE_1__.Select, {
    id: "roles",
    disabled,
    error: errorMessage,
    hint,
    label,
    name: "roles",
    onChange: (v) => {
      onChange({ target: { name: "roles", value: v } });
    },
    placeholder,
    multi: true,
    startIcon,
    value,
    withTags: true,
    required: true
  }, (data || []).map((role) => {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Select__WEBPACK_IMPORTED_MODULE_1__.Option, {
      key: role.id,
      value: role.id
    }, role.name);
  }));
};
SelectRoles.defaultProps = {
  disabled: false,
  error: void 0
};
SelectRoles.propTypes = {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  error: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func.isRequired),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().array.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectRoles);


/***/ }),

/***/ 8278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "YM": () => (/* reexport */ edit),
  "Rw": () => (/* reexport */ profile)
});

// UNUSED EXPORTS: rolesValidation

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/profile.js
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


const commonUserSchema = {
  firstname: lib/* mixed */.nK().required(build.translatedErrors.required),
  lastname: lib/* mixed */.nK(),
  email: lib/* string */.Z_().email(build.translatedErrors.email).lowercase().required(build.translatedErrors.required),
  username: lib/* string */.Z_().nullable(),
  password: lib/* string */.Z_().min(8, build.translatedErrors.minLength).matches(/[a-z]/, "components.Input.error.contain.lowercase").matches(/[A-Z]/, "components.Input.error.contain.uppercase").matches(/\d/, "components.Input.error.contain.number"),
  confirmPassword: lib/* string */.Z_().min(8, build.translatedErrors.minLength).oneOf([lib/* ref */.iH("password"), null], "components.Input.error.password.noMatch").when("password", (password, passSchema) => {
    return password ? passSchema.required(build.translatedErrors.required) : passSchema;
  })
};
const schema = __spreadProps(__spreadValues({}, commonUserSchema), {
  currentPassword: lib/* string */.Z_().when(["password", "confirmPassword"], (password, confirmPassword, passSchema) => {
    return password || confirmPassword ? passSchema.required(build.translatedErrors.required) : passSchema;
  }),
  preferedLanguage: lib/* string */.Z_().nullable()
});
/* harmony default export */ const profile = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/roles.js


const roles_schema = {
  roles: lib/* array */.IX().min(1, build.translatedErrors.required).required(build.translatedErrors.required)
};
/* harmony default export */ const roles = (roles_schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/edit.js
var edit_defProp = Object.defineProperty;
var edit_defProps = Object.defineProperties;
var edit_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var edit_getOwnPropSymbols = Object.getOwnPropertySymbols;
var edit_hasOwnProp = Object.prototype.hasOwnProperty;
var edit_propIsEnum = Object.prototype.propertyIsEnumerable;
var edit_defNormalProp = (obj, key, value) => key in obj ? edit_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var edit_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (edit_hasOwnProp.call(b, prop))
      edit_defNormalProp(a, prop, b[prop]);
  if (edit_getOwnPropSymbols)
    for (var prop of edit_getOwnPropSymbols(b)) {
      if (edit_propIsEnum.call(b, prop))
        edit_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var edit_spreadProps = (a, b) => edit_defProps(a, edit_getOwnPropDescs(b));



const edit_schema = lib/* object */.Ry().shape(edit_spreadValues(edit_spreadProps(edit_spreadValues({}, commonUserSchema), {
  isActive: lib/* bool */.Xg()
}), roles));
/* harmony default export */ const edit = (edit_schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/index.js





/***/ }),

/***/ 77791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53547);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97132);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71242);
/* harmony import */ var _admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53073);





const MagicLink = ({ registrationToken }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  if (registrationToken) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      target: `${window.location.origin}${_admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}auth/register?registrationToken=${registrationToken}`
    }, formatMessage({
      id: "app.components.Users.MagicLink.connect",
      defaultMessage: "Copy and share this link to give access to this user"
    }));
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    target: `${window.location.origin}${_admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}auth/login`
  }, formatMessage({
    id: "app.components.Users.MagicLink.connect.sso",
    defaultMessage: "Send this link to the user, the first login can be made via a SSO provider."
  }));
};
MagicLink.defaultProps = {
  registrationToken: ""
};
MagicLink.propTypes = {
  registrationToken: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicLink);


/***/ })

}]);