webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-chat></app-chat>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat_component__ = __webpack_require__("./src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat_service__ = __webpack_require__("./src/app/chat/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__chat_chat_component__["a" /* ChatComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__chat_chat_service__["a" /* ChatService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/async-timeout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = asyncTimeout;
function asyncTimeout(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    // return new Promise(resolve => resolve());
}


/***/ }),

/***/ "./src/app/chat/chat.component.css":
/***/ (function(module, exports) {

module.exports = ".chat {\r\n\tmax-width: 760px;\r\n\tmargin: 0 auto;\r\n\twidth: 100%;\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n\tpadding: 10px 10px 60px;\r\n\r\n}\r\n\r\n.chat-entry {\r\n\tbackground-color: rgb(255, 255, 255);\r\n\tcolor: rgb(0, 0, 0);\r\n\tdisplay: inline-block;\r\n\tpadding: 10px;\r\n\t-webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\r\n\t        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\r\n\tborder-radius: 3px;\r\n\tmargin-bottom: 20px;\r\n\tfont-size: 16px;\r\n\tposition: relative;\r\n\t-webkit-transition: width 2s;\r\n\ttransition: width 2s;\r\n\tvertical-align: middle;\r\n}\r\n\r\n@media (max-width: 750px) {\r\n\t.chat-entry {\r\n\t\tfont-size: 14px;\r\n\t}\r\n}\r\n\r\n.chat-entry:before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\t-webkit-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tbottom: 5px;\r\n\tbackground-color: rgb(255, 255, 255);\r\n\tleft: -5px;\r\n}\r\n\r\n.chat-entry:after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\t-webkit-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tbottom: 5px;\r\n\tleft: -5px;\r\n\tz-index: -1;\r\n\t-webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\r\n\t        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.user-options {\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n}\r\n\r\n.user-options .other-entry:last-child {\r\n\tmargin-right: 0;\r\n}\r\n\r\n.is-other {\r\n\ttext-align: right;\r\n}\r\n\r\n.is-other .chat-entry:before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\t-webkit-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tbottom: 5px;\r\n\tbackground-color: rgb(61, 73, 89);\r\n\tright: -5px;\r\n\tleft: auto;\r\n}\r\n\r\n.is-other .chat-entry:after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\t-webkit-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tbottom: 5px;\r\n\tright: -5px;\r\n\tleft: auto;\r\n\tz-index: -1;\r\n\t-webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\r\n\t        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.user-options .chat-entry:after, .user-options .chat-entry:before {\r\n\tdisplay: none;\r\n}\r\n\r\n.is-other .chat-entry, .other-entry {\r\n\tbackground-color: rgb(61, 73, 89);\r\n\tcolor: rgb(255, 255, 255);\r\n}\r\n\r\n.other-entry {\r\n\tmargin-right: 10px;\r\n}\r\n\r\n.selectable {\r\n\tcursor: pointer;\r\n}\r\n\r\n.chat-entry:after {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tclear: both;\r\n}\r\n\r\n.loader {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\twidth: 26px;\r\n\theight: 6px;\r\n}\r\n\r\n.loader div {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\twidth: 3px;\r\n\theight: 3px;\r\n\tborder-radius: 50%;\r\n\tbackground: #000000;\r\n\t-webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\r\n\t        animation-timing-function: cubic-bezier(0, 1, 1, 0);\r\n}\r\n\r\n.loader div:nth-child(1) {\r\n\tleft: 0;\r\n\t-webkit-animation: loader-animation1 0.6s infinite;\r\n\t        animation: loader-animation1 0.6s infinite;\r\n}\r\n\r\n.loader div:nth-child(2) {\r\n\tleft: 0;\r\n\t-webkit-animation: loader-animation2 0.6s infinite;\r\n\t        animation: loader-animation2 0.6s infinite;\r\n}\r\n\r\n.loader div:nth-child(3) {\r\n\tleft: 12px;\r\n\t-webkit-animation: loader-animation2 0.6s infinite;\r\n\t        animation: loader-animation2 0.6s infinite;\r\n}\r\n\r\n.loader div:nth-child(4) {\r\n\tleft: 24px;\r\n\t-webkit-animation: loader-animation3 0.6s infinite;\r\n\t        animation: loader-animation3 0.6s infinite;\r\n}\r\n\r\n@-webkit-keyframes loader-animation1 {\r\n\t0% {\r\n\t\t-webkit-transform: scale(0);\r\n\t\t        transform: scale(0);\r\n\t}\r\n\t100% {\r\n\t\t-webkit-transform: scale(1);\r\n\t\t        transform: scale(1);\r\n\t}\r\n}\r\n\r\n@keyframes loader-animation1 {\r\n\t0% {\r\n\t\t-webkit-transform: scale(0);\r\n\t\t        transform: scale(0);\r\n\t}\r\n\t100% {\r\n\t\t-webkit-transform: scale(1);\r\n\t\t        transform: scale(1);\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes loader-animation2 {\r\n\t0% {\r\n\t\t-webkit-transform: translate(0, 0);\r\n\t\t        transform: translate(0, 0);\r\n\t}\r\n\t100% {\r\n\t\t-webkit-transform: translate(12px, 0);\r\n\t\t        transform: translate(12px, 0);\r\n\t}\r\n}\r\n\r\n@keyframes loader-animation2 {\r\n\t0% {\r\n\t\t-webkit-transform: translate(0, 0);\r\n\t\t        transform: translate(0, 0);\r\n\t}\r\n\t100% {\r\n\t\t-webkit-transform: translate(12px, 0);\r\n\t\t        transform: translate(12px, 0);\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes loader-animation3 {\r\n\t0% {\r\n\t\t-webkit-transform: scale(1);\r\n\t\t        transform: scale(1);\r\n\t}\r\n\t100% {\r\n\t\t-webkit-transform: scale(0);\r\n\t\t        transform: scale(0);\r\n\t}\r\n}\r\n\r\n@keyframes loader-animation3 {\r\n\t0% {\r\n\t\t-webkit-transform: scale(1);\r\n\t\t        transform: scale(1);\r\n\t}\r\n\t100% {\r\n\t\t-webkit-transform: scale(0);\r\n\t\t        transform: scale(0);\r\n\t}\r\n}\r\n\r\n.scroll-bottom {\r\n\tposition: fixed;\r\n\tbottom: 50px;\r\n\tright: 50px;\r\n\tbackground-color: rgb(61, 73, 89);\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tborder-radius: 100px;\r\n\ttext-align: center;\r\n\tline-height: 26px;\r\n\t-webkit-animation: bottom-animation 1s infinite;\r\n\t        animation: bottom-animation 1s infinite;\r\n\tcursor: pointer;\r\n}\r\n\r\n@-webkit-keyframes bottom-animation {\r\n\t0% {\r\n\t\tline-height: 26px;\r\n\t}\r\n\t10% {\r\n\t\tline-height: 22px;\r\n\t}\r\n\t90% {\r\n\t\tline-height: 26px;\r\n\t}\r\n\t100% {\r\n\t\tline-height: 26px;\r\n\t}\r\n}\r\n\r\n@keyframes bottom-animation {\r\n\t0% {\r\n\t\tline-height: 26px;\r\n\t}\r\n\t10% {\r\n\t\tline-height: 22px;\r\n\t}\r\n\t90% {\r\n\t\tline-height: 26px;\r\n\t}\r\n\t100% {\r\n\t\tline-height: 26px;\r\n\t}\r\n}\r\n\r\n.scroll-bottom img {\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n}"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<button (click)=\"clearStorage()\">clear storage</button>-->\n<div class=\"chat\">\n\t<div *ngFor=\"let item of chat\" class=\"{{item.responses?'is-other':'item'}}\">\n\t\t<div class=\"chat-entry\" *ngIf=\"item === 'loader'\">\n\t\t\t<div class=\"loader\">\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"chat-entry\" *ngIf=\"item !== 'loader'\" [innerHTML]=\"item.text\"></div>\n\n\t</div>\n\t<div *ngIf=\"options\" class=\"user-options\">\n\t\t<div *ngFor=\"let option of options\"\n\t\t     class=\"chat-entry other-entry selectable\"\n\t\t     (click)=\"selectOption(option)\">\n\t\t\t{{option.text}}\n\t\t</div>\n\t</div>\n</div>\n<!--<div class=\"scroll-bottom\" (click)=\"scrollBottom()\">\n\t<img src=\"assets/down-arrow.svg\" />\n</div>-->"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("./src/app/chat/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__async_timeout__ = __webpack_require__("./src/app/async-timeout.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService) {
        this.chatService = chatService;
        this.chat = [];
        this.options = [];
    }
    ChatComponent.prototype.clearStorage = function () {
        localStorage.clear();
        location.reload();
    };
    ChatComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var chat, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.chatService.getOptions()];
                    case 1:
                        chat = _a.sent();
                        /*const history = await ChatService.getPersonalHistory();
                        const nso = await ChatService.getNotSelectedOptions();
                        if (nso.length) {
                            this.options = nso.map((item: string) => ResponseEntry.findByText(item));
                        }
                        if (history.length) {
                            this.chat = chat;
                            this.applyHistoryToChat(history);
                            // @todo: animation and scroll to bottom
                            // @todo: inject friendly greeting
                        } else {*/
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_2__async_timeout__["a" /* asyncTimeout */])(1500)];
                    case 2:
                        /*const history = await ChatService.getPersonalHistory();
                        const nso = await ChatService.getNotSelectedOptions();
                        if (nso.length) {
                            this.options = nso.map((item: string) => ResponseEntry.findByText(item));
                        }
                        if (history.length) {
                            this.chat = chat;
                            this.applyHistoryToChat(history);
                            // @todo: animation and scroll to bottom
                            // @todo: inject friendly greeting
                        } else {*/
                        _a.sent();
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */].injectMeIntoChat(chat, this.chat, this.options)];
                    case 3:
                        options = (_a.sent()).options;
                        this.options = options;
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatComponent.prototype.applyHistoryToChat = function (history) {
        var _this = this;
        // @todo: not working correctly
        history.forEach(function (item) {
            var lastEntry = _this.chat[_this.chat.length - 1]; // set type, cause i always have the last word!
            if (typeof lastEntry.options === 'undefined') {
                return false;
            }
            lastEntry.options.forEach(function (option) {
                if (option.text === item) {
                    _this.chat[_this.chat.length - 1].options = [];
                    _this.chat.push(option);
                    _this.chat = _this.chat.concat(option.responses);
                    return false;
                }
            });
        });
    };
    ChatComponent.prototype.selectOption = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var optionss, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.chat.push(option); // appends the answer to the chat
                        optionss = this.options.filter(function (item) { return item.text !== option.text; });
                        // @todo: animate the user choice by moving the element slowly to the end position
                        this.options = [];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */].injectMeIntoChat(option.responses, this.chat, optionss)];
                    case 1:
                        options = (_a.sent()).options;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */].updatePersonalHistory(this.chat)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */].updateNotSelectedOptions(this.options)];
                    case 3:
                        _a.sent();
                        this.options = options;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description
     * scrolls to the last chat entry
     */
    ChatComponent.prototype.scrollBottom = function () {
        document.querySelector('.chat .item:last-child').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("./src/app/chat/chat.component.html"),
            styles: [__webpack_require__("./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__async_timeout__ = __webpack_require__("./src/app/async-timeout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__response_entry__ = __webpack_require__("./src/app/chat/response-entry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entries_intro__ = __webpack_require__("./src/app/chat/entries/_intro.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ChatService = /** @class */ (function () {
    function ChatService() {
    }
    /**
     * @description
     * Stores the selected user options as array in localStorage
     * @param {Chat} chat
     * @return {Promise<void>}
     */
    ChatService.updatePersonalHistory = function (chat) {
        return __awaiter(this, void 0, void 0, function () {
            var history;
            return __generator(this, function (_a) {
                history = chat
                    .filter(function (item) { return item instanceof __WEBPACK_IMPORTED_MODULE_2__response_entry__["a" /* ResponseEntry */]; }) // filter only ResponseEntry
                    .reduce(function (prev, currentValue) {
                    prev.push(currentValue.text);
                    return prev;
                }, []);
                localStorage.setItem('history', JSON.stringify(history));
                return [2 /*return*/];
            });
        });
    };
    /**
     * @description
     * Also store the not selected options for later questioning
     * @param {ResponseEntry[]} notSelected
     * @return {Promise<void>}
     */
    ChatService.updateNotSelectedOptions = function (notSelected) {
        return __awaiter(this, void 0, void 0, function () {
            var responses;
            return __generator(this, function (_a) {
                responses = notSelected.map(function (item) { return item.text; });
                localStorage.setItem('responses', JSON.stringify(responses));
                return [2 /*return*/];
            });
        });
    };
    /**
     * @description
     * Returns the not selected options for the user (simple array with ResponseEntry titles)
     * @return {Promise<any>}
     */
    ChatService.getNotSelectedOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var history;
            return __generator(this, function (_a) {
                history = localStorage.getItem('responses') || '[]';
                return [2 /*return*/, JSON.parse(history)];
            });
        });
    };
    /**
     * @description
     * Returns the personal history of the user (simple array with ResponseEntry titles)
     * @return {Promise<any>}
     */
    ChatService.getPersonalHistory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var history;
            return __generator(this, function (_a) {
                history = localStorage.getItem('history') || '[]';
                return [2 /*return*/, JSON.parse(history)];
            });
        });
    };
    /**
     * @description
     * Shows the "loader" (the typing symbol) for the passed amount of time in ms
     * @param {number} time
     * @param chat
     * @return {Promise<undefined>}
     */
    ChatService.showLoaderFor = function (time, chat) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1__async_timeout__["a" /* asyncTimeout */])(500)];
                    case 1:
                        _a.sent();
                        chat.push('loader');
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_1__async_timeout__["a" /* asyncTimeout */])(time)];
                    case 2:
                        _a.sent();
                        chat.pop();
                        return [2 /*return*/, chat];
                }
            });
        });
    };
    /**
     * @description
     * Shows a loader for a realistic time and then the message
     * @param {MeEntry} message
     * @param chat
     */
    ChatService.injectMeEntry = function (message, chat) {
        return __awaiter(this, void 0, void 0, function () {
            var words, time;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        words = message.text.replace(/[^\s]/g, '').length + 1;
                        time = Math.ceil(words / 10) * 1000;
                        return [4 /*yield*/, this.showLoaderFor(time, chat)];
                    case 1:
                        chat = _a.sent();
                        chat.push(message);
                        return [2 /*return*/, chat];
                }
            });
        });
    };
    ChatService.injectMeIntoChat = function (meEntries, chat, options) {
        return __awaiter(this, void 0, void 0, function () {
            var option;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        option = meEntries.shift();
                        return [4 /*yield*/, this.injectMeEntry(option, chat)];
                    case 1:
                        chat = _a.sent();
                        if (option.options) {
                            options = options.concat(option.options);
                        }
                        console.log(options);
                        if (meEntries.length) {
                            return [2 /*return*/, this.injectMeIntoChat(meEntries, chat, options)];
                        }
                        return [2 /*return*/, { chat: chat, options: options }];
                }
            });
        });
    };
    ChatService.prototype.getOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, __WEBPACK_IMPORTED_MODULE_3__entries_intro__["a" /* intro */].responses];
            });
        });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/chat/entries/_intro.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return intro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__response_entry__ = __webpack_require__("./src/app/chat/response-entry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tell_me_more__ = __webpack_require__("./src/app/chat/entries/tell-me-more.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_in_touch__ = __webpack_require__("./src/app/chat/entries/get-in-touch.ts");



var intro = new __WEBPACK_IMPORTED_MODULE_0__response_entry__["a" /* ResponseEntry */]('intro', 'intro', [
    { text: 'Moin 👋' },
    { text: 'I’m Tim, a developer living in <a href="https://www.google.com/maps/place/Hanover/" target="_blank">🌍Hanover, Germany</a>' },
    {
        text: 'Do you want to know more or get in touch?',
        options: [
            __WEBPACK_IMPORTED_MODULE_1__tell_me_more__["a" /* tellMeMore */],
            __WEBPACK_IMPORTED_MODULE_2__get_in_touch__["a" /* getInTouch */]
        ]
    }
]);


/***/ }),

/***/ "./src/app/chat/entries/angular.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return angular; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__response_entry__ = __webpack_require__("./src/app/chat/response-entry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wendweb__ = __webpack_require__("./src/app/chat/entries/wendweb.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qompa__ = __webpack_require__("./src/app/chat/entries/qompa.ts");



var angular = new __WEBPACK_IMPORTED_MODULE_0__response_entry__["a" /* ResponseEntry */]('you work with angular?', 'angular?', [
    { text: 'Yes! It\'s my passion!' },
    { text: 'Beside this site, I\'ve already developed a lot of projects with angular working by <a href="https://www.wendweb.de/" target="_blank"><img src="assets/icons/wendweb.svg" class="icon"><span class="icon-label">wendweb</span></a>. For example a few PWA and hybrid app\'s.' },
    {
        text: 'I was already working with angularjs during my training when I developed a hybrid application for a start-up named qompa.',
        options: [
            __WEBPACK_IMPORTED_MODULE_1__wendweb__["a" /* wendweb */],
            __WEBPACK_IMPORTED_MODULE_2__qompa__["a" /* qompa */]
        ]
    },
]);


/***/ }),

/***/ "./src/app/chat/entries/get-in-touch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getInTouch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__response_entry__ = __webpack_require__("./src/app/chat/response-entry.ts");

var getInTouch = new __WEBPACK_IMPORTED_MODULE_0__response_entry__["a" /* ResponseEntry */]('get in touch!', 'now get in touch.', [
    { 'text': 'sure 👍' },
    { 'text': 'You can <a href="mailto:tim.ruecker@ymail.com">📫email me</a> right away or contact me via <a href="https://www.xing.com/profile/Tim_Ruecker/cv" target="_blank"><img src="assets/icons/xing.svg" class="icon"><span class="icon-label">Xing</span></a> if you want.' },
    { 'text': 'I will try to answer you as soon as possible.' }
]);


/***/ }),

/***/ "./src/app/chat/entries/other-things.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return otherThings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__response_entry__ = __webpack_require__("./src/app/chat/response-entry.ts");

var otherThings = new __WEBPACK_IMPORTED_MODULE_0__response_entry__["a" /* ResponseEntry */]('New things?', 'New things?', [
    { text: 'I\'m currently working on figma, although I wouldn\'t call myself very talented.' },
    { text: 'However, I am also very interested in physics (especially quantum physics).' },
    { text: 'If you are interested in my hobbies: I like to play various board games 🎲 with friends, play canoe polo 🛶 in a club and like to do handicrafts 🔨, for example by building structures for my plants or light objects.' }
]);


/***/ }),

/***/ "./src/app/chat/entries/qompa.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return qompa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__response_entry__ = __webpack_require__("./src/app/chat/response-entry.ts");

var qompa = new __WEBPACK_IMPORTED_MODULE_0__response_entry__["a" /* ResponseEntry */]('qompa?', 'qompa?', [
    { 'text': 'I worked part-time at qompa. There I was able to gain initial experience in team leadership, even if I was only a team leader of two people.' },
    { 'text': 'If you want to know more, you can find information on my <a href="https://www.xing.com/profile/Tim_Ruecker/cv" target="_blank"><img src="assets/icons/xing.svg" class="icon"><span class="icon-label">Xing profile</span></a>.' }
]);


/***/ }),

/***/ "./src/app/chat/entries/specialties.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return specialties; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__response_entry__ = __webpack_require__("./src/app/chat/response-entry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular__ = __webpack_require__("./src/app/chat/entries/angular.ts");


var specialties = new __WEBPACK_IMPORTED_MODULE_0__response_entry__["a" /* ResponseEntry */]('What\'s your profession?', 'What\'s your profession?', [
    { text: 'I am specialized in web development (everything written in PHP, but most often TYPO3 and Laravel).' },
    { text: 'However, my passion is Javascript (currently TypeScript) 😍' },
    {
        text: 'I love to work on angular projects or my personal framework <a href="https://iizunats.com/" target="_blank"><img src="assets/icons/iizuna.svg" class="icon"><span class="icon-label">iizuna</span></a> ❤️',
        options: [
            __WEBPACK_IMPORTED_MODULE_1__angular__["a" /* angular */]
        ]
    },
]);


/***/ }),

/***/ "./src/app/chat/entries/tell-me-more.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tellMeMore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__response_entry__ = __webpack_require__("./src/app/chat/response-entry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__specialties__ = __webpack_require__("./src/app/chat/entries/specialties.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__other_things__ = __webpack_require__("./src/app/chat/entries/other-things.ts");



var tellMeMore = new __WEBPACK_IMPORTED_MODULE_0__response_entry__["a" /* ResponseEntry */]('Tell me more!', 'Now tell me more', [
    { text: 'sure 😊' },
    {
        text: 'Although I am "on the server side" professionally, I like to try new things for myself.',
        options: [
            __WEBPACK_IMPORTED_MODULE_1__specialties__["a" /* specialties */],
            __WEBPACK_IMPORTED_MODULE_2__other_things__["a" /* otherThings */]
        ]
    }
]);


/***/ }),

/***/ "./src/app/chat/entries/wendweb.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return wendweb; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__response_entry__ = __webpack_require__("./src/app/chat/response-entry.ts");

var wendweb = new __WEBPACK_IMPORTED_MODULE_0__response_entry__["a" /* ResponseEntry */]('wendweb?', 'wendweb?', [
    { 'text': 'I am currently working at wendweb as head of content management systems and individual solutions (i.e. TYPO3, Laravel, Angular etc.)' },
    { 'text': 'Here I lead a team of around 10 people, I am the contact person for tricky problems and take care of customer inquiries.' },
    { 'text': 'I am also one of the trainers at wendweb. With our support, our current trainees were able to implement a <a href="https://weihnachten.wendweb.de/" target="_blank">🎅terrific Christmas project</a>.' }
]);


/***/ }),

/***/ "./src/app/chat/response-entry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseEntry; });
var ResponseEntry = /** @class */ (function () {
    function ResponseEntry(text, secondaryText, responses) {
        this.text = text;
        this.secondaryText = secondaryText;
        this.responses = responses;
        ResponseEntry.allEntries.push(this);
    }
    ResponseEntry.findByText = function (text) {
        var filtered = this.allEntries.filter(function (item) { return item.text === text; });
        return filtered.length ? filtered[0] : null;
    };
    ResponseEntry.allEntries = [];
    return ResponseEntry;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map