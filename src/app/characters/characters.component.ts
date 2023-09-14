import {Component} from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  nameCharacter: string = ""
  namesCharacter: String[] = []
  numberMaxCharacters: number = 8
  numberCharacters: number = 0

  constructor() {
  }

  ngOnInit(): void {

  }

  onSendForm(): void {
    if (this.numberCharacters < this.numberMaxCharacters) {
      this.namesCharacter.push(this.nameCharacter)
      var strAlert: string = "Se agregó con exito el personaje "
      alert(strAlert.concat(this.nameCharacter));
      strAlert = ""
      this.nameCharacter = ""
      ++this.numberCharacters
    } else {
      alert("El limite maximo es de 8 personajes.");
    }
  }

}
