import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-custom-filter',
  templateUrl: './custom-filter.component.html',
  styleUrls: ['./custom-filter.component.css']
})
export class CustomFilterComponent implements OnInit {
  @Input('group')
  public customFilterForm: FormGroup;
  @Input('customFilterCount')
  public  customFilterCount:number;
  @Input('customFilterIndex')
  public customFilterIndex:number;
  @Output()
  onCustomFilterRemove = new EventEmitter<number>();
  //@Output() incremented = new EventEmitter<boolean>();
  constructor() { 
    //console.log("Count:"+this.customFilterCount+",Position:"+this.customFilterIndex)
  }

  ngOnInit() {
    console.log("Count:"+this.customFilterCount+",Position:"+this.customFilterIndex)
    console.log("state of filter colulm"+this.customFilterForm.controls.filterColumn.pristine);
  }

  removeCustomFilter(filterIndex:number){
    this.onCustomFilterRemove.emit(filterIndex);
  }
}
