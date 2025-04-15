export interface FormDataType {
  title: string;
  name: string;
  category: string;
  isbn: string;
}

export type CheckerType = {
  title: boolean;
  name: boolean;
  category: boolean;
  isbn: boolean;
};

export type InputType = "title" | "name" | "category" | "isbn";