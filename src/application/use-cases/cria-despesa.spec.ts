import { criaDespesaFactory } from '@test/factories/despesa-factory';
import { DespesaRespositorioEmMemoria } from '@test/repositories/depesas-repositorio-em-memoria';
import { CriaDespesa } from './cria-despesa';

describe('Cria despesa', () => {
  it('deve ser capaz de criar uma despesa', async () => {
    const despesasRespositorioEmMemoria = new DespesaRespositorioEmMemoria();
    const criaDespesa = new CriaDespesa(despesasRespositorioEmMemoria);

    const { despesa } = await criaDespesa.execute(criaDespesaFactory());

    expect(despesasRespositorioEmMemoria.despesas).toHaveLength(1);
    expect(despesasRespositorioEmMemoria.despesas[0]).toEqual(despesa);
  });

  it('deve retornar erro ao tentar criar uma notificacao sem nenhuma pessoa', async () => {
    const despesasRespositorioEmMemoria = new DespesaRespositorioEmMemoria();
    const criaDespesa = new CriaDespesa(despesasRespositorioEmMemoria);

    expect(() => {
      return criaDespesa.execute(criaDespesaFactory({ pessoas: [] }));
    }).toThrow();
  });
});
