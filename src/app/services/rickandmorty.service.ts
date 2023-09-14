import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {
  
  api: string = 'https://rickandmortyapi.com/api/character'

  constructor( private _http: HttpClient  ) { }
  
  getApi(){
    return this._http.get<any>(this.api)
  }
}
