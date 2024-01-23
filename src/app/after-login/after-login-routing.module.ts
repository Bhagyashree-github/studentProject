import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentformComponent } from "./components/studentform/studentform.component";
import { StudendataComponent } from "./components/studendata/studendata.component";
import { AfterloghomeComponent } from "./components/afterloghome/afterloghome.component";


const routes:Routes = [
    {path:'',component:AfterloghomeComponent,
    children: [
        {path:'home',component:StudentformComponent},
        {path:'dataTable',component:StudendataComponent},
        {path:'home/:id',component:StudentformComponent},
        {path:'',redirectTo:'home',pathMatch:"full"}
    ] }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AfterLoginRoutingModule {

}
