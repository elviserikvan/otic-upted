import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  overview: number;
  editing: any;
  item: any;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
	  this.overview = 1;
	  this.item = null;
  }

  onExit() {
	this.overview = 1;
  }

  onAdd() {
	this.overview = 2;
  }

  onSelect(item){
	this.item = item;
  }

  onEdit(item) {
	this.overview = 3;
	this.editing = item;
  }

  async onDelete(item) {
	let response = await this.itemService.deleteItem(item);
	if(response.success) {
		location.reload();	
	}
  }
}
