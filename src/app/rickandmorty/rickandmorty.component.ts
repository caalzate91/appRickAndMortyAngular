import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})
export class RickandmortyComponent implements OnInit {
  
  namesCharacter : any[] = []
  totalCharacter : number = 0
  
  constructor( private _rickAndMorty: RickandmortyService) {
  }
  
  ngOnInit(): void{
    
  }
  
  getApi(){
    this._rickAndMorty.getApi().subscribe(
      {
        next: (v) => {
          this.namesCharacter = v.results
          this.totalCharacter = this.namesCharacter.length
          },
        error: (e) =>{
          console.error(e)
        }
      }
    );
  }

}
