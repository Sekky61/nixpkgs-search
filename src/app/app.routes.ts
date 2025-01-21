import { Routes } from '@angular/router';
import { RootComponent } from './homepage/root/root.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RootComponent
  }
];
