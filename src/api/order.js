import request from "./request";

const createOrder = (order) => {
  return request.post("/orders", order);
};

export default createOrder;
