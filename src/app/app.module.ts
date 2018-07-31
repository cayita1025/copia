import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

///////////////////// rutas
import { APP_ROUTER } from './app.routes';
////////////////// Modulos
import { PagesModule } from './pages/pages.module';
////// Temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//// Servicios
import { ServiceModule } from './services/service.module';

//// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTER,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
