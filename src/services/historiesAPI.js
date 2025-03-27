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

export { listWordCompleted, listWordSend, totalJoin };
