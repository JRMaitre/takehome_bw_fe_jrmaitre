import { PAGE_SIZE } from "../../utils/constants";

const BASE_URL = `http://localhost:3001/`;
const DEFAULT_PAGE_SIZE = PAGE_SIZE;
const DEFAULT_PAGE = 1;

export const routes = {
  searchByQuery: (params) =>
    `${BASE_URL}search?q=${params.query}&_limit=${
      params.limit ?? DEFAULT_PAGE_SIZE
    }&_page=${params.params ?? DEFAULT_PAGE}`,
  getStarredElements: () => `${BASE_URL}search?starred=true&_limit=1`,
  toggleStarValue: (id) => `${BASE_URL}search/${id}`,
};
