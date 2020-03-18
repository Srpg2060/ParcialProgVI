import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl
} from '@angular/forms';
import {
  TeamService
} from '../team.service';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css']
})
export class RetiroComponent implements OnInit {

  retiro = new FormControl();
  Rsaldo = parseInt(localStorage.getItem('Saldo'));
  CantRetiros = parseInt(localStorage.getItem('Cretiros'));
  limitante = 0;

  constructor() {
  }

  ngOnInit() {}
  
  Retirar() {
    this.limitante = this.Rsaldo - this.retiro.value;
    if (this.CantRetiros != 0) {
      if (this.retiro.value > 600000) {
        alert('Error, no puede retirar mas de $ 600.000');

      } else if (this.limitante < 10000) {
        alert('Error, no puedes tener un saldo menor a $ 10.000');

      } else {
        localStorage.setItem('Saldo', this.limitante.toString());
        localStorage.setItem('Cretiros', (this.CantRetiros - 1).toString());
      }
    } else {
      alert('Error, has superado el limite de retiros, solo puedes retirar 3 veces');
    }

    alert('Se ha retirado $' + this.retiro.value + ' satisfactoriamente!')
  }

}