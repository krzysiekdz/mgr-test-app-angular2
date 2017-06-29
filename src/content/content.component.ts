import {Component} from "angular2/core";
import {RandomService} from '../services/random.service';
import {ModelService} from '../services/model.service';
import {SearchService} from '../services/core-operations/search.service';

@Component({
   selector: 'app-content',
   templateUrl: '../src/content/content.template.html',
   providers: [RandomService, ModelService, SearchService]
})

export class ContentComponent {
	
	model;

	constructor(private r: RandomService,
	  ms: ModelService,
	  private searchService: SearchService) {
		this.model = ms.getModel();
	}

	isSearchPass(item, i) {
		return this.searchService.isSearchPass(item, i);
	}
}