import { makeAutoObservable, runInAction } from "mobx";
import agent from "../API/agent";
import { User } from "../model/User";

export default class AdminStore {
  userList: User[] = [];
  test: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  getUserList = async () => {
    try {
      const userList = await agent.Admin.getUserList();
      runInAction(() => (this.userList = userList));
    } catch (error) {
      throw error;
    }
  };

  editUserStatus = async (userId: string) => {
    try {
      await agent.Admin.editUserStatus(userId);
      this.getUserList()
      runInAction(() => this.test = true)
    } catch (err) {
      throw err;
    }
  };
}
