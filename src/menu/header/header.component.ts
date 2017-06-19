import {Component} from "angular2/core";

@Component({
   selector: 'menu-header',
   template: `
   	<div class="div-header">
        <span class="label label-info header" name="refresh">AngularJS2</span>    
        <button class="btn btn-default btn-clear" name="clear">clear</button> 
    </div>
   	`,
})

export class HeaderComponent {

}