import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  user: User | undefined;
  
  constructor(private userService : UserService, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.route.params.subscribe( param => {
      const id = Number(param['id']);
      const user = this.userService.getUser(id);
      if(user){
        this.user = user;
      }
    }
    );
  }

}
