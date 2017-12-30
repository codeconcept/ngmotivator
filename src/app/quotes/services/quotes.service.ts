import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class QuotesService {

  constructor(private afDb: AngularFireDatabase) { }

  getQuotes() {
    // return this.afDb.list('quotes').valueChanges();
    return this.afDb.list('quotes').snapshotChanges().map(quotes => quotes.map(quote => ({ key: quote.key, ...quote.payload.val() })));
  }

  createQuote(quote) {
    return this.afDb.list('quotes').push(quote);
  }

}
