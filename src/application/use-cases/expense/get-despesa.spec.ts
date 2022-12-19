import { createExpenseFactory } from '@test/factories/expense-factory';
import { InMemoryExpenseRepository } from '@test/repositories/in-memory-expenses-repository';
import { CreateExpense } from './create-expense';
import { GetExpense } from './get-expense';

describe('Get expense', () => {
  it('should be able to find a expense by id', async () => {
    const expensesRepository = new InMemoryExpenseRepository();
    const createExpense = new CreateExpense(expensesRepository);
    const getExpense = new GetExpense(expensesRepository);

    const { expense: createdExpense } = await createExpense.execute(
      createExpenseFactory(),
    );

    const { expense } = await getExpense.execute({
      expenseId: createdExpense.id,
    });

    expect(expense).toBeTruthy();
  });

  it('should return error trying to get a nonexistent expense', async () => {
    const expensesRepository = new InMemoryExpenseRepository();
    const getExpense = new GetExpense(expensesRepository);

    expect(() => {
      return getExpense.execute({ expenseId: 'despesa-fake' });
    }).rejects.toThrow();
  });
});
