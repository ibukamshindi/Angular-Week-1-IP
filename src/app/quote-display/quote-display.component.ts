import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: ' app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {

    quote:Quote[] = [
      {id:1., quote: '"I would rather die than resign"',author: 'Amos Kimunya',submittedby:'submitted by Anonymous', date: '01/04/2014.'},
      {id:2., quote:'"No matter where you are from, your dreams are valid"',author: 'Lupita Nyongo',submittedby:'submitted by Anonymous', date: '01/05/2015.'},
      {id:3., quote: '"You do not respond to a mosquito bite with a hammer."',author: 'Patrick Lumumba',submittedby:'submitted by A.N. Other', date: '03/04/2014.'},
    ];

  constructor() { }

  ngOnInit() {
  }

}
