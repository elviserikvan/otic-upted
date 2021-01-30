import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() parent: EventEmitter<any> = new EventEmitter(); 

  items: any[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
	  this.items = this.itemService.getItems();
  }

  onItem(item) {
	this.parent.emit(item);
  }

}
