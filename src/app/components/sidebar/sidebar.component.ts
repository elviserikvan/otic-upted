import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() parent: EventEmitter<any> = new EventEmitter(); 

  items: any;

  constructor(private itemService: ItemService) { }

  async ngOnInit(): Promise<void> {
	//this.items = this.itemService.items;
	let items = await this.itemService.fetchData();
	this.items = items;
	/*
	  this.itemService.getItems().subscribe(response => {
	  	this.items = response
	  })

	 */
	  //this.items = <any>await this.itemService.getItems().toPromise() 
  }

  onItem(item) {
	this.parent.emit(item);
  }

}
