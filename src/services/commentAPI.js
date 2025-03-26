import axoisBase from "./axiosBase";

const endpoint = "/comments";

async function getComments() {
  try {
    const res = await axoisBase.get(`${endpoint}`);
    return res;
  } catch (error) {
    console.error("Error in getComments:", error);
    throw error;
  }
}

async function submitComments(data) {
  try {
    const res = await axoisBase.post(`${endpoint}`, data);
    return res;
  } catch (error) {
    console.error("Error in submitComments:", error);
    throw error;
  }
}

export { submitComments, getComments };
