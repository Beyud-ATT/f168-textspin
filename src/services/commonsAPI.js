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

async function getTopUsers() {
  try {
    const res = await axoisBase.get(`${endpoint}/top-users`);
    return res;
  } catch (error) {
    console.error("Error in getTopUsers:", error);
    throw error;
  }
}

async function getComments() {
  try {
    const res = await axoisBase.get(`${endpoint}/comments`);
    return res;
  } catch (error) {
    console.error("Error in getComments:", error);
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

export {
  getMissions,
  getTopUsers,
  getComments,
  totalJoin,
  listWordCompleted,
  listWordSend,
};
