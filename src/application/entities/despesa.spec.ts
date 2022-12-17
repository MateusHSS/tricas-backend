import { Despesa } from './despesa';
import { Pessoa } from './pessoa';

describe('Despesa', () => {
  it('deve ser capaz de criar uma nova despesa', () => {
    const despesa = new Despesa({
      titulo: 'Titulo exemplo',
      valor: 24.5,
      pessoas: [new Pessoa({ nome: 'Pessoa teste' })],
    });

    expect(despesa).toBeTruthy();
  });

  it('deve retornar erro ao tentar criar uma despesa sem nenhuma pessoa', () => {
    expect(
      () =>
        new Despesa({
          titulo: 'Titulo exemplo',
          valor: 24.5,
          pessoas: [],
        }),
    ).toThrow();
  });
});
