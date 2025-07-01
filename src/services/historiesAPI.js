import axoisBase from "./axiosBase";

const endpoint = "/account/histories";

async function myCode() {
  try {
    const res = await axoisBase.get(`${endpoint}/codes`);
    return res;
  } catch (error) {
    console.error("Error in myCode:", error);
    throw error;
  }
}

async function receiveWord(params) {
  try {
    const res = await axoisBase.get(`${endpoint}/words`, {
      params,
    });
    return res;
  } catch (error) {
    console.error("Error in receivedCode:", error);
    throw error;
  }
}

async function missionHistory(params) {
  try {
    const res = await axoisBase.get(`${endpoint}/missions`, {
      params,
    });
    return res;
  } catch (error) {
    console.error("Error in missionHistory:", error);
    throw error;
  }
}

async function sendWord(params) {
  try {
    const res = await axoisBase.get(`${endpoint}/word-sends`, {
      params,
    });
    return res;
  } catch (error) {
    console.error("Error in sendWord:", error);
    throw error;
  }
}

export { myCode, receiveWord, missionHistory, sendWord };
