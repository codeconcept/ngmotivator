import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../quotes/services/quotes.service';

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
    console.log('quote value', quote.value);
    let addedQuote = this.quoteService.createQuote({ firstname: quote.value.firstname, lastname: quote.value.lastname, text: quote.value.quote });
    console.log('addedQuote', addedQuote);
  }

}
