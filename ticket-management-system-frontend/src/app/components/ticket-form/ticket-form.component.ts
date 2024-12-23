import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css'],
})
export class TicketFormComponent implements OnInit {
  ticketName: string = '';
  ticketId: string | null = '';
  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ticketService: TicketService
  ) {}

  ngOnInit() {
    this.ticketId = this.route.snapshot.paramMap.get('id');
    if (this.ticketId) {
      this.isEditing = true;
      this.ticketService.getTicket(this.ticketId).subscribe((ticket) => {
        this.ticketName = ticket.name;
      });
    }
  }

  saveTicket() {
    if (this.isEditing) {
      this.ticketService
        .updateTicket(this.ticketId || '', { name: this.ticketName }) // Add fallback for null
        .subscribe(() => this.router.navigate(['/']));
    } else {
      this.ticketService
        .createTicket({ name: this.ticketName })
        .subscribe(() => this.router.navigate(['/']));
    }
  }
  
}
