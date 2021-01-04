// this will generate action objects coressponding to different counter actions
import { counterActionTypes } from "../constants/counterAction.types";

const actionCountergenerator = (actionType) => {
  switch (actionType) {
    case counterActionTypes.INCREMENT:
      return { type: counterActionTypes.INCREMENT };
    case counterActionTypes.DECREMENT:
      return { type: counterActionTypes.DECREMENT };
    default:
      return {
        type: "Invalid Action",
      };
  }
};

export default actionCountergenerator;
