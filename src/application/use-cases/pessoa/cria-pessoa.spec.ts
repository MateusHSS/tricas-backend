import { criaPessoaFactory } from '@test/factories/pessoa-factory';
import { PessoasRepositorioEmMemoria } from '@test/repositories/pessoas-repositorio-em-memoria';
import { CriaPessoa } from './cria-pessoa';

describe('Cria pessoa', () => {
  it('deve ser capaz de criar uma nova pessoa', async () => {
    const pessoasRepositorio = new PessoasRepositorioEmMemoria();
    const criaPessoa = new CriaPessoa(pessoasRepositorio);

    const { pessoa } = await criaPessoa.execute(criaPessoaFactory());

    expect(pessoa).toBeTruthy();
  });
});
