import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: any[];
  selected: any;

  constructor() {
	this.selected = null;
 	this.items = [
		{
			id: 1,
			title: 'Title 1',
			amount: 3,
			location: 'En el estante de la esquina',
			image: 'https://picsum.photos/id/944/900/500',
			description: 'Adipisicing facilis exercitationem harum ex harum! Eveniet commodi error eius odio praesentium. Odit nobis autem iure repellendus sit Repellendus soluta.'

		},
		{
			id: 2,
			title: 'Title 2',
			amount: 4,
			location: 'En el estante de la esquina',
			description: ''
		},
		{
			id: 3,
			title: 'Title 3',
			amount: 5,
			location: 'En el estante de la esquina',
			description: ''
		},
		{
			id: 4,
			title: 'Title 4',
			amount: 1,
			location: 'En el estante de la esquina',
			image: 'https://picsum.photos/id/944/900/500',
			description: 'Adipisicing facilis exercitationem harum ex harum! Eveniet commodi error eius odio praesentium. Odit nobis autem iure repellendus sit Repellendus soluta.'
		},
		{
			id: 5,
			title: 'Title 5',
			amount: 10,
			location: 'En el estante de la esquina',
			description: ''
		},
	];
  }

  getItems() {
  	return this.items;
  }

  addItem(item: any) {
	item.id = Math.floor(Math.random() * (100 - 1)) + 1;
	this.items.push(item);
  	console.log(item);
  }

  ifSelected() {
	  return this.selected;
  }

  setSelected(item: any) {
	  this.selected = !this.selected;
  }
}
