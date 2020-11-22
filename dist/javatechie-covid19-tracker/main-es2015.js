(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-covid19></app-covid19>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/covid19/covid19.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/covid19/covid19.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div></div>\n&nbsp;&nbsp;\n&nbsp;&nbsp;<mat-form-field>\n  <mat-label>Filter</mat-label>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Ex. ium\">\n</mat-form-field>\n\n<div>\n\n  &nbsp;&nbsp;<button mat-raised-button  (click)=\"exporter.exportTable('xlsx', {fileName:'javatechiecovid19'})\">Excel</button>\n  &nbsp;&nbsp;<button mat-raised-button  (click)=\"exporter.exportTable('csv', {fileName:'javatechiecovid19'})\">Csv</button>\n  &nbsp;&nbsp;<button mat-raised-button  (click)=\"exporter.exportTable('json', {fileName:'javatechiecovid19'})\">Json</button>\n  &nbsp;&nbsp;<button mat-raised-button  (click)=\"exporter.exportTable('txt', {fileName:'javatechiecovid19'})\">Txt</button>\n</div>\n<div>.</div>\n<div></div>\n<div class=\"mat-elevation-z8\">\n<table mat-table matTableExporter [dataSource]=\"dataSource\" #exporter=\"matTableExporter\" [hiddenColumns]=\"[0]\" matSort>\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n  \n    <!-- Position Column -->\n    <ng-container matColumnDef=\"country\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Country Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.country}} </td>\n    </ng-container>\n  \n    <!-- Name Column -->\n    <ng-container matColumnDef=\"cases\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Total Cases </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.cases}} </td>\n    </ng-container>\n  \n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"todayCases\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Today Cases </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.todayCases}} </td>\n    </ng-container>\n  \n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"deaths\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Total Death </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.deaths}} </td>\n    </ng-container>\n  \n     <!-- Position Column -->\n     <ng-container matColumnDef=\"todayDeaths\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Today Death </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.todayDeaths}} </td>\n      </ng-container>\n    \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"recovered\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Recovered </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.recovered}} </td>\n      </ng-container>\n    \n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"active\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Active </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.active}} </td>\n      </ng-container>\n    \n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"critical\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Critical </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.critical}} </td>\n      </ng-container>\n\n       <!-- Position Column -->\n    <ng-container matColumnDef=\"casesPerOneMillion\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Cases/1M </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.casesPerOneMillion}} </td>\n      </ng-container>\n    \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"deathsPerOneMillion\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Death/1M </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.deathsPerOneMillion}} </td>\n      </ng-container>\n    \n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"tests\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Total test </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.tests}} </td>\n      </ng-container>\n    \n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"testsPerOneMillion\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Test/1M </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.testsPerOneMillion}} </td>\n      </ng-container>\n      \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  \n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'javatechie-covid19-tracker';
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _covid19_covid19_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./covid19/covid19.component */ "./src/app/covid19/covid19.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mat-table-exporter */ "./node_modules/mat-table-exporter/fesm2015/mat-table-exporter.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _covid19_covid19_component__WEBPACK_IMPORTED_MODULE_6__["Covid19Component"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_12__["MatTableExporterModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/covid19/covid19.component.css":
/*!***********************************************!*\
  !*** ./src/app/covid19/covid19.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    width: 100%;\r\n}\r\nth.mat-sort-header-sorted {\r\n    color: black;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY292aWQxOS9jb3ZpZDE5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvdmlkMTkvY292aWQxOS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/covid19/covid19.component.ts":
/*!**********************************************!*\
  !*** ./src/app/covid19/covid19.component.ts ***!
  \**********************************************/
/*! exports provided: Covid19Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19Component", function() { return Covid19Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _javatechie_covid19_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../javatechie-covid19.service */ "./src/app/javatechie-covid19.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");






let Covid19Component = class Covid19Component {
    constructor(service) {
        this.service = service;
        this.displayedColumns = ['country', 'cases', 'todayCases', 'deaths', 'todayDeaths', 'recovered', 'active', 'critical', 'casesPerOneMillion', 'deathsPerOneMillion', 'tests', 'testsPerOneMillion'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.ELEMENT_DATA);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.getAllReports();
    }
    getAllReports() {
        let resp = this.service.covid19Reports();
        resp.subscribe(report => this.dataSource.data = report);
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
};
Covid19Component.ctorParameters = () => [
    { type: _javatechie_covid19_service__WEBPACK_IMPORTED_MODULE_2__["JavatechieCovid19Service"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true })
], Covid19Component.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true })
], Covid19Component.prototype, "sort", void 0);
Covid19Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-covid19',
        template: __webpack_require__(/*! raw-loader!./covid19.component.html */ "./node_modules/raw-loader/index.js!./src/app/covid19/covid19.component.html"),
        styles: [__webpack_require__(/*! ./covid19.component.css */ "./src/app/covid19/covid19.component.css")]
    })
], Covid19Component);



/***/ }),

/***/ "./src/app/javatechie-covid19.service.ts":
/*!***********************************************!*\
  !*** ./src/app/javatechie-covid19.service.ts ***!
  \***********************************************/
/*! exports provided: JavatechieCovid19Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavatechieCovid19Service", function() { return JavatechieCovid19Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let JavatechieCovid19Service = class JavatechieCovid19Service {
    constructor(http) {
        this.http = http;
    }
    covid19Reports() {
        return this.http.get("https://corona.lmao.ninja/v2/countries");
    }
};
JavatechieCovid19Service.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
JavatechieCovid19Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], JavatechieCovid19Service);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AngularPracticas\javatechie-covid19-ng-main\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map