import { Despesa } from '../entities/despesa';

export abstract class DespesasRespositorio {
  abstract create(despesa: Despesa): Promise<void>;
  abstract findById(despesaId: string): Promise<Despesa | null>;
}
