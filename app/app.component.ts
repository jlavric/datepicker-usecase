import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
       <form class="panel-body" [formGroup]="form">
        <datetime formControlName="date" [timepicker]="false" [datepicker]="datepickerOpts"></datetime>
       <form> 
       <datepicker-example></datepicker-example>`})
       
export class AppComponent implements OnInit {
    form: FormGroup;
    date: Date;
    date2: Date = new Date(2016, 5, 10);
    date3: Date;
    date4: Date;
    datepickerOpts: any = {
        startDate: new Date(2016, 5, 10),
        autoclose: true,
        todayBtn: 'linked',
        todayHighlight: true,
        assumeNearbyYear: true,
        format: 'd MM yyyy',
        icon: 'fa fa-calendar-o',
        datetime: false
    };
    date5: Date = new Date();
    dateFrom: Date;
    dateTo: Date;
    datepickerToOpts: any = {};

    handleDateFromChange(dateFrom) {
        // update the model
        this.dateFrom = dateFrom;

        // do not mutate the object or angular won't detect the changes
        this.datepickerToOpts = {
            startDate: dateFrom
        };
    }

    getDate(dt): number {
        return dt && dt.getTime();
    }

    constructor(private _fp: FormBuilder){}

    ngOnInit() {
        this.form = this._fp.group({
            date: new Date()
        });
    }
}