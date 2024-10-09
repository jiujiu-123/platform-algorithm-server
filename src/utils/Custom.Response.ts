/*
 * 自定义返回格式类
 * */
export class CustomResponse {
  static error(message: string, data?: any): any {
    return {
      message: message,
      data: data || null,
    };
  }

  static Success(data: any, success?: string): any {
    return {
      message: success || 'success',
      data: data,
    };
  }
}
