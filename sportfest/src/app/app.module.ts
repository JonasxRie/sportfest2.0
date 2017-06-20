import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EinzelComponent } from './einzel/einzel.component';
import { TeamComponent } from './team/team.component';
import { SportfestService } from './sportfest.service';
import { TechnischerService } from './technischer.service';

const routConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    { path: 'einzel', component: EinzelComponent },
    { path: 'team', component: TeamComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EinzelComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routConfig)
  ],
  providers: [
    TechnischerService,
    SportfestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
