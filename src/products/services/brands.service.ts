import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Brand } from '../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brand.name) private brandModel: Model<Brand>) {}

  findAll() {
    return this.brandModel.find().exec();
  }

  findOne(id: string) {
    return this.brandModel.findById(id);
  }

  create(data: CreateBrandDto) {
    const newBrand = new this.brandModel(data);
    return newBrand.save();
  }

  // update(id: number, changes: UpdateBrandDto) {
  //   const brand = this.findOne(id);
  //   const index = this.brands.findIndex((item) => item.id === id);
  //   this.brands[index] = {
  //     ...brand,
  //     ...changes,
  //   };
  //   return this.brands[index];
  // }

  // remove(id: number) {
  //   const index = this.brands.findIndex((item) => item.id === id);
  //   if (index === -1) {
  //     throw new NotFoundException(`Brand #${id} not found`);
  //   }
  //   this.brands.splice(index, 1);
  //   return true;
  // }
}
