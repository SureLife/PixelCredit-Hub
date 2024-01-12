export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_IMAGE":
      return { ...state, searchImage: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_UPLOAD_HISTORY":
      return { ...state, uploadHistory: action.payload };
    case "SET_DOWNLOAD_HISTORY":
      return { ...state, downloadHistory: action.payload };
    case "setMembers":
      return { ...state, members: action.payload };
      case "setsingleMember":
      return { ...state, singleMember: action.payload };
    default:
      return state;
  }
};

export const initialState = {
  searchImage: [],
  searchQuery: "",
  user: null,
  uploadHistory: [],
  downloadHistory: [],
  members: [],
  singleMember: [],
};
