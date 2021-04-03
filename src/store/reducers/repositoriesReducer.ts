import { Action } from "../actions";
import { ActionType } from "../action-types";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const repositoriesReducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        data: [],
      };

    case ActionType.SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };

    case ActionType.SEARCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      };

    default:
      return state;
  }
};

export default repositoriesReducer;
