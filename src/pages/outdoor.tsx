
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import Card from '@/components/Card/card';
import Header from '@/components/Header';
import { ITravel, OutdoorProps } from "../../typings";



const apiKey = process.env.NEXT_PUBLIC_API_TRIP

export const getServerSideProps: GetServerSideProps<OutdoorProps> = async (context) => {
    const { prop1 } = context.query;
    const tripAdvisorUrl = `https://api.content.tripadvisor.com/api/v1/location/search?key=${apiKey}&searchQuery=${prop1}&category=attractions&language=en`;

    try {
        // Search Attraction
        const response = await axios.get(tripAdvisorUrl);
        if (response.status !== 200) {
            throw new Error('Failed to fetch data from TripAdvisor API');
        }
        const data = response.data.data;
        // console.log(data);

        // Search Image
        const dataTwo = await Promise.all(data.slice(0, 5).map(async (data: any) => {
            const urlTwo = `https://api.content.tripadvisor.com/api/v1/location/${data.location_id}/photos?language=en&key=${apiKey}`;
            const response = await axios.get(urlTwo);
            if (response.status !== 200) {
                throw new Error('Failed to fetch data from TripAdvisor API');
            }
            return response.data.data;
        }));
        // console.log(dataTwo);

        // Search Attraction Details
        const dataThree = await Promise.all(data.slice(0, 5).map(async (data: any) => {
            const urlThree = `https://api.content.tripadvisor.com/api/v1/location/${data.location_id}/details?language=en&currency=USD&key=${apiKey}`;
            const response = await axios.get(urlThree);
            if (response.status !== 200) {
                throw new Error('Failed to fetch data from TripAdvisor API');
            }
            return response.data;
        }));
        // console.log(dataThree);

        const dataFour = await Promise.all(data.slice(0, 5).map(async (data: any) => {
            const urlFour = `https://api.content.tripadvisor.com/api/v1/location/${data.location_id}/reviews?language=en&key=${apiKey}`;
            const response = await axios.get(urlFour);
            if (response.status !== 200) {
                throw new Error('Failed to fetch data from TripAdvisor API');
            }
            return response.data.data;
        }));
        // console.log(dataFour);

        return {
            props: {
                locations: data || [],
                locaImage: dataTwo || [],
                locaDetail: dataThree || [],
                locaReview: dataFour || []
            },
        };
    } catch (error) {
        console.error('Fetch Error:', error);
        return {
            props: {
                locations: [],
                locaImage: [],
                locaDetail: [],
                locaReview: []
            },
        };
    }
};


const Outdoor = ({ locations, locaImage, locaDetail, locaReview }: OutdoorProps) => {

    const [locationName, setLocationName] = useState<string>("");

    const handleLocationNameChange = (name: string) => {
        setLocationName(name);
    };

    return (
        <main className={"cardPage"}>
            <Header />
            <div className={"cardContainer"}>
                {/* <h1>Outdoor Activities</h1> */}
                <Card locations={locations} locaImage={locaImage} locaDetail={locaDetail} locaReview={locaReview} />
            </div>
            {locationName && <p>Location: {locationName}</p>}
        </main>

    );
};

export default Outdoor;