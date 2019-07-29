import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Contacts } from '../models/contacts';

// @Injectable({
//   providedIn: 'root'
// })

export class ContactService {
  url = 'http://www.mocky.io/v2/5c5d880f3200000e11220880';
contactsList=[];
  constructor(
    private http: HttpClient
  ) { }

  getContacts(): Observable<Contacts> {
      return this.http.get<Contacts>(this.url);
    // make http request to the given url and fetch the contacts
    //return of({contactsList: []});
    //return this.contactsList;
  }
}
