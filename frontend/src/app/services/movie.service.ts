import { Movie } from './../models/movie';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl: string = environment.api;

  constructor(private http: HttpClient){}

  public getMovies(id?: number) {
    console.log(`${this.baseUrl}`)
    return this.http.post<any>(`${this.baseUrl}`, {ID: id})
  }
}
