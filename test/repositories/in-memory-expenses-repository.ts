import { Expense } from '@application/entities/expense';
import { ExpensesRepository } from '@application/repositories/expenses-repository';

export class InMemoryExpenseRepository implements ExpensesRepository {
  public expenses: Expense[] = [];

  async create(expense: Expense) {
    this.expenses.push(expense);
  }

  async findById(expenseId: string): Promise<Expense | null> {
    const expense = this.expenses.find((item) => item.id === expenseId);

    if (!expense) {
      return null;
    }

    return expense;
  }
}
