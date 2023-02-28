import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { BrandsService } from '../services/brands.service';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';
import { MongoIdPipe } from 'src/common/mongoId.pipe';

@ApiTags('brands')
@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  async findAll() {
    return await this.brandsService.findAll();
  }

  @Get(':id')
  async get(@Param('id', MongoIdPipe) id: string) {
    return await this.brandsService.findOne(id);
  }

  @Post()
  async create(@Body() payload: CreateBrandDto) {
    return await this.brandsService.create(payload);
  }

  // @Put(':id')
  // update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() payload: UpdateBrandDto,
  // ) {
  //   return this.brandsService.update(id, payload);
  // }

  // @Delete(':id')
  // remove(@Param('id', ParseIntPipe) id: number) {
  //   return this.brandsService.remove(+id);
  // }
}
