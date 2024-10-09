import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import {IsNotEmpty} from 'class-validator';

export class CreateMaterialDto {
  @ApiProperty({description: '边配置', type: String})
  @IsNotEmpty({message: '边配置不能为空'})
  edgeConfig: string;
  @ApiProperty({description: '图标', type: String})
  @IsNotEmpty({message: '图标不能为空'})
  icon: string;
  @ApiProperty({description: '物料id', type: String})
  @IsNotEmpty({message: '物料id不能为空'})
  materialId: string;
  @ApiProperty({description: '物料名称', type: String})
  @IsNotEmpty({message: '物料名称不能为空'})
  name: string;
  @ApiProperty({description: '节点配置', type: String})
  @IsNotEmpty({message: '节点配置不能为空'})
  nodeConfig: string;
  @ApiPropertyOptional({description: '父id', type: String})
  parentId?: string;
  @ApiProperty({description: '物料类型', type: String})
  @IsNotEmpty({message: '物料类型不能为空'})
  type: string;
  @ApiProperty({description: '用户id', type: String})
  @IsNotEmpty({message: '用户id不能为空'})
  userId: string;
  @ApiProperty({description: '用户名', type: String})
  @IsNotEmpty({message: '用户名不能为空'})
  userName: string;
  @ApiProperty({description: '物料版本', type: String})
  @IsNotEmpty({message: '物料版本不能为空'})
  version: string;
}
