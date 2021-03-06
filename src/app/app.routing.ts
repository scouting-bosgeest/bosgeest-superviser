/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from '@angular/core/src/metadata/ng_module';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {BallotsComponent} from "./ballots/ballots.component";
import {ApproveComponent} from "./approve/approve.component";
import {NotFoundComponent} from "./not-found/not-found.component";


export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'ballots', component: BallotsComponent},
    {path: 'approve/:id', component: ApproveComponent},
    {path: 'notfound', component: NotFoundComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
