'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { BoardActionTypes, boardReducer } from './BoardReducer';

interface ICard {
    id: string;
    title: string;
    lists: IList[];
}

interface IList {
    id: string;
    title: string;
}

interface BoardContextValue {
    cards: ICard[];
    handleAddCard: (card: ICard) => void;
    handleDeleteCard: (cardId: string) => void;
    handleAddList: (cardId: string, list: IList) => void;
    handleDeleteList: (cardId: string, listId: string) => void;
    handleUpdateCardTitle: (cardId: string, newTitle: string) => void;
    handleUpdateListTitle: (cardId: string, listId: string, newTitle: string) => void;
}

const BoardContext = createContext<BoardContextValue>({} as BoardContextValue);

const useBoardContext = () => {
    const context = useContext(BoardContext);
    if (!context) {
        throw new Error('useBoardContext must be used within a BoardProvider');
    }
    return context;
};

const BoardProvider = ({ children }: React.PropsWithChildren) => {
    const [cards, dispatch] = useReducer(boardReducer, []);

    useEffect(() => {
        const storedCards = localStorage.getItem('cards');
        if (storedCards) {
            dispatch({ type: BoardActionTypes.INIT_CARDS, payload: JSON.parse(storedCards) });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(cards));
    }, [cards]);

    const handleAddCard = (card: ICard) => {
        dispatch({ type: BoardActionTypes.ADD_CARD, payload: card });
    };

    const handleDeleteCard = (cardId: string) => {
        dispatch({ type: BoardActionTypes.DELETE_CARD, payload: cardId });
    };

    const handleAddList = (cardId: string, list: IList) => {
        dispatch({ type: BoardActionTypes.ADD_LIST, payload: { cardId, list } });
    };

    const handleDeleteList = (cardId: string, listId: string) => {
        dispatch({ type: BoardActionTypes.DELETE_LIST, payload: { cardId, listId } });
    };

    const handleUpdateCardTitle = (cardId: string, newTitle: string) => {
        dispatch({ type: BoardActionTypes.UPDATE_CARD_TITLE, payload: { cardId, newTitle } });
    };

    const handleUpdateListTitle = (cardId: string, listId: string, newTitle: string) => {
        dispatch({ type: BoardActionTypes.UPDATE_LIST_TITLE, payload: { cardId, listId, newTitle } });
    };

    return (
        <BoardContext.Provider value={{
            cards,
            handleAddCard,
            handleDeleteCard,
            handleAddList,
            handleDeleteList,
            handleUpdateCardTitle,
            handleUpdateListTitle
        }}>
            {children}
        </BoardContext.Provider>
    );
};

export { BoardContext, useBoardContext, BoardProvider };
export type { ICard, IList };
