import request from "./request";

const getPurchasePointReq = (id) => {
  return request.get("/purchasePoint/" + id);
};

const setPurchasePointReq = (id, code) => {
  return request.put("/purchasePoint/" + id, { code });
};

export { getPurchasePointReq, setPurchasePointReq };
