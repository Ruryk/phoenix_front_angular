import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './shared/components/main/main.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'chat'
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('./modules/chat/chat.module').then((m) => m.ChatModule),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./modules/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
