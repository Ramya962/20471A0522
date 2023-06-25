import './App.css';

import React from 'react';
import moment from 'moment';

function App() {
  const trainSchedule = [
    { trainNumber: '123', destination: 'City A', departureTime: '09:00 AM',seat_availability:'sleeper-3',price:'400' },
    { trainNumber: '456', destination: 'City B', departureTime: '10:30 AM',seat_availability:'AC-2',price:'800'},
    { trainNumber: '789', destination: 'City C', departureTime: '12:15 PM',seat_availability:'AC-5',price:'700' },
  ];

  return (
    <div className="App">
      <h1>Train Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>seat_availability</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {trainSchedule.map((train) => (
            <tr key={train.trainNumber}>
              <td>{train.trainNumber}</td>
              <td>{train.destination}</td>
              <td>{moment(train.departureTime, 'hh:mm A').format('hh:mm A')}</td>
              <td>{train.seat_availability}</td>
              <td>{train.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;