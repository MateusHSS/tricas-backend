import { Person, PersonProps } from '@application/entities/person';
import { PersonsRepository } from '@application/repositories/persons-repository';
import { PersonNotFound } from '@application/use-cases/person/errors/PersonNotFound';

export class InMemoryPersonsRepository implements PersonsRepository {
  public persons: Person[] = [];

  async findById(personId: string): Promise<Person> {
    const person = this.persons.find((item) => item.id == personId);

    if (!person) {
      throw new PersonNotFound();
    }

    return person;
  }

  async create(person: Person): Promise<void> {
    this.persons.push(person);
  }

  async save(personId: string, props: Partial<PersonProps>): Promise<void> {
    const person = this.persons.find((item) => item.id == personId);

    if (!person) {
      throw new PersonNotFound();
    }

    Object.assign(person, { ...props });
  }
}
