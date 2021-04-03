import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const search = (searchText: string) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch({
    type: ActionType.SEARCH_REQUEST,
  });

  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
      {
        params: {
          text: searchText,
        },
      }
    );

    dispatch({
      type: ActionType.SEARCH_SUCCESS,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: ActionType.SEARCH_ERROR,
      payload: err,
    });
  }
};
