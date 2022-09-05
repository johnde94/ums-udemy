import { UserComponent } from './../user/user.component';
import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChildren } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../classes/User";
import { UserService } from "../services/user.service";

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html',
    styleUrls: [
        'users.component.css'
    ]
})
export class UsersComponent implements OnInit, AfterViewInit {
    title = 'Users'
    public users$: Observable<User[]> = this.service.getUsers();
    @Output('updateUser') updateUser = new EventEmitter<User>();

    //bisogna mettere tra parentesi il tipo del componente figlio. Il ! serve a dire a typescript che il valore della variabile non sarà nè null nè undefined
    //il secondo parametro serve a ricavare dalla variabile "trs" i riferimenti del dom per poter manipolare il componente
    @ViewChildren(UserComponent, {read: ElementRef}) trs!: QueryList<ElementRef>;  

    //Angular crea una variabile di istanza automaticamente nel costruttore se gliene passi una come parametro PRIVATE
    constructor(private service: UserService) {
    }
    ngAfterViewInit(): void {
    }
    //questo metodo deve essere sempre implementato
    ngOnInit() {
    }
    onDeleteUser(user: User) {

        this.service.deleteUser(user).subscribe(res => {
            this.trs.forEach(element => {
                const elementoDom = element.nativeElement;
                if (Number(elementoDom.id)===user.id) {
                    elementoDom.parentNode.removeChild(elementoDom);
                }  
            });
        })



        alert("stai per eliminare l'utente: " + user.lastname);
        this.service.deleteUser(user);
    }

    onSelectUser(user: User) {
        const userCopy = Object.assign({}, user);
        this.updateUser.emit(userCopy);

    }
} 