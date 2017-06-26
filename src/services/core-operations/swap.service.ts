import {Inject} from 'angular2/core';
import {ModelService} from '../model.service';
import {RandomService} from '../random.service';
import {ParseValueService} from '../parseValue.service';

export class SwapService {

	model;

	constructor(@Inject(ModelService) private ms) {
		this.model = ms.getModel();
	}

	swapFirst() {
		var data = this.model.data;
		if(data.length > 1) {
			var i = 0;
			var j = 1;
			this.swap(i, j);
		}
	}

	swapMid() {
		var data = this.model.data;
		if(data.length > 1) {
			var i = Math.floor(data.length / 2) - 1;
			var j = i+1;
			this.swap(i, j);
		}
	}

	swapLast() {
		var data = this.model.data;
		if(data.length > 1) {
			var i = data.length-2;
			var j = i+1;
			this.swap(i, j);
		}
	}

	private swap(i, j) {
		var data = this.model.data;

		var temp = data[i];
		this.model.data[i] = data[j];
		this.model.data[j] = temp;
	}		

}