import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild("resultHandle") resultHandle: ElementRef;
  title = 'Calculator';
  el: HTMLInputElement;

  ngOnInit(): void {
    this.el = this.resultHandle.nativeElement;
  }

  buttonEvent(num: string) {
    let operationPerformed = (this.el.dataset !== undefined && this.el.dataset['operationPerformed'] !== undefined && this.el.dataset.operationPerformed);
    if (operationPerformed === "true") {
      this.el.value = num;
      this.el.dataset.operationPerformed = 'false';
    } else {
      if (this.el.value === undefined) {
        this.el.value = num;
      } else {
        this.el.value += num;
      }
    }
  }

  resetForm() {
    this.el.value = "";
    this.el.dataset.operationPerformed = undefined;
    this.el.dataset.preVal = undefined;
  }
}
