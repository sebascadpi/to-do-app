import { Component, OnInit } from '@angular/core';
import { UserService } from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'toDoApp para SD';

  email: string = 'ef322@alu.ua.es';
  password: string = '2235';

  displayName = 'Sebas';
  
  constructor(public userService: UserService) {}
  ngOnInit() {
    this.login();
    this.userService.getUser().subscribe(
      user => {this.displayName = user.nombre});
  }  

  login() {
    const user = { email: this.email, password: this.password };
    this.userService.signIn(user).subscribe(
      (loggedUser) => {
        this.userService.setToken(loggedUser.token);
        console.log("Login correcto");
        console.log(loggedUser.token);
      },
      (err) => {
        console.error("Error en el login");
        console.log(err);
      }
    );
  }
}
