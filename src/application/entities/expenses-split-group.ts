import { Replace } from '@helpers/Replace';
import { randomUUID } from 'crypto';
import { Expense } from './expense';
import { Person } from './person';

export interface ExpensesSplitGroupProps {
  name: string;
  description?: string;
  participants: Person[];
  expenses: Expense[];
  createdAt: Date;
}

export class ExpensesSplitGroup {
  private _id: string;
  private props: ExpensesSplitGroupProps;

  private validaQuantidadePessoas(pessoas: Person[]): boolean {
    return pessoas.length > 0;
  }

  constructor(props: Replace<ExpensesSplitGroupProps, { createdAt?: Date }>) {
    const quantidadeValida = this.validaQuantidadePessoas(props.participants);

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

  public set name(v: string) {
    this.props.name = v;
  }

  public get name(): string {
    return this.props.name;
  }

  public set description(v: string) {
    this.props.description = v;
  }

  public get description(): string {
    return this.props.description;
  }

  public set participants(v: Person[]) {
    this.props.participants = v;
  }

  public get participants(): Person[] {
    return this.props.participants;
  }

  public set expenses(v: Expense[]) {
    this.props.expenses = v;
  }

  public get expenses(): Expense[] {
    return this.props.expenses;
  }
}
