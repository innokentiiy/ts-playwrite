import { APIRequestContext, APIResponse } from '@playwright/test';

export abstract class BaseAPI {
  constructor(protected apiContext: APIRequestContext, protected baseUrl: string) {}

  protected async printResponse(response: APIResponse, responseMethod: string, data: any = 'no data') {
    let responseData: any;
    const responseCode = await response.status();
    const responseHeaders = await response.headers();
    const responseEndpoint = await response.url();

    try {
      responseData = await response.json();
    } catch (error) {
      responseData = 'Response body is not JSON or is empty';
    }

    console.log('\nURL: ', responseEndpoint);
    console.log('Method: ', responseMethod)
    console.log('Data: ', data);
    console.log('Code: ', responseCode);
    console.log('Response:\n', responseData);
    console.log('Headers:\n', responseHeaders);
    console.log('\n----------------------------------------');
  }
} 