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
import {DataService} from "./data.service";

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ClarityModule,
        ROUTING
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
