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
	min:number = 1;
	max:number = 5000;

	constructor(private r: RandomService, 
		private model: ModelService, 
		private parse: ParseValueService) {
	}

	addFirst(count:string) {
		var c:number = this.parse.parseValue(count, this.min, this.max);
		var newData = this.r.randomObjects(c);
		this.model.setData(newData.concat(this.model.getData()));
		console.log(this.model);
	}

	// show(e) {
	// 	console.log(this.addCount, e.target.value);
	// }
}