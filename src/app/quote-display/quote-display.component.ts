import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: ' app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {

    quotes:Quote[] = [
      {quote: '"I would rather die than resign"',author: 'Amos Kimunya',submittedby:'submitted by Anonymous.'},
      {quote:'"No matter where you are from, your dreams are valid"',author: 'Lupita Nyongo',submittedby:'submitted by Anonymous.'},
      {quote: '"You do not respond to a mosquito bite with a hammer."',author: 'Patrick Lumumba',submittedby:'submitted by A.N. Other.'},
    ];

    addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength+1;
      this.quotes.push(quote)
    }
  constructor() { }

  ngOnInit() {
  }

}
