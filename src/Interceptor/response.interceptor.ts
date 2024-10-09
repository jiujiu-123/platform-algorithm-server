import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
  StreamableFile,
} from '@nestjs/common';
import {map, Observable} from 'rxjs';

// 定义响应数据结构
interface ApiResponse {
  code: number;
  message: string;
  data?: any;
}

// 定义默认的成功消息和状态码
const DEFAULT_SUCCESS_MESSAGE = 'success';
const DEFAULT_STATUS_CODE = 200;

/* 响应拦截器 */
@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    // 这里可以对响应数据进行处理
    // 获取响应信息
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();

    return next.handle().pipe(
      map((data) => {
        // 如果返回的是文件流，则直接返回
        if (data instanceof StreamableFile) {
          return data;
        } else {
          return this.formatResponse(data, req, res);
        }
      }),
    );
  }

  // 封装响应格式化逻辑
  private formatResponse(data: any, req: any, res: any): ApiResponse {
    // Nest的post请求默认成功码为201 更改为200
    if (req.method === 'POST') {
      if (res.statusCode === HttpStatus.CREATED) {
        res.status(HttpStatus.OK);
      }
    }
    if (data?.message) {
      return {
        code: DEFAULT_STATUS_CODE,
        message: data.message,
        data: data.data || null,
      };
    }
    return {
      code: DEFAULT_STATUS_CODE,
      message: DEFAULT_SUCCESS_MESSAGE,
      data: data,
    };
  }
}
