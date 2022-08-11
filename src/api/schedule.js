import request from "./request";

const getSeatsOfSchedule = (scheduleId) => {
  return request.get(`/schedule/${scheduleId}/seats`);
};

export { getSeatsOfSchedule };
