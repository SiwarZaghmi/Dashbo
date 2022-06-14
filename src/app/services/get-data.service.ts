import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private _http: HttpClient) { }
// Page 1 cards 
  getData() {
    return this._http.get(environment.url+"/page1/card");
1 }

// Page 1 Pie chart

getData_Pie(){
  return this._http.get(environment.url+"/page1/pie_chart")
}
// Page 1 Opened Issues 
getData5() {
  return this._http.get(environment.url+"/page1/opened_issues");

1 }
// Page 1 Closed Issues 
getData6() {
return this._http.get(environment.url+"/page1/closed_issues");

1 }
// Page 1 Tableaux
getData7() {
  return this._http.get(environment.url+"/page1/table");
}
// Page 1 Epic chart logged/size + Table 2 Page 3
getData13() {
  return this._http.get(environment.url+"/page1/epicChart");
}
// page 2
// page 2 cards 

getData9() {
  return this._http.get(environment.url+"/page2/card1");
}
getData10() {
  return this._http.get(environment.url+"/page2/card2");
}
// page 2 : Tableaux revenue par contirbutor + pie chart
getData2() {
  return this._http.get(environment.url+"/page2/TablePie")
} 

getData0(){
  return this._http.get(environment.url+"/merge")
}
 //page 2 Chart 2 Column des issues done
getData8() {
  return this._http.get(environment.url+"/page2/Columnchart");
}
// page 2 Tableaux
getData11() {
  return this._http.get(environment.url+"/page2/tableIssue");
}
// page 3 Tableaux 2
getData12() {
  return this._http.get(environment.url+"/page3/table2");
}


}

