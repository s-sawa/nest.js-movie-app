export enum Rating {
  Poor = 1,
  Fair = 2,
  Good = 3,
  VeryGood = 4,
  Excellent = 5,
}

export interface Movie {
  id: number;
  title: string;
  description: string;
  rating: number;
  review: string;
}
