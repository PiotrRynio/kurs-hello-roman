import { createStore } from 'redux';
import { v4 as uuid } from 'uuid';

// to są funkcje zwracające obiekty które możemy już przekazać dalej, gdzie trzeba
export const addNote = (payload) => {
  return {
    id: uuid(),
    type: 'notes/add',
    payload,
  };
};

export const removeNote = (payload) => {
  return {
    type: 'notes/remove',
    payload,
  };
};

const initialState = {
  notes: [
    {
      id: uuid(),
      title: 'Global Configuration Associate',
      content: 'Vero aut delectus quia provident neque quos. Quae vel qui veniam aliquam consequuntur earum. ',
    },
  ],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'notes/add':
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case 'notes/remove':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const store = createStore(notesReducer);
