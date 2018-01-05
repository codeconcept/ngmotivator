import { Component, OnInit } from '@angular/core';

import { QuotesService } from '../../quotes/services/quotes.service';
import { Quote } from '../../../quote.interface';

@Component({
  selector: 'app-backend-home',
  templateUrl: './backend-home.component.html',
  styleUrls: ['./backend-home.component.css']
})
export class BackendHomeComponent implements OnInit {

  constructor(private quoteService: QuotesService) { }

  ngOnInit() {
  }

  onQuoteCreated(quote) {
    console.log('onQuoteCreated', quote.value);
    let addedQuote = this.quoteService.createQuote({ firstname: quote.value.firstname, lastname: quote.value.lastname, text: quote.value.quote });
    console.log('addedQuote', addedQuote);
  }

  onQuoteUpdated(quote) {
    console.log('onQuoteUpdated', quote.value);
    let updatedQuote = this.quoteService.updateQuote({ firstname: quote.value.firstname, lastname: quote.value.lastname, text: quote.value.quote, key: quote.value.key });
    console.log('updatedQuote', updatedQuote);
  }

}
