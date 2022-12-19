import { ExpensesSplitGroup } from '@application/entities/expenses-split-group';
import { createExpensesSplitGroupFactory } from '@test/factories/expenses-split-group-factory';
import { createPersonFactory } from '@test/factories/person-factory';
import { InMemoryExpensesSplitGroupRepository } from '@test/repositories/in-memory-expenses-split-group-repository';
import { CreateExpensesSplitGroup } from './create-expenses-split-group';
import { GetPersonExpensesSplitGroups } from './get-person-expenses-split-groups';

describe('Get person expenses split groups', () => {
  it('should be able to return a person expense split groups by person id', async () => {
    const expensesSplitGroupRepository =
      new InMemoryExpensesSplitGroupRepository();
    const getPersonExpensesSplitGroups = new GetPersonExpensesSplitGroups(
      expensesSplitGroupRepository,
    );
    const createExpensesSplitGroup = new CreateExpensesSplitGroup(
      expensesSplitGroupRepository,
    );
    const person = createPersonFactory();

    await createExpensesSplitGroup.execute(
      createExpensesSplitGroupFactory({ participants: [person] }),
    );
    await createExpensesSplitGroup.execute(
      createExpensesSplitGroupFactory({ participants: [person] }),
    );

    const { expensesSplitGroups } = await getPersonExpensesSplitGroups.execute({
      personId: person.id,
    });

    expect(expensesSplitGroups).toHaveLength(2);
    expect(expensesSplitGroups[0]).toBeInstanceOf(ExpensesSplitGroup);
  });
});
