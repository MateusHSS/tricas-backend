import { Person } from '@application/entities/person';
import { PersonsRepository } from '@application/repositories/persons-repository';
import { Injectable } from '@nestjs/common';

interface UpdatePersonRequest {
  personId: string;
  name?: string;
  pixKey?: string;
}

interface UpdatePersonResponse {
  person: Person;
}

@Injectable()
export class UpdatePerson {
  constructor(private personsRepository: PersonsRepository) {}

  async execute(request: UpdatePersonRequest): Promise<UpdatePersonResponse> {
    const { personId, name, pixKey } = request;

    await this.personsRepository.save(personId, { name, pixKey });

    const person = await this.personsRepository.findById(personId);

    return { person };
  }
}
