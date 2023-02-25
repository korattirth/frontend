import { createContext, useContext } from "react";
import AdminStore from "./adminStore";
import CommonStore from "./commonStore";
import PostStore from "./postStore";
import UserStore from "./userStore";

interface Store {
  userStore: UserStore;
  commonStore: CommonStore;
  postStore: PostStore;
  adminStore: AdminStore;
}

export const store: Store = {
  userStore: new UserStore(),
  commonStore: new CommonStore(),
  postStore: new PostStore(),
  adminStore : new AdminStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
    return useContext(StoreContext)
}