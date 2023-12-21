function Reservation() {
  const dataSet = JSON.parse(localStorage.getItem("reservationData"));

  return (
    <div className='reservation-container'>
      <h2>Reservations</h2>
      {dataSet && dataSet.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>Occasion</th>
            </tr>
          </thead>
          <tbody>
            {dataSet.map((data, index) => (
              <tr key={index}>
                <td data-cell='name'>{data.name}</td>
                <td data-cell='date'>{data.date}</td>
                <td data-cell='time'>{data.times}</td>
                <td data-cell='guests'>{data.guests}</td>
                <td data-cell='occasion'>{data.occasion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4>No reservations available.</h4>
      )}
    </div>
  );
}

export default Reservation;