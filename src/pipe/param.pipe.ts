import {
  ArgumentMetadata,
  HttpException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class IsEmptyPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    let text = '';
    const val = parseInt(value, 10);
    if (metadata.type === 'param') {
      text = '路径';
    }
    if (metadata.type === 'query') {
      text = '查询';
    }
    if (isNaN(val)) {
      throw new HttpException(`${text}参数不能为空`, 400);
    }
    return val;
  }
}
