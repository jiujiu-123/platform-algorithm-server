import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class GetMaterialByUserIdListDto {
  @ApiProperty({description: '用户id', type: String})
  @IsNotEmpty({message: '用户id不能为空'})
  @IsString({message: '用户id类型必须为字符串类型'})
  userId: string;

  @ApiProperty({description: '页码', type: Number, example: 1})
  @IsNotEmpty({message: '页码不能为空'})
  @IsNumber({}, {message: '页码类型必须为数字类型'})
  page: number;

  @ApiProperty({description: '每页数量', type: Number, example: 10})
  @IsNotEmpty({message: '条数不能为空'})
  @IsNumber({}, {message: '条数类型必须为数字类型'})
  size: number;
}
