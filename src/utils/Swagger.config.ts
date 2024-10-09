import {NestApplication} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

export const swaggerConfig = (app: NestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('算法平台API接口文档')
    .setDescription('api接口文档描述：')
    .setVersion('1.0')
    .addTag('算法平台')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document);
};
