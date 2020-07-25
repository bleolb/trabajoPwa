import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SocketIoModule } from 'ngx-socket-io';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { LoginComponent } from './login/login.component'
import { HttpClientModule } from '@angular/common/http';
import {appRoutingModule} from './app-routing.module';
import { RouterModule } from '@angular/router';
import { EdituserComponent } from './edituser/edituser.component';
import { MenuComponent } from './menu/menu.component';
import { CongresosComponent } from './congresos/congresos.component';
import { VercongresoComponent } from './vercongreso/vercongreso.component';
import { EditcongresosComponent } from './editcongresos/editcongresos.component';
import { VerponenciaComponent } from './verponencia/verponencia.component';
import { EditPonenciasComponent } from './edit-ponencias/edit-ponencias.component';
import { PonenciasComponent } from './ponencias/ponencias.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EdituserComponent,
    MenuComponent,
    CongresosComponent,
    VercongresoComponent,
    EditcongresosComponent,
    VerponenciaComponent,
    EditPonenciasComponent,
    PonenciasComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SocketIoModule,
    appRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
