import { Pessoa, PessoaProps } from '@application/entities/pessoa';
import { Override } from '@helpers/Override';

export function criaPessoaFactory(override: Override<PessoaProps> = {}) {
  return new Pessoa({
    nome: 'Pessoa teste',
    chavePix: 'chave-pix-teste',
    ...override,
  });
}
