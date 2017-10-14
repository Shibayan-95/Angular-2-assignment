import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChildService } from './child-component/child-component.service';
import { ChildComponent } from './child-component/child-component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  public paneHeadings: any[] = [];
  public flag: boolean = false;
  public index: any;
  constructor(public http: HttpClient, public childService: ChildService, public router: Router) {
    this.http.get('assets/Resources/PanesHeading.json').subscribe(
      res => {
        this.paneHeadings = res['results'];
      },
      err => {
        console.log(err);
      }
    );

  }
  public setData(item) {
    window.scrollTo(0, 500);
    this.flag = true;
    this.childService.setData(item,this.paneHeadings);
    return this.index;
  }
}
