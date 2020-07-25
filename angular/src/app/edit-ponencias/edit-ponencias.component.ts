import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,} from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
@Component({
  selector: 'app-edit-ponencias',
  templateUrl: './edit-ponencias.component.html',
  styleUrls: ['./edit-ponencias.component.scss']
})
export class EditPonenciasComponent implements OnInit {

  ponencias:any;
  createuserForm: FormGroup;
    constructor(private formBuilder: FormBuilder,
      private http: HttpClient,
      private router: Router,
      private usuarioService:UsuarioService) { 
      if (sessionStorage.getItem("ponencias")) {
        this.ponencias = JSON.parse(sessionStorage.getItem("ponencias"));
      } else {
        this.ponencias = new this.ponencias();
      }
    }

  ngOnInit(): void {
    this.createuserForm = this.formBuilder.group({
      titulo:["",Validators.required],
      area:["",Validators.required],
      resumen:["",Validators.required],
  });
  }
  createponencias(){
    let titulo =this.createuserForm.get('titulo').value;
    let area =this.createuserForm.get('area').value;
    let resumen =this.createuserForm.get('resumen').value;
     if(this.createuserForm.invalid){
      alert ('llene los campos')
    }else{
      let Data = {
        data:{
          titulo,
          area,
          resumen,
        }
      };
     let user= this.usuarioService.put(
      'update_ponencia',this.ponencias._id,Data);
      if (user) {
        this.router.navigate(['/verponencias']);
        localStorage.clear();
      }
    }
  }
}
