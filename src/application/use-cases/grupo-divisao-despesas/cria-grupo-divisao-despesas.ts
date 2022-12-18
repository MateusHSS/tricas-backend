import { Injectable } from '@nestjs/common';
import { GrupoDivisaoDespesasRepositorio } from '@application/repositories/grupo-divisao-despesas-repositorio';
import { GrupoDivisaoDespesas } from '@application/entities/grupo-divisao-despesas';
import { Despesa } from '@application/entities/despesa';
import { Pessoa } from '@application/entities/pessoa';

interface CriaGrupoDivisaoDespesasRequest {
  nome: string;
  descricao: string;
  participantes: Pessoa[];
  despesas: Despesa[];
}

interface GrupoDivisaoDespesasResponse {
  grupoDivisaoDespesas: GrupoDivisaoDespesas;
}

@Injectable()
export class CriaGrupoDivisaoDespesas {
  constructor(
    private criaGrupoDivisaoDespesasRepositorio: GrupoDivisaoDespesasRepositorio,
  ) {}

  async execute(
    request: CriaGrupoDivisaoDespesasRequest,
  ): Promise<GrupoDivisaoDespesasResponse> {
    const { nome, descricao, participantes, despesas } = request;

    const grupoDivisaoDespesas = new GrupoDivisaoDespesas({
      nome,
      descricao,
      participantes,
      despesas,
    });

    await this.criaGrupoDivisaoDespesasRepositorio.create(grupoDivisaoDespesas);

    return { grupoDivisaoDespesas };
  }
}
