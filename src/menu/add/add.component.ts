import {Component} from "angular2/core";
import {ModelService} from '../../services/model.service';
import {RandomService} from '../../services/random.service';
import {ParseValueService} from '../../services/parseValue.service';

@Component({
   selector: 'menu-add',
   templateUrl: '../src/menu/add/add.template.html',
   providers: [ModelService, RandomService, ParseValueService],
})

export class MenuAddComponent {

	addCount:string = '';
	model;
	min:number = 1;
	max:number = 5000;

	constructor(private r: RandomService, 
		ms: ModelService, 
		private parse: ParseValueService) {
		this.model = ms.getModel();
	}

	addFirst(count:string) {
		var c:number = this.parse.parseValue(count, this.min, this.max);
		var newData = this.r.randomObjects(c);
		this.model.data = newData.concat(this.model.data);
		console.log(this.model.data);
	}

	// show(e) {
	// 	console.log(this.addCount, e.target.value);
	// }
}