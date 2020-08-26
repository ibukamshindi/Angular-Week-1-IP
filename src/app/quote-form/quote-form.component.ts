import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote("","","");
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(form:NgForm){
    this.addQuote.emit(this.newQuote);
    form.resetForm() 
  }

  constructor() { } 

  ngOnInit()   {
  }

}
