import axoisBase from "./axiosBase";

const endpoint = "/auth";

async function login(data) {
  try {
    const res = await axoisBase.post(`${endpoint}/login`, data);
    return res;
  } catch (error) {
    console.error("Error in getMe:", error);
    throw error;
  }
}

export { login };
