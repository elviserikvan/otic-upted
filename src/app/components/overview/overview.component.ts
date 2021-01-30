import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Input() selected: any;
  @Output() addItem: EventEmitter<any> = new EventEmitter();


  element: any;
  constructor(private itemService: ItemService) {
	  this.selected = null
  }

  ngOnInit(): void {
  }

  onAdd() {
	this.addItem.emit();
  }
}
