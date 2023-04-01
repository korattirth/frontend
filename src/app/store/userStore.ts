import { makeAutoObservable, runInAction } from "mobx";
import { history } from "../..";
import agent from "../API/agent";
import { LoginForm, Orders, User } from "../model/User";
import { store } from "./store";

export default class UserStore {
  user: User | null = null;
  loading: boolean = false;
  imgBtnLoading: boolean = false;
  loadAddCart: string = "";
  orders: Orders[] = [];

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
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  signIn = async (creds: LoginForm) => {
    this.loading = true;
    try {
      const user = await agent.Account.signIn(creds);
      store.commonStore.setToken(user.token);
      runInAction(() => (this.user = user.user));
      history.push("/");
    } catch (error) {
      throw error;
    } finally {
      runInAction(() => {
        this.loading = false;
      });
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
      });
    } catch (err) {
      throw err;
    }
  };

  editUser = async (user: User, userId: string) => {
    this.loading = true;
    try {
      const edituser = await agent.Account.editUser(user, userId);
      runInAction(() => (this.user = edituser));
    } catch (error) {
      throw error;
    } finally {
      runInAction(() => (this.loading = false));
    }
  };

  uploadUserImage = async (value: FormData, userId: string) => {
    this.imgBtnLoading = true;
    try {
      const image = await agent.Account.uploadImage(value, userId);
      runInAction(() => {
        if (this.user) {
          this.user.image = image;
        }
      });
    } catch (error) {
      throw error;
    }
    finally {
      runInAction(() => this.imgBtnLoading = false)
    }
  };

  getMyOrders = async() => {
    try {
      const orders = await agent.Account.myOrders();
      runInAction(() => this.orders = orders)
    } catch (error) {
      throw error;
    }
  }

  addEventToCart = async (eventId: string) => {
    this.loadAddCart = eventId;
    try {
      await agent.EventAPI.addEventToCart(eventId);
    } catch (error) {
      throw error;
    } finally {
      this.loadAddCart = "";
    }
  };
}
