import {Component} from "angular2/core";
import {ModelService} from '../../services/model.service';
import {RandomService} from '../../services/random.service';
import {ParseValueService} from '../../services/parseValue.service';
import {AddService} from '../../services/add.service';

@Component({
   selector: 'menu-init',
   templateUrl: '../src/menu/init/init.template.html',
   providers: [AddService, RandomService, ModelService, ParseValueService],
})

export class InitComponent {

  initCount:string = '';

  constructor(private addService: AddService){
  }

  initWithData(count:string) {
  	this.addService.addFirst(count);
  }

}