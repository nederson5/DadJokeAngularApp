import { Component, OnInit } from '@angular/core';
import {Joke} from '../models/joke';
import {JokeService} from '../joke.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css'],
  providers: [JokeService]
})
export class JokeComponent implements OnInit {

  selectedJoke?: Joke;
  jokes = [new Joke()];
  HighlightRow : any;
  ClickedRow : any;

  constructor(private jokeService: JokeService, private SpinnerService: NgxSpinnerService) {
    this.ClickedRow = function(index: Number){
      this.HighlightRow = index;
    }
   }

  ngOnInit() {
    this.getJoke();
  }

  getJoke():void{
    this.SpinnerService.show();
    this.jokeService.getRandomJoke().subscribe((data) => {
      if (data) {
      }
      this.selectedJoke = data;
      this.jokes.push(data);
      if(this.jokes.length > 4){
        this.jokes.shift();
      }
      this.SpinnerService.hide();
    });
  }

  selectJoke(joke: Joke) : void {
    this.selectedJoke = joke;
  }

}


