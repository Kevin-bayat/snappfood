import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    restaurantData: [],
    page: 0
};

const restaurantDataSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurantDataAction: (state, action) => {
            state.restaurantData = [...state.restaurantData, ...action.payload];
        },
        incrementPage: (state) => {
            console.log({ state });
            state.page += 1;
        }
    }
});

export const { setRestaurantDataAction, incrementPage } = restaurantDataSlice.actions;

export const selectRestaurantState = (state) => state.restaurantData;

export default restaurantDataSlice.reducer;
