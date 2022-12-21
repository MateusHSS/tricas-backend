import { Person } from '@application/entities/person';
import { PersonsRepository } from '@application/repositories/persons-repository';
import { Injectable } from '@nestjs/common';
import { PersonNotFound } from './errors/PersonNotFound';

interface GetPersonRequest {
  personId: string;
}

interface GetPersonResponse {
  person: Person | null;
}

@Injectable()
export class GetPerson {
  constructor(private personsRepository: PersonsRepository) {}

  async execute(request: GetPersonRequest): Promise<GetPersonResponse> {
    const { personId } = request;

    const person = await this.personsRepository.findById(personId);

    if (!person) {
      throw new PersonNotFound();
    }

    return { person };
  }
}
