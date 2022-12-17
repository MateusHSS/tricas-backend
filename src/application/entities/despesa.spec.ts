import { criaDespesaFactory } from '@test/factories/despesa-factory';

describe('Despesa', () => {
  it('deve ser capaz de criar uma nova despesa', () => {
    const despesa = criaDespesaFactory();

    expect(despesa).toBeTruthy();
  });

  it('deve retornar erro ao tentar criar uma despesa sem nenhuma pessoa', () => {
    expect(() => criaDespesaFactory({ pessoas: [] })).toThrow();
  });
});
