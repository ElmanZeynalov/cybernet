import React, { useState } from 'react';
import Button from '@/common/components/Button';
import { useBoardContext } from '@/modules/KanbanBoard/context/BoardContext';

function Add() {
    const { handleAddCard } = useBoardContext();
    const [newCardTitle, setNewCardTitle] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newCardTitle.trim() !== '') {
            handleAddCard({ id: `card-${Date.now()}`, title: newCardTitle, lists: [] });
            setNewCardTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-column items-center justify-between w-full">
                <input
                    type="text"
                    placeholder="Enter card title"
                    value={newCardTitle}
                    onChange={(e) => setNewCardTitle(e.target.value)}
                />
                <Button type="submit">Add Card</Button>
            </div>
        </form>
    );
}

export default Add;
