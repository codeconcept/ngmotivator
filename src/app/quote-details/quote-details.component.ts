import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quote } from '../../quote.interface';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  quoteId;
  quote: Quote;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
