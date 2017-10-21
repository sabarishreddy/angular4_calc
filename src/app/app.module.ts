import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OperationDirective } from './directive/operation.directive';
import { ResultDirective } from './directive/result.directive';

@NgModule({
  declarations: [
    AppComponent,
    OperationDirective,
    ResultDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
