import {Inject} from 'angular2/core';
import {ModelService} from '../model.service';

export class SearchService {

	model;

	constructor(@Inject(ModelService) private ms) {
		this.model = ms.getModel();
	}

	search(txt:string) {
		var col = ['c1', 'c2', 'c3', 'c4'];
		var data = this.model.data;

		for(var j = 0; j < data.length; j++) {
			var item = data[j];
			for(var i = 0; i < 4; i++) {
				var prop = item[col[i]] + "";
				if(txt !== "" && prop.indexOf(txt) !== -1) {
					if(!item.search) {
						item.search = [null, null, null, null];
					}
					item.search[i] = txt;
				} else if (item.search && item.search[i]) {
					item.search[i] = null;
				}
				
			}
		}
	}

	isSearchPass(item, i) {
		return (item.search) && (item.search[i]);
	}

}