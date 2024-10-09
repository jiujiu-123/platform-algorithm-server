import {HttpException, Injectable} from '@nestjs/common';
import {MaterialEntities} from '../../DataBase/mysql/Entities/material.entities';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CreateMaterialDto} from './dto/createMaterial.dto';

@Injectable()
export class MaterialDao {
  @InjectRepository(MaterialEntities)
  private readonly materialEntities: Repository<MaterialEntities>;

  constructor() {}

  async findAll(id: number): Promise<MaterialEntities[]> {
    return await this.materialEntities.find({
      where: {
        id: id,
      },
    });
  }

  async getAllMaterial() {
    try {
      return await this.materialEntities.find();
    } catch (e) {
      console.log(e.message);
      return new HttpException(e.message, 400);
    }
  }

  async saveMaterial(createMaterialDto: CreateMaterialDto) {
    try {
      const data: CreateMaterialDto = {
        ...createMaterialDto,
        nodeConfig: `${JSON.stringify(createMaterialDto.nodeConfig)}`,
        edgeConfig: `${JSON.stringify(createMaterialDto.edgeConfig)}`,
      };
      return await this.materialEntities.save(data);
    } catch (e) {
      return new HttpException(e.message, 400);
    }
  }
}
