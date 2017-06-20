import {Component} from "angular2/core";
import {MenuComponent} from './menu/menu.component';
import {ContentComponent} from './content/content.component';

@Component({
   selector: 'app',
   template: `
      <div class="app">
         <app-menu ></app-menu>
         <app-content ></app-content>
      </div>
   	`,
   directives: [MenuComponent, ContentComponent]
})
export class AppComponent {
	// model = {
	// 	data: []
	// };
}