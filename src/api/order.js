import request from "./request";

const createOrder = (order) => {
  return request.post("/orders", order);
};

const getOrderById = (id) => {
  return request.get(`/orders/${id}`);
};

export { createOrder, getOrderById };
