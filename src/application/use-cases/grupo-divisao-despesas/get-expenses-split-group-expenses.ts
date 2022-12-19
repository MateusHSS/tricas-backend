import { Expense } from '@application/entities/expense';
import { ExpensesSplitGroupRepository } from '@application/repositories/expenses-split-group-repository';
import { Injectable } from '@nestjs/common';

export interface GetExpensesSplitGroupExpensesRequest {
  expenseSplitGroupId: string;
}

interface GetExpensesSplitGroupExpensesResponse {
  expenses: Expense[];
}

@Injectable()
export class GetExpensesSplitGroupExpenses {
  constructor(
    private expensesSplitGroupRepository: ExpensesSplitGroupRepository,
  ) {}

  async execute(
    request: GetExpensesSplitGroupExpensesRequest,
  ): Promise<GetExpensesSplitGroupExpensesResponse> {
    const { expenseSplitGroupId } = request;

    const expenses = await this.expensesSplitGroupRepository.listExpenses(
      expenseSplitGroupId,
    );

    return { expenses };
  }
}
