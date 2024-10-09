import {ApiProperty} from '@nestjs/swagger';

export class CanvasDataListVo {
  @ApiProperty({description: '画布id', type: Number})
  id: number;

  @ApiProperty({description: '用户id', type: String})
  userId: string;

  @ApiProperty({description: '用户名', type: String})
  userName: string;

  @ApiProperty({description: '画布名称', type: String})
  name: string;

  @ApiProperty({description: '画布JSON配置', type: String})
  configuration: string;

  @ApiProperty({description: '画布创建时间', type: Date})
  createdAt: Date;

  @ApiProperty({description: '画布更新时间', type: Date})
  updatedAt: Date;
}
