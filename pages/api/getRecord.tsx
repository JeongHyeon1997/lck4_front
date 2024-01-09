import axios from "axios";

export const getRecord = async (year: Number, month: Number) => {
  try {
    const getRecord = await axios.get("http://localhost:8000/lck4/");
    return getRecord.data;
  } catch (e) {
    throw e;
  }
};
