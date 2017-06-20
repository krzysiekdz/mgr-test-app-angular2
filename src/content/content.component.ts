import {Component} from "angular2/core";
import {RandomService} from '../services/random.service';
import {ModelService} from '../services/model.service';

@Component({
   selector: 'app-content',
   templateUrl: '../src/content/content.template.html',
   providers: [RandomService, ModelService]
})

export class ContentComponent {
	
	model;

	constructor(private r: RandomService,  ms: ModelService) {
		this.model = ms.getModel();
	}
}