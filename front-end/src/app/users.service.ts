import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './types/user';
import { Http } from '@angular/http';
import { environment } from '../environments/environment';

@Injectable()
export class UsersService {

   

    constructor(private httpClient: HttpClient, private http: Http) {
    }

    // addNewUser(user: User) {
    //     return this.httpClient.post<User>(
    //         '${apiHost}/api/users',
    //         user
    //     );
    // }
    createUser(userName, firstName, lastName) {
        this.http.post(
            `${environment.apiHost}/api/users`,
            {
                "userName": userName,
                "firstName": firstName,
                "lastName": lastName,
            }
        ).toPromise()
            .then(response => console.log(response.json().userName + " has been created."))
    }

    // getUsers() {
    //     return this.httpClient.get<User[]>('${apiHost}/api/users');
    // }

    getUsersList(user) {
        this.http.get(`${environment.apiHost}/api/users`)
            .toPromise()
            .then(response => user = response.json());
    }

    deleteUser(userId: string) {
        return this.httpClient.delete(`${environment.apiHost}/api/users/${userId}`);
    }

}
