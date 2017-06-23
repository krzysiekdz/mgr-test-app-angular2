import {Inject} from 'angular2/core';
import {ModelService} from '../model.service';
import {RandomService} from '../random.service';
import {ParseValueService} from '../parseValue.service';

export class ReplaceService {

	model;
	min:number = 1;
	max:number = 5000;

	constructor(@Inject(RandomService) private r, 
		@Inject(ModelService) private ms,
		@Inject(ParseValueService) private parse) {
		this.model = ms.getModel();
	}

	replaceFirst(count:string) {
		var c:number = this.parse.parseValue(count, this.min, this.max);
		var data = this.model.data;
		if(data.length >= c) {
			var newData = this.r.randomObjects(c);	
			for(var i = 0; i < c; i++) {
				data[i] = newData[i];
			}
		}
	}

	replaceMid(count:string) {
		var c:number = this.parse.parseValue(count, this.min, this.max);
		var data = this.model.data;
		if(data.length >= c) {
			var newData = this.r.randomObjects(c);	
			var start = Math.floor(data.length / 2) - Math.floor(c/2);
			var end = start + c;
			for(var i = start, j = 0; i < end; i++, j++) {
				data[i] = newData[j];
			}
		}
	}

	replaceLast(count:string) {
		var c:number = this.parse.parseValue(count, this.min, this.max);
		var data = this.model.data;
		if(data.length >= c) {
			var newData = this.r.randomObjects(c);	
			var start = data.length - c;
			var end = start + c;
			for(var i = start, j = 0; i < end; i++, j++) {
				data[i] = newData[j];
			}
		}
	}

}