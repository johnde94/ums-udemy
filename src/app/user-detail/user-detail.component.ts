import { User } from './../interfaces/user';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User | undefined; 

  constructor() { 

  }

  ngOnInit(): void {
  }

}
