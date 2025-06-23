import { CDN_URL } from '../../constants';
import './VehicleCard.css';
import ImageSlider from '../ImageSlider/ImageSlider.jsx';

function VehicleCard({ vehicle }) {
    var images = [];
    const vehicleName = vehicle.name.replace(/ /g, "_");

    for (var i = 1; i <= 5; i++) {
        images.push(`${CDN_URL}/images/vehicles/${vehicleName}/${i}.jpg`);
    }
    return (
        <div className="vehicle-card">
            <ImageSlider images={images} />
            <span className='details'>
                <h2>{vehicle.name}</h2>
                <p>price: {vehicle.price}</p>
                <p>model: {vehicle.model}</p>
                <p>power: {vehicle.power}</p>
                <p>bore: {vehicle.bore}</p>
                <p>stroke: {vehicle.stroke}</p>
                <p>compression ratio: {vehicle.compressionRatio}</p>
            </span>
        </div>

    );
}

export default VehicleCard