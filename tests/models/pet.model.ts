export interface Category {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface PetModel {
  id: number;
  category: Category;
  name: string;
  photoUrls: string[];
  tags: Tag[];
  status: 'available' | 'pending' | 'sold';
}

export class Pet implements PetModel {
  constructor(
    public id: number,
    public category: Category,
    public name: string,
    public photoUrls: string[],
    public tags: Tag[],
    public status: 'available' | 'pending' | 'sold'
  ) {}

  static createDefault(): Pet {
    return new Pet(
      1,
      { id: 1, name: 'Dogs' },
      'Doggie',
      ['https://example.com/photo.jpg'],
      [{ id: 1, name: 'tag1' }],
      'available'
    );
  }
} 