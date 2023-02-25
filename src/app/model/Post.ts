export interface PostModel {
  fName: string;
  lName: string;
  topic: string;
  image: string;
  description: string;
  role: number;
}

export interface CreatePostModel {
  topic: string;
  file: File | null;
  description: string;
}
