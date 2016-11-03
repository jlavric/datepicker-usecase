"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var AppComponent = (function () {
    function AppComponent(_fp) {
        this._fp = _fp;
        this.date2 = new Date(2016, 5, 10);
        this.datepickerOpts = {
            startDate: new Date(2016, 5, 10),
            autoclose: true,
            todayBtn: 'linked',
            todayHighlight: true,
            assumeNearbyYear: true,
            format: 'd MM yyyy',
            icon: 'fa fa-calendar-o',
            datetime: false
        };
        this.date5 = new Date();
        this.datepickerToOpts = {};
    }
    AppComponent.prototype.handleDateFromChange = function (dateFrom) {
        // update the model
        this.dateFrom = dateFrom;
        // do not mutate the object or angular won't detect the changes
        this.datepickerToOpts = {
            startDate: dateFrom
        };
    };
    AppComponent.prototype.getDate = function (dt) {
        return dt && dt.getTime();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.form = this._fp.group({
            date: new Date()
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n       <form class=\"panel-body\" [formGroup]=\"form\">\n        <datetime formControlName=\"date\" [timepicker]=\"false\" [datepicker]=\"datepickerOpts\"></datetime>\n       <form> \n       <datepicker-example></datepicker-example>" }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map