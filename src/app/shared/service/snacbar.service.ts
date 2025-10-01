import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnacbarService {

  constructor(private _matSnackBar:MatSnackBar) { }
  openSnackBar(msg:string){
let matConfig:MatSnackBarConfig={
duration:3000,
verticalPosition:'top',
horizontalPosition:'left'
}
this._matSnackBar.open(msg,'close',matConfig)
  }
}
