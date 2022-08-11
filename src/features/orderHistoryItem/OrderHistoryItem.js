import {Button, Card, Col, Row} from "antd";
import {CarryOutTwoTone, EnvironmentTwoTone, VideoCameraTwoTone} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import "./OrderHistoryItem.less"

const OrderHistoryItem = (props) => {
    const [item] = useState(props.item);
    const navigate = useNavigate();
    const onClickCard = (data) => {
        navigate(`/movieDetail/${data.movieId}`);
    }
    const goToOrderDetail = (data) => {
        navigate(`/orderHistoryDetail/${data.id}`);
    }
    return (
      <div className="order-history-item-content">
        <Card className="order-history-item-card">
          <Row>
            <Col span={4}>
              <img
                className="order-history-item-card-image"
                width="100px"
                src={item.url}
                alt={item.url}
                onClick={() => onClickCard(item)}
              />
            </Col>
            <Col span={6}>
              <div style={{ marginLeft: "15px" }}>
                <div className="order-history-item-card-infos">
                  <VideoCameraTwoTone
                    style={{ fontSize: "20px" }}
                    twoToneColor="#FA541C"
                  />
                  &nbsp;
                  <span>{item.movieName}</span>
                </div>
                <div className="order-history-item-card-infos">
                  <CarryOutTwoTone
                    style={{ fontSize: "20px" }}
                    twoToneColor="#FA541C"
                  />
                  &nbsp;
                  <span>{item.date}</span>
                </div>
                <div className="order-history-item-card-infos">
                  <EnvironmentTwoTone
                    style={{ fontSize: "20px" }}
                    twoToneColor="#FA541C"
                  />
                  &nbsp;
                  <span>{item.theater}</span>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="order-history-item-card-number">
                <div>
                  <span>Quantity: {item.number} piece</span>
                </div>
                <div>
                  <span>Amount: </span>
                  <span
                    style={{
                      fontSize: "24px",
                      color: "#FA541C",
                    }}
                  >
                    &nbsp;$&nbsp;
                  </span>
                  <span style={{ color: "#FA541C" }}>{item.price}</span>
                </div>
              </div>
            </Col>
            <Col span={4} style={{ textAlign: "center" }}>
              <div style={{ margin: "55px 0" }}>
                <span>To be used</span>
              </div>
            </Col>
            <Col span={4} style={{ textAlign: "center" }}>
              <Button
                style={{ margin: "50px auto" }}
                type="primary"
                onClick={() => goToOrderDetail(item)}
              >
                Go to use
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
    );
}
export default OrderHistoryItem;
