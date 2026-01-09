import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    Users = [
        { id: 1, name: 'User1' },
        { id: 2, name: 'User2' },
        { id: 3, name: 'User3' },
    ];

    getUser(): any {
        return this.Users;
    }

    getUserById(id: number) {
        return this.Users.find((user) => user.id === id);
    }

    getHello(): any {
        return 'Hello World!!!';
    }
}
