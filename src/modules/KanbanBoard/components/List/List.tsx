'use client'

import React from 'react';


interface ListProps {
    id: string;
    title: string;
    onDelete: (id: string) => void;
}

function List({ id, title, onDelete }: ListProps) {
    return (
        <div className='flex flex-column items-center justify-between w-full shadow-md shadow-gray-400'>
            <span className='flex-grow w-full p-1 m-1 bg-white'>{title}</span>
            <i className="bi bi-x cursor-pointer text-red-500" onClick={() => onDelete(id)}  />
        </div>
    );
}

export default List;
