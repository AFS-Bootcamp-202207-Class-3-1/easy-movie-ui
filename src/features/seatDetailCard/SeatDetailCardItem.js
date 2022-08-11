const SeatDetailCardItem = ({row, col}) => {
  return (
    <div className="seat-detail-card-select-item">
      <img
        className="seat-detail-card-select-item-img"
        src="/seat/ticket.png"
        alt=""
      />
      <div className="seat-detail-card-select-item-text">{row}排{col}座</div>
    </div>
  );
};

export default SeatDetailCardItem;
