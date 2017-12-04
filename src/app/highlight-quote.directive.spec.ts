import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HighlightQuoteDirective } from './highlight-quote.directive';

@Component({
  template: `
  <div appHighlightQuote="cool">Cool kids from the block</div>
  <div appHighlightQuote="sum">Lorem ipsum, voll mund gypsum</div>
  `,
  styles: ['div { display: none }']
})
class TestComponent {}

describe('HighlightQuoteDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        HighlightQuoteDirective,
        TestComponent
      ]
    })
    .createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should have three highlighted sections', () => {
    const matches = fixture.nativeElement.querySelectorAll('mark');
    expect(matches.length).toBe(3);
    expect(matches[0].innerText).toBe('Cool');
    expect(matches[1].innerText).toBe('sum');
    expect(matches[2].innerText).toBe('sum');
  });
});
