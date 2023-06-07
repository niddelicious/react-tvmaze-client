import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

type SearchResult = {
    score: number;
    show: {
        id: number;
        name: string;
        image: {
            medium: string;
        };
    };
};

const SearchResults: React.FC = () => {
    const { query } = useParams();
    const [results, setResults] = useState<SearchResult[]>([]);
    const navigate = useNavigate();
    const decodedQuery = decodeURIComponent(query || '');

    useEffect(() => {
        if (!query) {
            navigate('/');
        }
        else {
            const fetchResults = async () => {
                if (query) {
                    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
                    const data = await response.json();
                    setResults(data);
                }
            };

            fetchResults();
        }
    }, [query, navigate, decodedQuery]);

    return (
        <div>
            {results.map(({ show }) => (
                <div key={show.id} onClick={() => navigate(`/show/${show.id}`)}>
                    {show.name}
                    {show.image && show.image.medium && <img src={show.image.medium} alt={show.name} />}
                </div>
            ))}
        </div>
    );
};

export default SearchResults;
