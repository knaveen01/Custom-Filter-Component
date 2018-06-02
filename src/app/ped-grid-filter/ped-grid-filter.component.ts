import { Component, OnInit,Input, Output } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { DataFilter } from './model/data-filter.interface';
import { Column } from './model/column.model';
import { SharedModule } from '../shared/shared.module';
@Component({
  selector: 'app-ped-grid-filter',
  templateUrl: './ped-grid-filter.component.html',
  styleUrls: ['./ped-grid-filter.component.scss']
})
export class PedGridFilterComponent implements OnInit {
  public myForm: FormGroup;
  @Input("filterColumnObj")
  filterColummnArr:Column[];
  filterOperatorArr:any[] = [];
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({      
      customFilters: this._fb.array([])
    });
    this.addCustomFilter();
  }

  initCustomFilter(){
    return this._fb.group({
      filterColumn: ['', Validators.required],
      operator: ['', Validators.required],
      filterValue:['', Validators.required]
    });
  }
  addCustomFilter() {
    const control = <FormArray>this.myForm.controls['customFilters'];
    const addrCtrl = this.initCustomFilter();
    
    control.push(addrCtrl);
    
    /* subscribe to individual address value changes */
    // addrCtrl.valueChanges.subscribe(x => {
    //   console.log(x);
    // })
  }

  removeCustomFilter(i: number) {
    const control = <FormArray>this.myForm.controls['customFilters'];
    control.removeAt(i);
    this.filterOperatorArr.splice(i,1);
  }

  onFilterColumChange(selectedFilter:any){
    let selectedIndex = selectedFilter.selectedIndex;
    let column:any = selectedFilter.filterColumn;
    //this.filterOperatorArr = [];
    let operatorArr:string[] = [];
    if(column != undefined && column != null && column != ""){
      if(column.type === "number"){
        operatorArr.push("=");
        operatorArr.push("!=");
        operatorArr.push("<");
        operatorArr.push(">");
        operatorArr.push("<=");
        operatorArr.push(">=");
      }
      else if(column.type === "boolean"){
        operatorArr.push("False");
        operatorArr.push("True");
      }
      else{
        operatorArr.push("Equals");
        operatorArr.push("Not equals");
        operatorArr.push("Exists");
        operatorArr.push("Not exists");
      }
    }
    this.filterOperatorArr[selectedIndex] = operatorArr;    
  }
  save(model: DataFilter) {
      // call API to save
      // ...
      console.log(model);
  }
}
