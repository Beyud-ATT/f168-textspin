import axoisBase from "./axiosBase";

const endpoint = "/account";

async function getMe() {
  try {
    const res = await axoisBase.get(`${endpoint}/me`);
    return res;
  } catch (error) {
    console.error("Error in getMe:", error);
    throw error;
  }
}

async function sendAndRecvHistories() {
  try {
    const res = await axoisBase.get(`${endpoint}/send-and-recv-histories`);
    return res;
  } catch (error) {
    console.error("Error in updateAccount:", error);
    throw error;
  }
}

async function randomWord() {
  try {
    const res = await axoisBase.post(`${endpoint}/random-word`);
    return res;
  } catch (error) {
    console.error("Error in randomWord:", error);
    throw error;
  }
}

async function matchWord() {
  try {
    const res = await axoisBase.post(`${endpoint}/match-word`);
    return res;
  } catch (error) {
    console.error("Error in matchWord:", error);
    throw error;
  }
}

async function sendWord(data) {
  try {
    const res = await axoisBase.post(`${endpoint}/send-word`, data);
    return res;
  } catch (error) {
    console.error("Error in sendWord:", error);
    throw error;
  }
}

export { getMe, sendAndRecvHistories, randomWord, matchWord, sendWord };
