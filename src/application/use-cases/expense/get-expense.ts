import { Injectable } from '@nestjs/common';
import { Expense } from '@application/entities/expense';
import { ExpensesRepository } from '@application/repositories/expenses-repository';

interface GetExpenseRequest {
  expenseId: string;
}

interface GetExpenseResponse {
  expense: Expense | null;
}

@Injectable()
export class GetExpense {
  constructor(private despesasRepositorio: ExpensesRepository) {}

  async execute(request: GetExpenseRequest): Promise<GetExpenseResponse> {
    const { expenseId } = request;

    const expense = await this.despesasRepositorio.findById(expenseId);

    if (!expense) {
      throw new Error('Despesa não encontrada');
    }

    return { expense };
  }
}
