import axiosInstance from "../axiosInstance";
import * as actions from "./index";

const apiUrl = process.env.REACT_APP_API_URL;

export const getBooks = async (dispatch) => {
	dispatch(actions.getBookStart());
	try {
		const { data } = await axiosInstance.get(apiUrl + "/books");
		dispatch(actions.getBooksSuccess(data.data));
		return true;
	} catch (error) {
		dispatch(actions.getBooksFailure());
		return false;
	}
};