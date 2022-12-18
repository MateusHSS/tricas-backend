import { Injectable } from '@nestjs/common';
import { Despesa } from '@application/entities/despesa';
import { Pessoa } from '@application/entities/pessoa';
import { DespesasRespositorio } from '@application/repositories/despesas-repositorio';

interface CriaDespesaRequest {
  titulo: string;
  valor: number;
  pessoas: Pessoa[];
}

interface CriaDespesaResponse {
  despesa: Despesa;
}

@Injectable()
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
