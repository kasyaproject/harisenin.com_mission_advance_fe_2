interface IProduct {
  id: number;
  image: string;
  title: string;
  desc: string;
  category: string[];

  author: string;
  authorImage: string;
  authorTitle: string;
  aurhorCompany: string;

  rating: number;
  review: number;
  price: number;
  discount: number;
}

export type { IProduct };
