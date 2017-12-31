import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../quotes/services/quotes.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-backend-quotes',
  templateUrl: './backend-quotes.component.html',
  styleUrls: ['./backend-quotes.component.css']
})
export class BackendQuotesComponent implements OnInit {
  quotes$;

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.quotes$ = this.quotesService.getQuotes();
  }

  deleteQuote(quote) {
    console.log('delete quote', quote);
    // this.afDb.list(`quotes`).remove(quote.key);
    this.quotesService.deleteQuoteById(quote.key);
  }

}
