import {Injectable} from '@nestjs/common';
import {CanvasEntities} from '../../DataBase/mysql/Entities/canvas.entities';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {
  CreateCanvasDataDto,
  GetCanvasDataDto,
  UpdateCanvasDataDto,
} from './dto/canvasData.dto';
import {GetMaterialByUserIdListDto} from './dto/getMaterialByUserIdList.dto';

@Injectable()
export class CanvasDao {
  @InjectRepository(CanvasEntities)
  private readonly canvasEntities: Repository<CanvasEntities>;

  /* 根据id获取画布 */
  async getCanvas(body: GetCanvasDataDto): Promise<CanvasEntities> {
    return await this.canvasEntities.findOne({
      where: {id: body.id, userId: body.userId},
    });
  }

  /* 根据用户id查询画布 */
  async getCanvasByUserIdList(
    body: GetMaterialByUserIdListDto,
  ): Promise<CanvasEntities[]> {
    return await this.canvasEntities.find({
      where: {userId: body.userId},
      skip: (body.page - 1) * body.size,
      take: body.size,
    });
  }

  /* 创建画布 */
  async createCanvas(canvas: CreateCanvasDataDto): Promise<CanvasEntities> {
    const result = await this.canvasEntities
      .createQueryBuilder()
      .insert()
      .into(CanvasEntities)
      .values({...canvas, configuration: '{}'})
      .execute();
    const generatedId = result.generatedMaps[0].id;
    return this.canvasEntities.findOne({where: {id: generatedId}});
  }

  updateCanvas(canvasData: UpdateCanvasDataDto) {
    const id = canvasData.id;
    const data = canvasData;
    delete data.id;
    return this.canvasEntities.update(id, data);
  }

  async deleteCanvas(id: number, userId: string) {
    return await this.canvasEntities
      .createQueryBuilder()
      .delete()
      .where({id, userId})
      .execute();
  }
}
