export interface Billboard {
  id: string;
  label: string;
  images: Image[];
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Image {
  id: string;
  url: string;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  size: Size;
  color: Color;
  isFeatured: boolean;
  isArchived: boolean;
  images: Image[];
}
