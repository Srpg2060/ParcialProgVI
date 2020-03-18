import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  TeamService
} from './../team.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  public saldo = parseInt(localStorage.getItem('Saldo'));

  constructor(private team: TeamService) {}

  ngOnInit(): void {}

}