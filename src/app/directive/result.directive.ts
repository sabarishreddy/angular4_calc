import { Directive } from '@angular/core';

@Directive({
  selector: '[operation-result]'
})
export class ResultDirective {

  constructor() { }
  
  add(){
    console.log("add called");
    if(true){
      

    }
  }
}
