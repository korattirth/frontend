import { makeAutoObservable, runInAction } from "mobx";
import { history } from "../..";
import agent from "../API/agent";
import { LoginForm, User } from "../model/User";
import { store } from "./store";

export default class UserStore {
  user: User | null = null;
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  signUp = async (creds: User) => {
    this.loading = true;
    try {
      await agent.Account.signUp(creds);
      history.push("/sign-in");
    } catch (error) {
      throw error;
    }
    finally {
      runInAction(() => {
        this.loading = false;
      })
    }
  };

  signIn = async (creds: LoginForm) => {
    this.loading = true;
    try {
      const user = await agent.Account.signIn(creds);
      store.commonStore.setToken(user.token);
      runInAction(() => (this.user = user.user));
      history.push('/')
    } catch (error) {
      throw error;
    }
    finally {
      runInAction(() => {
        this.loading = false;
      })
    }
  };

  logout = async () => {
    store.commonStore.setToken(null);
    this.user = null;
  };

  getCurrentUser = async () => {
    try {
      const user = await agent.Account.currentUser();

      runInAction(() => {
        this.user = user;
      })
    }
    catch (err) {
      throw err
    }
    
  }
}
