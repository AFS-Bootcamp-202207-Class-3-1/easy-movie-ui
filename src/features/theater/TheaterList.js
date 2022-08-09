import { Button } from "antd";

const TheaterList = (props) => {
  const { theaterList } = props;
  return (
    <>
      <div className="ChooseTheaterPage">
        <div className="theaterList w">
          <div className="title">
            <span className="leftLine">————————————</span>
            <span>Theater List</span>
            <span className="rightLine">————————————</span>
          </div>
          <div className="body">
            {theaterList?.map((theater) => {
              return (
                <div className="theaterItem w" key={theater.id}>
                  <div>
                    <span>{theater.name}</span>
                  </div>
                  <div>
                    <span className="address">{theater.address}</span>
                  </div>
                  <div>
                    <Button type="primary">Buy Ticket</Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default TheaterList;
