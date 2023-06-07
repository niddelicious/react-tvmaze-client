import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

type Show = {
    id: number;
    name: string;
    image: {
        original: string;
    };
    summary: string;
    premiered: string;
    ended: string;
};

type ShowParams = {
    showId: string;
};

const ShowDetails: React.FC = () => {
    const [show, setShow] = useState<Show | null>(null);
    const { showId } = useParams<ShowParams>();

    useEffect(() => {
        const fetchShow = async () => {
            if (showId) {
                const response = await fetch(`https://api.tvmaze.com/shows/${encodeURIComponent(showId)}`);
                const data = await response.json();
                setShow(data);
            }
        };

        fetchShow();
    }, [showId]);

    const stripHtml = (html: string) => {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent || div.innerText || '';
    };

    return (
        <div className="mt-6 flex flex-row flex-wrap gap-1 justify-evenly ">
            {show && (
                <Card className="flex-row w-full max-w-[48rem]">
                    <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
                        <img
                            src={show.image?.original}
                            alt={show.name}
                            className="w-full h-full object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h6" color="blue" className="uppercase mb-4">{show.premiered} {show.ended ? " - " + show.ended : ""}</Typography>
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {show.name}
                        </Typography>
                        <Typography color="gray" className="font-normal mb-8">
                            {stripHtml(show.summary)}
                        </Typography>
                    </CardBody>
                </Card>

            )}
        </div>
    );
};

export default ShowDetails;
