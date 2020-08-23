import { Component } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote:Quote[] = [
    {id:1., quote: '"I would rather die than resign"',author: 'Amos Kimunya',submittedby:'Anonymous', date: '01/04/2014'},
    {id:2., quote:'"No matter where you are from, your dreams are valid"',author: 'Lupita Nyongo',submittedby:'Anonymous', date: '01/05/2015'},
    {id:3., quote: '"You do not respond to a mosquito bite with a hammer."',author: 'Patrick Lumumba',submittedby:'A.N. Other', date: '03/04/2014'},
    
  ];
}
