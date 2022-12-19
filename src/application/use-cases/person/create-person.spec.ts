import { createPersonFactory } from '@test/factories/person-factory';
import { InMemoryPersonsRepository } from '@test/repositories/in-memory-persons-repository';
import { CreatePerson } from './create-person';

describe('Create person', () => {
  it('should be able to create a new person', async () => {
    const personsRepository = new InMemoryPersonsRepository();
    const createPerson = new CreatePerson(personsRepository);

    const { person } = await createPerson.execute(createPersonFactory());

    expect(person).toBeTruthy();
  });
});
