import { Component, OnInit,Input, Output } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { DataFilter } from './model/data-filter.interface';
import { Column } from './model/column.model';

@Component({
  selector: 'app-ped-grid-filter',
  templateUrl: './ped-grid-filter.component.html',
  styleUrls: ['./ped-grid-filter.component.css']
})
export class PedGridFilterComponent implements OnInit {
  public myForm: FormGroup;
  @Input("filterColumnObj")
  filterColummnArr:Column[];
  filterOperatorArr:string[] = [];
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
  }

  onFilterColumChange(column:any){
    this.filterOperatorArr = [];
    if(column != undefined && column != null && column != ""){
      if(column.type === "number"){
        this.filterOperatorArr.push("=");
        this.filterOperatorArr.push("!=");
        this.filterOperatorArr.push("<");
        this.filterOperatorArr.push(">");
        this.filterOperatorArr.push("<=");
        this.filterOperatorArr.push(">=");
      }
      else if(column.type === "boolean"){
        this.filterOperatorArr.push("False");
        this.filterOperatorArr.push("True");
      }
      else{
        this.filterOperatorArr.push("Equals");
        this.filterOperatorArr.push("Not equals");
        this.filterOperatorArr.push("Exists");
        this.filterOperatorArr.push("Not exists");
      }
    }
  }
  save(model: DataFilter) {
      // call API to save
      // ...
      console.log(model);
  }
}
