import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/Replace';
import { Person } from './person';

export interface ExpenseProps {
  title: string;
  value: number;
  persons: Person[];
  createdAt: Date;
}

export class Expense {
  private _id: string;
  private props: ExpenseProps;

  private validLength(persons: Person[]): boolean {
    return persons.length > 0;
  }

  constructor(props: Replace<ExpenseProps, { createdAt?: Date }>) {
    const validPersonsQuantity = this.validLength(props.persons);

    if (!validPersonsQuantity) {
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

  public get title(): string {
    return this.props.title;
  }

  public set title(v: string) {
    this.props.title = v;
  }

  public get value(): number {
    return this.props.value;
  }

  public set value(v: number) {
    this.props.value = v;
  }

  public get persons(): Person[] {
    return this.props.persons;
  }

  public set persons(v: Person[]) {
    this.props.persons = v;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
