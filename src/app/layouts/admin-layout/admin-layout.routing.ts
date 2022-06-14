import { Routes } from '@angular/router';
import { Page1Component } from 'src/app/page1/page1.component';
import { Page2Component } from 'src/app/page2/page2.component';
import { Page3Component } from 'src/app/page3/page3.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'ProjectInformation',      component: Page1Component },
    { path: 'CollaboratorsandPredictions',         component: Page2Component },
    { path: 'ResourcePlanningComponent' , component:Page3Component}
];
