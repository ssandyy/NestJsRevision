import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor() { }

    async getUser() {
        return [];
    }

    async getUserById(id: string) {
        return null;
    }

    async createUser(data: { name: string, email: string, age: number, password: string }) {
        return { id: 'mock-id', ...data };
    }

    async editUser(id: string, data: Partial<{ name: string, email: string, age: number, password: string }>) {
        return { id, ...data };
    }

    async updateUser(id: string, data: { name: string, email: string, age: number, password: string }) {
        return { id, ...data };
    }

    async deleteUser(id: string) {
        return { id };
    }
}