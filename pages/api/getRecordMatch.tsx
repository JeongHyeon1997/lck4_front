import axios from "axios";

export const getRecordMatch = async (id: number) => {
  try {
    const getRecordMatch = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ADRESS}/record/match/${id}`
    );
    return getRecordMatch.data;
  } catch (e) {
    throw e;
  }
};
