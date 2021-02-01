import { Component, OnInit } from '@angular/core';
import { ReceiverService } from '../servicios/receiver.service';
import { ViewChild, AfterViewInit } from '@angular/core';
//import { Slides } from 'ionic-angular';
import { ViewChildren, ElementRef, QueryList, HostListener } from '@angular/core';

@Component({
  selector: 'app-deslizar',
  templateUrl: './deslizar.page.html',
  styleUrls: ['./deslizar.page.scss'],
})
export class DeslizarPage implements AfterViewInit {
	@ViewChild('scrollframe', {static: false}) scrollFrame: ElementRef;
	@ViewChildren('item') itemElements: QueryList<any>;

  cancion;
  constructor(private receiber: ReceiverService) {
  	this.receiber.$getListSource.subscribe(list => { this.cancion = list[0]; }).unsubscribe();
  }

  miArray = [1,2,3];

  private itemContainer: any;
  private scrollContainer: any;
  private items = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8];
  private isNearBottom = true;

  /*ngOnInit() {
  	this.cancion = {"nombre": ""};
  	//this.receiber.$getListSource.subscribe(list => { this.cancion = list[0]; }).unsubscribe();
  	//console.log(this.cancion);

  	this.scrollContainer = this.scrollFrame.nativeElement;

    this.itemElements.changes.subscribe(_ => this.onItemElementsChanged());    

    // Add a new item every 2 seconds for demo purposes
    setInterval(() => {
      this.items.push({});
    }, 2000);
  }*/

  ngAfterViewInit() {
  	//this.cancion = {"nombre": ""};
  	//this.receiber.$getListSource.subscribe(list => { this.cancion = list[0]; }).unsubscribe();
  	console.log(this.cancion);

  	this.scrollContainer = this.scrollFrame.nativeElement;

    this.itemElements.changes.subscribe(_ => this.onItemElementsChanged());    

    // Add a new item every 2 seconds for demo purposes
    let i = 0;
    setInterval(() => {
      this.items.push(this.cancion.contenido[i]);
      i++;
    }, 1000);
  }

  private onItemElementsChanged(): void {
    if (this.isNearBottom) {
      this.scrollToBottom();
    }
  }

  private scrollToBottom(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  private isUserNearBottom(): boolean {
    const threshold = 50;
    const position = this.scrollContainer.scrollTop + this.scrollContainer.offsetHeight;
    const height = this.scrollContainer.scrollHeight;
    return position > height - threshold;
  }

  scrolled(event: any): void {
    this.isNearBottom = this.isUserNearBottom();
  }
  
  // Uncomment these lines, you you need to scroll the full window.
  // Make sure, to remove 'position: absolute;' from the CSS to test that behaviour.
  /*
  private scrollToBottom(): void {
    window.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  private isUserNearBottom(): boolean {
    const threshold = 150;
    const position = window.scrollY + window.innerHeight;
    const height = document.body.scrollHeight;
    return position > height - threshold;
  }

  @HostListener('window:scroll', ['$event'])
  scrolled(event: any): void {
    this.isNearBottom = this.isUserNearBottom();
  }*/

}
