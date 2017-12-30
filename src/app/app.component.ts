import { Component } from '@angular/core';
import { QuotesService } from './quotes/services/quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private quoteService: QuotesService) {}

  onQuoteCreated(quote) {
    console.log('quote value', quote.value);
    let addedQuote = this.quoteService.createQuote({ firstname: quote.value.firstname, lastname: quote.value.lastname, text: quote.value.quote });
    console.log('addedQuote', addedQuote);
    
  }

}
