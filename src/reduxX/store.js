import { configureStore } from "@reduxjs/toolkit";

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'root',
//     storage,
// }

export const store = configureStore({
    reducer: {
        basket: basketSliceReducer,
    },
})
