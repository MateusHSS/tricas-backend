import { GrupoDivisaoDespesas } from '@application/entities/grupo-divisao-despesas';
import { criaGrupoDivisaoDespesaFactory } from '@test/factories/grupo-divisao-despesas-factory';
import { criaPessoaFactory } from '@test/factories/pessoa-factory';
import { GrupoDivisaoDespesasRepositorioEmMemoria } from '@test/repositories/grupo-divisao-despesas-repositorio-em-memoria';
import { CriaGrupoDivisaoDespesas } from './cria-grupo-divisao-despesas';
import { GetGruposPessoa } from './get-grupos-pessoa';

describe('Get grupo despesas pessoa', () => {
  it('deve ser capaz de retornar os grupos de uma pessoa pelo id da pessoa', async () => {
    const grupoDivisaoDespesasRepositorio =
      new GrupoDivisaoDespesasRepositorioEmMemoria();
    const getGrupoDivisaoDespesasPessoa = new GetGruposPessoa(
      grupoDivisaoDespesasRepositorio,
    );
    const criaGrupoDivisaoDespesas = new CriaGrupoDivisaoDespesas(
      grupoDivisaoDespesasRepositorio,
    );
    const pessoa = criaPessoaFactory();

    await criaGrupoDivisaoDespesas.execute(
      criaGrupoDivisaoDespesaFactory({ participantes: [pessoa] }),
    );
    await criaGrupoDivisaoDespesas.execute(
      criaGrupoDivisaoDespesaFactory({ participantes: [pessoa] }),
    );

    const { grupos } = await getGrupoDivisaoDespesasPessoa.execute({
      pessoaId: pessoa.id,
    });

    expect(grupos).toHaveLength(2);
    expect(grupos[0]).toBeInstanceOf(GrupoDivisaoDespesas);
  });
});
