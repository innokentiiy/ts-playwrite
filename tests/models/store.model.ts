export interface OrderModel {
  id: number;
  petId: number;
  quantity: number;
  shipDate: string;
  status: 'placed' | 'approved' | 'delivered';
  complete: boolean;
}

export class Order implements OrderModel {
  constructor(
    public id: number,
    public petId: number,
    public quantity: number,
    public shipDate: string,
    public status: 'placed' | 'approved' | 'delivered',
    public complete: boolean
  ) {}

  static createDefault(): Order {
    return new Order(
      1,
      1,
      1,
      new Date().toISOString(),
      'placed',
      false
    );
  }
} 