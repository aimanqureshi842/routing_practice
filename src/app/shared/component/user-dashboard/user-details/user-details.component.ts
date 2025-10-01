import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/models/userInterface';
import { SnacbarService } from 'src/app/shared/service/snacbar.service';
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
    private _router:Router,
    private _snackbar:SnacbarService
  ) { }

  ngOnInit(): void {
    this.getUserId()
  }
  getUserId(){
    // console.log(this._routes)
  //  this.userId=this._routes.snapshot.params['userId'];
  //  if(this.userId){
  // this._userService.fetchUserDetails(this.userId)
  // .subscribe({
  //   next:data=>{
  // this.userInfo=data
  //   },
  //   error:err=>{
  //     console.log(err)
  //   }
  // })
  // }
this._routes.params.subscribe(param=>{
  console.log(param)
  this.userId=param['userId']
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
})
  }
  removeUser(){
    this._userService.removeUser(this.userInfo);
    this._snackbar.openSnackBar(`The user "${this.userInfo.userName}" removed successfully!!!`)
    this._router.navigate(['users'])
  }
}
