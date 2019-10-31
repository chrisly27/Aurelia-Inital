import {CssAnimator} from 'aurelia-animator-css';
import {inject} from 'aurelia-framework';

@inject(CssAnimator, Element)
export class App {
  constructor(animator, element) {
    this.animator = animator;
    this.element = element;
  }

  animateElement() {
    let myElement = this.element.querySelector('.myElement');
    this.animator.animate(myElement, 'myAnimation');
  }
}
