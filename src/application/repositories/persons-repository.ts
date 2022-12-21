import { Person, PersonProps } from '../entities/person';

export abstract class PersonsRepository {
  abstract create(person: Person): Promise<void>;
  abstract save(personId: string, props: Partial<PersonProps>): Promise<void>;
  abstract findById(personId: string): Promise<Person | null>;
}
