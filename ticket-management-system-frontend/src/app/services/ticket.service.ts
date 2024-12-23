import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TicketService {
  private baseUrl = 'http://localhost:5000/tickets';

  constructor(private http: HttpClient) {}

  getTickets() {
    return this.http.get<any[]>(this.baseUrl);
  }

  getTicket(id: string) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  searchTickets(query: string) {
    return this.http.get<any[]>(`${this.baseUrl}/search?query=${query}`);
  }

  createTicket(ticket: any) {
    return this.http.post<any>(this.baseUrl, ticket);
  }

  updateTicket(id: string, ticket: any) {
    return this.http.put<any>(`${this.baseUrl}/${id}`, ticket);
  }

  deleteTicket(id: string) {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}

