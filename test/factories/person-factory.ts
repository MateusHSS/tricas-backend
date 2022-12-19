import { Person, PersonProps } from '@application/entities/person';
import { Override } from '@helpers/Override';

export function createPersonFactory(override: Override<PersonProps> = {}) {
  return new Person({
    name: 'Pessoa teste',
    pixKey: 'chave-pix-teste',
    ...override,
  });
}
