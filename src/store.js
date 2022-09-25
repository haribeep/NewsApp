import {configureStore} from '@reduxjs/toolkit'
import newsReducer from './slice/news'

const reducer = {
    news:newsReducer
}

//**********Setting up global store using configureStore api ***********//

const store = configureStore({
    reducer:reducer
})

export default store;