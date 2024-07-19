export enum FieldType {
  AutoComplete,
  Input,
  Select,
}

interface FieldCore<T> {
  type: FieldType;
  name: keyof T;
  label: string;
  description?: string;
}

export interface AutoCompleteField<T> extends FieldCore<T> {
  type: FieldType.AutoComplete;
  suggestions: string[];
}

export interface InputField<T> extends FieldCore<T> {
  type: FieldType.Input;
}

export interface SelectField<T> extends FieldCore<T> {
  type: FieldType.Select;
  options: {
    label: string;
    value: string;
  }[];
}

export type Field<T> = AutoCompleteField<T> | InputField<T> | SelectField<T>;
