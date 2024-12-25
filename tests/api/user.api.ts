import { APIRequestContext, APIResponse } from '@playwright/test';
import { User } from '../models/user.model';
import { BaseAPI } from './base.api';

export class UserAPI extends BaseAPI {
  async createUser(user: User): Promise<APIResponse> {
    const response = await this.apiContext.post(`${this.baseUrl}/user`, {
      data: user
    });
    await this.printResponse(response, 'POST', user);
    return response;
  }

  async getUser(username: string): Promise<APIResponse> {
    const response = await this.apiContext.get(`${this.baseUrl}/user/${username}`);
    await this.printResponse(response, 'GET');
    return response;
  }

  async loginUser(username: string, password: string): Promise<APIResponse> {
    const response = await this.apiContext.get(
      `${this.baseUrl}/user/login?username=${username}&password=${password}`
    );
    await this.printResponse(response, 'GET');
    return response;
  }

  async logoutUser(): Promise<APIResponse> {
    const response = await this.apiContext.get(`${this.baseUrl}/user/logout`);
    await this.printResponse(response, 'GET');
    return response;
  }

  async deleteUser(username: string): Promise<APIResponse> {
    const response = await this.apiContext.delete(`${this.baseUrl}/user/${username}`);
    await this.printResponse(response, 'DELETE');
    return response;
  }
} 