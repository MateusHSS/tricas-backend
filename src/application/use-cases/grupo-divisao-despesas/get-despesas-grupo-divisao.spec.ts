import { criaDespesaFactory } from '@test/factories/despesa-factory';
import { criaGrupoDivisaoDespesaFactory } from '@test/factories/grupo-divisao-despesas-factory';
import { GrupoDivisaoDespesasRepositorioEmMemoria } from '@test/repositories/grupo-divisao-despesas-repositorio-em-memoria';
import { CriaGrupoDivisaoDespesas } from './cria-grupo-divisao-despesas';
import { GetDespesasGrupo } from './get-despesas-grupo-divisao';

describe('Get despesas grupo divisao', () => {
  it('deve ser capaz de retornar as despesas de um grupo pelo id', async () => {
    const grupoDivisaoDespesaRepositorio =
      new GrupoDivisaoDespesasRepositorioEmMemoria();
    const criaGrupoDivisaoDespesas = new CriaGrupoDivisaoDespesas(
      grupoDivisaoDespesaRepositorio,
    );
    const getDespesasGrupoDivisao = new GetDespesasGrupo(
      grupoDivisaoDespesaRepositorio,
    );

    const { grupoDivisaoDespesas: grupoCriado } =
      await criaGrupoDivisaoDespesas.execute(
        criaGrupoDivisaoDespesaFactory({ despesas: [criaDespesaFactory()] }),
      );

    const { despesas } = await getDespesasGrupoDivisao.execute({
      grupoDivisaoId: grupoCriado.id,
    });

    expect(despesas).toHaveLength(1);
  });
});
