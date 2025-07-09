import React, {useEffect, useRef} from 'react';
import {useKey} from "../../hooks/useKey.ts";

const Search: React.FC<{
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>
}> = ({query, setQuery}) => {
    const inputEl= useRef<HTMLInputElement>(null);

    useKey("Enter", function (){
        if (document.activeElement === inputEl.current) return
            inputEl.current!.focus();
            setQuery("");
    })

    return (
        <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={inputEl}
        />
    );
};

export default Search;