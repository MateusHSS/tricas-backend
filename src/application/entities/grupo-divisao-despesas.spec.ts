import { criaGrupoDivisaoDespesaFactory } from '@test/factories/grupo-divisao-despesas-factory';

describe('Grupo de divisaop de despesas', () => {
  it('deve ser capaz de criar um novo grupo de despesas', () => {
    const grupoDivisaoDespesa = criaGrupoDivisaoDespesaFactory();

    expect(grupoDivisaoDespesa).toBeTruthy();
  });

  it('deve retornar erro ao tentar criar um grupo de divisao sem nenhuma pessoa', () => {
    expect(() => {
      return criaGrupoDivisaoDespesaFactory({ participantes: [] });
    }).toThrow();
  });
});
