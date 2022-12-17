import { Replace } from '@helpers/Replace';
import { randomUUID } from 'crypto';
import { Despesa } from './despesa';
import { Pessoa } from './pessoa';

export interface GrupoDivisaoDespesasProps {
  nome: string;
  descricao?: string;
  participantes: Pessoa[];
  despesas: Despesa[];
  createdAt: Date;
}

export class GrupoDivisaoDespesas {
  private _id: string;
  private props: GrupoDivisaoDespesasProps;

  private validaQuantidadePessoas(pessoas: Pessoa[]): boolean {
    return pessoas.length > 0;
  }

  constructor(props: Replace<GrupoDivisaoDespesasProps, { createdAt?: Date }>) {
    const quantidadeValida = this.validaQuantidadePessoas(props.participantes);

    if (!quantidadeValida) {
      throw new Error('O grupo deve conter pelo menos uma pessoa');
    }

    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public set nome(v: string) {
    this.props.nome = v;
  }

  public get nome(): string {
    return this.props.nome;
  }

  public set descricao(v: string) {
    this.props.descricao = v;
  }

  public get descricao(): string {
    return this.props.descricao;
  }

  public set participantes(v: Pessoa[]) {
    this.props.participantes = v;
  }

  public get participantes(): Pessoa[] {
    return this.props.participantes;
  }

  public set despesas(v: Despesa[]) {
    this.props.despesas = v;
  }

  public get despesas(): Despesa[] {
    return this.props.despesas;
  }
}
