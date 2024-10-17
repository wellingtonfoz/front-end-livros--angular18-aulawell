import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Livro } from '../models/livro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  http = inject(HttpClient); //a estrutura pronta pra fazer requisições

  API = "http://localhost:8080/api/livro"; //começo do endpoint pra chegar na controller

  constructor() { }

  findByTitulo(pesquisa: string): Observable<Livro[]>{
    let abc = new HttpParams().set('nome', pesquisa);
    return this.http.get<Livro[]>(this.API+"/findByTitulo", {params: abc})
  }

  findAll(): Observable<Livro[]>  {
    return this.http.get<Livro[]>(this.API+"/findAll");
  }

  findById(id: number): Observable<Livro>{
    return this.http.get<Livro>(this.API+"/findById/"+id);
  }

  save(livro: Livro): Observable<string>{
    return this.http.post<string>(this.API+"/save",livro, {responseType: 'text' as 'json'});
  }
  
  update(livro: Livro): Observable<string>{
    return this.http.put<string>(this.API+"/update/"+livro.id, livro, {responseType: 'text' as 'json'});
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/delete/"+id, {responseType: 'text' as 'json'});
  }

}
