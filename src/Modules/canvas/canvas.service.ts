import {Injectable} from '@nestjs/common';
import {CanvasDao} from './canvas.dao';
import {GetMaterialByUserIdListDto} from './dto/getMaterialByUserIdList.dto';
import {
  CreateCanvasDataDto,
  DeleteCanvasDataDto,
  GetCanvasDataDto,
  UpdateCanvasDataDto,
} from './dto/canvasData.dto';

@Injectable()
export class CanvasService {
  constructor(private readonly CanvasDao: CanvasDao) {}

  async getCanvasById(body: GetCanvasDataDto) {
    return this.CanvasDao.getCanvas(body);
  }

  async getCanvasByUserIdList(body: GetMaterialByUserIdListDto) {
    return await this.CanvasDao.getCanvasByUserIdList(body);
  }

  async createCanvasData(body: CreateCanvasDataDto) {
    return this.CanvasDao.createCanvas(body);
  }

  async updateCanvasDataById(body: UpdateCanvasDataDto) {
    return this.CanvasDao.updateCanvas(body);
  }

  async deleteCanvasDataById(body: DeleteCanvasDataDto) {
    return this.CanvasDao.deleteCanvas(body.id, body.userId);
  }
}
