import {Component} from "angular2/core";
import {HeaderComponent} from "./header/header.component";
import {InitComponent} from "./init/init.component";
import {MenuAddComponent} from './add/add.component';

@Component({
   selector: 'app-menu',
   template: `
   	<div class="menu">
   		<div>
			<menu-header></menu-header>
			<menu-init></menu-init>
			<menu-add></menu-add>
   		</div>
   	</div>
   	`,
   	directives: [HeaderComponent, InitComponent, MenuAddComponent],
   	inputs: ['model:dataModel']
})

export class MenuComponent {
	// model;
}