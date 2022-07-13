import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { DefaultComponent } from './components/default/default.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HDFCComponent } from './components/FIID/hdfc/hdfc.component';
import { ICICIComponent } from './components/FIID/icici/icici.component';
import { Routes,RouterModule, Router } from '@angular/router';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { DashboardComponent } from './components/FIID/hdfc/dashboard/dashboard.component';
import { IcicidashboardComponent } from './components/FIID/icici/icicidashboard/icicidashboard.component';




const routes : Routes = [
  {path:'dynamic' , component : DynamicComponent},

  {path:'hdfc',
   component:HDFCComponent,
    children:[
      {path:'dashboard', component:DashboardComponent}
    ]
  },

  {path:'icici',component:ICICIComponent,
  children:[
    {path:'dashboard', component:IcicidashboardComponent}
  ]
  },

  {path:'default' , component : DefaultComponent},
  {path:'', redirectTo : '/default' , pathMatch : 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    HDFCComponent,
    ICICIComponent,
    DynamicComponent,
    DashboardComponent,
    IcicidashboardComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
