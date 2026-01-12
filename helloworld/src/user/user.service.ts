import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async getUser() {
        const users = await this.prisma.user.findMany();
        return users;
    }

    async getUserById(id: string) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        return user;
    }

    async getUserByEmail(email: string) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        return user;
    }

    async createUser(createUserDto: CreateUserDto) {
        const user = await this.prisma.user.create({ data: { ...createUserDto } });
        return user;
    }

    async editUser(id: string, data: Partial<{ name: string, email: string, age: number, password: string }>) {
        const user = await this.prisma.user.update({ where: { id }, data });
        return user;
    }

    async updateUser(id: string, data: { name: string, email: string, age: number, password: string }) {
        const user = await this.prisma.user.update({ where: { id }, data });
        return user;
    }

    async deleteUser(id: string) {
        const user = await this.prisma.user.delete({ where: { id } });
        return user;
    }
}