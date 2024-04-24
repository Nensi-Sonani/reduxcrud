import axios from "axios";
import { ERROR, LOADING, SUCCESS } from "./ActionType";

const Action = () => async (dispatch) => {
  dispatch({ type: LOADING });

  try {
    const res = await axios.get("http://localhost:5050/items");
    dispatch({ type: SUCCESS, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: ERROR });
  }
};
export default Action;
