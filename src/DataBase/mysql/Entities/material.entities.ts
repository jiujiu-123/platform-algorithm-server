import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('material')
export class MaterialEntities {
  @PrimaryGeneratedColumn({comment: 'id'})
  id: number;

  @Column({comment: '创建者id', nullable: false})
  userId: string;

  @Column({comment: '创建者id', length: 20, nullable: false})
  userName: string;

  @Column({
    comment: '唯一标识，由前端生成，用于唯一标识，不可重复，不可修改',
    nullable: false,
  })
  materialId: string;

  @Column({comment: '素材名称', nullable: false})
  name: string;

  @Column({comment: '图标', nullable: false})
  icon: string;

  @Column({
    comment: '物料类型，可用于筛选，或者按需读取，目录、物料',
    nullable: false,
    type: 'varchar',
    length: '255',
  })
  type: string;

  @Column({comment: '物料版本', length: 50, nullable: false})
  version: string;

  @Column({
    comment: '该物料对应的节点配置 JSON schema',
    type: 'text',
    nullable: false,
  })
  nodeConfig: string;

  @Column({
    comment: '该物料对应的边配置 JSON schema',
    type: 'text',
    nullable: false,
  })
  edgeConfig: string;

  @Column({comment: '父级物料id，用于分类，默认为null', default: null})
  parentId: string;

  @CreateDateColumn({comment: '创建时间'})
  createdAt: Date;

  @UpdateDateColumn({comment: '更新时间'})
  updatedAt: Date;
}
