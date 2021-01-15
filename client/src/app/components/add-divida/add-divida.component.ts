import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { DividaService } from '../../services/divida.service';
import Divida from '../../models/Divida';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-divida',
  templateUrl: './add-divida.component.html',
  styleUrls: ['./add-divida.component.css'],
})
export class AddDividaComponent implements OnInit {
  divida: Divida;

  formDivida: FormGroup = new FormGroup({
    numeroTitulo: new FormControl(null, [
      Validators.min(0),
      Validators.max(2147483647),
    ]),
    nomeDevedor: new FormControl(null, Validators.maxLength(100)),
    cpfDevedor: new FormControl(null),
    porcentagemJuros: new FormControl(null, Validators.min(0)),
    porcentagemMulta: new FormControl(null, Validators.min(0)),
  });

  formParcela: FormGroup = new FormGroup({
    numero: new FormControl(null, [
      Validators.min(0),
      Validators.max(2147483647),
    ]),
    dataVencimento: new FormControl(null),
    valor: new FormControl(null, Validators.min(0)),
  });

  constructor(private dividaService: DividaService, private router: Router) {}

  ngOnInit(): void {
    this.divida = new Divida();
  }

  onFormDividaSubmit() {
    if (this.formDivida.valid && this.divida.parcelas.length > 0) {
      this.divida.updateFields(this.formDivida.value);
      this.dividaService
        .insertDivida(this.divida)
        .subscribe(() => this.router.navigate(['/']));
    }
  }

  onFormParcelaSubmit(formDirective: FormGroupDirective) {
    if (this.formParcela.valid) {
      this.adicionarParcela(this.formParcela.value);
      formDirective.resetForm();
    }
  }

  adicionarParcela({ numero, dataVencimento, valor }) {
    this.divida.parcelas.push({
      id: this.divida.parcelas.length,
      numero,
      dataVencimento,
      valor,
    });

    this.divida.parcelas.sort((a, b) =>
      a.dataVencimento > b.dataVencimento
        ? 1
        : b.dataVencimento > a.dataVencimento
        ? -1
        : 0
    );
  }

  removerParcela(parcela) {
    this.divida.parcelas = this.divida.parcelas.filter((x) => x !== parcela);
  }
}
