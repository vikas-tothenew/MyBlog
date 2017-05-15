import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { FaqModule } from './faq.module';

export function main() {
   describe('Faq component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [FaqModule]
      });
    });

    it('should work and load',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let aboutDOMEl = fixture.debugElement.children[0].nativeElement;

              expect(aboutDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<cw-faq></cw-faq>'
})
class TestComponent {}
