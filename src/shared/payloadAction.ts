import { Action } from "redux";

export default interface PayloadAction<T> extends Action {
  payload: T;
}
