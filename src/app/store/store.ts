import { createContext, useContext } from "react";
import AdminStore from "./adminStore";
import CommonStore from "./commonStore";
import EventStore from "./eventStore";
import PostStore from "./postStore";
import TravelStore from "./travelStore";
import UserStore from "./userStore";
import ContactStore from "./contactStore";

interface Store {
  userStore: UserStore;
  commonStore: CommonStore;
  postStore: PostStore;
  adminStore: AdminStore;
  travelStore: TravelStore;
  eventStore: EventStore;
  contactStore: ContactStore;
}

export const store: Store = {
  userStore: new UserStore(),
  commonStore: new CommonStore(),
  postStore: new PostStore(),
  adminStore: new AdminStore(),
  travelStore : new TravelStore(),
  eventStore : new EventStore(),
  contactStore : new ContactStore()
};

export const StoreContext = createContext(store);

export const useStore = () => {
    return useContext(StoreContext)
}