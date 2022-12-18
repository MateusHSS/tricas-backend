import { criaDespesaFactory } from '@test/factories/despesa-factory';
import { DespesaRespositorioEmMemoria } from '@test/repositories/depesas-repositorio-em-memoria';
import { CriaDespesa } from './cria-despesa';
import { GetDespesa } from './get-despesa';

describe('Get despesa', () => {
  it('deve ser capaz de buscar uma despesa pelo id', async () => {
    const despesasRespositorio = new DespesaRespositorioEmMemoria();
    const criaDespesa = new CriaDespesa(despesasRespositorio);
    const getDespesa = new GetDespesa(despesasRespositorio);

    const { despesa: despesaCriada } = await criaDespesa.execute(
      criaDespesaFactory(),
    );

    const { despesa } = await getDespesa.execute({
      despesaId: despesaCriada.id,
    });

    expect(despesa).toBeTruthy();
  });

  it('deve retornar erro ao tentar buscar uma despesa inexistente', async () => {
    const despesasRespositorio = new DespesaRespositorioEmMemoria();
    const getDespesa = new GetDespesa(despesasRespositorio);

    expect(() => {
      return getDespesa.execute({ despesaId: 'notificacao-fake' });
    }).rejects.toThrow();
  });
});
