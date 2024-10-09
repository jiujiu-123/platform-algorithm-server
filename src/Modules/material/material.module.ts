import {Module} from '@nestjs/common';
import {MaterialService} from './material.service';
import {MaterialController} from './material.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MaterialEntities} from '../../DataBase/mysql/Entities/material.entities';
import {MaterialDao} from './material.dao';

@Module({
  imports: [TypeOrmModule.forFeature([MaterialEntities])],
  controllers: [MaterialController],
  providers: [MaterialService, MaterialDao],
})
export class MaterialModule {}
