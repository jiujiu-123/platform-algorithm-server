import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import {IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class CreateCanvasDataDto {
  @ApiProperty({description: '用户id', type: String})
  @IsNotEmpty({message: '用户id不能为空'})
  @IsString({message: '用户id必须为字符串'})
  userId: string;

  @ApiProperty({description: '用户名', type: String, required: false})
  @IsString({message: '用户名必须为字符串'})
  @IsNotEmpty({message: '用户名不能为空'})
  userName: string;

  @ApiProperty({description: '画布名称', type: String, required: false})
  @IsString({message: '画布名称必须为字符串'})
  @IsNotEmpty({message: '画布名称不能为空'})
  name: string;
}

export class UpdateCanvasDataDto {
  @ApiProperty({description: '画布id', type: Number})
  @IsNotEmpty({message: '画布id不能为空'})
  id: number;

  @ApiProperty({description: '用户id', type: String})
  @IsNotEmpty({message: '用户id不能为空'})
  userId: string;

  @ApiPropertyOptional({description: '用户名', type: String, required: false})
  @IsOptional()
  @IsString({message: '用户名必须为字符串'})
  userName?: string;

  @ApiPropertyOptional({description: '画布名称', type: String, required: false})
  @IsOptional()
  @IsString({message: '画布名称必须为字符串'})
  name?: string;

  @ApiPropertyOptional({description: '画布JSON配置', type: String})
  @IsOptional()
  @IsString({message: '画布JSON配置必须为字符串'})
  configuration?: string;
}

export class DeleteCanvasDataDto {
  @ApiProperty({description: '画布id', type: Number})
  @IsNotEmpty({message: '画布id不能为空'})
  id: number;

  @ApiProperty({description: '用户id', type: String})
  @IsNotEmpty({message: '用户id不能为空'})
  userId: string;
}

export class GetCanvasDataDto {
  @ApiProperty({description: '画布id', type: Number})
  @IsNotEmpty({message: '画布id不能为空'})
  id: number;

  @ApiProperty({description: '用户id', type: String})
  @IsNotEmpty({message: '用户id不能为空'})
  userId: string;
}
