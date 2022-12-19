import { Person } from '../entities/person';

export abstract class PersonsRepository {
  abstract create(person: Person): Promise<void>;
}
