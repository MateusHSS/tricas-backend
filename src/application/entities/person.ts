import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/Replace';

export interface PersonProps {
  name: string;
  pixKey?: string;
  createdAt: Date;
}

export class Person {
  private _id: string;
  private props: PersonProps;

  constructor(person: Replace<PersonProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...person,
      createdAt: person.createdAt ?? new Date(),
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

  public set pixKey(v: string) {
    this.props.pixKey = v;
  }

  public get pixKey(): string {
    return this.props.pixKey;
  }
}
