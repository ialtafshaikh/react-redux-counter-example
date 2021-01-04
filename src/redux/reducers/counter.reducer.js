import { counterActionTypes } from "../constants/counterAction.types";

const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case counterActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };

    case counterActionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };

    default:
      return { ...state };
  }
};

export default counterReducer;
