import {
  Component,
  OnInit
} from '@angular/core';
import {
  TeamService
} from '../team.service';
import {
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-consignar',
  templateUrl: './consignar.component.html',
  styleUrls: ['./consignar.component.css']
})
export class ConsignarComponent implements OnInit {

  monto = new FormControl('');
  Csaldo = parseInt(localStorage.getItem('Saldo'));

  constructor() {

  }

  ngOnInit() {}

  Consignar() {

    this.Csaldo = this.Csaldo + this.monto.value;
    localStorage.setItem('Saldo', this.Csaldo.toString());
    alert('Se ha consignado $'+this.monto.value+" satisfactoriamente!")
  }
}