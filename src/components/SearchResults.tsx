import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

type SearchResultsProps = {
    query: string;
};

const SearchResults: React.FC<SearchResultsProps> = ({ query }) => {
    const [results, setResults] = useState<SearchResult[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchResults = async () => {
            if (query) {
                const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
                const data = await response.json();
                setResults(data);
            }
        };

        fetchResults();
    }, [query]);

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
