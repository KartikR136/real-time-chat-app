const RoomList = ({ rooms, onSelect }) => {
  return (
    <div>
      <h3 style={{ marginBottom: "16px" }}>Rooms</h3>

      {rooms.map((room) => (
        <div
          key={room._id}
          onClick={() => onSelect(room)}
          style={{
            padding: "12px",
            cursor: "pointer",
            borderBottom: "1px solid #1e293b"
          }}
        >
          #{room.name}
        </div>
      ))}
    </div>
  );
};

export default RoomList;