import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app.component';
import { LoginComponent } from './components/login/login.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductsInsertComponent } from './components/products-insert/products-insert.component';
import { ProductsComponent } from './components/products/products.component';
import { SincronizarComponent } from './components/sincronizar/sincronizar.component';
import { UserInsertComponent } from './components/user-insert/user-insert.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'products',component: ProductsComponent},
  {path:'users',component: UsersComponent},
  {path:'userUpdate/:id',component: UserUpdateComponent},
  {path:'productUpdate/:id',component: ProductUpdateComponent},
  {path:'productInsert',component: ProductsInsertComponent},
  {path:'userInsert',component: UserInsertComponent},
  {path:'sincronizar',component: SincronizarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
