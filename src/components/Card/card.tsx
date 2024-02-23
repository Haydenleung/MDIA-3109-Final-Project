interface ITravel {
    location_id: string;
    name: string;
    address_obj: {
        address_string: string;
    };
}

interface CardProps {
    locations: ITravel[];
}

const Card: React.FC<CardProps> = ({ locations }) => {
    return (
        <div>
            {locations.slice(0,5).map(location => (
                <div key={location.location_id} className="location-card">
                    <h2>Location ID: {location.location_id}</h2>
                    <h3>Name: {location.name}</h3>
                    <p>Address: {location.address_obj.address_string}</p>
                </div>
            ))}
        </div>
    );
};

export default Card;