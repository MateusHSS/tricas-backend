import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/Replace';

interface PessoaProps {
  nome: string;
  chavePix?: string;
  createdAt: Date;
}

export class Pessoa {
  private _id: string;
  private props: PessoaProps;

  constructor(pessoa: Replace<PessoaProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...pessoa,
      createdAt: pessoa.createdAt ?? new Date(),
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

  public set chavePix(v: string) {
    this.props.chavePix = v;
  }

  public get chavePix(): string {
    return this.props.chavePix;
  }
}
