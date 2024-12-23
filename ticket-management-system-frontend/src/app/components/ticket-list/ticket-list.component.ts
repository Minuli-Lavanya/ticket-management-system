import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
})
export class TicketListComponent implements OnInit {
  tickets: any[] = [];
  searchQuery: string = '';

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.getTickets();
  }

  getTickets() {
    this.ticketService.getTickets().subscribe((data) => {
      this.tickets = data;
    });
  }

  searchTickets() {
    if (this.searchQuery.trim()) {
      this.ticketService.searchTickets(this.searchQuery).subscribe((data) => {
        this.tickets = data;
      });
    } else {
      this.getTickets();
    }
  }

  deleteTicket(id: string) {
    this.ticketService.deleteTicket(id).subscribe(() => this.getTickets());
  }
}
