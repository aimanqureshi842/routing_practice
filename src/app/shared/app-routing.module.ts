import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";
import { UserDashboardComponent } from "./component/user-dashboard/user-dashboard.component";
import { ProductsComponent } from "./component/products/products.component";
import { FairsComponent } from "./component/fairs/fairs.component";
import { UserDetailsComponent } from "./component/user-dashboard/user-details/user-details.component";
import { UserFormComponent } from "./component/user-dashboard/user-form/user-form.component";
import { ProductDetailsComponent } from "./component/products/product-details/product-details.component";
import { ProductFormComponent } from "./component/products/product-form/product-form.component";

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: "full"
    },
    {
        path: 'users',
        component: UserDashboardComponent
    },
    {
        path: 'users/addUser',
        component: UserFormComponent

    },
    {
        path: 'users/:userId',
        component: UserDetailsComponent
    }, {
        path: 'users/:userId/edit',
        component: UserFormComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    }, {
        path: 'products/addProduct',
        component: ProductFormComponent
    }, {
        path: 'products/:pId',
        component: ProductDetailsComponent
    }, {
        path: 'products/:pId/edit',
        component: ProductFormComponent

    },
    {
        path: 'fairs',
        component: FairsComponent
    }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: []

})
export class AppRoutingModule {

}











