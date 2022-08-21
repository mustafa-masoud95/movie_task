import {configureStore} from '@reduxjs/toolkit'
import moviesReducer from './media/movieSlice'

export const store =configureStore({
    reducer:{
       media: moviesReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch