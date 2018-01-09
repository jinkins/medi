import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { AuthGuard } from './shared/auth-guard.service';
import { ConnectionComponent } from './connection/connection.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
    { path: 'connections', component: ConnectionComponent, canActivate: [AuthGuard] },
    { path: 'suppliers', component: FournisseurComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '',
      redirectTo: '/connections',
      pathMatch: 'full'
    }
  ];

