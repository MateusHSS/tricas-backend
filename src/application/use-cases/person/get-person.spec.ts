import { createPersonFactory } from '@test/factories/person-factory';
import { InMemoryPersonsRepository } from '@test/repositories/in-memory-persons-repository';
import { CreatePerson } from './create-person';
import { PersonNotFound } from './errors/PersonNotFound';
import { GetPerson } from './get-person';

describe('Get person', () => {
  it('should be able to get a person by id', async () => {
    const personsRepository = new InMemoryPersonsRepository();
    const createPerson = new CreatePerson(personsRepository);
    const getPerson = new GetPerson(personsRepository);

    const { person } = await createPerson.execute(createPersonFactory());

    const { person: searchedPerson } = await getPerson.execute({
      personId: person.id,
    });

    expect(searchedPerson).toBeTruthy();
    expect(searchedPerson).toEqual(person);
  });

  it('should return error trying to get a nonexistent person', async () => {
    const personsRepository = new InMemoryPersonsRepository();
    const getPerson = new GetPerson(personsRepository);

    expect(async () => {
      return await getPerson.execute({ personId: 'fake-person-id' });
    }).rejects.toThrow(PersonNotFound);
  });
});
