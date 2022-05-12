import axios from "axios";
export const cryptoTable = "https://api2.binance.com/api/v3/ticker/24hr";
export const popData ="https://datausa.io/api/data?drilldowns=Nation&measures=Population";
export const uniData = "https://api.jikan.moe/v3/search/anime?q=naruto";
export const findPet = "https://dog.ceo/api/breeds/image/random";
export const activity = "https://www.boredapi.com/api/activity";

export let timoutReq = 10000;

export const axiosCryptoTable = async (method) => {
  try {
    let res = await axios({
      method,
      url: `${cryptoTable}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res) {
      return res.data;
    }
  } catch (error) {
    if (error.message === "timeout of 100ms exceeded") {
      return { er: "slowNetwork" };
    }
    return { er: error.response.data };
  }
};

export const axiosPopData = async (method) => {
  try {
    let res = await axios({
      method: `${method}`,
      url: `${popData}`,
      timeout: timoutReq,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res) {
      return res.data;
    }
  } catch (error) {
    if (error.message === "timeout of 100ms exceeded") {
      return { er: "slowNetwork" };
    }
    return { er: error.response.data };
  }
};

export const axiosUniData = async (method) => {
  try {
    let res = await axios({
      method: `${method}`,
      url: `${uniData}`,
      timeout: timoutReq,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res) {
      return res.data;
    }
  } catch (error) {
    if (error.message === "timeout of 100ms exceeded") {
      return { er: "slowNetwork" };
    }
    return { er: error.response.data };
  }
};
export const axiosFindPet = async (method) => {
  try {
    let res = await axios({
      method: `${method}`,
      url: `${findPet}`,
      timeout: timoutReq,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res) {
      return res.data;
    }
  } catch (error) {
    if (error.message === "timeout of 100ms exceeded") {
      return { er: "slowNetwork" };
    }
    return { er: error.response.data };
  }
};
export const axiosActivity = async (method) => {
  try {
    let res = await axios({
      method: `${method}`,
      url: `${activity}`,
      timeout: timoutReq,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res) {
      return res.data;
    }
  } catch (error) {
    if (error.message === "timeout of 100ms exceeded") {
      return { er: "slowNetwork" };
    }
    return { er: error.response.data };
  }
};