import { Component, OnInit } from '@angular/core';
import { ReceiverService } from '../servicios/receiver.service';
import { ViewChild } from '@angular/core';
import { ViewChildren, ElementRef, QueryList, HostListener } from '@angular/core';

@Component({
  selector: 'app-deslizar',
  templateUrl: './deslizar.page.html',
  styleUrls: ['./deslizar.page.scss'],
})
export class DeslizarPage implements OnInit {
  @ViewChild('scrollframe') private scrollContainer: ElementRef;

  cancion = {
    "_id":"60109b9726a5d4624eca3c4c",
    "nombre":"Amor amor","artista":"Josè Josè",
    "genero":"Rock",
    "tempo":120,
    "contenido":[
      {"indice":0,"acorde":"Sol","tono":"","variacion":"","letra":"Amor amor"},
      {"indice":1,"acorde":"Mi","tono":"","variacion":"","letra":"Donde está el amor"},
      {"indice":2,"acorde":"Fa","tono":"","variacion":"","letra":"Amor amor"},
      {"indice":3,"acorde":"Fa","tono":"","variacion":"","letra":"Amor amor"},
      {"indice":4,"acorde":"Fa","tono":"","variacion":"","letra":"Amor amor"},
      {"indice":5,"acorde":"Fa","tono":"","variacion":"","letra":"Amor amor"},
      {"indice":6,"acorde":"Fa","tono":"","variacion":"","letra":"Amor amor"},
      {"indice":7,"acorde":"Fa","tono":"","variacion":"","letra":"Amor amor"},
      {"indice":8,"acorde":"Fa","tono":"","variacion":"","letra":"Amor amor"},
      {"indice":9,"acorde":"Fa","tono":"","variacion":"","letra":"Amor amor"},
      {"indice":10,"acorde":"Fa","tono":"","variacion":"","letra":"Amor amor"},
      {"indice":11,"acorde":"Fa","tono":"","variacion":"","letra":"Amor amor"},
      {"indice":12,"acorde":"Fa","tono":"","variacion":"","letra":"Amor amor"},
      {"indice":13,"acorde":"Fa","tono":"","variacion":"","letra":"Amor amor"},
      {"indice":14,"acorde":"Fa","tono":"","variacion":"","letra":"Amor amor"},
      {"indice":15,"acorde":"Fa","tono":"","variacion":"","letra":"Amor amor"},
      {"indice":16,"acorde":"Fa","tono":"","variacion":"","letra":"Amor amor"}
    ]
  };

  constructor(private receiber: ReceiverService) {
  	this.receiber.$getListSource.subscribe(list => { this.cancion = list[0]; }).unsubscribe();
  }

  miArray = [1,2,3];

  private itemContainer: any;
  private items = [];
  private isNearBottom = true;


   ngOnInit() {
       setInterval(() => {
          this.scrollToBottom();
        }, 500);
    }


  index = 1;
  private scrollToBottom(): void {
    try {
            this.scrollContainer.nativeElement.scrollTop = this.index;
            this.index+=10;
        } catch(err) {
          console.log("Terminó");
        }  
  }

}
