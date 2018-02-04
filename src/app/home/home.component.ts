/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, OnInit} from "@angular/core";
import {DataService} from "../services/data.service";
import {Observable} from "rxjs/Observable";

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

    tracks$: Observable<any>;

    constructor(public dataService: DataService) { }

    ngOnInit(): void {
        this.tracks$ = this.dataService.topTracks();
    }
}
