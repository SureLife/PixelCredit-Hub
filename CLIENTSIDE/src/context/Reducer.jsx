export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_IMAGE":
      return { ...state, searchImage: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

export const initialState = {
  searchImage: [],
  searchQuery: "",
};
