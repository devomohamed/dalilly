export interface Error {
  status: boolean;
  token?: any;
  code: number;
  validation: any[];
  desc: string;
}

export interface ServiceResponse<T> {
  Error: Error;
  Response: T;
}
