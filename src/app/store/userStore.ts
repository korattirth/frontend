import { makeAutoObservable, runInAction } from "mobx";
import { history } from "../..";
import agent from "../API/agent";
import { LoginForm, LoginUser, User } from "../model/User";
import { store } from "./store";

export default class UserStore {
  loginUser: LoginUser | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  signUp = async (creds: User) => {
    try {
      await agent.Account.signUp(creds);
      history.push("/sign-in");
    } catch (error) {
      throw error;
    }
  };

  signIn = async (creds: LoginForm) => {
    try {
      const user = await agent.Account.signIn(creds);
      console.log(user);
      store.commonStore.setToken(user.token);
      runInAction(() => (this.loginUser = user));
    } catch (error) {
      throw error;
    }
  };

  logout = async () => {
    store.commonStore.setToken(null);
    this.loginUser = null;
  };
}
