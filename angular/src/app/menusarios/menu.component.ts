import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router,NavigationEnd} from '@angular/router';
import { WebServiceService } from '../servicios/web.service.service';
import { UsuarioService } from '../servicios/usuario.service'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  navigationSubcription;
  user=[];
  private url: string;
  constructor(
    private http: HttpClient,
    private router: Router,
    private servidor: WebServiceService,
    private usuarioServic:UsuarioService) {
      this.url=servidor.getUrl();
 
   }

   ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.http
      .get(`${this.url}get_usuarios`, this.servidor.getHeaders())
      .subscribe((data: any) => {
        console.log(data)
        data.data.forEach((element) => {
          this.user.push(element);
        });
      });
  }
  public edit(user): void {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/edit']);
  }

  deleteuser(_id) {
    this.usuarioServic.delete('usuario_delete', _id);
  
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/menu']);
        });
  }

}