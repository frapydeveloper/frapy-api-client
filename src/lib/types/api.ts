export type ApiSelectParams = {
  id: string;
};

export type ApiActionParams<T> = {
  dto: T;
};

export type ApiSelectWithActionParams<T> = {
  id: string;
  dto: T;
};
