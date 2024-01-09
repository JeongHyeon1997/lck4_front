import axios from "axios";

export const postUserName = async (userName: String) => {
  const postUserName = await axios.post(
    `${process.env.NEXT_PUBLIC_API_ADRESS}/lol`,
    {
      userName: userName,
    }
  );
  return postUserName;
};
