import axios from "axios";
import { routes } from "./base";

export const toggleStarResult = (id, newStarredValue) => {
  return axios
    .patch(routes.toggleStarValue(id), { starred: newStarredValue })
    .then((response) => response.data);
};
