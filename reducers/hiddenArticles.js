import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [], //to think
};

export const hiddenArticlesSlice = createSlice({
	name: 'hiddenArticles',
	initialState,
	reducers: {
        hideArticles: (state,action) => {
            console.log('state value hidearticles', action.payload)
            state.value.push(action.payload);

        },
        unHideArticles: (state) => {
            console.log('state remove articles', state)
            state.value = [];
        },

	},
});

export const { hideArticles, unHideArticles } = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;