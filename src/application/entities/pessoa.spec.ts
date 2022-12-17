import { Pessoa } from './pessoa';

describe('Pessoa', () => {
  it('deve ser capaz de criar uma nova pessoa', () => {
    const pessoa = new Pessoa({
      nome: 'Pessoa teste',
    });

    expect(pessoa).toBeTruthy();
  });
});
