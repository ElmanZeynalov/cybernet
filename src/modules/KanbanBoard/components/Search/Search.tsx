import React from 'react';
import Button from "@/common/components/Button";

function Search() {
    return (
        <div className='w-full'>
            <input
                type="text"
                placeholder='Search cards....'
                className="w-full p-2 "
            />

        </div>
    );
}

export default Search;
