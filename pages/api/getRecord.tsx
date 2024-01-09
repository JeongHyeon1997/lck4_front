import axios from "axios";

export const getRecord = async (year: number, month: number) => {
  try {
    const getRecord = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ADRESS}/${year}/${month}`
    );
    return getRecord.data;
  } catch (e) {
    throw e;
  }
};
