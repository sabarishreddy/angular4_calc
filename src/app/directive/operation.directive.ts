import { Directive, HostBinding, HostListener, ElementRef, Input } from '@angular/core';
import { ResultDirective } from './result.directive';

@Directive({
  selector: '[operation-handle]'
})
export class OperationDirective {
  @Input('operation-handle') resultElement: HTMLInputElement;
  constructor() { }

  @HostListener('click', ['$event']) perform(event) {
    let el = this.resultElement;
    let pVal = Number.parseInt(el.dataset.preVal);
    let cVal = Number.parseInt(el.value);
    console.log("operation performed:" + event.target.outerText);
    console.log("el.dataset.preVal: " + el.dataset.preVal + (typeof el.dataset.preVal === 'number') + " el.dataset.operation:" + el.dataset.operation);
    if (Number.isInteger(pVal) && Number.isInteger(cVal) && typeof el.dataset.operation !== 'undefined') {
      console.log("pVal: " + pVal + " el.dataset.operation:" + el.dataset.operation);
      let result;
      switch (el.dataset.operation) {
        case '+': result = pVal + cVal;
          break;
        case '-': result = pVal - cVal;
          break;
        case '*': result = pVal * cVal;
          break;
        case '/': result = pVal / cVal;
          break;
      }
      console.log("before setting el.value: " + el.value);
      el.value = new String(result).toString();
      console.log("el.value: " + el.value);
      this.setPreviousVal(el);
    } else {
      this.setPreviousVal(el);
      el.value = "";
    }
    this.setOperation(el, event);
  }

  isNumeric(value) {
    return /^\d+$/.test(value);
  }

  setPreviousVal(el) {
    console.log(this.isNumeric(el.value) + " before setting preval:" + el.value);
    if (this.isNumeric(el.value)) {
      console.log("setting preval");
      el.dataset.preVal = el.value;
    }
  }

  setOperation(el, event) {
    if (event.target.outerText !== '=') {
      el.dataset.operation = event.target.outerText;
      el.dataset.operationPerformed = 'true';
    } else {
      el.dataset.preVal = undefined;
      el.dataset.operation = undefined;
      el.dataset.operationPerformed = 'false';
    }
  }

}
