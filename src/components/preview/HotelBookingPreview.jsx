import InfoTablePreview from "./InfoTablePreview";

const HotelBookingPreview = ({ data, setData }) => {
  const columns = [
    { header: "City", key: "city", flex: 1 },
    { header: "Check In", key: "checkIn", flex: 1 },
    { header: "Check Out", key: "checkOut", flex: 1 },
    { header: "Nights", key: "nights", flex: 0.5 },
    { header: "Hotel Name", key: "hotelName", flex: 2 },
  ];

  const notes = [
    "All Hotels Are Tentative And Can Be Replaced With Similar.",
    "Breakfast Included For All Hotel Stays.",
    "All Hotels Will Be 4* And Above Category.",
    "A maximum occupancy of 2 people/room is allowed in most hotels.",
  ];

  return (
    <InfoTablePreview
      title="Hotel"
      highlight="Bookings"
      columns={columns}
      data={data.hotelBookings}
      notes={notes}
      sectionKey="hotelBookings"
      setData={setData}
    />
  );
};

export default HotelBookingPreview;
