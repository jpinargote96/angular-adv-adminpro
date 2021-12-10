import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundrComponent } from './pages/nopagefoundr/nopagefoundr.component';


const routes: Routes = [

  { path : '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path : '**', component : NopagefoundrComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]   
})
export class AppRoutingModule { }
