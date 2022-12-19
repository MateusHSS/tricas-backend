import { Expense } from '../entities/expense';

export abstract class ExpensesRepository {
  abstract create(expense: Expense): Promise<void>;
  abstract findById(expenseId: string): Promise<Expense | null>;
}
