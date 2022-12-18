import { Pessoa } from '@application/entities/pessoa';
import { PessoaRepositorio } from '@application/repositories/pessoas-repositorio';

export class PessoasRepositorioEmMemoria implements PessoaRepositorio {
  public pessoas: Pessoa[] = [];

  async create(pessoa: Pessoa): Promise<void> {
    this.pessoas.push(pessoa);
  }
}
