import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  user:any[];

  constructor() { 
     if (sessionStorage.getItem("rol")) {
   this.user =  JSON.parse(sessionStorage.getItem("rol"));
     console.log(this.user)
  }
}

  ngOnInit(): void {
  }

}
