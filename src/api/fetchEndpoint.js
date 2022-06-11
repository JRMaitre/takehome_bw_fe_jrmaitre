import { PAGE_SIZE } from "../utils/constants";

export const fetchEndpoint = (searchQuery, pageSize = PAGE_SIZE) => {
  return fetch(
    `https://api.github.com/search/users?q=${searchQuery}&per_page=${pageSize}`
  )
    .then((response) => response.json())
    .then((response) => {
      const formattedUsers = (response?.items || []).map((user) => ({
        text: user.login,
        value: user.login,
      }));

      return formattedUsers;
    });
};
