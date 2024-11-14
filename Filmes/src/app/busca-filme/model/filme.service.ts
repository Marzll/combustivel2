import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private API = 'https://www.omdbapi.com/?apikey=2678d03f'

  constructor(private http: HttpClient) {
  }

  buscarFilmePorTitulo(titulo: string): Observable<Filme> {
    return this.http.get<Filme>(`${this.API}&t=${titulo}`)
  }
}
