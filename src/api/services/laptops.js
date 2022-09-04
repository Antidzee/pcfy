import { axiosClient } from "../apiClient";

export function create(data) {
  console.log(data);
  return axiosClient.post("/laptop/create", JSON.stringify(data));
}

export function fetchLaptops() {
  return axiosClient.get(`/laptops?token=${process.env.REACT_APP_TOKEN}`);
}

export function fetchLaptop(id) {
  return axiosClient.get(`/laptop${id}`);
}
