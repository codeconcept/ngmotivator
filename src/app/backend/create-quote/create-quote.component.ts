import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuotesService } from '../../quotes/services/quotes.service';
import { Quote } from '../../../quote.interface';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
  form: FormGroup;
  // flag used to remove and add form is it really reset
  private active : boolean = true ;

  @Input()
  thequote: Quote;

  @Output()
  create = new EventEmitter<any>();

  @Output()
  update = new EventEmitter<any>()

  quote;
  isInEditMode = false;
  verb = 'ajouter';

  constructor(private formBuilder: FormBuilder, private quotesService: QuotesService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: [''],
      lastname: ['', Validators.required],
      quote: ['', Validators.required],
      key: ['']
    });

    this.quotesService.subject.subscribe(data => {
      this.isInEditMode = true;
      this.verb = 'modifier';
      console.log('data', data);
      this.quote = data;
      this.form.get('firstname').patchValue(this.quote.firstname);
      this.form.get('lastname').patchValue(this.quote.lastname);
      this.form.get('quote').patchValue(this.quote.text);
      this.form.get('key').patchValue(this.quote.key);

    });
  }

  saveQuote() {
    if (!this.form.valid) {
      console.log('form NOT valid');
      return;
    }
    console.log('form valid');
    if (!this.isInEditMode) {
      this.verb = 'ajouter';
      this.create.emit(this.form);
    } else if (this.isInEditMode) {
      this.update.emit(this.form);
      this.isInEditMode = !this.isInEditMode;
    }
    console.log('before reset');
    this.form.reset();
    // old hack to reset form validation as ng-invalid is added after submission
    this.active = false;
    setTimeout( () => this.active = true, 0);
    
    this.verb = 'ajouter';
  }

  cancelEdit() {
    this.isInEditMode = false;
    this.verb = 'ajouter';
    this.form.reset();
  }

}
