import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';
import { Quote } from '../../../quote.interface';
import { isUndefined } from 'util';

@Injectable()
export class QuotesService {
  subject = new Subject();

  constructor(private afDb: AngularFireDatabase) { }

  getQuotes() {
    // return this.afDb.list('quotes').valueChanges();
    return this.afDb.list('quotes').snapshotChanges().map(quotes => quotes.map(quote => ({ key: quote.key, ...quote.payload.val() })));
  }

  createQuote(quote) {
    console.log('createQuote', quote);
    return this.afDb.list('quotes').push(quote);
  }

  updateQuote(quote) {
    console.log('updateQuote', quote, `quotes/${quote.key}`);
    return this.afDb.object(`quotes/${quote.key}`).update(quote);
  }

  deleteQuoteById(id: string) {
    return this.afDb.list('quotes').remove(id);
  }

  editQuote(quote: Quote) {
    this.subject.next(quote);
  }

}
