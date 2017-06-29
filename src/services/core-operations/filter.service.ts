import {Inject} from 'angular2/core';
import {ModelService} from '../model.service';

export class FilterService {

	model;

	constructor(@Inject(ModelService) private ms) {
		this.model = ms.getModel();
	}

	filter() {
		var data = this.model.data;
		this.model.filtered = true;

		for(var j = 0; j < data.length; j++) {
			var item = data[j];
			if(item.id % 10 !== 0) {
				item.hidden = true;
			}
		}
	}

	unfilter() {
		var data = this.model.data;
		this.model.filtered = false;

		for(var j = 0; j < data.length; j++) {
			var item = data[j];
			if(item.hidden) {
				item.hidden = false;
			}
		}
	}

}