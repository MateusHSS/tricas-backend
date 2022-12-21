import { Injectable } from '@nestjs/common';
import { Expense } from '@application/entities/expense';
import { ExpensesRepository } from '@application/repositories/expenses-repository';
import { ExpenseNotFound } from './errors/ExpenseNotFound';

interface GetExpenseRequest {
  expenseId: string;
}

interface GetExpenseResponse {
  expense: Expense | null;
}

@Injectable()
export class GetExpense {
  constructor(private expensesRepository: ExpensesRepository) {}

  async execute(request: GetExpenseRequest): Promise<GetExpenseResponse> {
    const { expenseId } = request;

    const expense = await this.expensesRepository.findById(expenseId);

    if (!expense) {
      throw new ExpenseNotFound();
    }

    return { expense };
  }
}
