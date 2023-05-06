import { makeAutoObservable, runInAction } from "mobx";
import agent from "../API/agent";
import { User } from "../model/User";
import { EventModel } from "../model/Post";
import { toast } from "react-toastify";

export default class ContactStore {
  questions : any[] = [];
  students : User[] = [];
  events : EventModel[] = [];
  loader:boolean = false;
  loading:string = '';

  constructor() {
    makeAutoObservable(this);
  }

  postQuestion = async (values:any) => {
    try {
      this.loader = true;
       await agent.Contact.postQuestion(values);
    } catch (error) {
      throw error;
    }
    finally{
      this.loader = false;
    }
  };

  postAnswer = async (values:any,questionId:string) => {
    try {
      this.loading = questionId;
       await agent.Contact.postAnswer(values,questionId);
    } catch (error) {
      throw error;
    }
    finally{
      this.loading = ''
    }
  };

  getQuestions = async () => {
    try {
      const questions = await agent.Contact.getQuestion();
      runInAction(() => this.questions = questions)
    } catch (err) {
      throw err;
    }
  };
  getQuestionsForAdmin = async () => {
    try {
      const questions = await agent.Contact.getQuestionForAdmin();
      runInAction(() => this.questions = questions)
    } catch (err) {
      throw err;
    }
  };

  getStudentList = async () => {
    try {
      const students = await agent.Contact.getStudentList();
      runInAction(() => this.students = students);
    } catch (err) {
      throw err;
    }
  }
  getEventList = async () => {
    try {
      const students = await agent.Contact.getEventList();
      runInAction(() => this.events = students);
    } catch (err) {
      throw err;
    }
  }
  postSuggestedStudent = async (data:any) => {
    try {
      this.loader = true
      await agent.Contact.postSuggestedData(data);
    } catch (err) {
      throw err;
    }
    finally{
      this.loader = false
    }
  }
}
