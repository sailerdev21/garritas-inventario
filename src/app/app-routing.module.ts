import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component'; // Asegúrate de importar LoginComponent
import { AuthGuard } from './guards/auth.guard'; // Asegúrate de importar AuthGuard

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Ruta del Login
  { path: 'product', component: ProductComponent, canActivate: [AuthGuard] }, // Protege esta ruta
  { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard] }, // Protege esta ruta
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirige a login por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
