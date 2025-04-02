import axoisBase from "./axiosBase";

const endpoint = "/histories";

async function listWordCompleted() {
  try {
    const res = await axoisBase.get(`${endpoint}/list-word-completed`);
    return res;
  } catch (error) {
    console.error("Error in listWordCompleted:", error);
    throw error;
  }
}

async function listWordSend() {
  try {
    const res = await axoisBase.get(`${endpoint}/list-word-send`);
    return res;
  } catch (error) {
    console.error("Error in listWordSend:", error);
    throw error;
  }
}

async function totalJoin() {
  try {
    const res = await axoisBase.get(`${endpoint}/total-join`);
    return res;
  } catch (error) {
    console.error("Error in totalJoin:", error);
    throw error;
  }
}

async function myCode() {
  try {
    const res = await axoisBase.get(`${endpoint}/list-code/me`);
    return res;
  } catch (error) {
    console.error("Error in myCode:", error);
    throw error;
  }
}

async function receiveWord(params) {
  try {
    const res = await axoisBase.get(`${endpoint}/list-word/me`, {
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
    const res = await axoisBase.get(`${endpoint}/list-mission/me`, {
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
    const res = await axoisBase.get(`${endpoint}/list-word-send/me`, {
      params,
    });
    return res;
  } catch (error) {
    console.error("Error in sendWord:", error);
    throw error;
  }
}

export {
  listWordCompleted,
  listWordSend,
  totalJoin,
  myCode,
  receiveWord,
  missionHistory,
  sendWord,
};
