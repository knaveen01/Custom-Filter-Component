import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Column } from '../model/column.model';
import { SharedModule } from '../../shared/shared.module';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-custom-filter',
  templateUrl: './custom-filter.component.html',
  styleUrls: ['./custom-filter.component.scss']
})
export class CustomFilterComponent implements OnInit {
  @Input('group')
  public customFilterForm: FormGroup;
  @Input('customFilterCount')
  public  customFilterCount:number;
  @Input('customFilterIndex')
  public customFilterIndex:number;
  @Input('filterColummnArr')
  public filterColummnArr:Column[];
  @Input('filterOperatorArr')
  public filterOperatorArr:any[];
  @Output()
  onCustomFilterRemove = new EventEmitter<number>();
  @Output()
  onFilterColumChange = new EventEmitter<any>();
  //@Output() incremented = new EventEmitter<boolean>();
  constructor() { 
    //console.log("Count:"+this.customFilterCount+",Position:"+this.customFilterIndex)
  }

  ngOnInit() {
    console.log("Count:"+this.customFilterCount+",Position:"+this.customFilterIndex)
    console.log("state of filter colulm"+this.customFilterForm.controls.filterColumn.pristine);
  }
  ngAfterViewInit(){
    this.customFilterForm.controls.filterColumn.setValue("");
  }
  removeCustomFilter(filterIndex:number){
    this.onCustomFilterRemove.emit(filterIndex);
  }

  onSelectChange(filterColumn:Column){
    let z =12;
    z =14;
    let selectedFilter:any = {
      selectedIndex : this.customFilterIndex,
      filterColumn:filterColumn["value"]
    };
    this.onFilterColumChange.emit(selectedFilter);
  }
}
