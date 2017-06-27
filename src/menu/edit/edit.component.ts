import {Component} from "angular2/core";
import {ModelService} from '../../services/model.service';
import {EditDirective} from '../../directives/edit.directive';

@Component({
   selector: 'menu-edit',
   templateUrl: '../src/menu/edit/edit.template.html',
   providers: [ModelService],
   directives: [EditDirective],
})

export class MenuEditComponent {

	model;

	constructor(ms:ModelService) {
		this.model = ms.getModel();
		// this.model.data[0] = {c1: 'ala'};
	}
}