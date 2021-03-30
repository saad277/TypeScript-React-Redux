import { ActionType } from "../action-types";

interface SearchRequest {
  type: ActionType.SEARCH_REQUEST;
}

interface SearchSuccess {
  type: ActionType.SEARCH_SUCCESS;
  payload: string[];
}

interface SearchError {
  type: ActionType.SEARCH_ERROR;
  payload: string;
}

export type Action = SearchRequest | SearchSuccess | SearchError;
