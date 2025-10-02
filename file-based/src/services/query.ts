import { queryOptions } from "@tanstack/react-query";

export const userDetailQueryOpion = (usersId: string) =>
  queryOptions({
    queryKey: ["usersDetail", usersId],
    queryFn: () => getUserDetails(usersId),
  });

const getUserDetails = async (usersId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${usersId}`
  );
  return response.json();
};

export const userListQueryOptions = () =>
  queryOptions({
    queryKey: ["userList"],
    queryFn: getUsersList,
  });

const getUsersList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json() as Promise<{ id: string; name: string }[]>;
};
