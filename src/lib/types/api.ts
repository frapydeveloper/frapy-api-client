import { CursorPaginationModel } from "@models/cursorPanigation.model";
import { PaginationModel } from "@models/pagination.model";

export type ApiSelectParams = {
  id: string;
};

export type ApiSelectManyParams = {
  pagination: PaginationModel | CursorPaginationModel;
};

export type ApiActionParams<T> = {
  dto: T;
};

export type ApiSelectWithActionParams<T> = {
  id: string;
  dto: T;
};
