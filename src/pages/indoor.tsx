import { useState } from 'react';
import Card from '@/components/Card/card';

export default function Indoors() {
    const [locationName, setLocationName] = useState("");

    const handleLocationNameChange = (name: string) => {
        setLocationName(name);
    };

    return (
        <div>
            <h1>Indoor Activities</h1>
            <Card onLocationNameChange={handleLocationNameChange} />
            {locationName && <p>Location: {locationName}</p>}
        </div>
    );
}