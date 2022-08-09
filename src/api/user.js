import request from "./request";

const createUser = (user) => {
  return request.post("/users", user);
};

const updateUser = (id, user) =>{
  return request.put('/users/'+id, user)
}

const findUserById = (id) => {
  return request.get(`/users/${id}`);
};

export { createUser, findUserById,updateUser };
