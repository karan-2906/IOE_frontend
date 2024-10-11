import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faUser, faClock, faSignInAlt, faSignOutAlt, faMapMarkerAlt, faPalette, faTags, faGasPump, faIndustry, faCog } from '@fortawesome/free-solid-svg-icons';

const CarDetailsModal = ({ car, onClose }) => {
  if (!car) return null;

  const carDetails = [
    { icon: faUser, label: 'Owner', value: car.ownerName },
    { icon: faCar, label: 'Car Number', value: car.carNumber },
    { icon: faMapMarkerAlt, label: 'State', value: car.state },
    { icon: faPalette, label: 'Color', value: car.color },
    { icon: faTags, label: 'Vehicle Class', value: car.vehicleClass },
    { icon: faGasPump, label: 'Fuel Type', value: car.fuelType },
    { icon: faIndustry, label: 'Manufacturer', value: car.vehicleManufacturer },
    { icon: faCog, label: 'Model', value: car.model },
    { icon: faSignInAlt, label: 'In Time', value: car.inTime ? new Date(car.inTime).toLocaleString() : 'N/A' },
    { icon: faSignOutAlt, label: 'Out Time', value: car.outTime ? new Date(car.outTime).toLocaleString() : 'N/A' },
    { icon: faClock, label: 'Parking Duration', value: car.lastParkingDuration ? `${car.lastParkingDuration} minutes` : 'N/A' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden">
        <div className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold"><FontAwesomeIcon icon={faCar} className="mr-2" /> Car Details</h2>
          <button className="text-2xl hover:text-gray-300 transition-colors" onClick={onClose}>&times;</button>
        </div>
        <div className="p-6 space-y-4">
          {carDetails.map((item, index) => (
            item.value && (
              <div key={index} className="flex items-center">
                <FontAwesomeIcon icon={item.icon} className="text-blue-500 w-6" />
                <span className="font-semibold mr-2">{item.label}:</span>
                <span className="text-gray-700">{item.value}</span>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarDetailsModal;
