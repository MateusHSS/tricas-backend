import { Injectable } from '@nestjs/common';
import { ExpensesSplitGroupRepository } from '@application/repositories/expenses-split-group-repository';
import { ExpensesSplitGroup } from '@application/entities/expenses-split-group';
import { Expense } from '@application/entities/expense';
import { Person } from '@application/entities/person';

interface CreateExpensesSplitGroupRequest {
  name: string;
  description: string;
  participants: Person[];
  expenses: Expense[];
}

interface CreateExpensesSplitGroupResponse {
  expensesSplitGroup: ExpensesSplitGroup;
}

@Injectable()
export class CreateExpensesSplitGroup {
  constructor(
    private expensesSplitGroupRepository: ExpensesSplitGroupRepository,
  ) {}

  async execute(
    request: CreateExpensesSplitGroupRequest,
  ): Promise<CreateExpensesSplitGroupResponse> {
    const { name, description, participants, expenses } = request;

    const expensesSplitGroup = new ExpensesSplitGroup({
      name,
      description,
      participants,
      expenses,
    });

    await this.expensesSplitGroupRepository.create(expensesSplitGroup);

    return { expensesSplitGroup };
  }
}
