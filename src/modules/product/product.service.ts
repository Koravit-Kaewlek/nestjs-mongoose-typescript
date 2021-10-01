import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Product,
  ProductDocument,
} from 'src/modules/product/schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private ProductModel: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return await new this.ProductModel(createProductDto).save();
  }

  async findAll() {
    return await this.ProductModel.find({});
  }

  async findOne(id: number) {
    return await this.ProductModel.findOne({ id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.ProductModel.findOneAndUpdate(
      { id },
      {
        $set: updateProductDto,
      },
      {
        new: true,
      },
    );
  }

  async remove(id: number) {
    return await this.ProductModel.findOneAndUpdate(
      { id },
      {
        $set: {
          isActive: false,
        },
      },
      {
        new: true,
      },
    );
  }
}
