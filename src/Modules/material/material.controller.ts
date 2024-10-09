import {Body, Controller, Get, HttpStatus, Param, Post} from '@nestjs/common';
import {MaterialService} from './material.service';
import {ApiOperation, ApiParam, ApiResponse} from '@nestjs/swagger';
import {MaterialVO} from './vo/material.vo';
import {CustomResponse} from '../../utils/Custom.Response';
import {IsEmptyPipe} from '../../pipe/param.pipe';
import {CreateMaterialDto} from './dto/createMaterial.dto';

@Controller('material')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  /**
   * 根据id获取素材信息
   * @param id 物料id
   * @return MaterialVO
   * */
  @ApiOperation({summary: '根据id获取素材信息', description: '获取素材信息'})
  @ApiParam({name: 'id', description: '物料id', required: true, type: Number})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
    type: MaterialVO,
  })
  @Get('/item/:id')
  async getMaterialById(@Param('id', new IsEmptyPipe()) id: number) {
    return CustomResponse.Success(
      await this.materialService.getMaterialById(+id),
      '查询成功',
    );
  }

  @ApiOperation({summary: '获取所有素材信息', description: '获取所有素材信息'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
    type: [MaterialVO],
  })
  @Get('list')
  async getAllMaterial() {
    return this.materialService.getAllMaterial();
  }

  /* 创建物料 */
  @ApiOperation({summary: '创建物料', description: '创建物料'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
    type: MaterialVO,
  })
  @Post('create')
  async createMaterial(@Body() materialDto: CreateMaterialDto) {
    return this.materialService.createMaterial(materialDto);
  }
}
