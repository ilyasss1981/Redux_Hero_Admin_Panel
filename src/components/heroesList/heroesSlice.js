import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        // в createSlice работает библиотека innerJS, позволяет изменять state напрямую
        heroesFetching: state => {state.heroesLoadingStatus = 'loading'},
        heroesFetched: (state, action) => {
            state.heroes = action.payload;
            state.heroesLoadingStatus = 'idle';
        },
        heroesFetchingError: state => {state.heroesLoadingStatus = 'error'},
        heroDeleted: (state, action) => {state.heroes = state.heroes.filter(item => item.id !== action.payload)},
        heroCreated: (state, action) => {state.heroes.push(action.payload)}
    }
});

const {actions, reducer} = heroesSlice;

export default reducer;
export const {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroDeleted,
    heroCreated
} = actions;