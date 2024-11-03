import React, { useState } from 'react';
import Button from "@/common/components/Button";
import List from "@/modules/KanbanBoard/components/List/List";
import { IList, useBoardContext } from "@/modules/KanbanBoard/context/BoardContext";

interface CardProps {
    id: string;
    title: string;
    lists: IList[];
}

function Card({ id, title, lists }: CardProps) {
    const { handleAddList, handleDeleteCard, handleDeleteList } = useBoardContext();
    const [newListTitle, setNewListTitle] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newListTitle.trim() === '') return;

        handleAddList(id, { id: `list-${Date.now()}`, title: newListTitle });
        setNewListTitle('');
    };

    return (
        <div className="bg-gray-200 flex flex-col items-center w-64 gap-2 p-4">
            <div className="flex flex-wrap justify-content-between">
                <div className="flex flex-column items-center justify-between w-full">
                    <h2 className="text-black text-2xl font-bold">{title}</h2>
                    <i className="bi bi-x cursor-pointer text-red-500" onClick={() => handleDeleteCard(id)}></i>
                </div>
                {lists.map((list) => (
                    <List key={list.id} id={list.id} title={list.title} onDelete={() => handleDeleteList(id, list.id)} />
                ))}
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="w-full p-1 m-1 bg-white">
                        <input
                            type="text"
                            className="flex flex-column items-center justify-between w-full shadow-md shadow-gray-400"
                            placeholder="Add a new list"
                            value={newListTitle}
                            onChange={(e) => setNewListTitle(e.target.value)}
                        />
                    </div>
                    <Button type="submit">Add List</Button>
                </form>
            </div>

        </div>
    );
}

export default Card;
