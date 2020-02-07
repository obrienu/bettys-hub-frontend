import {
  LOADING_RICH,
  LOAD_RICH,
  LOAD_PREVIEW,
  LOAD_SINGLE_PRODUCT
} from "./rich.types";

const initialState = {
  items: [],
  loading: false,
  preview: [],
  showItem: null
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
    case LOAD_SINGLE_PRODUCT: {
      return {
        ...state,
        loading: false,
        showItem: action.payload
      };
    }
    default:
      return state;
  }
};

export default richReducer;
