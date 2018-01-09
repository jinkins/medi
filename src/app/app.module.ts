import { FournisseurService } from './fournisseur/fournisseur.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { appRoutes } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { ConnectionService } from './connection/connection.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { AuthGuard } from './shared/auth-guard.service';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { DemandComponent } from './demand/demand.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    LoginComponent,
    FournisseurComponent,
    DemandComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [ConnectionService, LoginService, FournisseurService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
