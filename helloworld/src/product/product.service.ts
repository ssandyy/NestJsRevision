import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) { }

  async create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: {
        ...createProductDto,
        images: createProductDto.images ? createProductDto.images.join(',') : null,
        tags: createProductDto.tags ? createProductDto.tags.join(',') : null,
      },
    });
  }

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: {
        ...updateProductDto,
        images: updateProductDto.images ? updateProductDto.images.join(',') : undefined,
        tags: updateProductDto.tags ? updateProductDto.tags.join(',') : undefined,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}