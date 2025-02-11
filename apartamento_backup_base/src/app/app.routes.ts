import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';

export const routes: Routes = [
  {
    path: 'mh-torremolinos',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent }, // ✅ Página principal dentro de mh-torremolinos
      { path: 'booking', component: BookingComponent }, // ✅ Página booking
    ]
  },
  { path: '', redirectTo: 'mh-torremolinos', pathMatch: 'full' } // ✅ Redirigir a la página inicial
];
