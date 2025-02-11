import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { Booking2Component } from './components/booking2/booking2.component';

export const routes: Routes = [
  {
    path: 'mh-torremolinos',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent }, // ✅ Página principal dentro de mh-torremolinos
      { path: 'booking', component: Booking2Component }, // ✅ Página booking
    ]
  },
  { path: '', redirectTo: 'mh-torremolinos', pathMatch: 'full' } // ✅ Redirigir a la página inicial
];
