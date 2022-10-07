export interface ExampleGet<T> {
  query: T;
}

export interface ExamplePost<T> {
  body: T;
}

export interface ExampleModel {
  userId: number;
  id: number;
  title: string;
  body: string;
}
