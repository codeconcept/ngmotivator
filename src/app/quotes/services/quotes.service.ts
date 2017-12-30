import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class QuotesService {

  constructor(private afDb: AngularFireDatabase) { }

  getQuotes() {
    return this.afDb.list('quotes').valueChanges();
  }

  createQuote(quote) {
    this.afDb.list('quotes').push(quote);
  }

}
