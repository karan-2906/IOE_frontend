import React, { useState, useEffect } from 'react';
import './App.css';

// Static data to simulate API responses
const staticCarData = [
  { licensePlate: 'ABC123', entryTime: '2023-04-15 09:30', ownerName: 'John Doe' },
  { licensePlate: 'XYZ789', entryTime: '2023-04-15 10:15', ownerName: 'Jane Smith' },
  { licensePlate: 'DEF456', entryTime: '2023-04-15 11:00', ownerName: 'Bob Johnson' },
];

function App() {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({ licensePlate: '', ownerName: '' });
  const totalParkingSlots = 12;

  useEffect(() => {
    // Simulate fetching car data from an API
    setCars(staticCarData);
  }, []);

  const addCar = () => {
    if (newCar.licensePlate && newCar.ownerName) {
      const carToAdd = {
        ...newCar,
        entryTime: new Date().toLocaleString(),
      };
      setCars([...cars, carToAdd]);
      setNewCar({ licensePlate: '', ownerName: '' });
    }
  };

  const removeCar = (licensePlate) => {
    setCars(cars.filter(car => car.licensePlate !== licensePlate));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Parking System Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">
            <span className="mr-2">🚗</span> Parked Cars: {cars.length} / {totalParkingSlots}
          </h2>
          {/* <p className="text-lg">Available Slots: {totalParkingSlots - cars.length}</p> */}
        </div>

        <div className="bg-green-100 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">
            <span className="mr-2">🚗</span> Available Slots: {totalParkingSlots - cars.length}
          </h2>
          {/* <h2 className="text-2xl font-semibold mb-4">
            <span className="mr-2">➕</span> Add New Car
          </h2>
          <input
            type="text"
            placeholder="License Plate"
            value={newCar.licensePlate}
            onChange={(e) => setNewCar({...newCar, licensePlate: e.target.value})}
            className="border p-2 mr-2 rounded"
          />
          <input
            type="text"
            placeholder="Owner Name"
            value={newCar.ownerName}
            onChange={(e) => setNewCar({...newCar, ownerName: e.target.value})}
            className="border p-2 mr-2 rounded"
          />
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={addCar}
          >
            Add Car
          </button> */}
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden rounded-lg">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="mr-2">👤</span> Owner Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="mr-2">🚗</span> License Plate
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="mr-2">🕒</span> Entry Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="mr-2">🗑️</span> Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cars.map((car) => (
              <tr key={car.licensePlate}>
                <td className="px-6 py-4 whitespace-nowrap">{car.ownerName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{car.licensePlate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{car.entryTime}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button 
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => removeCar(car.licensePlate)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;