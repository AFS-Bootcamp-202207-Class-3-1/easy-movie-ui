import request from "./request";

const createOrder = (order) => {
  return request.post("/orders", order);
};

const getOrderById = (id) => {
  return request.get(`/orders/${id}`);
};

const payTheOrder = (id) => {
  return request.post(`/orders/payment/${id}`);
};

export { createOrder, getOrderById, payTheOrder };
