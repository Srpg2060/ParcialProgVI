import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl
} from '@angular/forms';
import {
  RouterEvent,
  RouterLink
} from '@angular/router';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Usuario = new FormControl('');
  Contrasenha = new FormControl('');


  constructor(private router: Router) {
  }

  ngOnInit(): void {}
  onValidacion() {

    if (this.Usuario.value == "admin" && this.Contrasenha.value == "12345") {
      localStorage.setItem('Saldo', '100000');
      localStorage.setItem('Cretiros', '3');
      this.router.navigate(['/menu']);

    } else {
      alert('Error, usuario o contraseña incorrectos');
      this.router.navigate(['/login']);
    }
  }

}