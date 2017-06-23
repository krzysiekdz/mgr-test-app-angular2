import {Component} from "angular2/core";
import {ModelService} from '../../services/model.service';
import {RandomService} from '../../services/random.service';
import {ParseValueService} from '../../services/parseValue.service';
import {UpdateService} from '../../services/core-operations/update.service';

@Component({
   selector: 'menu-update',
   templateUrl: '../src/menu/update/update.template.html',
   providers: [UpdateService, RandomService, ModelService, ParseValueService],
})

export class MenuUpdateComponent {

	updateCount:string = '';

	constructor(private updateService: UpdateService){
	}

	updateFirst(count:string) {
		this.updateService.updateFirst(count);
	}

	updateMid(count:string) {
		this.updateService.updateMid(count);
	}

	updateLast(count:string) {
		this.updateService.updateLast(count);
	}

	partialUpdate(every:string) {
		this.updateService.partialUpdate(every);
	}


}