import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  @Input() item: any;
  @Output() onItem: EventEmitter<any> = new EventEmitter();

  items: any[];
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  onClick() {
	this.onItem.emit(this.item);
  }
}
