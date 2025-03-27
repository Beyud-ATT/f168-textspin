import axoisBase from "./axiosBase";

const endpoint = "/commons";

async function getMissions() {
  try {
    const res = await axoisBase.get(`${endpoint}/missions`);
    return res;
  } catch (error) {
    console.error("Error in getMissions:", error);
    throw error;
  }
}

export { getMissions };
