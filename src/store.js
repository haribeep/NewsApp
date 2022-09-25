import {configureStore} from '@reduxjs/toolkit'
import newsReducer from './slice/news'

const reducer = {
    news:newsReducer
}

const store = configureStore({
    reducer:reducer
})

export default store;