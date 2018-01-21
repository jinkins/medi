import { SearchConnectionsComponent } from './search-connections/search-connections.component';
import { AuthGuard } from './../shared/auth-guard.service';
import { Routes } from '@angular/router';
import { ShowAllConnectionsComponent } from './show-all-connections/show-all-connections.component';

export const connectionsRouting: Routes = [
    { path: 'showAll', component: ShowAllConnectionsComponent, canActivate: [AuthGuard] },
    { path: 'find', component: SearchConnectionsComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'showAll',  pathMatch: 'full'  }
];
