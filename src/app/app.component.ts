import { Component,OnInit,Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ped Grid Filter App!';
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
