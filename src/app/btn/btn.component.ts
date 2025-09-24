import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  constructor(private _location:Location) { }

  ngOnInit(): void {
  }
  goBack(){
this._location.back()
  }

}
