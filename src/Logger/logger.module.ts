import {DynamicModule, Global, Module} from '@nestjs/common';
import {CustomLogger} from './custom.logger';
import {LoggerOptions} from 'winston';
export const WINSTON_LOGGER_TOKEN = 'WINSTON_LOGGER';
@Global()
@Module({})
export class LoggerModule {
  public static forRoot(options: LoggerOptions): DynamicModule {
    return {
      module: LoggerModule,
      providers: [
        {
          provide: WINSTON_LOGGER_TOKEN,
          useValue: new CustomLogger(options),
        },
      ],
      exports: [WINSTON_LOGGER_TOKEN],
    };
  }
}
