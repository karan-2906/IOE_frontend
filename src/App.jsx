import React, { useState, useEffect } from 'react';
import CarDetailsModal from './CarDetailsModal';
import { FaCar, FaParking, FaClock, FaMoneyBillWave } from 'react-icons/fa';

const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const totalSlots = 10;

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    // Replace with your actual API call
    const response = await fetch('https://ioe-node-backend-escz.onrender.com/cars',);
    const data = await response.json();
    setCars(data);
  };

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  const closeModal = () => {
    setSelectedCar(null);
  };

  const formatTime = (timeString) => {
    if (!timeString) return 'N/A';
    const options = { 
      timeZone: 'Asia/Kolkata',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true
    };
    return new Date(timeString).toLocaleString('en-IN', options);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
        <FaParking className="mr-2 text-blue-600" /> Parking Management
      </h1>
      
      {/* Slot information */}
      <div className="flex justify-between mb-6">
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <FaCar className="text-2xl mr-2 text-blue-600" />
          <p className="text-lg font-semibold">Used Slots: {cars.length}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg flex items-center">
          <FaParking className="text-2xl mr-2 text-green-600" />
          <p className="text-lg font-semibold">Available Slots: {totalSlots - cars.length}</p>
        </div>
      </div>

      {/* Car details table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-200 mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2 text-center">
                <div className="flex items-center justify-center">
                  <FaCar className="mr-2" /> Car Number
                </div>
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center">
                <div className="flex items-center justify-center">
                  <FaClock className="mr-2" /> In Time
                </div>
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center">
                <div className="flex items-center justify-center">
                  <FaClock className="mr-2" /> Out Time
                </div>
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center">
                <div className="flex items-center justify-center">
                  <FaMoneyBillWave className="mr-2" /> Cost
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car._id} className="hover:bg-gray-50 cursor-pointer" onClick={() => handleCarClick(car)}>
                <td className="border border-gray-200 px-4 py-2 text-center">{car.carNumber}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">{formatTime(car.inTime)}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">{formatTime(car.outTime)}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">{car.cost || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedCar && <CarDetailsModal car={selectedCar} onClose={closeModal} />}
    </div>
  );
};

export default HomePage;