
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import Card from '@/components/Card/card';

interface ITravel {
    location_id: string;
    name: string;
    address_obj: {
        address_string: string;
    };
}

interface OutdoorProps {
    locations: ITravel[];
}

export const getServerSideProps: GetServerSideProps<OutdoorProps> = async () => {

    const tripAdvisorUrl = `https://api.content.tripadvisor.com/api/v1/location/search?key=6DC8221F0F674C3EBA67FEF064069B35&searchQuery=vancouver&category=attractions&language=en`;

    try {
        const response = await axios.get(tripAdvisorUrl);
        if (response.status !== 200) {
            throw new Error('Failed to fetch data from TripAdvisor API');
        }
        const data = response.data.data;
        return {
            props: {
                locations: data || [], 
            },
        };
    } catch (error) {
        console.error('Fetch Error:', error);
        return {
            props: {
                locations: [], 
            },
        };
    }
};

const Outdoor: React.FC<OutdoorProps> = ({ locations }) => {

    const [locationName, setLocationName] = useState("");

    const handleLocationNameChange = (name: string) => {
        setLocationName(name);
    };

    return (
        <main>

            <div>
                <h1>Outdoor Activities</h1>
                <Card locations={locations} />
            </div>
            {locationName && <p>Location: {locationName}</p>}
        </main>

    );
};

export default Outdoor;