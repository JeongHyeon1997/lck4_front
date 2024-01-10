import axios from "axios";

export const getUserList = async () => {
  try {
    const getUserList = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ADRESS}/`
    );
    return getUserList.data;
  } catch (e) {
    throw e;
  }
};
