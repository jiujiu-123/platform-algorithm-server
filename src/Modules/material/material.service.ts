import {Injectable} from '@nestjs/common';
import {MaterialDao} from './material.dao';
import {CreateMaterialDto} from './dto/createMaterial.dto';

@Injectable()
export class MaterialService {
  constructor(private readonly materialDao: MaterialDao) {}

  getMaterialById(id: number) {
    return this.materialDao.findAll(id);
  }

  async getAllMaterial() {
    return this.materialDao.getAllMaterial();
  }

  createMaterial(materialDto: CreateMaterialDto) {
    return this.materialDao.saveMaterial(materialDto);
  }
}
