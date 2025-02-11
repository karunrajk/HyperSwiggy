import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        if(onSearch) {
            onSearch(e.target.value);
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search for dishes"
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
            />
            <div className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>
        </div>
    );
};

export default SearchBar;