import { Component, OnInit } from '@angular/core';
import { QuotesService } from './services/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes$;

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.quotes$ = this.quotesService.getQuotes();
  }

  showQuoteDetails(quote) {
    console.log('quote', quote);
  }

}
