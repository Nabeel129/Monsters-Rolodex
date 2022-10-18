import React from 'react'

function SearchBox(props) {
    const { className, placeholder, onChangeHandler } = props;
    return (
        <>
            <input
                type="search"
                className={`search-box ${className}`}
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </>
    )
}

export default SearchBox;