import { Despesa } from '@application/entities/despesa';
import { GrupoDivisaoDespesas } from '@application/entities/grupo-divisao-despesas';
import { Pessoa } from '@application/entities/pessoa';
import { GrupoDivisaoDespesasRepositorio } from '@application/repositories/grupo-divisao-despesas-repositorio';

export class GrupoDivisaoDespesasRepositorioEmMemoria
  implements GrupoDivisaoDespesasRepositorio
{
  public gruposDivisaoDespesas: GrupoDivisaoDespesas[] = [];

  async create(grupoDivisaoDespesas: GrupoDivisaoDespesas): Promise<void> {
    this.gruposDivisaoDespesas.push(grupoDivisaoDespesas);
  }

  async listaDespesas(grupoDivisaoDespesasId: string): Promise<Despesa[]> {
    return this.gruposDivisaoDespesas.find(
      (item) => item.id == grupoDivisaoDespesasId,
    ).despesas;
  }

  async listaPessoas(grupoDivisaoDespesasId: string): Promise<Pessoa[]> {
    return this.gruposDivisaoDespesas.find(
      (item) => item.id == grupoDivisaoDespesasId,
    ).participantes;
  }
}
