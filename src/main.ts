import {NestApplication, NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ConfigService} from '@nestjs/config';
import {swaggerConfig} from './utils/Swagger.config';
import {ValidationPipe} from '@nestjs/common';
import {WINSTON_LOGGER_TOKEN} from './Logger/logger.module';

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule);
  // 全局请求统一前缀
  app.setGlobalPrefix('api');
  // 配置swagger
  swaggerConfig(app);
  // 获取当前环境变量模块
  const configService = app.get(ConfigService);
  // 全局异常拦截器
  // app.useGlobalFilters(new HttpExceptionFilter());
  // 全局参数验证
  // 使用日志
  app.useLogger(app.get(WINSTON_LOGGER_TOKEN));
  app.useGlobalPipes(new ValidationPipe({transform: true, whitelist: true}));
  await app.listen(parseInt(configService.get('APPLICATION.PORT')));
}

bootstrap().then(() => {
  console.log('服务启动成功,当前环境为', process.env.NODE_ENV);
});
