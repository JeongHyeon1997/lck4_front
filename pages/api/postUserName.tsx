import axios from "axios";

export const postUserName = async (userName: string, password: string) => {
  const postUserName = await axios.post(
    `${process.env.NEXT_PUBLIC_API_ADRESS}/lol`,
    {
      userName: userName,
      password: password,
    }
  );
  return postUserName;
};
