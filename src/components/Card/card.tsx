import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ITravel {
    location_id: string;
    name: string;
    address_obj: {
        address_string: string;
    };
}

interface CardProps {
    onLocationNameChange: (name: string) => void;
}

const apiKey = "6DC8221F0F674C3EBA67FEF064069B35";

const tripAdvisorUrl = `https://api.content.tripadvisor.com/api/v1/location/search?searchQuery=vancouver&category=attractions&language=en&key=${apiKey}`;

const Card: React.FC<CardProps> = ({ onLocationNameChange }) => {
    const [locations, setLocations] = useState<ITravel[]>([]);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await fetch(tripAdvisorUrl);
                if (response.ok) {
                    const data = await response.json();
                    setLocations(data.data);
                    // Notify parent component of the first location name
                    if (data.data.length > 0) {
                        onLocationNameChange(data.data[0].name);
                    }
                } else {
                    console.error('Failed to fetch locations:');
                }
            } catch (error) {
                console.error('Error fetching locations:', error);
            }
        };

        fetchLocations();
    }, []);

    return (
        <div>
            {locations.map(location => (
                <div key={location.location_id} className="location-card">
                    <h2>Location ID: {location.location_id}</h2>
                    <h3>Name: {location.name}</h3>
                    <p>Address: {location.address_obj.address_string}</p>
                </div>
            ))}
        </div>
    );
}

export default Card;