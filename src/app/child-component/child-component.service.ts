import { Injectable } from '@angular/core';

@Injectable()
export class ChildService {
  public item:any;
  public value:any = true;
  public item_list:any;
  public flag:any;
  setData(item,item_list) {
    this.item = item;
    this.item_list = item_list;
    return this.item;
    }
}