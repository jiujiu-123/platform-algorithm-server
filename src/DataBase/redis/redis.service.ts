import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class RedisService {
  @Inject('REDIS_CLIENT')
  private redisClient: RedisClientType;

  /**
   * 获取缓存
   * @param key 键
   * */
  public async get(key: string) {
    return await this.redisClient.get(key);
  }

  /**
   * 设置缓存
   * @param key 键
   * @param value 值
   * @param ttl 过期时间
   * */
  public async set(key: string, value: string | number, ttl?: number) {
    await this.redisClient.set(key, value);

    if (ttl) {
      await this.redisClient.expire(key, ttl);
    }
  }

  /**
   * 删除缓存
   * @param key 键
   * */
  async del(key: string) {
    await this.redisClient.del(key);
  }
}
