import {ApiProperty} from '@nestjs/swagger';

export class MaterialVO {
  @ApiProperty({description: 'id', type: Number})
  id: number;

  @ApiProperty({description: '用户id', type: String})
  userId: string;

  @ApiProperty({description: '用户名', type: String})
  userName: string;

  @ApiProperty({description: '物料id', type: String})
  materialId: string;

  @ApiProperty({description: '物料名称', type: String})
  name: string;

  @ApiProperty({description: 'icon图标名称', type: String})
  icon: string;

  @ApiProperty({
    description: '物料类型',
    type: String,
    enum: ['catalogue', 'material'],
  })
  type: string;

  @ApiProperty({description: '物料版本', type: String})
  version: string;

  @ApiProperty({description: '节点配置对象', type: String})
  nodeConfig: string;

  @ApiProperty({description: '边配置对象', type: String})
  edgeConfig: string;

  @ApiProperty({description: '父元素id', type: String})
  parentId: number;

  @ApiProperty({description: '创建时间', type: Date})
  createdAt: Date;

  @ApiProperty({description: '更新时间', type: Date})
  updatedAt: Date;
}
