
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import Card from '@/components/Card/card';
import Header from '@/components/Header';

interface ITravel {
    location_id: string;
    name: string;
    address_obj: {
        address_string: string;
    };
}

interface IndoorProps {
    locations: ITravel[];
}

const apiKey = process.env.NEXT_PUBLIC_API_TRIP

export const getServerSideProps: GetServerSideProps<IndoorProps> = async (context) => {
    const { prop1 } = context.query;
    const tripAdvisorUrl = `https://api.content.tripadvisor.com/api/v1/location/search?key=${apiKey}&searchQuery=${prop1}&category=attractions&language=en`;

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


const Indoor = ({ locations }: IndoorProps) => {

    const [locationName, setLocationName] = useState("");

    const handleLocationNameChange = (name: string) => {
        setLocationName(name);
    };

    return (
        <main className={"cardPage"}>
            <Header />
            <div className={"cardContainer"}>
                {/* <h1>Outdoor Activities</h1> */}
                <Card locations={locations} />
            </div>
            {locationName && <p>Location: {locationName}</p>}
        </main>

    );
};

export default Indoor;