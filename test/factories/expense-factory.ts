import { Expense, ExpenseProps } from '@application/entities/expense';
import { Override } from '@helpers/Override';
import { createPersonFactory } from './person-factory';

export function createExpenseFactory(override: Override<ExpenseProps> = {}) {
  return new Expense({
    title: 'Titulo teste',
    value: 24.5,
    persons: [createPersonFactory()],
    ...override,
  });
}
