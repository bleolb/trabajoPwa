import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,NavigationEnd } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FileService } from '../servicios/file.service';
import { Datarx } from '../modelos/datarx'


@Component({
  selector: 'app-usuarios-nuevo',
  templateUrl: './usuarios-nuevo.component.html',
  styleUrls: ['./usuarios-nuevo.component.scss'],
  providers: [NgxSpinnerService],

})
export class UsuariosNuevoComponent implements OnInit {
  createuserForm: FormGroup;
  verFyle: any;
  navigationSubcription;
  constructor(private formBuilder: FormBuilder,
  private spinner: NgxSpinnerService,
  private http: HttpClient,
  private router: Router,
  private fileService: FileService,
  private userService: UsuarioService) {
    this.navigationSubcription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.spinner.show();
        setTimeout(() => {
          this.spinner.hide();
        }, 800);
      }
    });
  }

  ngOnInit(): void {
    this.createuserForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      file: ['', [Validators.required]],
    });
    this.verFyle = this.fileService.obtenerFile(
      'galeria',
      'g7v7z8mQtMxZfYUtFKWhxII1.jpg'
    );
  }
  changeFile(event): void {
    let imagen = this.createuserForm.get('file').value;
    if (imagen !== 'g7v7z8mQtMxZfYUtFKWhxII1.jpg') {
      this.fileService.deleteFile('galeria', imagen);
    }
    const filename = event.target.files;
    console.log(filename)
    this.fileService.guardarFile(filename).subscribe((data:Datarx)=>{
      console.log(data)
      if(data.transaccion){
        imagen = data.data[0];
        console.log(imagen)
        this.verFyle=this.fileService.obtenerFile('galeria',imagen)
      }
    })
  }
createuser(){   
  let nombre =this.createuserForm.get('nombre').value;
  let apellido =this.createuserForm.get('apellido').value;
  let edad =this.createuserForm.get('edad').value;
  let email =this.createuserForm.get('email').value;
  let password =this.createuserForm.get('password').value;
   if (this.createuserForm.invalid) {
      alert ('llene todos los campos')
    } else {
      let datos = {
        data: {
          nombre,
          apellido,
          edad,
          email,
          password,
          },
      };
      let user = this.userService.post('insertusuario',datos)
       if (user) {
        this.router.navigate(['/menu']);
      }
    }
  };
}
