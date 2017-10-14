import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChildService } from './child-component.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
@Component({
  selector: 'child',
  templateUrl: './child-component.html',
  styleUrls: ['./child-component.scss'],
  providers: []
})
export class ChildComponent {
  public flag: boolean;
  public item_data: any;
  public index: any;
  public paneHeadings: any;
  public leftarrowDisable: boolean = false;
  public rightarrowDisable: boolean = false;
  constructor(public childService: ChildService, public router: Router) {
    this.paneHeadings = this.childService.item_list;
    this.setData(this.childService.item);
  }
  public leftArrow() {
    this.router.navigate(['/' + this.paneHeadings[this.index - 1].title]);
    this.childService.setData(this.paneHeadings[this.index - 1], this.paneHeadings);
    this.setData(this.paneHeadings[this.index - 1]);
  }
  public rightArrow() {
    this.router.navigate(['/' + this.paneHeadings[this.index + 1].title]);
    this.childService.setData(this.paneHeadings[this.index + 1], this.paneHeadings);
    this.setData(this.paneHeadings[this.index + 1]);
  }
  goBack() {
    this.router.navigate(['/']);
  }
  setData(element) {
    this.item_data = element;
    if (this.paneHeadings) {
      this.index = this.paneHeadings.indexOf(this.item_data);
      this.flag = true;
      if (this.paneHeadings[this.index - 1] && this.paneHeadings[this.index + 1]) {
        this.leftarrowDisable = false;
        this.rightarrowDisable = false;
      }
      else if (!this.paneHeadings[this.index - 1]) {
        this.leftarrowDisable = true;
      }
      else if (!this.paneHeadings[this.index + 1]) {
        this.rightarrowDisable = true;
      }
    }
    else {
      this.flag = false;
    }
  }
}
