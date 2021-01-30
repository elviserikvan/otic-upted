import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  overview: boolean;
  item: any;

  constructor() { }

  ngOnInit(): void {
	  this.overview = true;
	  this.item = null;
  }

  onExit() {
	this.overview = true;
  }

  onAdd() {
	this.overview = false;
  }

  onSelect(item){
	this.item = item;
  }
}
