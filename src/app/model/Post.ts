import { User } from "./User";

export interface CreatePostModel {
  topic: string;
  file: File | null;
  description: string;
}

export interface StoriesPostModel {
  topic: string;
  image: string;
  description: string;
  userId: User;
  _id: string;
}

export interface PaginateStoriesPost{
  postList: StoriesPostModel[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
}


export interface TravelPostModel {
  topic: string;
  image: string[];
  description: string;
  date: string;
  userId: User;
  _id: string;
}

export interface PaginateTravelPost{
  postList: TravelPostModel[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
}
export interface PaginateEvent{
  postList: EventModel[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
}

export interface EventModel {
  topic: string;
  image: string;
  description: string;
  date: string;
  userId: User;
  _id: string;
  price: number;
  type: string;
}