import { RootState } from "./rootState";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<ReturnType>
>;
