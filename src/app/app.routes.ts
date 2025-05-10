import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'layout/sign-in',
        pathMatch: 'full'
    },
    {
        path: 'layout',
        loadComponent: () => import('./layouts/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
        children: [
            {
                path: 'sign-in',
                loadComponent: () => import('./features/sign-in/sign-in.component').then(m => m.SignInComponent),
            }
        ]
    }
];
