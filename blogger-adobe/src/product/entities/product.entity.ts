export class Product {
    id: string;
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
    createdAt: Date;
    updatedAt: Date;
}
