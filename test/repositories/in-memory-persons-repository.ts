import { Person } from '@application/entities/person';
import { PersonsRepository } from '@application/repositories/persons-repository';

export class InMemoryPersonsRepository implements PersonsRepository {
  public persons: Person[] = [];

  async create(person: Person): Promise<void> {
    this.persons.push(person);
  }
}
