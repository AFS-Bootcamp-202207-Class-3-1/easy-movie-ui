import "./SelectSeatItem.less";

const SelectSeatItem = ({ index, initStatus, setCurrentStatus }) => {
  const imgSrc = ["/seat/gray.png", "/seat/red.png", "/seat/green.png"];

  const onClickItem = () => {
    if (parseInt(initStatus) === 0) {
      setCurrentStatus(index, "2");
    } else if (parseInt(initStatus) === 2) {
      setCurrentStatus(index, "0");
    }
  };

  return (
    <div className="select-seat-item" onClick={onClickItem}>
      <img
        src={imgSrc[parseInt(initStatus)]}
        className="select-seat-item-img"
        alt=""
      ></img>
    </div>
  );
};

export default SelectSeatItem;
