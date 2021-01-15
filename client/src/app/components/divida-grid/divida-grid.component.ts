import { Component, OnInit } from '@angular/core';
import { DividaViewModel } from '../../models/DividaViewModel';
import { DividaService } from '../../services/divida.service';

@Component({
  selector: 'app-divida-grid',
  templateUrl: './divida-grid.component.html',
  styleUrls: ['./divida-grid.component.css'],
})
export class DividaGridComponent implements OnInit {
  displayedColumns: string[] = [
    'numeroTitulo',
    'nomeDevedor',
    'qtdeParcelas',
    'valorOriginal',
    'valorAtualizado',
    'diasAtraso',
  ];
  dataSource: DividaViewModel[];

  constructor(private dividaService: DividaService) {}

  ngOnInit(): void {
    this.getDividas();
  }

  getDividas() {
    this.dividaService
      .getDividas()
      .subscribe((results) => (this.dataSource = results));
  }
}
