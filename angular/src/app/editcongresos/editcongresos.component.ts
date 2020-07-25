import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,} from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
@Component({
  selector: 'app-editcongresos',
  templateUrl: './editcongresos.component.html',
  styleUrls: ['./editcongresos.component.scss']
})
export class EditcongresosComponent implements OnInit {

  congress:any;
  createuserForm: FormGroup;
    constructor(private formBuilder: FormBuilder,
      private http: HttpClient,
      private router: Router,
      private usuarioService:UsuarioService) { 
      if (sessionStorage.getItem("congress")) {
        this.congress = JSON.parse(sessionStorage.getItem("congress"));
      } else {
        this.congress = new this.congress();
      }
    }

  ngOnInit(): void {
    this.createuserForm = this.formBuilder.group({
      nombre:["",Validators.required],
      congresos:["",Validators.required],
      tema:["",Validators.required],
  });
  }
  createcongress(){
    let nombre =this.createuserForm.get('nombre').value;
    let congresos =this.createuserForm.get('congresos').value;
    let tema =this.createuserForm.get('tema').value;
     if(this.createuserForm.invalid){
      alert ('llene los campos')
    }else{
      let Data = {
        data:{
          nombre,
          congresos,
          tema,
        }
      };
     let user= this.usuarioService.put(
      'update_congreso',this.congress._id,Data);
      if (user) {
        this.router.navigate(['/vercongreso']);
        localStorage.clear();
      }
    }
  }
}
