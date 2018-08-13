import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';


import {
  SettingsService,
  SidebarService,
  SharedService,
  SubirArchivoService,
  
  LoginGuardGuard,
  AdmiGuard,

  UsuarioService,
  HospitalService,
  MedicoService
} from './service.index';

@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    SubirArchivoService,
    ModalUploadService,
    // Guards
    LoginGuardGuard,
    AdmiGuard,
    // Mantenimiento
    UsuarioService,
    HospitalService,
    MedicoService
  ],
  declarations: []
})
export class ServiceModule { }
