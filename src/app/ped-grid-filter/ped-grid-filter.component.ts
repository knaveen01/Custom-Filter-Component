import { Component, OnInit,Input, Output } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { DataFilter } from './model/data-filter.interface';

@Component({
  selector: 'app-ped-grid-filter',
  templateUrl: './ped-grid-filter.component.html',
  styleUrls: ['./ped-grid-filter.component.css']
})
export class PedGridFilterComponent implements OnInit {
  public myForm: FormGroup;
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

  save(model: DataFilter) {
      // call API to save
      // ...
      console.log(model);
  }
}
