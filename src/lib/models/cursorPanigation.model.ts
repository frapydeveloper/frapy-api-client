import { PaginationModel } from "./pagination.model";

export class CursorPaginationModel extends PaginationModel {
  public readonly cursor?: string;
}
