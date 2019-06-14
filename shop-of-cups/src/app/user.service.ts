import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  url = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get(`${this.url}/user`);
  }

  addUser(name, email, password, order, bought){
    const user = {
      name: name,
      email: email,
      password: password,
      order: order,
      bought: bought
    }

    return this.http.post(`${this.url}/user/add`, user);
  }

  getUserById(id){
    return this.http.get(`${this.url}/user/${id}`);
  }

  deleteUser(id){
    return this.http.get(`${this.url}/user/delete/${id}`);
  }
}
