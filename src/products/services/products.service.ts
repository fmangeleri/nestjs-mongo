import { Injectable, NotFoundException } from '@nestjs/common';
import { Model, FilterQuery } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Product } from './../entities/product.entity';
import {
  CreateProductDto,
  UpdateProductDto,
  FilterProductsDto,
} from './../dtos/products.dtos';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  findAll(params?: FilterProductsDto) {
    if (params) {
      const filters: FilterQuery<Product> = {};
      const { limit, offset } = params;
      const { minPrice, maxPrice } = params;
      if (minPrice && maxPrice) {
        filters.price = { $gte: minPrice, $lte: maxPrice };
      }
      return this.productModel.find(filters).skip(offset).limit(limit).exec();
    }
    return this.productModel.find().exec();
  }

  findOne(id: string) {
    const product = this.productModel.findById(id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(data: CreateProductDto) {
    const newProduct = new this.productModel(data);
    return newProduct.save();
  }

  update(id: string, changes: UpdateProductDto) {
    const updatedProduct = this.productModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!updatedProduct) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return updatedProduct;
  }

  remove(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }
}
