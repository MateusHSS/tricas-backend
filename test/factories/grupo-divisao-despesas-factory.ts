import {
  GrupoDivisaoDespesas,
  GrupoDivisaoDespesasProps,
} from '@application/entities/grupo-divisao-despesas';
import { Override } from '@helpers/Override';
import { criaPessoaFactory } from './pessoa-factory';

export function criaGrupoDivisaoDespesaFactory(
  override: Override<GrupoDivisaoDespesasProps> = {},
) {
  return new GrupoDivisaoDespesas({
    nome: 'Grupo teste',
    descricao: 'Descricao teste',
    despesas: [],
    participantes: [criaPessoaFactory()],
    ...override,
  });
}
