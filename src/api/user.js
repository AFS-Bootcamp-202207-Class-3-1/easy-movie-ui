import request from "./request";

const createUser = (user) => {
  return request.post("/users", user);
};

const findUserById = (id) => {
  return request.get(`/users/${id}`);
};

export { createUser, findUserById };
