// this will generate action objects coressponding to different counter actions
import { counterActionTypes } from "../constants/counterAction.types";

const actionCountergenerator = (actionType, payload = {}) => {
  switch (actionType) {
    case counterActionTypes.INCREMENT:
      return { type: counterActionTypes.INCREMENT, payload: { ...payload } };
    case counterActionTypes.DECREMENT:
      return { type: counterActionTypes.DECREMENT, payload: { ...payload } };
    default:
      return {
        type: "Invalid Action",
      };
  }
};

export default actionCountergenerator;
