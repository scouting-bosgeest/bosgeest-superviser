import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';
import {AppComponent} from './app.component';
import {ROUTING} from "./app.routing";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/data.service";
import {BallotsComponent} from './ballots/ballots.component';
import {BallotService} from "./services/ballot.service";
import { ApproveComponent } from './approve/approve.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        BallotsComponent,
        ApproveComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ClarityModule,
        ROUTING
    ],
    providers: [DataService, BallotService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
