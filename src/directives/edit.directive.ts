import {Directive, ElementRef, Renderer} from 'angular2/core';
import {ModelService} from '../services/model.service';

@Directive({
	selector: '[editFirstDataElement]',
	host: {
		'(input)': 'onInput($event)',
	},
	providers: [ModelService],
})
export class EditDirective {
	
	model;

	constructor(private el: ElementRef, 
		private renderer: Renderer, 
		ms: ModelService) {
		this.model = ms.getModel();
	}

	onInput(e) {
		var data = this.model.data;
		if(data.length > 0) {
			data[0].c1 = e.target.value;
		}
		// console.log(this.el.nativeElement);
		// this.renderer.setElementStyle(this.el.nativeElement, 'width', '100px');
	}
	
}