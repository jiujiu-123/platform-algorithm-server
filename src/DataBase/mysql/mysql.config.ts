import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigService} from '@nestjs/config';
import {CanvasEntities} from './Entities/canvas.entities';
import {MaterialEntities} from './Entities/material.entities';

export const MysqlConfig = TypeOrmModule.forRootAsync({
  useFactory: async (configService: ConfigService) => {
    return {
      type: 'mysql',
      host: configService.get('MYSQL.HOST'),
      port: +configService.get('MYSQL.PORT'),
      username: configService.get('MYSQL.USERNAME'),
      password: configService.get('MYSQL.PASSWORD'),
      database: configService.get('MYSQL.DATABASE'),
      // 开发模式下不使用自动引入数据实体，转而采用手动引入
      // entities: [__dirname + './Entities/*.entities.ts'],
      entities: [CanvasEntities, MaterialEntities],
      // 开启自动同步数据库，注意：会修改表结构会导致数据丢失，生产模式必须关闭！
      synchronize: configService.get('MYSQL.SYNCHRONIZE'),
      logging: configService.get('MYSQL.LOGGING'),
    };
  },
  inject: [ConfigService],
});
