import Header from '../Header/Header.jsx'
import VehicleCard from '../Card/VehicleCard.jsx'

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function VehiclePage() {
  const { id } = useParams(); 
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/vehicle/${id}`)
      .then(res => res.json())
      .then(setVehicle);
  }, [id]);

  if (!vehicle) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <VehicleCard vehicle={vehicle} />
    </>
  );
}

export default VehiclePage;
