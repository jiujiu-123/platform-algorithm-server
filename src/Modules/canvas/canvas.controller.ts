import {Body, Controller, HttpStatus, Post} from '@nestjs/common';
import {CanvasService} from './canvas.service';
import {ApiBody, ApiOperation, ApiResponse} from '@nestjs/swagger';
import {GetMaterialByUserIdListDto} from './dto/getMaterialByUserIdList.dto';
import {CanvasDataListVo} from './vo/canvasDataList.vo';
import {
  CreateCanvasDataDto,
  DeleteCanvasDataDto,
  GetCanvasDataDto,
  UpdateCanvasDataDto,
} from './dto/canvasData.dto';

@Controller('canvas')
export class CanvasController {
  constructor(private readonly canvasService: CanvasService) {}

  @ApiOperation({summary: '根据id获取画布信息'})
  @ApiBody({description: '画布id', required: true, type: GetCanvasDataDto})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
    type: CanvasDataListVo,
  })
  @Post('/info')
  async getCanvasById(@Body() Body: GetCanvasDataDto) {
    return await this.canvasService.getCanvasById(Body);
  }

  @ApiOperation({summary: '根据用户id获取画布列表'})
  @ApiBody({
    description: '查询条件',
    required: true,
    type: GetMaterialByUserIdListDto,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
    type: CanvasDataListVo,
  })
  @Post('/list')
  async getCanvasByUserIdList(@Body() body: GetMaterialByUserIdListDto) {
    return await this.canvasService.getCanvasByUserIdList(body);
  }

  @ApiOperation({summary: '用户创建画布'})
  @ApiBody({
    description: '参数',
    required: true,
    type: CreateCanvasDataDto,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
    type: CanvasDataListVo,
  })
  @Post('/create')
  async createCanvasData(@Body() body: CreateCanvasDataDto) {
    return await this.canvasService.createCanvasData(body);
  }

  @ApiOperation({summary: '用户更新画布信息'})
  @ApiBody({
    description: '参数',
    required: true,
    type: UpdateCanvasDataDto,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
  })
  @Post('/update')
  async updateCanvasDataById(@Body() body: UpdateCanvasDataDto) {
    await this.canvasService.updateCanvasDataById(body);
    return null;
  }

  @ApiOperation({summary: '根据画布id删除用户画布'})
  @ApiBody({
    description: '参数',
    required: true,
    type: UpdateCanvasDataDto,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
  })
  @Post('/delete')
  async deleteCanvasDataById(@Body() body: DeleteCanvasDataDto) {
    const result = await this.canvasService.deleteCanvasDataById(body);
    if (result.affected > 0) return null;
    return '本次操作无任何影响';
  }
}
