import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ticket-list', pathMatch: 'full' },
  {
    path: 'ticket-list',
    loadChildren: () =>
      import('./components/ticket-list/ticket-list.module').then(
        (m) => m.TicketListModule
      ),
  },
  {
    path: 'ticket-form',
    loadChildren: () =>
      import('./components/ticket-form/ticket-form.module').then(
        (m) => m.TicketFormModule
      ),
  },
  {
    path: 'ticket-form/:id',
    loadChildren: () =>
      import('./components/ticket-form/ticket-form.module').then(
        (m) => m.TicketFormModule
      ),
  },
  { path: '**', redirectTo: 'ticket-list' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
