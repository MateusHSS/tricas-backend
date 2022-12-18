import { criaGrupoDivisaoDespesaFactory } from '@test/factories/grupo-divisao-despesas-factory';
import { GrupoDivisaoDespesasRepositorioEmMemoria } from '@test/repositories/grupo-divisao-despesas-repositorio-em-memoria';
import { CriaGrupoDivisaoDespesas } from './cria-grupo-divisao-despesas';

describe('Cria grupo de divisao de despesas', () => {
  it('deve ser capaz de criar um grupo de divisao de despesas', async () => {
    const grupoDivisaoDespesaRepositorio =
      new GrupoDivisaoDespesasRepositorioEmMemoria();
    const criaGrupoDivisaoDespesas = new CriaGrupoDivisaoDespesas(
      grupoDivisaoDespesaRepositorio,
    );

    const { grupoDivisaoDespesas } = await criaGrupoDivisaoDespesas.execute(
      criaGrupoDivisaoDespesaFactory(),
    );

    expect(grupoDivisaoDespesaRepositorio.gruposDivisaoDespesas).toHaveLength(
      1,
    );
    expect(grupoDivisaoDespesaRepositorio.gruposDivisaoDespesas[0]).toEqual(
      grupoDivisaoDespesas,
    );
  });

  it('deve retornar erro ao tentar criar um grupo de divisao de despesas sem nenhuma pessoas', async () => {
    const grupoDivisaoDespesaRepositorio =
      new GrupoDivisaoDespesasRepositorioEmMemoria();
    const criaGrupoDivisaoDespesas = new CriaGrupoDivisaoDespesas(
      grupoDivisaoDespesaRepositorio,
    );

    expect(() =>
      criaGrupoDivisaoDespesas.execute(
        criaGrupoDivisaoDespesaFactory({ participantes: [] }),
      ),
    ).toThrow();
  });
});
