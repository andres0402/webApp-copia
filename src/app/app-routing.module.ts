import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule) },
  { path: 'benefits', loadChildren: () => import('./benefits/benefits.module').then(module => module.BenefitsModule) },
  { path: 'meetings', loadChildren: () => import('./meetings/meetings.module').then(module => module.MeetingsModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(module => module.ProductsModule) },
  { path: 'userPreferences', loadChildren: () => import('./userPreferences/user-preferences.module').then(module => module.UserPreferencesModule) },
  { path: 'management', loadChildren: () => import('./management/management.module').then(module => module.ManagementModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
