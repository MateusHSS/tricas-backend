import {
  ExpensesSplitGroup,
  ExpensesSplitGroupProps,
} from '@application/entities/expenses-split-group';
import { Override } from '@helpers/Override';
import { createPersonFactory } from './person-factory';

export function createExpensesSplitGroupFactory(
  override: Override<ExpensesSplitGroupProps> = {},
) {
  return new ExpensesSplitGroup({
    name: 'Grupo teste',
    description: 'Descricao teste',
    expenses: [],
    participants: [createPersonFactory()],
    ...override,
  });
}
