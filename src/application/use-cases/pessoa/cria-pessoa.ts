import { Pessoa } from '@application/entities/pessoa';
import { PessoaRepositorio } from '@application/repositories/pessoas-repositorio';
import { Injectable } from '@nestjs/common';

interface CriaPessoaRequest {
  nome: string;
  chavePix?: string;
}

interface CriaPessoaResponse {
  pessoa: Pessoa;
}

@Injectable()
export class CriaPessoa {
  constructor(private pessoasRepositorio: PessoaRepositorio) {}

  async execute(request: CriaPessoaRequest): Promise<CriaPessoaResponse> {
    const { nome, chavePix } = request;

    const pessoa = new Pessoa({ nome, chavePix });

    await this.pessoasRepositorio.create(pessoa);

    return { pessoa };
  }
}
