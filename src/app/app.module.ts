import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ChildModule } from './child-component/child-component.module';
import { ChildComponent } from './child-component/child-component';
import { ChildService } from './child-component/child-component.service';
const appRoutes: Routes = [
  { path: 'Jainik', component: ChildComponent },
  { path: 'Shweta', component: ChildComponent },
  { path: 'Aishwarya', component: ChildComponent },
  { path: 'Helly', component: ChildComponent },
  { path: 'Shibayan', component: ChildComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
      RouterModule.forRoot(appRoutes)],
  providers: [ChildService],
  bootstrap: [AppComponent]
})
export class AppModule { }
