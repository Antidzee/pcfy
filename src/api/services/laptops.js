import { axiosClient } from "../apiClient";

export function createLaptop(data) {
  return axiosClient.post("/create", JSON.stringify(data));
}

export function fetchLaptops() {
  return axiosClient.get("/laptops");
}

export function fetchLaptop(id) {
  return axiosClient.get(`/laptop${id}`);
}
