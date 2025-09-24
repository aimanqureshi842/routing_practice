import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Iuser } from '../../models/userInterface';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
usersArr:Array<Iuser>=[]
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this.getUserData()
  }
  getUserData(){
    this._userService.fetchAllUsers()
    .subscribe({
      next:data=>{
this.usersArr=data
      },
      error:err=>{
        console.log(err)
      }
    })
  }

}
