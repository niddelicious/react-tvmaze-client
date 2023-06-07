import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type Show = {
    id: number;
    name: string;
    image: {
        medium: string;
    };
    summary: string;
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
        <div>
            {show && (
                <div>
                    <h2>{show.name}</h2>
                    <img src={show.image.medium} alt={show.name} />
                    <p>{stripHtml(show.summary)}</p>
                </div>
            )}
        </div>
    );
};

export default ShowDetails;
