import { Entity, Column, PrimaryGeneratedColumn, Generated } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    @Generated('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column({ nullable: true })
    inStock?: boolean;

    @Column()
    category: string;

    @Column()
    brand: string;

    @Column({ nullable: true })
    rating?: number;

    @Column({ nullable: true })
    stock?: number;

    @Column("simple-array", { nullable: true })
    images?: string[];

    @Column("simple-array", { nullable: true })
    tags?: string[];

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
