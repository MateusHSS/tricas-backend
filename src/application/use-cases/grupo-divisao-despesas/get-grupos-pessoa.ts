import { GrupoDivisaoDespesas } from '@application/entities/grupo-divisao-despesas';
import { GrupoDivisaoDespesasRepositorio } from '@application/repositories/grupo-divisao-despesas-repositorio';

interface GetGruposPessoaRequest {
  pessoaId: string;
}

interface GetGruposPessoaResponse {
  grupos: GrupoDivisaoDespesas[];
}

export class GetGruposPessoa {
  constructor(
    private grupoDivisaoDespesasRepositorio: GrupoDivisaoDespesasRepositorio,
  ) {}

  async execute(
    request: GetGruposPessoaRequest,
  ): Promise<GetGruposPessoaResponse> {
    const { pessoaId } = request;

    const grupos = await this.grupoDivisaoDespesasRepositorio.listaGruposPessoa(
      pessoaId,
    );

    return { grupos };
  }
}
