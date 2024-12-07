import { DataSource } from "typeorm";
import { config } from 'dotenv';
import {CanvasEntities} from './DataBase/mysql/Entities/canvas.entities';
import {MaterialEntities} from './DataBase/mysql/Entities/material.entities';


config({ path: 'src/.env-migration' });

console.log(process.env);

export default new DataSource({
    type: "mysql",
    host: `${process.env.mysql_server_host}`,
    port: +`${process.env.mysql_server_port}`,
    username: `${process.env.mysql_server_username}`,
    password: `${process.env.mysql_server_password}`,
    database: `${process.env.mysql_server_database}`,
    synchronize: false,
    logging: true,
    entities: [
      CanvasEntities, MaterialEntities
    ],
    poolSize: 10,
    migrations: ['src/migrations/**.ts'],
    connectorPackage: 'mysql2',
    extra: {
        authPlugin: 'sha256_password',
    }
});
