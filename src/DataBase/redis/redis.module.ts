import { Global, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { ConfigService } from '@nestjs/config';
import { createClient } from 'redis';

/**
 * redis 配置文件
 * */
@Global()
@Module({
  providers: [
    RedisService,
    {
      provide: 'REDIS_CLIENT',
      useFactory: async (configService: ConfigService) => {
        const client = createClient({
          socket: {
            host: configService.get('REDIS.HOST'),
            port: configService.get('REDIS.PORT'),
          },
          database: configService.get('REDIS.DATABASE'),
        });
        await client.connect().then(() => {
          console.log('redis连接成功');
        });
        return client;
      },
      inject: [ConfigService],
    },
  ],
  exports: [RedisService],
})
export class RedisModule {
}
