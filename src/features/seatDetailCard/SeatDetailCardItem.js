const SeatDetailCardItem = ({row, col}) => {
  return (
    <div className="seat-detail-card-select-item">
      <img
        className="seat-detail-card-select-item-img"
        src="/seat/ticket.png"
        alt=""
      />
      <div className="seat-detail-card-select-item-text">{row} row {col} seat </div>
    </div>
  );
};

export default SeatDetailCardItem;
