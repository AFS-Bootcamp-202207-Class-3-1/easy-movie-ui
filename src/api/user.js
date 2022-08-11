import request from "./request";

const createUser = (user) => {
  return request.post("/users", user);
};

const updateUser = (id, user) => {
  return request.put("/users/" + id, user);
};

const findUserById = (id) => {
  return request.get(`/users/${id}`);
};

const registerReq = (body) => {
  return request.post("/users/user/register", body);
};

const getUserLevel = (id) => {
  return request.get(`/users/level/${id}`);
};

const login = (user) => {
  return request.post(`/users/user/login`, user);
};

export {
  createUser,
  findUserById,
  updateUser,
  login,
  getUserLevel,
  registerReq,
};
