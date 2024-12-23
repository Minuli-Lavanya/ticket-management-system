import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TicketFormComponent } from './ticket-form.component';

const routes: Routes = [
  { path: '', component: TicketFormComponent },
];

@NgModule({
  declarations: [TicketFormComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class TicketFormModule {}

