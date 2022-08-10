import request from "./request";

const createOrder = (order) => {
  return request.post("/orders", order);
};

const getOrderById = (id) => {
  return request.get(`/orders/${id}`);
};
const getUsedOrdersByUseId = (id) => {
  return request.get(`/orders/used/${id}`);
};

const payTheOrder = (id) => {
  return request.post(`/orders/payment/${id}`);
};

const confirmSeats = (orderId, seats) => {
  return request.post(`/orders/${orderId}/seats`, { seats });
}

export {
  createOrder,
  getOrderById,
  payTheOrder,
  getUsedOrdersByUseId,
  confirmSeats,
};
