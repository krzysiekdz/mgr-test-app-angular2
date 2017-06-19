import {Component} from "angular2/core";

@Component({
   selector: 'app-content',
   template: `
   	<div class="content">
        <table class="table" name="tableWrap">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Job</th>
                    <th>Salary</th>
                </tr>
            </thead>

            <tbody name="table">
            </tbody>
        </table>
    </div>
   	`,
})

export class ContentComponent {

}