import {Module} from '@nestjs/common';
import {CanvasService} from './canvas.service';
import {CanvasController} from './canvas.controller';
import {CanvasDao} from './canvas.dao';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CanvasEntities} from '../../DataBase/mysql/Entities/canvas.entities';

@Module({
  imports: [TypeOrmModule.forFeature([CanvasEntities])],
  controllers: [CanvasController],
  providers: [CanvasService, CanvasDao],
})
export class CanvasModule {}
