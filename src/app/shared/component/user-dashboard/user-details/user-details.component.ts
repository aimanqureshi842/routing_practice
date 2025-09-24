import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/models/userInterface';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
userId!:string;
userInfo!:Iuser;
  constructor(private _routes:ActivatedRoute,
    private _userService:UserService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.getUserId()
  }
  getUserId(){
    // console.log(this._routes)
   this.userId=this._routes.snapshot.params['userId'];
   if(this.userId){
  this._userService.fetchUserDetails(this.userId)
  .subscribe({
    next:data=>{
  this.userInfo=data
    },
    error:err=>{
      console.log(err)
    }
  })
   }

  }
  removeUser(){
    this._userService.removeUser(this.userInfo)
    this._router.navigate(['users'])
  }

}
