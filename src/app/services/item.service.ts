import { environment } from './../../environments/environment'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpHeaders =  {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: any;
  selected: any;
  api_uri: string = environment.api_url;


 constructor(private http: HttpClient) {
	this.selected = null;
	this.fetchData();

	//this.fetchItems();
	/*
	this.http.get(this.api_uri, httpHeaders).subscribe(response => {
		console.log(response)
		this.items = response;
	});
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
	*/
  }

 getItems():any {
	return this.http.get(this.api_uri, httpHeaders);

/*
	let items = <any>await this.http.get(this.api_uri, httpHeaders).toPromise();
	this.items = items;
	console.log(items);
	return items;
	this.http.get(this.api_uri, httpHeaders).subscribe(response => {
		this.items = response;
	});
       */
  }

  async fetchData() {
	let items = <any>await this.http.get(this.api_uri, httpHeaders).toPromise();
	this.items = items;
	return items;
  }


  addItem(item: any) {
	/*
	item.id = Math.floor(Math.random() * (100 - 1)) + 1;
	this.items.push(item);
	console.log(item);
	 */

	this.http.post<any>(this.api_uri, item, httpHeaders).subscribe(response => {
		if(!response.error) {

			//console.log(response);
			this.items.push(response);

		}else {
			console.log('error')	
		}
	})

  }

  async editItem(item: any, id: any): Promise<any> {
	let edited = <any>await this.http.put<any>(`${this.api_uri}/${id}`, item, httpHeaders).toPromise()
	return edited;
	
		/*
	this.http.put<any>(`${this.api_uri}/${id}`, item, httpHeaders).subscribe(response => {
		console.log(response._id, this.items[0].id)
		this.items.forEach(element => {
			if(element.id == response._id) {
				console.log('found it');
				element = response
			}
		})
	})
	       */

  }

  async deleteItem(item: any):Promise<any> {
	let response = <any>await this.http.delete<any>(`${this.api_uri}/${item._id}`, httpHeaders).toPromise()
	//return edited;
	return response;
  }

  ifSelected() {
	  return this.selected;
  }

  setSelected(item: any) {
	  this.selected = !this.selected;
  }
}
