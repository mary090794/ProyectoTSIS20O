import { Component, OnInit } from '@angular/core';
import { ReceiverService } from '../servicios/receiver.service';
import { ViewChild } from '@angular/core';
import { ViewChildren, ElementRef, QueryList, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../servicios/http.service';

@Component({
  selector: 'app-deslizar',
  templateUrl: './deslizar.page.html',
  styleUrls: ['./deslizar.page.scss'],
})
export class DeslizarPage implements OnInit {
  @ViewChild('scrollframe') private scrollContainer: ElementRef;

  idCancion;
  cancion = {
    "acordes":[],
    "contenido":[],
    "_id":"",
    "nombre":"",
    "artista":"",
    "genero":"",
    "tempo": 120
  };

  constructor(
    private receiber: ReceiverService,
    public http: HttpService,
    private activeRoute: ActivatedRoute
    ) {
  	//this.receiber.$getListSource.subscribe(list => { this.cancion = list[0]; }).unsubscribe();
    this.idCancion = this.activeRoute.snapshot.paramMap.get("id");
    this.http.obtenerCancion(this.idCancion).subscribe(
      (res: any) => {
        this.cancion = res.project;
      },
      (error) =>{
        console.error(error);
      }
      );
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
