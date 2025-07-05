import React from 'react';

const Search: React.FC<{
    query: string;
    setQuery:  React.Dispatch<React.SetStateAction<string>>
}> = ({query, setQuery}) => {
    return (
        <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    );
};

export default Search;