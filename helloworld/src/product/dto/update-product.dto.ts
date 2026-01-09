import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    name: string;
    description: string;
    price: number;
    inStock?: boolean;
    category: string;
    brand: string;
    rating?: number;
    stock?: number;
    images?: string[];
    tags?: string[];
    createdAt?: Date;
    updatedAt?: Date;
}
