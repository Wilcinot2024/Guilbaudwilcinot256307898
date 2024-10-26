import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface descendientes {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}

@Injectable({
  providedIn: 'root'
})
export class GuilbaudApiService {
  private url='https://lightgrey-owl-901213.hostingersite.com/api/get_peliculas.php?limit=100';
  constructor(
    private http:HttpClient
  ) { }

  obtenerproductos():Observable <descendientes []> {
    return this.http.get <descendientes []> (this.url);
  }
}
