import axios from "axios";

export const postUserName = async (
  userName: string,
  tag: string,
  password: string
) => {
  const postUserName = await axios.post(
    `${process.env.NEXT_PUBLIC_API_ADRESS}/lol`,
    {
      userName: userName,
      tag: tag,
      password: password,
    }
  );
  return postUserName;
};
