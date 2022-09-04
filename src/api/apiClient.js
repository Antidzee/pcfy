import axios from "axios";

const axiosClient = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL || "https://pcfy.redberryinternship.ge/api",
  headers: {
    Accept: "application/json",
    Authorization: `${process.env.REACT_APP_TOKEN}`,
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    if (res.status === 401) {
      window.location.href = "https://example.com/login";
    }
    console.error("Looks like there was a problem. Status Code: " + res.status);
    return Promise.reject(error);
  }
);

export { axiosClient };
