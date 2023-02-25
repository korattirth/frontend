import { makeAutoObservable, runInAction } from "mobx";
import { history } from "../..";
import agent from "../API/agent";
import { PostModel } from "../model/Post";

export default class PostStore {
  post: PostModel[] | null = null;
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

  getAllPost = async () => {
    try {
      const post = await agent.PostAPI.getAllPost();
      runInAction(() => (this.post = post));
    } catch (error) {
      throw error;
    }
  };
}
