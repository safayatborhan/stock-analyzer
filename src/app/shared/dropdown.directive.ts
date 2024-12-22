import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]',
    standalone: true
})

export class DropdownDirective {
    @Input() defaultClass: string = '';
    isOpen: boolean = false;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    @HostListener('click') toggle() {
        this.isOpen = !this.isOpen;
        this.renderer.setAttribute(this.elRef.nativeElement, 'class', this.isOpen ? this.defaultClass +' open' : this.defaultClass);
    }
}