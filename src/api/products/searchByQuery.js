import axios from "axios";
import { routes } from "./base";

export const searchByQuery = (searchQuery) => {
  return axios
    .get(routes.searchByQuery({ query: searchQuery }))
    .then((response) => response.data);
};
