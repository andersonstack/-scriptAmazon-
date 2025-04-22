import axios from "axios";
import showError from "../js/error";

const getApi = async (keyword) => {
  if (!keyword) {
    showError();
    return;
  }

  const response = await axios.get(
    `http://localhost:3000/api/scrape?k=${encodeURIComponent(keyword)}`
  );
  const data = response.data;
  return data;
};

export default getApi;
