import {Directive, ElementRef, Renderer} from 'angular2/core';
// tu zaczac - zaimportowac model i dopisac zeby dyrektywa ustawiala data[0].c1

@Directive({
	selector: '[editFirstDataElement]',
	host: {
		'(input)': 'onInput($event)',
	}
})
export class EditDirective {
	
	constructor(private el: ElementRef, private renderer: Renderer) {
	}

	onInput(e) {
		// console.log(e.target.value);
		// this.renderer.setElementStyle(this.el.nativeElement, 'width', '100px');
	}
	
}