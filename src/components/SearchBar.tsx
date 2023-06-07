import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Navbar,
    Button,
    Input,
} from "@material-tailwind/react";

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        navigate(`/search/${encodeURIComponent(query)}`);
    };

    return (
        <Navbar className="mx-auto max-w-screen-md px-4 py-3">
            <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
                <div className="relative w-full">
                    <form onSubmit={handleSubmit} className="flex items-center justify-center">
                        <Input
                            type="text"
                            value={query}
                            onChange={event => setQuery(event.target.value)}
                            label="Search for a show..."
                            className="pr-20"
                            containerProps={{
                                className: "min-w-[288px]",
                            }}
                        />
                        <Button size="sm" className="!absolute right-1 top-1 rounded" onClick={handleSubmit}>Search</Button>
                    </form>
                </div>
            </div>
        </Navbar>
    );
};

export default SearchBar;
