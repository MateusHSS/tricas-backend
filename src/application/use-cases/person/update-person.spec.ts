import { Person } from '@application/entities/person';
import { createPersonFactory } from '@test/factories/person-factory';
import { InMemoryPersonsRepository } from '@test/repositories/in-memory-persons-repository';
import { CreatePerson } from './create-person';
import { PersonNotFound } from './errors/PersonNotFound';
import { UpdatePerson } from './update-person';

describe('Update person', () => {
  it('should be able to update a person', async () => {
    const personsRepository = new InMemoryPersonsRepository();
    const updatePerson = new UpdatePerson(personsRepository);
    const createPerson = new CreatePerson(personsRepository);

    const { person } = await createPerson.execute(createPersonFactory());

    await updatePerson.execute({
      personId: person.id,
      name: 'updated-name',
      pixKey: 'teste-pix-key',
    });

    expect(person.name).toEqual('updated-name');
    expect(personsRepository.persons).toHaveLength(1);
    expect(personsRepository.persons[0]).toBeInstanceOf(Person);
  });

  it('should return error trying to update nonexistent person', async () => {
    const personsRepository = new InMemoryPersonsRepository();
    const updatePerson = new UpdatePerson(personsRepository);

    expect(async () => {
      return await updatePerson.execute({
        personId: 'fake-person-id',
        name: 'test',
      });
    }).rejects.toThrow(PersonNotFound);
  });
});
