import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuotesService } from '../../quotes/services/quotes.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Quote } from '../../../quote.interface';

@Component({
  selector: 'app-backend-quotes',
  templateUrl: './backend-quotes.component.html',
  styleUrls: ['./backend-quotes.component.css']
})
export class BackendQuotesComponent implements OnInit {
  quotes$;
  
  @Output()
  edit = new EventEmitter<Quote>();

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.quotes$ = this.quotesService.getQuotes();
  }

  deleteQuote(quote) {
    console.log('delete quote', quote);
    this.quotesService.deleteQuoteById(quote.key);
  }

  toggleToEditMode(quote: Quote) {
    this.quotesService.editQuote(quote);
  }

  showQuoteDetails(quote) {
    console.log('showQuoteDetails');
  }

}
