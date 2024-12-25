import { test, expect } from './fixtures/api.fixture';
import { User } from './models/user.model';

test.describe('User API Tests', () => {
  let testUser: User;

  test.beforeEach(() => {
    testUser = User.createDefault();
  });

  test('complete user workflow', async ({ userAPI }) => {
    await test.step('create user', async () => {
      const response = await userAPI.createUser(testUser);
      expect(response.status()).toBe(200);
    });

    await test.step('get user', async () => {
      const response = await userAPI.getUser(testUser.username);
      expect(response.status()).toBe(200);
    });

    await test.step('login user', async () => {
      const response = await userAPI.loginUser(testUser.username, testUser.password);
      expect(response.status()).toBe(200);
    });

    await test.step('logout user', async () => {
      const response = await userAPI.logoutUser();
      expect(response.status()).toBe(200);
    });

    await test.step('delete user', async () => {
      const response = await userAPI.deleteUser(testUser.username);
      expect(response.status()).toBe(200);
    });

    await test.step('verify user is deleted', async () => {
      const response = await userAPI.getUser(testUser.username);
      expect(response.status()).toBe(404);
    });

    await test.step('try to delete already deleted user', async () => {
      const response = await userAPI.deleteUser(testUser.username);
      expect(response.status()).toBe(404);
    });
  });
});
