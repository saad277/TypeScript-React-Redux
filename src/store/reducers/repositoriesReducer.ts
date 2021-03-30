interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: RepositoriesState, action: any) => {
  switch (action.type) {
    case "SEATCH_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
        data: [],
      };

    case "SEATCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
