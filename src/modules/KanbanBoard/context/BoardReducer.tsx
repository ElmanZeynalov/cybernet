

import { ICard, IList } from './BoardContext';

export enum BoardActionTypes {
    ADD_CARD = 'ADD_CARD',
    DELETE_CARD = 'DELETE_CARD',
    ADD_LIST = 'ADD_LIST',
    DELETE_LIST = 'DELETE_LIST',
    UPDATE_CARD_TITLE = 'UPDATE_CARD_TITLE',
    UPDATE_LIST_TITLE = 'UPDATE_LIST_TITLE',
    INIT_CARDS = 'INIT_CARDS',
}

interface AddCardAction {
    type: BoardActionTypes.ADD_CARD;
    payload: ICard;
}

interface DeleteCardAction {
    type: BoardActionTypes.DELETE_CARD;
    payload: string; // cardId
}

interface AddListAction {
    type: BoardActionTypes.ADD_LIST;
    payload: { cardId: string; list: IList };
}

interface DeleteListAction {
    type: BoardActionTypes.DELETE_LIST;
    payload: { cardId: string; listId: string };
}

interface UpdateCardTitleAction {
    type: BoardActionTypes.UPDATE_CARD_TITLE;
    payload: { cardId: string; newTitle: string };
}

interface UpdateListTitleAction {
    type: BoardActionTypes.UPDATE_LIST_TITLE;
    payload: { cardId: string; listId: string; newTitle: string };
}

interface InitCardsAction {
    type: BoardActionTypes.INIT_CARDS;
    payload: ICard[];
}

type BoardAction =
    | AddCardAction
    | DeleteCardAction
    | AddListAction
    | DeleteListAction
    | UpdateCardTitleAction
    | UpdateListTitleAction
    | InitCardsAction;

export const boardReducer = (state: ICard[], action: BoardAction): ICard[] => {
    switch (action.type) {
        case BoardActionTypes.ADD_CARD:
            return [...state, action.payload];
        case BoardActionTypes.DELETE_CARD:
            return state.filter((card) => card.id !== action.payload);
        case BoardActionTypes.ADD_LIST:
            return state.map((card) =>
                card.id === action.payload.cardId
                    ? { ...card, lists: [...card.lists, action.payload.list] }
                    : card
            );
        case BoardActionTypes.DELETE_LIST:
            return state.map((card) =>
                card.id === action.payload.cardId
                    ? {
                        ...card,
                        lists: card.lists.filter((list) => list.id !== action.payload.listId),
                    }
                    : card
            );
        case BoardActionTypes.UPDATE_CARD_TITLE:
            return state.map((card) =>
                card.id === action.payload.cardId
                    ? { ...card, title: action.payload.newTitle }
                    : card
            );
        case BoardActionTypes.UPDATE_LIST_TITLE:
            return state.map((card) =>
                card.id === action.payload.cardId
                    ? {
                        ...card,
                        lists: card.lists.map((list) =>
                            list.id === action.payload.listId
                                ? { ...list, title: action.payload.newTitle }
                                : list
                        ),
                    }
                    : card
            );
        case BoardActionTypes.INIT_CARDS:
            return action.payload;
        default:
            return state;
    }
};
