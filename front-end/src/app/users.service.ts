import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './types/user';
import { Http } from '@angular/http';

@Injectable()
export class UsersService {

    constructor(private httpClient: HttpClient, private http: Http) {
    }

    addNewUser(user: User) {
        return this.httpClient.post<User>(
            '/api/users',
            user
        );
    }
    createUser(userName, firstName, lastName) {
        this.http.post(
            '/api/users',
            {
                "userName": userName,
                "firstName": firstName,
                "lastName": lastName,
            }
        ).toPromise()
            .then(response => console.log(response.json().userName + " has been created."))
    }

    getUsers() {
        return this.httpClient.get<User[]>('/api/users');
    }

    getUsersList(users) {
        this.http.get('/api/users')
            .toPromise()
            .then(response => users = response.json());
    }

    deleteUser(userId: string) {
        return this.httpClient.delete(`/api/users/${userId}`);
    }

}
