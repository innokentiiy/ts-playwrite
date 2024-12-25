import { test, expect } from './fixtures/api.fixture';
import { Order } from './models/store.model';

test.describe('Store API Tests', () => {
  let testOrder: Order;

  test.beforeEach(() => {
    testOrder = Order.createDefault();
  });

  test('complete store workflow', async ({ storeAPI }) => {
    await test.step('place order', async () => {
      const response = await storeAPI.placeOrder(testOrder);
      expect(response.status()).toBe(200);
    });

    await test.step('get order', async () => {
      const response = await storeAPI.getOrder(testOrder.id);
      expect(response.status()).toBe(200);
    });

    await test.step('get inventory', async () => {
      const response = await storeAPI.getInventory();
      expect(response.status()).toBe(200);
    });

    await test.step('delete order', async () => {
      const response = await storeAPI.deleteOrder(testOrder.id);
      expect(response.status()).toBe(200);
    });

    await test.step('verify order is deleted', async () => {
      const response = await storeAPI.getOrder(testOrder.id);
      expect(response.status()).toBe(404);
    });
  });
});