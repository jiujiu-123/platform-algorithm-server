import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Inject,
  LoggerService,
} from '@nestjs/common';
import {WINSTON_LOGGER_TOKEN} from '../Logger/logger.module';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  @Inject(WINSTON_LOGGER_TOKEN)
  private readonly logger: LoggerService;

  /**
   * 拦截所有异常
   * @param exception 当前正在处理的异常对象
   * @param host 程序对象 执行上下文
   * */
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    try {
      const status = exception?.getStatus();
      const errorMessage = exception.getResponse() as {message: string[]};
      // 这里是为了处理class-validator的校验异常，因为它返回的异常可能是数组，
      const message = errorMessage?.message?.join
        ? errorMessage?.message?.join(',')
        : exception.message || '请求异常';

      this.logger.error(`${request.method} ${request.url} ${message}`);

      response.status(status).json({
        code: status,
        message,
        path: request.url,
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e: any) {
      this.logger.error(e);
      response.status(500).json({
        code: 500,
        message: '服务器异常',
        path: request.url,
      });
    }
  }
}
