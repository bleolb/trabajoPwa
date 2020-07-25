import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router,NavigationEnd} from '@angular/router';
import { WebServiceService } from '../servicios/web.service.service';
import { UsuarioService } from '../servicios/usuario.service'

@Component({
  selector: 'app-vercongreso',
  templateUrl: './vercongreso.component.html',
  styleUrls: ['./vercongreso.component.scss']
})
export class VercongresoComponent implements OnInit {
  navigationSubcription;
  congress=[];
  private url: string;
  constructor(
    private http: HttpClient,
    private router: Router,
    private servidor: WebServiceService,
    private usuarioServic:UsuarioService) {
    this.url=servidor.getUrl();
 
   }


  ngOnInit(): void {
    this.getCongress();
  }
  getCongress(): void {
    this.http
      .get(`${this.url}congreso`, this.servidor.getHeaders())
      .subscribe((data: any) => {
        console.log(data)
        data.data.forEach((element) => {
          this.congress.push(element);
        });
      });
  }
  public edit(congress): void {
    sessionStorage.setItem('congress', JSON.stringify(congress));
    this.router.navigate(['/editcongresos']);
  }
  deletecongress(_id) {
    this.usuarioServic.delete('delete_congreso', _id);
  
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/vercongreso']);
        });
  } 
}
