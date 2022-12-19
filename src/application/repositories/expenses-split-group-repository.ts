import { Expense } from '@application/entities/expense';
import { ExpensesSplitGroup } from '@application/entities/expenses-split-group';
import { Person } from '@application/entities/person';

export abstract class ExpensesSplitGroupRepository {
  abstract create(expenseSplitGroup: ExpensesSplitGroup): Promise<void>;
  abstract listPersons(expenseSplitGroupId: string): Promise<Person[]>;
  abstract listExpenses(expenseSplitGroupId: string): Promise<Expense[]>;
  abstract listGroupsByPerson(personId: string): Promise<ExpensesSplitGroup[]>;
}
