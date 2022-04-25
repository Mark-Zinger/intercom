import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {RequestsTableComponent} from "./components/requests-table/requests-table.component";

const routes: Routes = [{
  path: '', component: AdminComponent,
  children: [
    { path: 'clients', component: RequestsTableComponent},
    { path: 'requests', component: RequestsTableComponent},
    { path: 'workers', component: RequestsTableComponent},
    { path: 'statistic', component: RequestsTableComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
