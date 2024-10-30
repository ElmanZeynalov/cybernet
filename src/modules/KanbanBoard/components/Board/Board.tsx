import React from 'react';
import Search from "@/components/Search/Search";

const Board = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <h1 className="text-3xl text-black font-bold">Kanban Board</h1>
                <Search/>
        </div>

    );
};

export default Board;
