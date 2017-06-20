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

	constructor(private r: RandomService,  m: ModelService) {
		this.model = m;
		this.model.setData(r.randomObjects(5));
		console.log(this.model);
	}

	show() {
		console.log(this.model);
	}
}