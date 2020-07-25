import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { PermisosService } from './permisos.service'
@Injectable()
export class SocketJWTService extends Socket{

  constructor(private permisos:PermisosService) { 
   super({url:'http://localhost:27017',options:{
     query:`token=${permisos.obtenerToken()}&sessionID=${permisos.obtenerSession()}`
     }
   })
  }
}
