export interface UserModel {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  userStatus: number;
}

export class User implements UserModel {
  constructor(
    public id: number,
    public username: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public phone: string,
    public userStatus: number
  ) {}

  static createDefault(): User {
    return new User(
      1,
      'testuser',
      'Test',
      'User',
      'test@test.com',
      'password123',
      '1234567890',
      1
    );
  }
} 