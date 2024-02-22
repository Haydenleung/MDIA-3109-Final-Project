import React, { useState } from 'react';
import Card from '@/components/Card/card';

export default function Outdoors() {
    const [locationName, setLocationName] = useState("");

    const handleLocationNameChange = (name: string) => {
        setLocationName(name);
    };

    return (
        <main>
            <div>
                <h1>Outdoor Activities</h1>
                <Card onLocationNameChange={handleLocationNameChange} />
                {locationName && <p>Location: {locationName}</p>}
            </div>
        </main>
    );
}