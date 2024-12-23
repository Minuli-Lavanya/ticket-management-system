import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './ticket-list.component';

const routes: Routes = [
  { path: '', component: TicketListComponent }, // Default route for this module
];

@NgModule({
  declarations: [TicketListComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class TicketListModule {}
