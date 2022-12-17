import { Despesa, DespesaProps } from '@application/entities/despesa';
import { Override } from '@helpers/Override';
import { criaPessoaFactory } from './pessoa-factory';

export function criaDespesaFactory(override: Override<DespesaProps> = {}) {
  return new Despesa({
    titulo: 'Titulo teste',
    valor: 24.5,
    pessoas: [criaPessoaFactory()],
    ...override,
  });
}
