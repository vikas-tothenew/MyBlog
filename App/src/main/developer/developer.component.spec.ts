import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { DeveloperModule } from './developer.module';

export function main() {
   describe('Developer component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [DeveloperModule]
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
  template: '<cw-developer></cw-developer>'
})
class TestComponent {}
