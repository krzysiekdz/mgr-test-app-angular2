import {Component} from "angular2/core";
import {ModelService} from '../../services/model.service';
import {SearchService} from '../../services/core-operations/search.service';

@Component({
   selector: 'menu-search',
   templateUrl: '../src/menu/search/search.template.html',
   providers: [ModelService, SearchService],
})

export class MenuSearchComponent {

	model;
	searchText;

	constructor(ms: ModelService, 
		private searchService: SearchService){
		this.model = ms.getModel();
	}

	search(event, text:string) {
		if(event !== null && event) {
			this.searchService.search(event.target.value);
		} else if(text) {
			this.searchService.search(text);
		}
	}

}