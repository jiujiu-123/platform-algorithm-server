import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1733554553632 implements MigrationInterface {
    name = 'Init1733554553632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`canvas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` varchar(20) NOT NULL COMMENT '用户id', \`userName\` varchar(255) NOT NULL COMMENT '用户名', \`name\` varchar(255) NOT NULL COMMENT '画布名称', \`configuration\` text NOT NULL COMMENT '配置', \`createdAt\` datetime(6) NOT NULL COMMENT '创建时间' DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL COMMENT '更新时间' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`material\` (\`id\` int NOT NULL AUTO_INCREMENT COMMENT 'id', \`userId\` varchar(255) NOT NULL COMMENT '创建者id', \`userName\` varchar(20) NOT NULL COMMENT '创建者id', \`materialId\` varchar(255) NOT NULL COMMENT '唯一标识，由前端生成，用于唯一标识，不可重复，不可修改', \`name\` varchar(255) NOT NULL COMMENT '素材名称', \`icon\` varchar(255) NOT NULL COMMENT '图标', \`type\` varchar(255) NOT NULL COMMENT '物料类型，可用于筛选，或者按需读取，目录、物料', \`version\` varchar(50) NOT NULL COMMENT '物料版本', \`nodeConfig\` text NOT NULL COMMENT '该物料对应的节点配置 JSON schema', \`edgeConfig\` text NOT NULL COMMENT '该物料对应的边配置 JSON schema', \`parentId\` varchar(255) NULL COMMENT '父级物料id，用于分类，默认为null', \`createdAt\` datetime(6) NOT NULL COMMENT '创建时间' DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL COMMENT '更新时间' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`material\``);
        await queryRunner.query(`DROP TABLE \`canvas\``);
    }

}
