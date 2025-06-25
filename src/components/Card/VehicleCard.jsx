import { CDN_URL } from '../../constants';
import ImageSlider from '../ImageSlider/ImageSlider.jsx';
import './VehicleCard.css';

function Chunk({ field, value }) {
    return (
        <div className="chunk">
            <h1 className="chunk-title">{field}</h1>
            <div className="chunk-value">{value}</div>
        </div>
    )
}

function Details({ vehicle }) {
    return (
        <div className='details-container'>
            <div className='title'>{vehicle.name}</div>
            <div className='details'>
                {
                    Object.entries(vehicle).map(([key, value]) => {
                        if (key !== "name" && key !== "id" && key !== "imagePath"  && key !=="model" && key !=="brand") {
                            return <Chunk field={key} value={value} />
                        }
                    })
                }

            </div>
        </div>
    )
}
function VehicleCard({ vehicle }) {
    var images = [];
    const vehicleName = vehicle.name.replace(/ /g, "_");

    for (var i = 1; i <= 5; i++) {
        images.push(`${CDN_URL}/images/vehicles/${vehicleName}/${i}.jpg`);
    }
    return (
        <div className="vehicle-card">
            <ImageSlider images={images} />
            <Details vehicle={vehicle} />
        </div>

    );
}

export default VehicleCard