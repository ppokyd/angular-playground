webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row header\">\n    <div class=\"col-12\">\n      <h3>Angular Playground</h3>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-2 px-0\">\n      <app-side-menu></app-side-menu>\n    </div>\n    <div class=\"col-10 py-3\">\n      <ui-view></ui-view>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  background: #141419;\n  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.75);\n          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.75);\n  height: 50px;\n  padding: 8px;\n  padding-left: 15px;\n  color: #7eb8ff;\n  letter-spacing: 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tree_view_tree_view_module__ = __webpack_require__("../../../../../src/app/components/tree-view/tree-view.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router_config__ = __webpack_require__("../../../../../src/app/router.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_states__ = __webpack_require__("../../../../../src/app/app.states.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tree_tree_component__ = __webpack_require__("../../../../../src/app/tree/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__side_menu_side_menu_component__ = __webpack_require__("../../../../../src/app/side-menu/side-menu.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__tree_tree_component__["a" /* TreeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__side_menu_side_menu_component__["a" /* SideMenuComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_tree_view_tree_view_module__["a" /* TreeViewModule */],
                __WEBPACK_IMPORTED_MODULE_2__uirouter_angular__["UIRouterModule"].forRoot({
                    states: __WEBPACK_IMPORTED_MODULE_7__app_states__["a" /* APP_STATES */],
                    useHash: false,
                    otherwise: { state: 'app' },
                    config: __WEBPACK_IMPORTED_MODULE_6__router_config__["a" /* routerConfigFn */],
                })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__uirouter_angular__["UIView"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.states.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appState */
/* unused harmony export treeState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_STATES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_tree_component__ = __webpack_require__("../../../../../src/app/tree/tree.component.ts");


var appState = {
    name: 'app',
    component: __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]
};
var treeState = {
    parent: 'app',
    name: 'tree',
    url: '/tree',
    component: __WEBPACK_IMPORTED_MODULE_1__tree_tree_component__["a" /* TreeComponent */]
};
var APP_STATES = [
    appState,
    treeState
];


/***/ }),

/***/ "../../../../../src/app/components/tree-view/tree-view.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ul [ngClass]=\"{ 'tree-root': treeSize === 1 }\">\n  <li *ngFor=\"let item of data;\" [ngClass]=\"{ 'no-children': !item.children }\">\n    <div class=\"tree-item\">\n      <i class=\"material-icons level-icon\" *ngIf=\"item.children\"\n        (click)=\"item.closed = !item.closed\">{{ item.closed ? 'add' : 'remove' }}</i>\n\n      <i class=\"material-icons item-icon\" *ngIf=\"item.icon\">{{ item.icon }}</i>\n\n      <div class=\"item-name\"\n        [ngClass]=\"{ 'selected-item': selected === item }\"\n        (click)=\"onItemSelect(item)\">{{ item.name }}</div>\n\n      <div class=\"item-actions\" *ngIf=\"item.actions\">\n        <i class=\"material-icons\" *ngFor=\"let action of item.actions;\"\n          (click)=\"action.callback(item)\">{{ action.icon }}</i>\n      </div>\n    </div>\n\n    <tree-view *ngIf=\"item.children\"\n      [data]=\"item.children\"\n      [hidden]=\"item.closed\"\n      [treeSize]=\"treeSize\"></tree-view>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/components/tree-view/tree-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .item-name {\n  display: inline-block;\n  cursor: pointer; }\n  :host .item-name.selected-item {\n    font-weight: bold; }\n  :host .item-actions {\n  display: inline-block;\n  padding-left: 5px;\n  visibility: hidden; }\n  :host .item-actions i {\n    cursor: pointer;\n    padding: 0 2px;\n    vertical-align: middle; }\n  :host .level-icon {\n  cursor: pointer; }\n  :host li .tree-item:hover .item-actions {\n  visibility: visible; }\n  :host li .tree-item > * {\n  vertical-align: middle; }\n  :host ul {\n  list-style: none;\n  padding-left: 28px;\n  margin: 0; }\n  :host ul.tree-root {\n    padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tree-view/tree-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_view_service__ = __webpack_require__("../../../../../src/app/components/tree-view/tree-view.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeViewComponent = /** @class */ (function () {
    function TreeViewComponent(service) {
        this.service = service;
        this.closed = true;
        this.selected = null;
        this.treeSize = 0;
        this.data = [];
        this.selectedId = null;
    }
    TreeViewComponent.prototype.ngOnInit = function () {
        this.treeSize++;
        this.getSelected();
        if (this.data && this.data.length) {
            this._setSelected(this.data, this.selectedId);
            this.data.forEach(function (item) { return item.closed = item.closed !== false ? true : false; });
        }
    };
    TreeViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes && changes.selectedId) {
            this._setSelected(this.data, changes.selectedId.currentValue);
        }
    };
    TreeViewComponent.prototype.getSelected = function () {
        var _this = this;
        this.selected = this.service.selectedItem;
        this.service.onSelect.subscribe(function (res) {
            _this.selected = res;
        });
    };
    TreeViewComponent.prototype.onItemSelect = function (item) {
        if (item) {
            if (this.service.selectedItem === item) {
                this.service.selectedItem = null;
            }
            else {
                this.service.selectedItem = item;
            }
            this.service.onSelect.next(this.service.selectedItem);
        }
    };
    TreeViewComponent.prototype._setSelected = function (data, id) {
        var _this = this;
        if (id) {
            data.forEach(function (item) {
                if (_this._compare(item.id, id)) {
                    _this.service.onSelect.next(item);
                }
                else if (_this._checkNodeChildren(item, id)) {
                    item.closed = false;
                }
            });
        }
    };
    TreeViewComponent.prototype._checkNodeChildren = function (node, id) {
        var _this = this;
        var result = false;
        if (node.children) {
            var found = node.children.find(function (child) { return _this._compare(child.id, id); });
            if (found) {
                node.closed = false;
                this.service.selectedItem = found;
                return true;
            }
            else {
                node.children.forEach(function (ch) {
                    result = result || _this._checkNodeChildren(ch, id);
                });
            }
        }
        return result;
    };
    TreeViewComponent.prototype._compare = function (val1, val2) {
        return String(val1) === String(val2);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TreeViewComponent.prototype, "treeSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TreeViewComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TreeViewComponent.prototype, "selectedId", void 0);
    TreeViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tree-view',
            template: __webpack_require__("../../../../../src/app/components/tree-view/tree-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tree-view/tree-view.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tree_view_service__["a" /* TreeViewService */]])
    ], TreeViewComponent);
    return TreeViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tree-view/tree-view.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tree_view_component__ = __webpack_require__("../../../../../src/app/components/tree-view/tree-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tree_view_service__ = __webpack_require__("../../../../../src/app/components/tree-view/tree-view.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TreeViewModule = /** @class */ (function () {
    function TreeViewModule() {
    }
    TreeViewModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tree_view_component__["a" /* TreeViewComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__tree_view_service__["a" /* TreeViewService */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__tree_view_component__["a" /* TreeViewComponent */]]
        })
    ], TreeViewModule);
    return TreeViewModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/tree-view/tree-view.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeViewService = /** @class */ (function () {
    function TreeViewService() {
        this.selectedValue = null;
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    Object.defineProperty(TreeViewService.prototype, "selectedItem", {
        get: function () {
            return this.selectedValue;
        },
        set: function (val) {
            this.selectedValue = val;
        },
        enumerable: true,
        configurable: true
    });
    TreeViewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TreeViewService);
    return TreeViewService;
}());



/***/ }),

/***/ "../../../../../src/app/router.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = routerConfigFn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uirouter_core__ = __webpack_require__("../../../../@uirouter/core/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uirouter_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__uirouter_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uirouter_visualizer__ = __webpack_require__("../../../../@uirouter/visualizer/_bundles/ui-router-visualizer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uirouter_visualizer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__uirouter_visualizer__);


function routerConfigFn(router) {
    router.trace.enable(__WEBPACK_IMPORTED_MODULE_0__uirouter_core__["Category"].TRANSITION);
    router.plugin(__WEBPACK_IMPORTED_MODULE_1__uirouter_visualizer__["Visualizer"]);
}


/***/ }),

/***/ "../../../../../src/app/side-menu/side-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav flex-column\">\n  <li class=\"nav-item\" uiSrefActive=\"active\">\n    <a class=\"nav-link\" uiSref=\"tree\">Tree View</a>\n  </li>\n  <!-- <li class=\"nav-item\">\n    <a class=\"nav-link disabled\" href=\"#\">Coming soon</a>\n  </li> -->\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/side-menu/side-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  height: 100%;\n  background-color: #23212f;\n  color: #fff;\n  padding-top: 10px; }\n  :host li {\n    padding-left: 3px; }\n  :host li a {\n      color: #fff;\n      letter-spacing: 2px; }\n  :host li.active {\n      border-left: 3px solid;\n      padding-left: 0;\n      background-color: #353246; }\n  :host li.active a {\n        color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-menu/side-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent() {
    }
    SideMenuComponent.prototype.ngOnInit = function () {
    };
    SideMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-side-menu',
            template: __webpack_require__("../../../../../src/app/side-menu/side-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/side-menu/side-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tree/tree.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-4\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <span class=\"lead\">Component View</span>\n      </div>\n      <div class=\"card-body\">\n        <tree-view\n          [data]=\"data\"\n          [selectedId]=\"selectedId\"\n          ></tree-view>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-8\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <span class=\"lead\">Component Info</span>\n      </div>\n      <div class=\"card-body\">\n        <p class=\"lead\">Component usage:</p>\n        <p>\n          <code>\n            &lt;tree-view [data]=\"treeViewData\" [selectedId]=\"selectedId\"&gt;&lt;/tree-view&gt;\n          </code>\n        </p>\n\n        <p class=\"lead\">Data structure:</p>\n<pre><code>[\n  &#123;\n    id: string,\n    name: string,\n    children: [ ... ]\n    actions: [\n      &#123; icon: string, callback: function &#125;\n    ]\n  &#125;\n]</code></pre>\n\n        <p class=\"lead\">Service usage:</p>\n<pre><code>TreeViewService.onSelect.subscribe(item =&gt; &#123;\n  console.log(item);\n&#125;);</code></pre>\n\n        <div class=\"form-row\">\n          <label class=\"lead\">Click on node to see selected value details:</label>\n          <textarea disabled class=\"form-control\" [value]=\"getSelected()\" rows=\"6\"></textarea>\n        </div>\n        <small>More info in developers console</small>\n        <div class=\"form-row\">\n          <label class=\"lead\">Enter node id:</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedId\">\n        </div>\n        <small>Node will be automatically highlighted</small>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/tree/tree.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host textarea {\n  font-family: 'Courier New', Courier, monospace; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tree/tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_tree_view_tree_view_service__ = __webpack_require__("../../../../../src/app/components/tree-view/tree-view.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeComponent = /** @class */ (function () {
    function TreeComponent(service) {
        this.service = service;
        this.selectedId = '';
        this.selected = null;
    }
    TreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = this._generateData();
        this.service.onSelect.subscribe(function (res) {
            _this.onItemSelect(res);
        });
    };
    TreeComponent.prototype.onItemSelect = function (item) {
        console.log('Select');
        console.log(item);
        this.selected = item;
    };
    TreeComponent.prototype.onDelete = function (item) {
        console.log('Delete');
        console.log(item);
    };
    TreeComponent.prototype.onCopy = function (item) {
        console.log('Copy');
        console.log(item);
    };
    TreeComponent.prototype.getSelected = function () {
        if (this.selected) {
            return JSON.stringify(this.selected, null, 2);
        }
        return '';
    };
    TreeComponent.prototype._generateData = function () {
        var _this = this;
        return Array.apply(null, Array(5)).map(function (item, index) {
            return {
                id: String(new Date().getTime() + Math.random()),
                name: "Node " + index,
                icon: 'account_circle',
                actions: [
                    { callback: _this.onDelete, icon: 'delete' },
                    { callback: _this.onCopy, icon: 'content_copy' }
                ],
                children: Array.apply(null, Array(5)).map(function (child, i) {
                    return {
                        id: String(new Date().getTime() + Math.random()),
                        name: "Node " + i,
                        icon: 'dns',
                        actions: [
                            { callback: _this.onDelete, icon: 'delete' },
                            { callback: _this.onCopy, icon: 'content_copy' }
                        ],
                        children: Array.apply(null, Array(5)).map(function (c, ind) {
                            return ({
                                name: "Child " + ind, icon: 'play_circle_outline',
                                id: ind === 0 && i === 2 && index === 3 ? _this.selectedId : String(new Date().getTime() + Math.random())
                            });
                        })
                    };
                })
            };
        });
    };
    TreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tree',
            template: __webpack_require__("../../../../../src/app/tree/tree.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tree/tree.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__components_tree_view_tree_view_service__["a" /* TreeViewService */]])
    ], TreeComponent);
    return TreeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map