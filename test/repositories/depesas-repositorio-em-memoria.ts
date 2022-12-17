import { Despesa } from 'src/application/entities/despesa';
import { DespesasRespositorio } from 'src/application/repositories/despesas-repositorio';

export class DespesaRespositorioEmMemoria implements DespesasRespositorio {
  public despesas: Despesa[] = [];

  async create(despesa: Despesa) {
    this.despesas.push(despesa);
  }
}
