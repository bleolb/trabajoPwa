import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,NavigationEnd } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service'
@Component({
  selector: 'app-congresos',
  templateUrl: './congresos.component.html',
  styleUrls: ['./congresos.component.scss']
})
export class CongresosComponent implements OnInit {
  createuserForm: FormGroup;
  navigationSubcription;
  constructor(private formBuilder: FormBuilder,
  private http: HttpClient,
  private router: Router,
  private userService: UsuarioService) {}


  ngOnInit(): void {
    this.createuserForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      congresos: ['', [Validators.required]],
      tema: ['', [Validators.required]],
     
    });
  }
  createcongress(){   
    let nombre =this.createuserForm.get('nombre').value;
    let congresos =this.createuserForm.get('congresos').value;
    let tema =this.createuserForm.get('tema').value;
    
     if (this.createuserForm.invalid) {
        alert ('llene todos los campos')
      } else {
        let datos = {
          data: {
            nombre,
            congresos,
            tema,
            },
        };
        let user = this.userService.post('create_congreso',datos)
         if (user) {
          this.router.navigate(['/vercongreso']);
        }
      }
    };
}
