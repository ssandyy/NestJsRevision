import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    private Users = [
        { id: 1, name: 'User1', email: 'User1@gmail.com', age: 20, password: '123456' },
        { id: 2, name: 'User2', email: 'User2@gmail.com', age: 21, password: '123456' },
        { id: 3, name: 'User3', email: 'User3@gmail.com', age: 22, password: '123456' },
    ];

    getUser(): any {
        return this.Users;
    }

    getUserById(id: number) {
        return this.Users.find((user) => user.id === id);
    }

    createUser(data: { name: string, email: string, age: number, password: string }) {
        const user = {
            id: Date.now(),
            ...data
        }
        this.Users.push(user);
        return user;
    }

    editUser(id: number, data: Partial<{ name: string, email: string, age: number, password: string }>) {
        const user = this.getUserById(id);
        if (!user) {
            throw new Error(`User ${id} Not Found`);
        }
        Object.assign(user, data);
        return user;
    }

    // Or we can use PUT for complete update
    updateUser(id: number, data: { name: string, email: string, age: number, password: string }) {
        const userIndex = this.Users.findIndex((user) => user.id === id);   // we can also find by index
        if (userIndex === -1) {
            throw new Error(`User ${id} Not Found`);
        }
        this.Users[userIndex] = { ...this.Users[userIndex], ...data }; // updating the user
        return this.Users[userIndex];
    }



    deleteUser(id: number) {
        const user = this.getUserById(id);
        if (!user) {
            throw new Error(`User ${id} Not Found`);
        }
        this.Users = this.Users.filter((user) => user.id !== id);
        return user;
    }
}