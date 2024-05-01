import {configureStore} from '@reduxjs/toolkit'
import general from './general'


const store = configureStore({
    reducer: {
        general: general,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store