import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,} from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss'],
})
export class EdituserComponent implements OnInit {
user:any;
userForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private usuarioService:UsuarioService) { 
    if (sessionStorage.getItem("user")) {
      this.user = JSON.parse(sessionStorage.getItem("user"));
    } else {
      this.user = new this.user();
    }
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email:["",Validators.required],
      nombre:["",Validators.required],
      apellido:["",Validators.required],
      edad:["",Validators.required],
  }); 
  }
  update(){
    let nombre =this.userForm.get('nombre').value;
    let apellido =this.userForm.get('apellido').value;
    let edad =this.userForm.get('edad').value;
    let email =this.userForm.get('email').value;
    if(this.userForm.invalid){
      alert ('llene los campos')
    }else{
      let Data = {
        data:{
          nombre,
          apellido,
          edad,
          email
        }
      };
     let user= this.usuarioService.put(
      'update',this.user._id,Data);
      if (user) {
        this.router.navigate(['/menu']);
        localStorage.clear();
      }
    }
  }
}
