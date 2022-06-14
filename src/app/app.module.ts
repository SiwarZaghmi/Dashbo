import { BrowserModule } from '@angular/platform-browser';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetDataService } from './services/get-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './components/components.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


import { TableComponent } from './page1/charts_pg1/table/table.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ColumnChartComponent } from './page1/charts_pg1/column-chart/column-chart.component';
import { CardsComponent } from './page1/charts_pg1/cards/cards.component';
import { ActionTypePieComponent } from './page1/charts_pg1/action-type-pie/action-type-pie.component';
import { StateComponent } from './page1/charts_pg1/state/state.component';

import { PiechartComponent } from './page2/chart_pg2/piechart/piechart.component';
import { Chart1Component } from './page2/chart_pg2/chart1/chart1.component';
import { Chart2Component } from './page2/chart_pg2/chart2/chart2.component';
import { CARDComponent } from './page2/chart_pg2/card/card.component';
import { TableauxComponent } from './page2/chart_pg2/tableaux/tableaux.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './authentification/auth.service';
import { AuthGuard } from './authentification/auth.guard';
import { TokenInterceptorService } from './authentification/token-interceptor.service';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';


import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Table2Component } from './page3/charts/table2/table2.component';
import { EpicTable1Component } from './page3/charts/epic-table1/epic-table1.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    Page1Component,
    TableComponent,
    ColumnChartComponent,
    CardsComponent,
    ActionTypePieComponent,
    StateComponent,
    PiechartComponent,
    Chart1Component,
    Chart2Component,
    CARDComponent,
    TableauxComponent,
    LoginComponent,
    Table2Component,
    EpicTable1Component,
    Page2Component,
    Page3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    NgbModule,
    ComponentsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({showForeground :true,})
  

    
    
    
  ],
  providers: [AuthService, AuthGuard,GetDataService ,  
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],

  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
