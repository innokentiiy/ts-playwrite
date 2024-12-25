import { test as base, request, APIRequestContext } from '@playwright/test';
import { UserAPI } from '../api/user.api';
import { PetAPI } from '../api/pet.api';
import { StoreAPI } from '../api/store.api';
import { URL } from '../vars';

type APIFixtures = {
  userAPI: UserAPI;
  petAPI: PetAPI;
  storeAPI: StoreAPI;
  apiContext: APIRequestContext;
};

export const test = base.extend<APIFixtures>({
  apiContext: async ({}, use) => {
    const apiContext = await request.newContext();
    await use(apiContext);
    await apiContext.dispose();
  },

  userAPI: async ({ apiContext }, use) => {
    const userAPI = new UserAPI(apiContext, URL);
    await use(userAPI);
  },

  petAPI: async ({ apiContext }, use) => {
    const petAPI = new PetAPI(apiContext, URL);
    await use(petAPI);
  },

  storeAPI: async ({ apiContext }, use) => {
    const storeAPI = new StoreAPI(apiContext, URL);
    await use(storeAPI);
  },
});

export { expect } from '@playwright/test'; 