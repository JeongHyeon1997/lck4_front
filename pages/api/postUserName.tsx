import axios from "axios";

export const postUserName = async (userName: String) => {
  const postUserName = await axios.post("http://localhost:8000/lck4/lol", {
    userName: userName,
  });
  return postUserName;
};
