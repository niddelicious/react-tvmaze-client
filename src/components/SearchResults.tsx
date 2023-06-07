import { on } from 'events';
import React, { useEffect, useState } from 'react';

type SearchResultsProps = {
    query: string;
    onShowClick: (showId: number | null) => void;
};


type SearchResult = {
    id: number;
    name: string;
    thumbnail: string;
};

const SearchResults: React.FC<SearchResultsProps> = ({ query, onShowClick }) => {
    const [results, setResults] = useState<SearchResult[]>([]);
    const [showId, setShowId] = useState('');

    useEffect(() => {
        const fetchResults = async () => {
            if (query !== '') {
                const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
                const data = await response.json();
                const filteredResults = data.map((item: any) => {
                    const { id, name, image } = item.show;
                    return { id, name, thumbnail: image?.medium };
                });
                setResults(filteredResults);
            }
        };

        fetchResults();
    }, [query]);


    const handleResultClick = (result: SearchResult) => {
        onShowClick(result.id);
    };

    return (
        <div>
            {results.map((result: SearchResult) => (
                <div key={result.id}>
                    <img src={result.thumbnail} alt={result.name} onClick={() => handleResultClick(result)} />
                    {result.name}
                </div>
            ))}
        </div>
    );
};

export default SearchResults;
