import { useEffect, useState } from 'react';
import FlexCard from '../Card/FlexCard.jsx';
import './BodyContent.css';

function BodyContent() {

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/vehicles') // Your API endpoint
            .then(res => res.json())
            .then(data => setVehicles(data))
            .catch(err => console.error("Error fetching vehicles:", err));
    }, []);

    return (
        <div className="body-content">
            <h1>Top Vehicles</h1>
            <div className="cards">
                {vehicles.map(vehicle => (
                    <FlexCard vehicle={vehicle} />
                ))}
            </div>
        </div>
    )
}

export default BodyContent