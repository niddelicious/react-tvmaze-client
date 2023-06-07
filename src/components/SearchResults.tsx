import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ShowCard from './ShowCard';
import SpinnerComponent from './SpinnerComponent';

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
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [hideSpinner, setHideSpinner] = useState(false);
    const navigate = useNavigate();
    const decodedQuery = decodeURIComponent(query || '');

    function timeout(delay: number) {
        return new Promise(res => setTimeout(res, delay));
    }

    useEffect(() => {
        if (!query) {
            navigate('/');
        }
        else {
            setLoading(true);
            setMessage('Searching...');

            const controller = new AbortController();
            const signal = controller.signal;
            let timeout1: NodeJS.Timeout;
            let timeout2: NodeJS.Timeout;

            const fetchResults = async () => {
                if (query) {
                    try {
                        await timeout(0); // for testing delays in API response
                        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`, { signal });
                        const data = await response.json();
                        setResults(data);
                        setLoading(false);
                    } catch (error) {
                        if (error instanceof Error && error.name === 'AbortError') {
                            setMessage('The request was cancelled because it took too long.');
                            setHideSpinner(true);
                        } else {
                            console.error(error);
                        }
                    }
                }
            };

            timeout1 = setTimeout(() => setMessage('The results are taking longer than expected...'), 2000);
            timeout2 = setTimeout(() => {
                setMessage('The request is taking too long, cancelling...');
                controller.abort();
            }, 5000);

            fetchResults();

            return () => {
                clearTimeout(timeout1);
                clearTimeout(timeout2);
            };
        }
    }, [query, navigate, decodedQuery]);

    return (
        <div className="flex flex-row flex-wrap gap-2 justify-evenly ">
            {loading ? (<SpinnerComponent message={message} hideSpinner={hideSpinner} />) : results.map(({ show }) => (
                <ShowCard key={show.id} show={show} />
            ))}
        </div>
    );
};

export default SearchResults;
