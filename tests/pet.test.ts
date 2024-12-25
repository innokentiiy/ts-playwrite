import { test, expect } from './fixtures/api.fixture';
import { Pet } from './models/pet.model';

test.describe('Pet API Tests', () => {
  let testPet: Pet;

  test.beforeEach(() => {
    testPet = Pet.createDefault();
  });

  test('complete pet workflow', async ({ petAPI }) => {
    await test.step('add new pet', async () => {
      const response = await petAPI.addPet(testPet);
      expect(response.status()).toBe(200);
    });

    await test.step('get pet', async () => {
      const response = await petAPI.getPet(testPet.id);
      expect(response.status()).toBe(200);
    });

    await test.step('update pet', async () => {
      testPet.name = 'Updated Dog';
      const response = await petAPI.updatePet(testPet);
      expect(response.status()).toBe(200);
    });

    await test.step('find by status', async () => {
      const response = await petAPI.findByStatus('available');
      expect(response.status()).toBe(200);
    });

    await test.step('delete pet', async () => {
      const response = await petAPI.deletePet(testPet.id);
      expect(response.status()).toBe(200);
    });
  });
});