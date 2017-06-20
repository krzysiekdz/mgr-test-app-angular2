import {Component} from "angular2/core";
import {ModelService} from '../../services/model.service';
import {RandomService} from '../../services/random.service';
import {ParseValueService} from '../../services/parseValue.service';
import {AddService} from '../../services/add.service';

@Component({
   selector: 'menu-add',
   templateUrl: '../src/menu/add/add.template.html',
   providers: [AddService, RandomService, ModelService, ParseValueService],
})

export class MenuAddComponent {

	addCount:string = '';

	constructor(private addService: AddService){
	}

	addFirst(count:string) {
		this.addService.addFirst(count);
	}

	addMid(count:string) {
		this.addService.addMid(count);
	}

	addLast(count:string) {
		this.addService.addLast(count);
	}


}