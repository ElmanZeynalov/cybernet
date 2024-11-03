'use client'

import React from 'react';
import Search from "@/modules/KanbanBoard/components/Search/Search";
import Controller from "@/modules/KanbanBoard/components/Controller/Controller";
import Card from "@/modules/KanbanBoard/components/Card/Card";
import Add from "@/modules/KanbanBoard/components/Add/Add";
import {useBoardContext} from "@/modules/KanbanBoard/context/BoardContext";

const Board = () => {
    const {cards} = useBoardContext();

    return (
        <>
            <div className='w-full flex flex-col justify-center items-center gap-3'>
                <h1 className="text-3xl text-black font-bold mt-5">Kanban Board</h1>
                <div className="mt-5 mb-5 w-full">
                    <Search/>
                </div>
                <div className='flex justify-start w-full mt-5'>
                    <Controller/>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-between mt-20 items-start">
                <div className="grid grid-cols-4 gap-4">
                    {cards.map((card) => (
                        <Card key={card.id} id={card.id} title={card.title} lists={card.lists}/>
                    ))}
                </div>
                <div>
                    <Add/>
                </div>

            </div>

        </>
    );
};

export default Board;
