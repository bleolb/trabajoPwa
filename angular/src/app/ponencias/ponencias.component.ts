import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,NavigationEnd } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service'

@Component({
  selector: 'app-ponencias',
  templateUrl: './ponencias.component.html',
  styleUrls: ['./ponencias.component.scss']
})
export class PonenciasComponent implements OnInit {
  createuserForm: FormGroup;
  navigationSubcription;
  constructor(private formBuilder: FormBuilder,
  private http: HttpClient,
  private router: Router,
  private userService: UsuarioService) {}

  

  ngOnInit(): void {
    this.createuserForm = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      area: ['', [Validators.required]],
      resumen: ['', [Validators.required]],
     
    });
  }
  createponencias(){   
    let titulo =this.createuserForm.get('titulo').value;
    let area =this.createuserForm.get('area').value;
    let resumen =this.createuserForm.get('resumen').value;
    
     if (this.createuserForm.invalid) {
        alert ('llene todos los campos')
      } else {
        let datos = {
          data: {
            titulo,
            area,
            resumen,
            },
        };
        let user = this.userService.post('create_ponencia',datos)
         if (user) {
          this.router.navigate(['/verponencias']);
        }
      }
    };
}
