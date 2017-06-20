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
		this.model.data = r.randomObjects(5);
		console.log(this.model);
	}

	show() {
		console.log(this.model.data);
		this.model.data.push(this.r.randomObjects(1)[0]);
	}
}