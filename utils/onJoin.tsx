import { postUserName } from "@/pages/api/postUserName";

export const onJoin = async (
  userName: string,
  tag: string,
  password: string
) => {
  try {
    if (userName.length < 1) {
      return "userName is null";
    }
    if (password.length < 1) {
      return "password is null";
    }
    const res = await postUserName(userName, tag, password);

    if (res.status === 200) {
      return "success";
    } else if (res.status === 500) {
      return "false";
    } else {
      return "false";
    }
  } catch (e) {
    return e;
  }
};
