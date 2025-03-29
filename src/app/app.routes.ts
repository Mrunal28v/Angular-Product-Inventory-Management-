import { Routes } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {AboutComponent} from './about/about.component';
import {UserloginComponent} from './userlogin/userlogin.component';
import {UserregistrationComponent} from './userregistration/userregistration.component';
import {AddProductComponent} from './product/add-product/add-product.component';
import {ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { ProductService } from './product/services/product.services';


export const routes: Routes = [
    { path: 'product-component', component: ProductComponent },
    { path: 'about-component', component: AboutComponent },
    { path: 'userlogin-component', component: UserloginComponent },
    { path: 'userregistrtion-component', component: UserregistrationComponent },
    { path: 'addproduct-component', component: AddProductComponent },
    { path: 'productdetails-component', component: ProductDetailsComponent},
    { path: 'productlists-component', component: ProductListComponent},
    { path: 'productupdate-component', component: ProductUpdateComponent},
    { path: 'productservices-component', component:ProductService },

];
