import React, { useEffect, useState } from 'react';

type ShowProps = {
    showId: number | null;
};


type Show = {
    id: number;
    name: string;
    image: {
        medium: string;
        original: string;
    };
};

const ShowDetails: React.FC<ShowProps> = ({ showId }) => {
    const [show, setShow] = useState<Show | null>(null);

    useEffect(() => {
        const fetchShow = async () => {
            if (showId) {
                const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
                const data = await response.json();
                setShow(data);
            } else {
                setShow(null);
            }
        };

        fetchShow();
    }, [showId]);

    if (!show) return null;

    return (
        <div>
            <img src={show.image.medium} alt={show.name} />
            <h1>{show.name}</h1>
            {/* You can add more details here as required */}
        </div>
    );
};

export default ShowDetails;
