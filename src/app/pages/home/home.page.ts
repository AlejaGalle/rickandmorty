import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  characters:any[] = [];
  params: any = {
    page: 0,
    name: '', 
    status: '', 
  };

  constructor(private rymSvc: RickAndMortyService) { }

  ngOnInit() {
    this.params.page=0;
    this.getCharacters();

  }

  getCharacters(event?: any) {
    this.params.page +=1;
    this.rymSvc.getCharacters(this.params).subscribe({
      next: (respuesta: any)=>{
        this.characters.push(...respuesta.results);
        console.log(this.characters);
        if (event) {
          event.target.complete();
        }
      },
      error:(err: any)=> {
        if(event){
          event.target.complete();
         }

        console.log(err)
      },
  });


 }


   searchCharacters() {
    this.params.page =1;
    this.rymSvc.getCharacters(this.params).subscribe({
      next: (respuesta: any)=>{
      this.characters=respuesta.results;
      
      },
    error:(err: any)=> {
      
    },
  });

 }

 filterByStatus(status: string) {
  this.params.page = 1; 
  this.params.status = status;
  this.getCharacters();
}

}



