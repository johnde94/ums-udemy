import { UserService } from '../services/user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../classes/User';
import { faPencil, faTrash, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user-data') user: User | undefined; 
  @Output ('onDeleteUser') userDeleted = new EventEmitter;
  @Output('onSelectUser') onSelectUser = new EventEmitter();
  faPencil = faPencil;
  faTrash = faTrash;
  faInfo = faInfo;
  constructor(private userService : UserService, private router: Router) { 

  }

  ngOnInit(): void {
  }
  deleteUser() {
    this.userDeleted.emit(this.user);
  }

  updateUser(){
    this.router.navigateByUrl('users/' + this.user.id + '/edit');
    this.onSelectUser.emit(this.user);
  }

}
