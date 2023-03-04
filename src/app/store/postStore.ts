import { makeAutoObservable, runInAction } from "mobx";
import { history } from "../..";
import agent from "../API/agent";
import { PaginateStoriesPost, StoriesPostModel } from "../model/Post";

export default class PostStore {
  posts: PaginateStoriesPost | undefined = undefined;
  singlePost: StoriesPostModel | null = null;
  loading: boolean = false;


  constructor() {
    makeAutoObservable(this);
  }

  createPost = async (value: FormData) => {
    this.loading = true;
    try {
      await agent.PostAPI.createPost(value);
      history.push("/post-list");
    } catch (error) {
      throw error;
    }
    finally {
      this.loading = false;
    }
  };

  getAllPost = async (currentPage : number , pageSize? : number) => {
    try {
      const post = await agent.PostAPI.getAllPost(currentPage,pageSize);
      runInAction(() => {
        this.posts = post;
      });
    } catch (error) {
      throw error;
    }
  };

  getSinglePost = async (postId :string) => {
    try {
      const post = await agent.PostAPI.getPost(postId);
      runInAction(() => this.singlePost = post)
    } catch (error) {
      throw error
    }
  }

  clearSelctedPost = () => {
    this.singlePost = null;
  }
}
