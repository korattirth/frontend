import { makeAutoObservable, runInAction } from "mobx";
import { history } from "../..";
import agent from "../API/agent";
import { EventModel, PaginateEvent, StoriesPostModel } from "../model/Post";
import { Events } from "../model/User";

export default class EventStore {
  highlightedEvents: EventModel[] = [];
  events: PaginateEvent | null = null;
  singlePost: StoriesPostModel | null = null;
  loading: boolean = false;
  event: EventModel | null = null;
  loadAddCart: string = "";
  clientSecret: string = "";
  
  constructor() {
    makeAutoObservable(this);
  }

  createPost = async (value: FormData) => {
    this.loading = true;
    try {
      await agent.EventAPI.createEvent(value);
      history.push("/event-list");
    } catch (error) {
      throw error;
    } finally {
      this.loading = false;
    }
  };

  getHighlightedEventList = async () => {
    try {
      const events = await agent.EventAPI.getHighlightedEventList();
      runInAction(() => {
        this.highlightedEvents = events;
      });
    } catch (error) {
      throw error;
    }
  };

  getEventList = async (currentPage: number, pageSize?: number) => {
    try {
      const events = await agent.EventAPI.getEventList(currentPage, pageSize);
      runInAction(() => (this.events = events));
    } catch (error) {
      throw error;
    }
  };

  getEvent = async (eventId: string) => {
    try {
      const event = await agent.EventAPI.getEvent(eventId);
      runInAction(() => (this.event = event));
    } catch (error) {
      throw error;
    }
  };

  clearSelectedEvent = () => {
    this.event = null;
  };

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
  removeEventToCart = async (eventId: string) => {
    this.loadAddCart = eventId;
    try {
      await agent.EventAPI.removeEventToCart(eventId);
    } catch (error) {
      throw error;
    } finally {
      this.loadAddCart = "";
    }
  };

  eventPayment =async (values:Events[]) => {
    try {
      const url = await agent.Payment.eventPayment(values);
      history.push(url.url)
    } catch (error) {
      throw error
    }
  }
}
