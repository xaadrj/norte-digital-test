import React, { useState, useEffect, useRef } from 'react'

function input({ Data }) {
    const suggestionsList = Data;
    const [inputValue, setInputValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const suggestionsContainerRef = useRef(null);

    const handleInput = (event) => {
        const input = event.target.value.toLowerCase();
        setInputValue(input);

        const filtered = suggestionsList.filter((suggestion) =>
            suggestion.toLowerCase().startsWith(input)
        );
        setFilteredSuggestions(filtered);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        setFilteredSuggestions([]);
    };

    const handleClickOutside = (event) => {
        if (suggestionsContainerRef.current && !suggestionsContainerRef.current.contains(event.target)) {
            setFilteredSuggestions([]);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
        <div className='w-full'>
            <div className='relative w-full flex-col flex gap-2'>
                <div className='h-9 w-full'>
                    <input className='px-4 h-full w-full' type="text" value={inputValue} onChange={handleInput} />
                </div>       
                    <ul ref={suggestionsContainerRef} className=' absolute z-10 w-full top-10 rounded-xl max-h-20 overflow-auto'>
                        {filteredSuggestions.map((suggestion, index) => (
                            <li className='bg-white cursor-pointer px-4 py-1 text-sm' key={index} onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</li>
                        ))}
                    </ul>
                </div>
        </div>
    )
}

export default input