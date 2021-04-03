import { ActionType } from "../action-types";

interface SearchRequest {
  type: ActionType.SEARCH_REQUEST;
}

interface SearchSuccess {
  type: ActionType.SEARCH_SUCCESS;
  payload: any;
}

interface SearchError {
  type: ActionType.SEARCH_ERROR;
  payload: any;
}

export type Action = SearchRequest | SearchSuccess | SearchError;
