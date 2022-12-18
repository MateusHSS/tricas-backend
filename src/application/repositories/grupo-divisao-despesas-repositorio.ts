import { Despesa } from '@application/entities/despesa';
import { GrupoDivisaoDespesas } from '@application/entities/grupo-divisao-despesas';
import { Pessoa } from '@application/entities/pessoa';

export abstract class GrupoDivisaoDespesasRepositorio {
  abstract create(grupoDivisaoDespesa: GrupoDivisaoDespesas): Promise<void>;
  abstract listaPessoas(grupoDivisaoDespesasId: string): Promise<Pessoa[]>;
  abstract listaDespesas(grupoDivisaoDespesasId: string): Promise<Despesa[]>;
  abstract listaGruposPessoa(pessoaId: string): Promise<GrupoDivisaoDespesas[]>;
}
