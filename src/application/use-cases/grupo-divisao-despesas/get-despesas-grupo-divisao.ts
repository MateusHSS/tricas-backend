import { Despesa } from '@application/entities/despesa';
import { GrupoDivisaoDespesasRepositorio } from '@application/repositories/grupo-divisao-despesas-repositorio';
import { Injectable } from '@nestjs/common';

export interface GetDespesasGrupoRequest {
  grupoDivisaoId: string;
}

interface GetDespesasGrupoResponse {
  despesas: Despesa[];
}

@Injectable()
export class GetDespesasGrupo {
  constructor(
    private grupoDivisaoRepositorio: GrupoDivisaoDespesasRepositorio,
  ) {}

  async execute(
    request: GetDespesasGrupoRequest,
  ): Promise<GetDespesasGrupoResponse> {
    const { grupoDivisaoId } = request;

    const despesas = await this.grupoDivisaoRepositorio.listaDespesas(
      grupoDivisaoId,
    );

    return { despesas };
  }
}
