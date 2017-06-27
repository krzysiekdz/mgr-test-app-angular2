import {Inject} from 'angular2/core';
import {ModelService} from '../model.service';
import {RandomService} from '../random.service';
// import {Observable} from 'rxjs/Rx';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';


export class FetchService {

	model;
	dataUrl:string = 'http://localhost:8080/data-files/data';

	constructor(@Inject(Http) private http, 
		@Inject(ModelService) ms,
		@Inject(RandomService) private r ) {
		this.model = ms.getModel();
	}

	fetch(count:string) {
		var dataUrl = this.dataUrl + count + '.json';
		// var model = this.model;

		this.http.get(dataUrl)
			.map(res => res.json())
			.subscribe(this.updateData.bind(this));

		// var inputInit = document.getElementsByName('input-init')[0];
		// Observable.fromEvent(inputInit, 'keyup')
		// 	.map(e => e.target.value)
		// 	.filter(str => str.length > 3)
		// 	.debounceTime(400)
		// 	.distinctUntilChanged()
		// 	.flatMap(searchTerm => {
		// 		var promise = $.getJSON(dataUrl);
		// 		// return Observable.fromPromise(promise);
		// 		return promise;
		// 	})
		// 	.subscribe(data => console.log(data));
	}

	updateData(data) {
		this.model.data = data;
		this.r.setId(data.length+1);
		// console.log(this.model);
	}

}