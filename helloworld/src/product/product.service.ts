import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  private products: Product[] = [];
  create(createProductDto: CreateProductDto) {
    const product: Product = {
      id: Date.now().toString(),
      ...createProductDto,
    };
    this.products.push(product);
    return product;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    return this.products.find((product) => product.id === id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const product = this.findOne(id);
    if (!product) {
      throw new Error('Product not found');
    }
    product.name = updateProductDto.name;
    product.price = updateProductDto.price;
    return product;
  }

  remove(id: number) {
    return {};
  }
}