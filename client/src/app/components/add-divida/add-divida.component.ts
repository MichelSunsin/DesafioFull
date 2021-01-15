import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { DividaService } from '../../services/divida.service';
import { Router } from '@angular/router';

import { CPFValidator } from '../../validators/CPFValidator';
import Divida from '../../models/Divida';
import DividaParcela from 'src/app/models/DividaParcela';

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
    cpfDevedor: new FormControl(null, CPFValidator.isValid()),
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
    this.validarNumeroDataParcela(this.formParcela.value);
    if (this.formParcela.valid) {
      this.adicionarParcela(this.formParcela.value);
      formDirective.resetForm();
    }
  }

  validarNumeroDataParcela({ numero, dataVencimento }): void {
    this.divida.parcelas.map((parcela) => {
      if (parcela.numero === numero) {
        console.log(1);
        this.formParcela.setErrors({ notUnique: true });
      }

      if (parcela.dataVencimento === dataVencimento) {
        console.log(2);
        this.formParcela.setErrors({ notUnique: true });
      }
    });
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

  removerParcela(parcela: DividaParcela) {
    this.divida.parcelas = this.divida.parcelas.filter((x) => x !== parcela);
  }
}
