import { Injectable } from '@nestjs/common';
import { Expense } from '@application/entities/expense';
import { Person } from '@application/entities/person';
import { ExpensesRepository } from '@application/repositories/expenses-repository';

interface CreateExpenseRequest {
  title: string;
  value: number;
  persons: Person[];
}

interface CreateExpenseResponse {
  expense: Expense;
}

@Injectable()
export class CreateExpense {
  constructor(private expensesRepository: ExpensesRepository) {}

  async execute(request: CreateExpenseRequest): Promise<CreateExpenseResponse> {
    const { title, value, persons } = request;

    const expense = new Expense({
      title,
      value,
      persons,
    });

    await this.expensesRepository.create(expense);

    return { expense };
  }
}
