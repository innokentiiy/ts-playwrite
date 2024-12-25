import { APIRequestContext, APIResponse } from '@playwright/test';
import { Order } from '../models/store.model';
import { BaseAPI } from './base.api';

export class StoreAPI extends BaseAPI {
  async placeOrder(order: Order): Promise<APIResponse> {
    const response = await this.apiContext.post(`${this.baseUrl}/store/order`, {
      data: order
    });
    await this.printResponse(response, 'POST', order);
    return response;
  }

  async getOrder(orderId: number): Promise<APIResponse> {
    const response = await this.apiContext.get(`${this.baseUrl}/store/order/${orderId}`);
    await this.printResponse(response, 'GET');
    return response;
  }

  async deleteOrder(orderId: number): Promise<APIResponse> {
    const response = await this.apiContext.delete(`${this.baseUrl}/store/order/${orderId}`);
    await this.printResponse(response, 'DELETE');
    return response;
  }

  async getInventory(): Promise<APIResponse> {
    const response = await this.apiContext.get(`${this.baseUrl}/store/inventory`);
    await this.printResponse(response, 'GET');
    return response;
  }
} 