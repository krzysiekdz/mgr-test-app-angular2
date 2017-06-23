import {Component} from "angular2/core";
import {ModelService} from '../../services/model.service';
import {RandomService} from '../../services/random.service';
import {ParseValueService} from '../../services/parseValue.service';
import {ReplaceService} from '../../services/core-operations/replace.service';

@Component({
   selector: 'menu-replace',
   templateUrl: '../src/menu/replace/replace.template.html',
   providers: [ReplaceService, RandomService, ModelService, ParseValueService],
})

export class MenuReplaceComponent {

	replaceCount:string = '';

	constructor(private replService: ReplaceService){
	}

	replaceFirst(count:string) {
		this.replService.replaceFirst(count);
	}

	replaceMid(count:string) {
		this.replService.replaceMid(count);
	}

	replaceLast(count:string) {
		this.replService.replaceLast(count);
	}


}