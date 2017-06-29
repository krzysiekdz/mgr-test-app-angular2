import {Component} from "angular2/core";
import {ModelService} from '../../services/model.service';
import {FilterService} from '../../services/core-operations/filter.service';

@Component({
   selector: 'menu-filter',
   templateUrl: '../src/menu/filter/filter.template.html',
   providers: [ModelService, FilterService],
})

export class MenuFilterComponent {

	model;
	filterState:boolean = false;

	constructor(ms: ModelService, 
		private filterService: FilterService){
		this.model = ms.getModel();
	}

	filterItems() {
		if(this.filterState) {
			this.filterService.unfilter();
		} else {
			this.filterService.filter();
		}
	}

}