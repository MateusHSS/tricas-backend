export class ExpenseNotFound extends Error {
  constructor() {
    super('Expense not found');
  }
}
