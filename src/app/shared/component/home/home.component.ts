import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  goToUser(){
this._router.navigate(['users'])
//navigate method by default has absolute routing
  }

}
