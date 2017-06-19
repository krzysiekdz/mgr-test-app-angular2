import {Component} from "angular2/core";

@Component({
   selector: 'menu-init',
   template: `
    <div class="input-group">
        <input type="text" class="form-control" placeholder="init..." name="input-init">
        <span class="input-group-btn">
            <button class="btn btn-default" name="btn-init">init</button>
        </span>
    </div>
   	`,
})

export class InitComponent {

}