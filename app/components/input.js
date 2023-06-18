import React, { useState, useEffect, useRef } from 'react'

function input({ Data, valueHandler }) {
    const suggestions = Data;
    const [inputValue, setInputValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const suggestionsContainerRef = useRef(null);


    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        const filtered = suggestions.filter(
            (suggestion) =>
                suggestion.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSuggestions(filtered);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        if(valueHandler){
        valueHandler(suggestion);
        }
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
                    <input className='px-4 h-full w-full' type="text" value={inputValue} onChange={handleInputChange} />
                </div>
                <ul ref={suggestionsContainerRef} className='absolute z-10 w-full top-10 rounded-xl max-h-20 overflow-auto'>
                    {filteredSuggestions.map((suggestion, index) => (
                        <li className='bg-white cursor-pointer px-4 py-1 text-sm' key={index} onClick={() => handleSuggestionClick(suggestion.name)}>{suggestion.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default input