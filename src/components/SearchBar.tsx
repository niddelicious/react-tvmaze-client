import React, { useState } from 'react';

type SearchBarProps = {
    onQueryChange: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onQueryChange }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onQueryChange(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-center">
            <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search for a show..."
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button type="submit" className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Search
            </button>
        </form>
    );
};

export default SearchBar;