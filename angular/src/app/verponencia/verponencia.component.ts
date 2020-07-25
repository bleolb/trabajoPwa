import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router,NavigationEnd} from '@angular/router';
import { WebServiceService } from '../servicios/web.service.service';
import { UsuarioService } from '../servicios/usuario.service'
@Component({
  selector: 'app-verponencia',
  templateUrl: './verponencia.component.html',
  styleUrls: ['./verponencia.component.scss']
})
export class VerponenciaComponent implements OnInit {
  navigationSubcription;
  ponencia=[];
  private url: string;
  constructor(
    private http: HttpClient,
    private router: Router,
    private servidor: WebServiceService,
    private usuarioServic:UsuarioService) {
    this.url=servidor.getUrl();
    }

  ngOnInit(): void {
    this.getPonencia();
  }
  getPonencia(): void {
    this.http
      .get(`${this.url}ponencia`, this.servidor.getHeaders())
      .subscribe((data: any) => {
        console.log(data)
        data.data.forEach((element) => {
          this.ponencia.push(element);
        });
      });
  }
  public edit(ponencia): void {
    sessionStorage.setItem('ponencias', JSON.stringify(ponencia));
    this.router.navigate(['/editarponencias']);
  }
  deleteponencias(_id) {
    this.usuarioServic.delete('delete_ponencia', _id);
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/verponencias']);
        });
      }
}
