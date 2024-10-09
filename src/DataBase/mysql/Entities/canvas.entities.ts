import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * 画布实体
 * */
@Entity('canvas')
export class CanvasEntities {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({comment: '用户id', length: 20})
  userId: string;

  @Column({comment: '用户名'})
  userName: string;

  @Column({comment: '画布名称'})
  name: string;

  @Column({comment: '配置', type: 'text'})
  configuration: string;

  @CreateDateColumn({comment: '创建时间'})
  createdAt: Date;

  @UpdateDateColumn({comment: '更新时间'})
  updatedAt: Date;
}
