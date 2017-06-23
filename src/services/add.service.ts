import {Inject} from 'angular2/core';
import {ModelService} from './model.service';
import {RandomService} from './random.service';
import {ParseValueService} from './parseValue.service';

export class AddService {

	model;
	min:number = 1;
	max:number = 5000;

	constructor(@Inject(RandomService) private r, 
		@Inject(ModelService) private ms,
		@Inject(ParseValueService) private parse) {
		this.model = ms.getModel();
	}

	addFirst(count:string) {
		var c:number = this.parse.parseValue(count, this.min, this.max);
		var newData = this.r.randomObjects(c);
		this.model.data = newData.concat(this.model.data);
	}

	addMid(count:string) {
		var c:number = this.parse.parseValue(count, this.min, this.max);

		var newData = this.r.randomObjects(c);
		var mid = Math.floor(this.model.data.length / 2);
		var args = [mid, 0];//position mid, 0 removes - for splice function 
		args = args.concat(newData);//mid, 0 + newData -> args for splice
		Array.prototype.splice.apply(this.model.data, args);
	}

	addLast(count:string) {
		var c:number = this.parse.parseValue(count, this.min, this.max);

		var newData = this.r.randomObjects(c);
		this.model.data = this.model.data.concat(newData);
	}


}