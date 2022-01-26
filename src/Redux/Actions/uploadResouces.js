import { uploadResourcesConstants } from "../constants";
import axios from "../axios";

export const uploadResources = (resources) => {
  return async (dispatch) => {
    dispatch({ type: uploadResourcesConstants.ADD_NEW_RESOURCES_REQEUST });
    const res = await axios.part(`/erp/upload-learing-resource`, resources);

    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: uploadResourcesConstants.ADD_NEW_RESOURCES_SUCCESS,
        payload: {
          admin: result,
        },
      });
    } else {
      dispatch({
        type: uploadResourcesConstants.ADD_NEW_RESOURCES_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
