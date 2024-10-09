import {ConfigModule} from '@nestjs/config';
import * as yaml from 'js-yaml';
import {join} from 'node:path';
import {readFile} from 'fs/promises';

// 环境配置文件名
const configFileNameObj = {
  development: 'dev',
  test: 'test',
  production: 'prod',
  docker: 'docker',
};

// 获取当前环境
const env = process.env.NODE_ENV as keyof typeof configFileNameObj;

// 读取对应的环境变量文件
const load = async () => {
  const configFilePath = join(__dirname, `../${configFileNameObj[env]}.yaml`);

  const config = await readFile(configFilePath, {
    encoding: 'utf-8',
  });

  return yaml.load(config) as Record<string, any>;
};

// 加载环境变量文件
export const envConfig = ConfigModule.forRoot({
  isGlobal: true,
  load: [load],
  cache: true,
});
