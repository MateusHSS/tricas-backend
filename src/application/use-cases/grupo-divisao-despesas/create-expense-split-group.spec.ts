import { createExpensesSplitGroupFactory } from '@test/factories/expenses-split-group-factory';
import { InMemoryExpensesSplitGroupRepository } from '@test/repositories/in-memory-expenses-split-group-repository';
import { CreateExpensesSplitGroup } from './create-expenses-split-group';

describe('Create expenses split group', () => {
  it('should be able to create a new expenses split group', async () => {
    const expensesSplitGroupsRepository =
      new InMemoryExpensesSplitGroupRepository();
    const createExpensesSplitGroup = new CreateExpensesSplitGroup(
      expensesSplitGroupsRepository,
    );

    const { expensesSplitGroup } = await createExpensesSplitGroup.execute(
      createExpensesSplitGroupFactory(),
    );

    expect(expensesSplitGroupsRepository.expensesSplitGroups).toHaveLength(1);
    expect(expensesSplitGroupsRepository.expensesSplitGroups[0]).toEqual(
      expensesSplitGroup,
    );
  });

  it('should return error trying to create a new expenses split group without persons', async () => {
    const expensesSplitGroupRepository =
      new InMemoryExpensesSplitGroupRepository();
    const createExpensesSplitGroup = new CreateExpensesSplitGroup(
      expensesSplitGroupRepository,
    );

    expect(() =>
      createExpensesSplitGroup.execute(
        createExpensesSplitGroupFactory({ participants: [] }),
      ),
    ).toThrow();
  });
});
