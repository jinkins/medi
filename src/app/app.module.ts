import { X400Service } from './connection/x400/x400.service';
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
import { X400Component } from './connection/x400/x400.component';
import { TpComponent } from './connection/tp/tp.component';
import { TPService } from './connection/tp/tp.service';
import { ShowAllConnectionsComponent } from './connection/show-all-connections/show-all-connections.component';
import { SearchConnectionsComponent } from './connection/search-connections/search-connections.component';
import { EditConnectionComponent } from './connection/edit-connection/edit-connection.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    LoginComponent,
    FournisseurComponent,
    DemandComponent,
    X400Component,
    TpComponent,
    ShowAllConnectionsComponent,
    SearchConnectionsComponent,
    EditConnectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [ConnectionService, LoginService, FournisseurService, X400Service, TPService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
