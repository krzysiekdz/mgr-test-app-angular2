import {Component} from "angular2/core";
import {ModelService} from '../../services/model.service';
import {RandomService} from '../../services/random.service';

@Component({
   selector: 'menu-header',
   template: `
   	<div class="div-header">
        <span class="label label-info header">
        	{{ title }}
        </span>    
        <button class="btn btn-default btn-clear" name="clear" (click)="clear()">
        	clear
        </button> 
    </div>
   	`,
   	providers: [ModelService, RandomService],
})

export class HeaderComponent {

  title = "AngularJS 2";
  model;

  constructor(private ms: ModelService, private r: RandomService){
    this.model = ms.getModel().model;
  }

	clear() {
		this.model.data = [];
    this.r.resetId();
	}
}