import {Inject} from 'angular2/core';
import {ModelService} from '../model.service';
import {RandomService} from '../random.service';
import {ParseValueService} from '../parseValue.service';

export class UpdateService {

	model;
	min:number = 1;
	max:number = 5000;

	constructor(@Inject(RandomService) private r, 
		@Inject(ModelService) private ms,
		@Inject(ParseValueService) private parse) {
		this.model = ms.getModel();
	}

	updateFirst(count:string) {
		var c:number = this.parse.parseValue(count, this.min, this.max);
		var data = this.model.data;
		if(data.length >= c) {
			var newData = this.r.randomObjects(c);	
			for(var i = 0; i < c; i++) {
				this.update(data[i], newData[i]);
			}
		}
	}

	updateMid(count:string) {
		var c:number = this.parse.parseValue(count, this.min, this.max);
		var data = this.model.data;
		if(data.length >= c) {
			var newData = this.r.randomObjects(c);	
			var start = Math.floor(data.length / 2) - Math.floor(c/2);
			var end = start + c;
			for(var i = start, j = 0; i < end; i++, j++) {
				this.update(data[i], newData[j]);
			}
		}
	}

	updateLast(count:string) {
		var c:number = this.parse.parseValue(count, this.min, this.max);
		var data = this.model.data;
		if(data.length >= c) {
			var newData = this.r.randomObjects(c);	
			var start = data.length - c;
			var end = start + c;
			for(var i = start, j = 0; i < end; i++, j++) {
				this.update(data[i], newData[j]);
			}
		}
	}

	partialUpdate(every:string) {
		var e:number = this.parse.parseValue(every, this.min, 100);
		var data = this.model.data;
		var count = Math.ceil(data.length / e);
		if(data.length > 0) {
			var newData = this.r.randomObjects(count);
			for(var i = 0, j = 0; i < data.length; i+=e, j++) {
				this.update(data[i], newData[j]);
			}
		} 
	}

	private update(item, newItem) {
		item.id = newItem.id;
		item.c1 = newItem.c1;
		item.c2 = newItem.c2;
		item.c3 = newItem.c3;
		item.c4 = newItem.c4;
	}

}