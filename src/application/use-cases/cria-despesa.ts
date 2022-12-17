import { Despesa } from '../entities/despesa';
import { Pessoa } from '../entities/pessoa';
import { DespesasRespositorio } from '../repositories/despesas-repositorio';

interface CriaDespesaRequest {
  titulo: string;
  valor: number;
  pessoas: Pessoa[];
}

interface CriaDespesaResponse {
  despesa: Despesa;
}

export class CriaDespesa {
  constructor(private despesasRepositorio: DespesasRespositorio) {}

  async execute(request: CriaDespesaRequest): Promise<CriaDespesaResponse> {
    const { titulo, valor, pessoas } = request;

    const despesa = new Despesa({
      titulo,
      valor,
      pessoas,
    });

    await this.despesasRepositorio.create(despesa);

    return { despesa };
  }
}
