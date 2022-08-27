import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { User } from "../interfaces/user";
import { UserService } from "../services/user.service";

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html',
    styleUrls: [
        'users.component.css'
    ]
})
export class UsersComponent implements OnInit{
    title = 'Users'
    public users: User [] = [];
    @Output('updateUser') updateUser = new EventEmitter<User>();

    //Angular crea una variabile di istanza automaticamente nel costruttore se gliene passi una come parametro
    constructor(private service: UserService){
    }
    //questo metodo deve essere sempre implementato
    ngOnInit() {
        this.users = this.service.getUsers();
    }
    onDeleteUser(user: User){
        alert("stai per eliminare l'utente: " + user.lastname)
        this.service.deleteUser(user);
    }

    onSelectUser(user: User){
        console.log('selected user',user);
            this.updateUser.emit(user);
        
          }
}