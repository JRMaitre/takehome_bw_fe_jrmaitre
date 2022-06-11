import axios from "axios";
import { routes } from "./base";

const TOTAL_COUNT_HEADER = "x-total-count";

export const getStarredCount = () => {
  return axios.get(routes.getStarredElements()).then((response) => {
    const totalCount = parseInt(response?.headers[TOTAL_COUNT_HEADER], 10);
    return totalCount ?? null;
  });
};
