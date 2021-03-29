import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Joke} from './models/joke';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JokeService {
  private jokeUrl: string = 'https://joke-proxy.azurewebsites.net/joke';

  constructor(private http: HttpClient) {

  }

  getRandomJoke() {
    return this.http.get<Joke>(this.jokeUrl);
  }
}
