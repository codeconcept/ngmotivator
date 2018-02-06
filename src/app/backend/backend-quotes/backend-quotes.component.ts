import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuotesService } from '../../quotes/services/quotes.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Quote } from '../../../quote.interface';
import { AuthService } from '../../authentication/services/auth.service';

@Component({
  selector: 'app-backend-quotes',
  templateUrl: './backend-quotes.component.html',
  styleUrls: ['./backend-quotes.component.css']
})
export class BackendQuotesComponent implements OnInit {
  isAdmin: boolean = false;
  quotes$;
  
  @Output()
  edit = new EventEmitter<Quote>();

  constructor(private quotesService: QuotesService, private authService: AuthService) { }

  ngOnInit() {
    this.quotes$ = this.quotesService.getQuotes();

    this.authService.user$.subscribe(user => {
      console.log('user: ', user);
      if(user && user.email === 'contact@codeconcept.fr') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    }, error => {
      console.error(error);
    });
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
