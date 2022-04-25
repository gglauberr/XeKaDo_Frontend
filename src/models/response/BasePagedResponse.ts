import { PageInfo } from '../PageInfo';

export interface BasePagedResponse<TData> {
  PageInfo: PageInfo;
  Pages: number;
  ItensTotal: number;
  HasMore: boolean;
  Data: TData[];
  Success: boolean;
  Message: string;
  ErrorDetails: string;
}
