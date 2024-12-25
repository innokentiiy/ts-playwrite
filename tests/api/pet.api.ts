import { APIRequestContext, APIResponse } from '@playwright/test';
import { Pet } from '../models/pet.model';
import { BaseAPI } from './base.api';

export class PetAPI extends BaseAPI {
  async addPet(pet: Pet): Promise<APIResponse> {
    const response = await this.apiContext.post(`${this.baseUrl}/pet`, {
      data: pet
    });
    await this.printResponse(response, 'POST', pet);
    return response;
  }

  async getPet(petId: number): Promise<APIResponse> {
    const response = await this.apiContext.get(`${this.baseUrl}/pet/${petId}`);
    await this.printResponse(response, 'GET');
    return response;
  }

  async updatePet(pet: Pet): Promise<APIResponse> {
    const response = await this.apiContext.put(`${this.baseUrl}/pet`, {
      data: pet
    });
    await this.printResponse(response, 'PUT', pet);
    return response;
  }

  async deletePet(petId: number): Promise<APIResponse> {
    const response = await this.apiContext.delete(`${this.baseUrl}/pet/${petId}`);
    await this.printResponse(response, 'DELETE');
    return response;
  }

  async findByStatus(status: 'available' | 'pending' | 'sold'): Promise<APIResponse> {
    const response = await this.apiContext.get(`${this.baseUrl}/pet/findByStatus?status=${status}`);
    await this.printResponse(response, 'GET');
    return response;
  }
} 