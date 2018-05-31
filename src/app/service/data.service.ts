import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Column } from '../ped-grid-filter/model/column.model';

@Injectable()
export class DataService{

    getData():Observable<Column[]>{
        let columns:any = [
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
            //  "operator":[{"Exists"},{"Not exists"},{"="},{"!="},{"<"},{">"},{">="},{"<="}]
        return columns;
    }
}