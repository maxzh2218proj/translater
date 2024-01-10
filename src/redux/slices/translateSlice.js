import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

export const translateRequest = createAsyncThunk(
    'translate/requestStatus', async (value) => {
        const encodedParams = new URLSearchParams();
        encodedParams.set('q', 'Ростов-на-Дону');
        encodedParams.set('target', 'ru');
        encodedParams.set('source', 'en');

        const options = {
            method: 'POST',
            url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': '2fd090d399mshbf5d15ac15c87b7p1cec01jsn47f2bbfe048f',
              'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
            },
            data: {
              q: `${value}`,
              source: 'ru',
              target: 'en'
            }
          };

        try {
            const response = await axios.request(options);
            //console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
)

const initialState = {
  outputValue: '',
  isFetching: false,
}

export const translateSlice = createSlice({
  name: 'translate',
  initialState,
  reducers: {
    
  },

  extraReducers: (builder) => {
    builder.addCase(translateRequest.fulfilled, (state, action) => {
        state.isFetching = false;
        //console.log(action.payload);
        state.outputValue = action.payload.data.translations.translatedText;
    });
    builder.addCase(translateRequest.pending, (state) => {
        state.isFetching = true;
    });
    builder.addCase(translateRequest.rejected, (state) => {
        state.isFetching = false;
        state.outputValue = '';
    });
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = translateSlice.actions

export default translateSlice.reducer