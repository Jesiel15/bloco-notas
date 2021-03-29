import React, { createContext, useReducer } from "react";
import notes from "../data/notes";

const initialState = { notes }
const NotesContext = createContext({})

const actions = {
    createNote(state, action) {
        const note = action.payload
        note.id = Math.random()
        return { 
            ...state,
            notes: [...state.notes, note],
        }
    },
    updateNote(state, action) {
        const updated = action.payload
        return {
            ...state,
            notes: state.notes.map(n => n.id === updated.id ? updated : n)
        }
    },
    deleteNote(state, action) {
        const note = action.payload
        return {
            ...state, 
            notes: state.notes.filter(n => n.id !== note.id) 
        }
    }
}
export const NotesProvider = props => {
    function reducer(state, action) {
        const func = actions[action.type]
        return func ? func(state, action) : state
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <NotesContext.Provider value={{ state, dispatch }}>
            {props.children}
        </NotesContext.Provider>
    )
}
export default NotesContext;
