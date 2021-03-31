import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const search = (searchText: string) => async (dispatch: any) => {
  dispatch({
    type: ActionType.SEARCH_REQUEST,
  });

  try {
    const { data } = await axios.get(
      "https://registry.npm.js.org/-/v1/search",
      {
        params: {
          text: searchText,
        },
      }
    );

    const names = data.objects.map((result: any) => {
      return result.package.name;
    });

    dispatch({
      type: ActionType.SEARCH_SUCCESS,
      payload: names,
    });
  } catch (err) {
    dispatch({
      type: ActionType.SEARCH_ERROR,
    });
  }
};
