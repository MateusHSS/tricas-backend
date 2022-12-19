import { Person } from './person';

describe('Person', () => {
  it('should be able to create a new person', () => {
    const person = new Person({
      name: 'Pessoa teste',
    });

    expect(person).toBeTruthy();
  });
});
