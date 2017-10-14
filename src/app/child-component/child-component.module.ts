import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './child-component';
import { ChildService } from './child-component.service';
@NgModule({
  declarations: [
    ChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule],
  providers: [],
  bootstrap: [ChildComponent],
  exports: [ ]
})
export class ChildModule { }