import { createExpensesSplitGroupFactory } from '@test/factories/expenses-split-group-factory';

describe('Expense split group', () => {
  it('should be able to create a new expenses split group', () => {
    const expensesSplitGroup = createExpensesSplitGroupFactory();

    expect(expensesSplitGroup).toBeTruthy();
  });

  it('should return error trying to create a new group whitout persons', () => {
    expect(() => {
      return createExpensesSplitGroupFactory({ participants: [] });
    }).toThrow();
  });
});
