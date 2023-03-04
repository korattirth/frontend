import { makeAutoObservable, runInAction } from "mobx";
import { history } from "../..";
import agent from "../API/agent";
import { PaginateTravelPost, TravelPostModel } from "../model/Post";

export default class TravelStore {
  travelPosts: PaginateTravelPost | null = null;
  travelPost: TravelPostModel | null = null;
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  createPost = async (value: FormData) => {
    this.loading = true;
    try {
      await agent.TravelAPI.createTravelPost(value);
      history.push("/travel-post-list");
    } catch (error) {
      throw error;
    } finally {
      this.loading = false;
    }
  };

  getAllPost = async (currentPage : number , pageSize? : number) => {
    try {
        const post = await agent.TravelAPI.getTravelPostList(currentPage,pageSize);
      runInAction(() => (this.travelPosts = post));
    } catch (error) {
      throw error;
    }
  };

  getSinglePost = async (productId :string) => {
    try {
      const post = await agent.TravelAPI.getTravelPost(productId);
      runInAction(() => this.travelPost = post)
    } catch (error) {
      throw error
    }
  }

  clearSelctedPost = () => {
    this.travelPost = null;
  }
}
