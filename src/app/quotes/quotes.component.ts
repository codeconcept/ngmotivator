import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes$;

  constructor(private afDb: AngularFireDatabase) { }

  ngOnInit() {
    this.quotes$ = this.afDb.list('quotes').valueChanges();
  }

}
