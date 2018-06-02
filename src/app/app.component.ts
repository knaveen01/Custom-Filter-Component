import { Component,OnInit,Input, Output } from '@angular/core';
import { Column } from './ped-grid-filter/model/column.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Custom filter Using Reactive forms!';
  columns:Column[] = [
    {
        name:"column1",
        header:"Column1",
        type:"text"
    },
    {
        name:"column2",
        header:"Column2",
        type:"number"
    },
    {
        name:"column3",
        header:"Column3",
        type:"text"
    }];
  // counter:number;
  // dummyArry = [1];
  ngOnInit(){
    //this.counter=1;
  }
  onIncrement(incremented:boolean){
    // this.counter += 1;
    // this.dummyArry = (new Array(this.counter)).fill(1);
  }
}
