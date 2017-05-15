import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { IntegrationModule } from './integration.module';

export function main() {
   describe('integration component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [IntegrationModule]
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
  template: '<cw-integration></cw-integration>'
})
class TestComponent {}
