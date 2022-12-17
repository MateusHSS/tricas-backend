import { DespesaRespositorioEmMemoria } from '../../../test/repositories/depesas-repositorio-em-memoria';
import { Pessoa } from '../entities/pessoa';
import { CriaDespesa } from './cria-despesa';

describe('Cria despesa', () => {
  it('deve ser capaz de criar uma despesa', async () => {
    const despesasRespositorioEmMemoria = new DespesaRespositorioEmMemoria();
    const criaDespesa = new CriaDespesa(despesasRespositorioEmMemoria);

    const { despesa } = await criaDespesa.execute({
      titulo: 'Despesa teste',
      valor: 24.5,
      pessoas: [
        new Pessoa({ nome: 'Pessoa teste', chavePix: 'teste-chave-pix' }),
      ],
    });

    expect(despesasRespositorioEmMemoria.despesas).toHaveLength(1);
    expect(despesasRespositorioEmMemoria.despesas[0]).toEqual(despesa);
  });

  it('deve retornar erro ao tentar criar uma notificacao sem nenhuma pessoa', async () => {
    const despesasRespositorioEmMemoria = new DespesaRespositorioEmMemoria();
    const criaDespesa = new CriaDespesa(despesasRespositorioEmMemoria);

    expect(() => {
      return criaDespesa.execute({
        titulo: 'Despesa teste',
        valor: 24.5,
        pessoas: [],
      });
    }).rejects.toThrow();
  });
});
