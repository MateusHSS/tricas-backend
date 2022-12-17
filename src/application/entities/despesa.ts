import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/Replace';
import { Pessoa } from './pessoa';

export interface DespesaProps {
  titulo: string;
  valor: number;
  pessoas: Pessoa[];
  createdAt: Date;
}

export class Despesa {
  private _id: string;
  private props: DespesaProps;

  private validaQuantidadePessoas(pessoas: Pessoa[]): boolean {
    return pessoas.length > 0;
  }

  constructor(props: Replace<DespesaProps, { createdAt?: Date }>) {
    const quantidadeValida = this.validaQuantidadePessoas(props.pessoas);

    if (!quantidadeValida) {
      throw new Error('A despesa deve ter pelo menos uma pessoa');
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

  public get titulo(): string {
    return this.props.titulo;
  }

  public set titulo(v: string) {
    this.props.titulo = v;
  }

  public get valor(): number {
    return this.props.valor;
  }

  public set valor(v: number) {
    this.props.valor = v;
  }

  public get pessoas(): Pessoa[] {
    return this.props.pessoas;
  }

  public set pessoas(v: Pessoa[]) {
    this.props.pessoas = v;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
