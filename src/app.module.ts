import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {envConfig} from './utils/Env.config';
import {MysqlConfig} from './DataBase/mysql/mysql.config';
import {RedisModule} from './DataBase/redis/redis.module';
import {MaterialModule} from './Modules/material/material.module';
import {APP_FILTER, APP_INTERCEPTOR} from '@nestjs/core';
import {ResponseInterceptor} from './Interceptor/response.interceptor';
import {CanvasModule} from './Modules/canvas/canvas.module';
import {LoggerModule} from './logger/logger.module';
import {format, transports} from 'winston';
import * as chalk from 'chalk';
import {HttpExceptionFilter} from './Filter/http.exception';

@Module({
  imports: [
    RedisModule,
    MysqlConfig,
    envConfig,
    MaterialModule,
    CanvasModule,
    LoggerModule,
    LoggerModule.forRoot({
      level: 'debug',
      format: format.combine(format.colorize(), format.simple()),
      transports: [
        new transports.Console({
          format: format.combine(
            format.colorize(),
            format.printf(({context, level, message, time}) => {
              const appStr = chalk.green(`[NEST]`);
              const contextStr = chalk.yellow(`[${context}]`);

              return `${appStr} ${time} ${level} ${contextStr} ${message} `;
            }),
          ),
        }),
        new transports.File({
          format: format.combine(format.timestamp(), format.json()),
          filename: '111.log',
          dirname: 'log',
        }),
      ],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // 设置全局响应器拦截器，在这里设置是为了后续可以给拦截器注入依赖
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
