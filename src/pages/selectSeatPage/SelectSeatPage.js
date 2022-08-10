import { Steps, Card, BackTop, Row, Col, message } from "antd";
import "./SelectSeatPage.less";
import PerfectScrollbar from "react-perfect-scrollbar";
import SelectSeatPanel from "../../features/selectSeatPanel/SelectSeatPanel";
import SeatDetailCard from "../../features/seatDetailCard/SeatDetailCard";
import { getSeatsOfSchedule } from "../../api/schedule";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../api/order";

const { Step } = Steps;

const MAX_SELECT = 6;

const SelectSeatPage = () => {
  const { orderId } = useParams();

  const [scheduleId, setScheduleId] = useState(-1);
  const [seats, setSeats] = useState([]);
  const [selectSeats, setSelectSeats] = useState([]);
  const [movie, setMovie] = useState({});
  const [theater, setTheater] = useState({});
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    const fetchOrder = async (orderId) => {
      try {
        const { data } = await getOrderById(orderId);
        setScheduleId(data.schedule.id);
        setMovie(data.movie);
        setTheater(data.theater);
        setSchedule(data.schedule);
      } catch (error) {
        message.error(error.message);
      }
    };

    fetchOrder(orderId);
  }, [orderId]);

  useEffect(() => {
    const fetchSeatsOfSchedule = async (scheduleId) => {
      try {
        const { data } = await getSeatsOfSchedule(scheduleId);
        const splitSeats = data.seats.split("");
        setSeats(splitSeats);
        setSelectSeats(splitSeats);
      } catch (error) {
        message.error(error.message);
      }
    };
    if (scheduleId !== -1) {
      fetchSeatsOfSchedule(scheduleId);
    }
  }, [scheduleId]);

  const changeSeats = (index, status) => {
    const count = selectSeats.filter((seat) => seat === "2").length;
    if (count === MAX_SELECT && status === "2") {
      message.error("You can only select 6 seats");
      return;
    }

    const newSelectSeats = [...selectSeats];
    newSelectSeats[index] = status;
    setSelectSeats(newSelectSeats);
    const newSeats = [...seats];
    newSeats[index] = status;
    setSeats(newSeats);
  };

  return (
    <PerfectScrollbar id="app-main-scroller-bar">
      <div className="select-seat-page">
        <Card>
          <div className="select-seat-page-header">
            <Steps current={1}>
              <Step title="Select schedule" />
              <Step title="Select seat" />
              <Step title="Pay in 15 minutes" />
              <Step title="Take your ticket" />
            </Steps>
          </div>
          <Row className="select-seat-page-body">
            <Col span={14}>
              <div className="select-seat-page-left">
                <SelectSeatPanel initSeats={seats} changeSeats={changeSeats} />
              </div>
            </Col>
            <Col span={10}>
              <div className="select-seat-page-right">
                <SeatDetailCard
                  movie={movie}
                  theater={theater}
                  schedule={schedule}
                  selectSeats={selectSeats}
                />
              </div>
            </Col>
          </Row>
        </Card>
      </div>
      <BackTop
        className="app-back-to-top"
        target={() => document.getElementById("app-main-scroller-bar")}
      />
    </PerfectScrollbar>
  );
};

export default SelectSeatPage;
