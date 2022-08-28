import { UserService } from './../services/user.service';
import { User } from './../classes/User';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private userCopy: User;
  private __user: User;
  @Input() set user(user: User){
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  } 
  get user(){
    return this.__user;
  }
  userService: UserService;



  constructor(userService: UserService) { 
    this.userService = userService;
  }

  ngOnInit(): void {
  }

  saveUser(){
    if(this.user.id>0){
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }
  }
  resetForm(form){
    if(this.user.id === 0){
      this.user = new User();
    } else {
      this.user = this.userCopy;
    }
  }

}
