import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, // Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdmiGuard implements CanActivate {

  constructor(
    public _usuarioService: UsuarioService,
    // public router: Router
  ) {}

  canActivate() {
    if ( this._usuarioService.usuario.role === 'ADMI_ROLE' ) {
      return true;
    }else {
      console.log( 'Bloqueado por el ADMIN GUARD');
      // this.router.navigate(['/login']);
      this._usuarioService.logout();
       return false;
    }

  }
}
