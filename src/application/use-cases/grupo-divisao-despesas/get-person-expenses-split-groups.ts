import { ExpensesSplitGroup } from '@application/entities/expenses-split-group';
import { ExpensesSplitGroupRepository } from '@application/repositories/expenses-split-group-repository';

interface GetPersonExpensesSplitGroupsRequest {
  personId: string;
}

interface GetPersonExpensesSplitGroupsResponse {
  expensesSplitGroups: ExpensesSplitGroup[];
}

export class GetPersonExpensesSplitGroups {
  constructor(
    private expensesSplitGroupRepository: ExpensesSplitGroupRepository,
  ) {}

  async execute(
    request: GetPersonExpensesSplitGroupsRequest,
  ): Promise<GetPersonExpensesSplitGroupsResponse> {
    const { personId } = request;

    const expensesSplitGroups =
      await this.expensesSplitGroupRepository.listGroupsByPerson(personId);

    return { expensesSplitGroups };
  }
}
