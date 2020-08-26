import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: ' app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {

    quotes:Quote[] = [
      new Quote('"I would rather die than resign"','Amos Kimunya','submitted by Anonymous.'),
      new Quote('"No matter where you are from, your dreams are valid"','Lupita Nyongo','submitted by Anonymous.'),
      new Quote('"You do not respond to a mosquito bite with a hammer"','Patrick Lumumba','submitted by A.N. Other.'),
    ];

    // addNewQuote(quote){
    //   this.quotes.push(quote)
    // }

    numberOfLikes: number = 0;
    numberOfDislikes: number = 0;

    likeButtonClick() {
      this.numberOfLikes++;
    }

    dislikeButtonClick() {
      this.numberOfDislikes++;
    }

    addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength+1;
      let quoteObject = new Quote(quote.quote, quote.author,quote.submittedby);
      
      this.quotes.push(quoteObject)
    }

  constructor() { }

  ngOnInit() {
  }

}
