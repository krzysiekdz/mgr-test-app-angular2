import {Component} from "angular2/core";
import {ModelService} from '../../services/model.service';
import {RandomService} from '../../services/random.service';
import {ParseValueService} from '../../services/parseValue.service';
import {SwapService} from '../../services/core-operations/swap.service';

@Component({
   selector: 'menu-swap',
   templateUrl: '../src/menu/swap/swap.template.html',
   providers: [SwapService, RandomService, ModelService, ParseValueService],
})

export class MenuSwapComponent {

	constructor(private swapService: SwapService){
	}

	swapFirst() {
		this.swapService.swapFirst();
	}

	swapMid() {
		this.swapService.swapMid();
	}

	swapLast() {
		this.swapService.swapLast();
	}


}