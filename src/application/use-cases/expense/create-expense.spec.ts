import { createExpenseFactory } from '@test/factories/expense-factory';
import { InMemoryExpenseRepository } from '@test/repositories/in-memory-expenses-repository';
import { CreateExpense } from './create-expense';

describe('Create expense', () => {
  it('should be able to create a new expense', async () => {
    const expensesRepository = new InMemoryExpenseRepository();
    const createExpense = new CreateExpense(expensesRepository);

    const { expense } = await createExpense.execute(createExpenseFactory());

    expect(expensesRepository.expenses).toHaveLength(1);
    expect(expensesRepository.expenses[0]).toEqual(expense);
  });

  it('should return error trying to create a new expense without persons', async () => {
    const expensesRepository = new InMemoryExpenseRepository();
    const createExpense = new CreateExpense(expensesRepository);

    expect(() => {
      return createExpense.execute(createExpenseFactory({ persons: [] }));
    }).toThrow();
  });
});
