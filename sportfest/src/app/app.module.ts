import { Md5 } from 'ts-md5/dist/md5';
import { RouteGuard } from './route-guard';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EinzelComponent } from './einzel/einzel.component';
import { TeamComponent } from './team/team.component';
import { SportfestService } from './sportfest.service';
import { TechnischerService } from './technischer.service';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateDisciplineComponent } from './create-discipline/create-discipline.component';
import { KlassenImportComponent } from './klassen-import/klassen-import.component';
import { ActivateDisciplineComponent } from './activate-discipline/activate-discipline.component';
import { UserAccountControlComponent } from './user-account-control/user-account-control.component';

const routConfig: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: DashboardComponent
    },
    {
      path: 'createDiscipline',
      component: CreateDisciplineComponent,
      canActivate: [RouteGuard]
    },
    {
      path: 'einzel/:did',
      component: EinzelComponent,
      canActivate: [RouteGuard]
    },
    { path: 'team/:did',
      component: TeamComponent,
      canActivate: [RouteGuard]
    },
    { path: 'import/klasse',
      component: KlassenImportComponent,
      canActivate: [RouteGuard]
    },
    { path: 'activateDiscipline',
      component: ActivateDisciplineComponent,
      canActivate: [RouteGuard]
    },
    { path: 'uac',
      component: UserAccountControlComponent,
      canActivate: [RouteGuard]
    }
];

@NgModule({
  declarations: [
    AppComponent,
    EinzelComponent,
    TeamComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    CreateDisciplineComponent,
    KlassenImportComponent,
    ActivateDisciplineComponent,
    UserAccountControlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routConfig),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    TechnischerService,
    SportfestService,
    RouteGuard,
    Md5
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
