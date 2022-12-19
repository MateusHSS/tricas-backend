import { Person } from '@application/entities/person';
import { PersonsRepository } from '@application/repositories/persons-repository';
import { Injectable } from '@nestjs/common';

interface CreatePersonRequest {
  name: string;
  pixKey?: string;
}

interface CreatePersonResponse {
  person: Person;
}

@Injectable()
export class CreatePerson {
  constructor(private personsRepository: PersonsRepository) {}

  async execute(request: CreatePersonRequest): Promise<CreatePersonResponse> {
    const { name, pixKey } = request;

    const person = new Person({ name, pixKey });

    await this.personsRepository.create(person);

    return { person };
  }
}
