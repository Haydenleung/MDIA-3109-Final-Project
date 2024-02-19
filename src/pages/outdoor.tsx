import { useState } from 'react';
import Card from '@/components/Card/card';

const Outdoors = () => {
    const [locationName, setLocationName] = useState("");

    const handleLocationNameChange = (name: string) => {
        setLocationName(name);
    };

    return (
        <div>
            <h1>Outdoor Activities</h1>
            <Card onLocationNameChange={handleLocationNameChange} />
            {locationName && <p>Location: {locationName}</p>}
        </div>
    );
}

export default Outdoors;