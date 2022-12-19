import { createExpenseFactory } from '@test/factories/expense-factory';
import { createExpensesSplitGroupFactory } from '@test/factories/expenses-split-group-factory';
import { InMemoryExpensesSplitGroupRepository } from '@test/repositories/in-memory-expenses-split-group-repository';
import { CreateExpensesSplitGroup } from './create-expenses-split-group';
import { GetExpensesSplitGroupExpenses } from './get-expenses-split-group-expenses';

describe('Get expenses split group expenses', () => {
  it('should be able to return a group expenses by group id', async () => {
    const expensesSplitGroupsRepository =
      new InMemoryExpensesSplitGroupRepository();
    const createExpenseSplitGroup = new CreateExpensesSplitGroup(
      expensesSplitGroupsRepository,
    );
    const getExpenseSplitGroupExpenses = new GetExpensesSplitGroupExpenses(
      expensesSplitGroupsRepository,
    );

    const { expensesSplitGroup: createdGroup } =
      await createExpenseSplitGroup.execute(
        createExpensesSplitGroupFactory({ expenses: [createExpenseFactory()] }),
      );

    const { expenses } = await getExpenseSplitGroupExpenses.execute({
      expenseSplitGroupId: createdGroup.id,
    });

    expect(expenses).toHaveLength(1);
  });
});
