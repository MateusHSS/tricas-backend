import { Despesa } from '../entities/despesa';

export abstract class DespesaRespositorio {
  abstract create(despesa: Despesa): Promise<void>;
}
