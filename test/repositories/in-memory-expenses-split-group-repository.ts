import { Expense } from '@application/entities/expense';
import { ExpensesSplitGroup } from '@application/entities/expenses-split-group';
import { Person } from '@application/entities/person';
import { ExpensesSplitGroupRepository } from '@application/repositories/expenses-split-group-repository';

export class InMemoryExpensesSplitGroupRepository
  implements ExpensesSplitGroupRepository
{
  public expensesSplitGroups: ExpensesSplitGroup[] = [];

  async create(expenseSplitGroup: ExpensesSplitGroup): Promise<void> {
    this.expensesSplitGroups.push(expenseSplitGroup);
  }

  async listExpenses(expenseSplitGroupId: string): Promise<Expense[]> {
    return this.expensesSplitGroups.find(
      (item) => item.id == expenseSplitGroupId,
    ).expenses;
  }

  async listPersons(expenseSplitGroupId: string): Promise<Person[]> {
    return this.expensesSplitGroups.find(
      (item) => item.id == expenseSplitGroupId,
    ).participants;
  }

  async listGroupsByPerson(personId: string): Promise<ExpensesSplitGroup[]> {
    return this.expensesSplitGroups.filter((item) => {
      return item.participants.map((item) => item.id).includes(personId);
    });
  }
}
