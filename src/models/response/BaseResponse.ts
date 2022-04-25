export interface BaseResponse<TData> {
  data: TData;
  message: string;
  success: boolean;
  errorDetails: string;
}
