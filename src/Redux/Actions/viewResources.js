import { viewResourcesConstants } from "../constants";
import axios from "../axios";

export const getAllResources = () => {
  return async (dispatch) => {
    dispatch({
      type: viewResourcesConstants.GET_ALL_RESOURCES_REQEUST,
    });

    const res = await axios.get(`/erp/learning-resources`);
    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: viewResourcesConstants.GET_ALL_RESOURCES_SUCCESS,
        payload: {
          resources_list: result,
        },
      });
    } else {
      dispatch({
        type: viewResourcesConstants.GET_ALL_RESOURCES_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
