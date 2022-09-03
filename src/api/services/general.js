import { axiosClient } from "../apiClient";

export function fetchTeams() {
  return axiosClient.get("/teams");
}

export function fetchBrands() {
  return axiosClient.get("/brands");
}

export function fetchCpus() {
  return axiosClient.get("/cpus");
}

export function fetchPositions() {
  return axiosClient.get("/positions");
}
