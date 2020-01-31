import { LOADING_RICH, LOAD_RICH, LOAD_PREVIEW } from "./rich.types";

const initialState = {
  items: [],
  loading: false,
  preview: []
};

const richReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_RICH: {
      return {
        ...state,
        loading: true
      };
    }
    case LOAD_RICH: {
      return {
        ...state,
        loading: false,
        items: [...action.payload]
      };
    }
    case LOAD_PREVIEW: {
      return {
        ...state,
        loading: false,
        preview: [...action.payload]
      };
    }
    default:
      return state;
  }
};

export default richReducer;
