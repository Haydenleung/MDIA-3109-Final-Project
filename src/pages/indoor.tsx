
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import Card from '@/components/Card/card';
import Header from '@/components/Header';
import { IndoorProps } from "../../typings";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { IImage } from "../../typings";

const apiKey = process.env.NEXT_PUBLIC_API_TRIP


const default_images: IImage[] = [
    {
        images: {
            original: {
                url: '/default/image1.jpeg'
            }
        }
    },
    {
        images: {
            original: {
                url: '/default/image2.jpeg'
            }
        }
    },

    {
        images: {
            original: {
                url: '/default/image3.jpeg'
            }
        }
    },
    {
        images: {
            original: {
                url: '/default/image4.jpeg'
            }
        }
    },
    {
        images: {
            original: {
                url: '/default/image5.jpeg'
            }
        }
    },
];

export const getServerSideProps: GetServerSideProps<IndoorProps> = async (context) => {
    const { prop1 } = context.query;
    const tripAdvisorUrl = `https://api.content.tripadvisor.com/api/v1/location/search?key=${apiKey}&searchQuery=${prop1}%20British%20Columbia&category=restaurants&language=en`;
    const city: string = prop1 ? String(prop1) : '';

    let retries = 3;
    while (retries > 0) {
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
                try {
                    const response = await axios.get(urlTwo);
                    if (response.status !== 200) {
                        throw new Error('Failed to fetch data from TripAdvisor API');
                    }
                    return response.data.data;
                } catch (error) {
                    console.error('Fetch Error:', error);
                    return default_images; // Return default object if error occurs
                }
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
                    locaReview: dataFour || [],
                    city
                },
            };
        } catch (error) {
            console.error('Fetch Error:', error);
            await new Promise(resolve => setTimeout(resolve, 1000));
            retries--;
        }
    }

    return {
        props: {
            locations: [],
            locaImage: [],
            locaDetail: [],
            locaReview: [],
            city
        },
    };
};


const Indoor = ({ locations, locaImage, locaDetail, locaReview, city }: IndoorProps) => {
    const router = useRouter()
    const [locationName, setLocationName] = useState<string>("");

    const handleLocationNameChange = (name: string) => {
        setLocationName(name);
    };

    const [show, setShow] = useState<boolean>(false);

    const handleShow = (trigger: boolean) => {
        setShow(trigger);
    };

    return (
        <main className={"cardPage"}>
            <Header />
            <button className={"back"} onClick={() => !show ? router.back() : setShow(!show)}>
                <Image src={"/images/back.svg"} className={"backimg"} width={100} height={100} alt="back"></Image>
            </button>
            <div className={"cardContainer"}>
                <Card
                    locations={locations} locaImage={locaImage} locaDetail={locaDetail} locaReview={locaReview} show={show} handleShow={handleShow} city={city} />
            </div>
            {locationName && <p>Location: {locationName}</p>}

            <div className='tripadvisor-disclamer'>
                <p>Attractions collected from the TripAdvisor API</p>
                <Image
                    src={"/images/tripadvisor-logo.png"}
                    // className={"backimg"} 
                    width={120}
                    height={24}
                    alt="back"
                />
            </div>

        </main>
    );
};

export default Indoor;