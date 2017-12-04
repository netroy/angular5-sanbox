import * as Mark from 'mark.js';
import { Directive, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

const markOptions = {
  separateWordSearch: false,
  filter: (node, term, totalCounter, counter) => (counter === 0)
};

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective implements OnChanges {
  private elRef: ElementRef;
  private marker: any;

  constructor(elRef: ElementRef) {
    this.elRef = elRef;
    this.marker = new Mark(this.elRef.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.highlight(changes.appHighlightQuote.currentValue);
  }

  @Input()
  set appHighlightQuote(search: string) {
    this.highlight(search);
  }

  private highlight(search: string) {
    this.marker.unmark();
    this.marker.mark(search, markOptions);
  }
}
