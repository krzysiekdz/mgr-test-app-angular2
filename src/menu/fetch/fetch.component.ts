import {Component} from "angular2/core";
import {ModelService} from '../../services/model.service';
import {RandomService} from '../../services/random.service';
import {FetchService} from '../../services/core-operations/fetch.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
   selector: 'menu-fetch',
   templateUrl: '../src/menu/fetch/fetch.template.html',
   providers: [FetchService, RandomService, ModelService, HTTP_PROVIDERS],
})

export class MenuFetchComponent {

	constructor(private fetchService: FetchService){
	}

	fetch(count:string) {
		this.fetchService.fetch(count);
	}

}