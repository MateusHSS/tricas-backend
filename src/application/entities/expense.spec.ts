import { createExpenseFactory } from '@test/factories/expense-factory';

describe('Expense', () => {
  it('should be able to create a new expense', () => {
    const expense = createExpenseFactory();

    expect(expense).toBeTruthy();
  });

  it('should return error trying to create a new expense without persons', () => {
    expect(() => createExpenseFactory({ persons: [] })).toThrow();
  });
});
