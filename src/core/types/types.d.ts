interface ResponseError {
  success: boolean;
  msg: string;
  errors?: {
    message: string;
    property?: string;
  }[];
}
