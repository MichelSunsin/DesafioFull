import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { DividaViewModel } from '../../models/DividaViewModel';
import { DividaService } from '../../services/divida.service';

@Component({
  selector: 'app-divida-grid',
  templateUrl: './divida-grid.component.html',
  styleUrls: ['./divida-grid.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('100ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
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
  dataSource: DividaViewModel[] = [];

  expandedElement: DividaViewModel | null;

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
