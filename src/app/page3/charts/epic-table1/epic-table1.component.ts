import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { table } from 'src/app/models/model';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-epic-table1',
  templateUrl: './epic-table1.component.html',
  styleUrls: ['./epic-table1.component.css']
})
export class EpicTable1Component implements OnInit {
    public data : any;
    public somme : number = 0 ;
    config : any;
    count: number;
    searchedKeyword: string;
    ngOnInit(): void {
      this.getDataService.getData12().subscribe((res)=> {
        this.data = res as table[];
        });
        
    }
    constructor(private getDataService : GetDataService) { 
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.count
    };
    }
    
  
    calculateSome() {
      for (var val of this.data)
      {
        this.somme += parseInt(val.value);
      }
    }
    pageChanged(event){
      this.config.currentPage = event;
    }
    task(Task,value){

        for (var val of value){
          if (val.term.toLowerCase() == Task.toLowerCase() ) {
            return val.total}
  
        }
      return 0
      
    }
  
  }
  

