import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebServiceService } from './web.service.service';
import { PermisosService } from './permisos.service';
import { Datarx } from '../modelos/datarx';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class FileService {
  private url: string;

  constructor(
    private http: HttpClient,
    private servidor: WebServiceService,
    private permisos: PermisosService
  ) {
    this.url = servidor.getUrl();
  }
  guardarFile(file: File[]): Observable<Datarx> {
    const formData = new FormData();
    formData.append('uploadFile', file[0], file[0].name);
    console.log(formData);
    return this.http.post<Datarx>(
      `${this.url}upload_galeria`,
      formData,
      this.servidor.getHeaderFile()
    );
  }
  deleteFile(directorio: string, fileName: string): boolean {
    let dataReturn = false;
    this.http
      .delete<Datarx>(
        `${this.url}delete_file_galeria/${directorio}/${fileName}`,
        this.servidor.getHeaderFile()
      )
      .subscribe((data) => {
        if (data.transaccion) {
          dataReturn = true;
          this.permisos.decodificarToken(data.token);
        } else {
          alert('error')
        }
      });
    return dataReturn[0];
  }

  obtenerFile(directorio: string, FileName: string): any {
    return `${this.url}file_galeria/${directorio}/${FileName}`;
  }
}