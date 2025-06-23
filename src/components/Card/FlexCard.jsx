import { CDN_URL } from '../../constants';
import { Link } from 'react-router-dom';
import './FlexCard.css';

function FlexCard({ vehicle }) {

    return (
        <Link to={`/vehicle/${vehicle.id}`} className="card">
            <img src={`${CDN_URL}/images/vehicles/${vehicle.name.replace(/ /g, "_")}/1.jpg`} alt={vehicle.name} />
            <h2>{vehicle.name}</h2>
            <p>{vehicle.price}</p>
        </Link>

    );
}

export default FlexCard