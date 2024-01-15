import axios from "axios";

export const getRecordResults = async (id: number) => {
  try {
    const getRecord = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ADRESS}/record/${id}`
    );
    return getRecord.data;
  } catch (e) {
    throw e;
  }
};
