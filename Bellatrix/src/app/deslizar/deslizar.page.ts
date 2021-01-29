import { Component, OnInit } from '@angular/core';
import { ReceiverService } from '../servicios/receiver.service';

@Component({
  selector: 'app-deslizar',
  templateUrl: './deslizar.page.html',
  styleUrls: ['./deslizar.page.scss'],
})
export class DeslizarPage implements OnInit {
  cancion;
  constructor(private receiber: ReceiverService) { }

  ngOnInit() {
  	this.receiber.$getListSource.subscribe(list => { this.cancion = list[0]; }).unsubscribe();
  	console.log(this.cancion);
  }

}
