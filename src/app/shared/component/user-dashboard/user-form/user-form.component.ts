import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/models/userInterface';
import { UserService } from 'src/app/shared/service/user.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userId!: string;
  userForm!: FormGroup;
  isInEdit: boolean = false;
  editUser!: Iuser;
  constructor(private _userService: UserService,
    private _uuidService: UuidService,
    private _router: Router,
    private _routes: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createUserForm()
    this.getId()
  }

  getId() {
    this.userId = this._routes.snapshot.params['userId'];
    if (this.userId) {
      this.isInEdit = true;
      this._userService.fetchUserDetails(this.userId)
        .subscribe({
          next: data => {
            // console.log(data)
            this.editUser = data;
            // console.log(this.editUser)
            this.userForm.patchValue(this.editUser)
          },
          error: err => {
            console.log(err)
          }
        })
    }
  }
  createUserForm() {
    this.userForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      userRole: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required)
    })

  }
  userFormSub() {
    if (this.userForm.valid) {
      let userObj = { ...this.userForm.value, userId: this._uuidService.uuid() }
      // let userObj=this.userForm.value;
      // userObj.userId=this._uuidService.uuid()
      this.userForm.reset()
      this._userService.newUserObj(userObj);
      this._router.navigate(['users'])

    }

  }
  updateObj() {
    if (this.userForm.valid) {
      let updatedObj = { ...this.userForm.value, userId: this.userId }
      this._userService.updatedUser(updatedObj);
      this.userForm.reset();
      this._router.navigate(['users'])
    }
  }

}
