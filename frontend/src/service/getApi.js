import axios from "axios";

const getApi = async () => {
  const response = await axios.get(
    "http://localhost:3000/api/scrape?k=teclado"
  );
  const data = response.data;
  console.log(data);
  return data;
};

export default getApi;
