import { Pessoa } from '../entities/pessoa';

export abstract class PessoaRepositorio {
  abstract create(pessoa: Pessoa): Promise<void>;
}
