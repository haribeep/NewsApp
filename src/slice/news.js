import DataService from "../service/DataService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//***********Async Function for Fetching List of News from here**************//

export const retrieveNewsList = createAsyncThunk(
  "getnewslist",
  async (props) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`;
    const res = await DataService.get(url);
    return res.data;
  }
);


//***********Async Function for Fetching Liveweather from here**************//

export const retrieveLiveWeather = createAsyncThunk(
    "fetchliveweather",
    async ({cityName,apiKey}) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
        const res = await DataService.get(url);
        return res.data;
    }

)


const initialState = {
  newsList: [],
  liveWeather: [],
  loading: true,
};

//**********CreateSlice Function for Resolving 3 Lifecycle methods generated from above function **********//

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: {
    [retrieveNewsList.pending]: (state, action) => {
      state.loading = true;
    },

    [retrieveNewsList.fulfilled]: (state, action) => {
      state.loading = false;
      state.newsList = action.payload;
    },
    [retrieveLiveWeather.pending]: (state, action) => {
        state.loading = true;
      },
  
      [retrieveLiveWeather.fulfilled]: (state, action) => {
        state.loading = false;
        state.newsList = action.payload;
      },
  },
});

const { reducer } = newsSlice;

export default reducer;
