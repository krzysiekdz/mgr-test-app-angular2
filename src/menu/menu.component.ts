import {Component} from "angular2/core";
import {HeaderComponent} from "./header/header.component";
import {InitComponent} from "./init/init.component";
import {MenuAddComponent} from './add/add.component';
import {MenuReplaceComponent} from './replace/replace.component';
import {MenuUpdateComponent} from './update/update.component';
import {MenuSwapComponent} from './swap/swap.component';
import {MenuFetchComponent} from './fetch/fetch.component';

@Component({
   selector: 'app-menu',
   template: `
   	<div class="menu">
   		<div>
   			<menu-header></menu-header>
   			<menu-init></menu-init>
   			<menu-add></menu-add>
            <menu-replace></menu-replace>
            <menu-update></menu-update>
            <menu-swap></menu-swap>
            <menu-fetch></menu-fetch>
   		</div>
   	</div>
   	`,
   	directives: [HeaderComponent, InitComponent, MenuAddComponent, 
         MenuReplaceComponent, MenuUpdateComponent, MenuSwapComponent,
         MenuFetchComponent],
})

export class MenuComponent {
}