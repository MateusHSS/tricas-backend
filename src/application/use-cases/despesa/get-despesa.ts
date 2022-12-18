import { Injectable } from '@nestjs/common';
import { Despesa } from '@application/entities/despesa';
import { DespesasRespositorio } from '@application/repositories/despesas-repositorio';

interface GetDespesaRequest {
  despesaId: string;
}

interface GetDespesaResponse {
  despesa: Despesa | null;
}

@Injectable()
export class GetDespesa {
  constructor(private despesasRepositorio: DespesasRespositorio) {}

  async execute(request: GetDespesaRequest): Promise<GetDespesaResponse> {
    const { despesaId } = request;

    const despesa = await this.despesasRepositorio.findById(despesaId);

    if (!despesa) {
      throw new Error('Despesa não encontrada');
    }

    return { despesa };
  }
}
