import { createSlice, PayloadAction , SliceCaseReducers} from "@reduxjs/toolkit";
import { User, State } from "./types";


const initialState: State = {
    current : null,
    byId: {}
}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        login:(state, action: PayloadAction<User>) => ({
            ...state,
            current: action.payload
        }),

        bulkAdd:(state, action: PayloadAction<Record<string, User>>) => ({
            ...state,
            byId: {
                ...state.byId,
                ...action.payload
            }
        }),

        add: (state, action: PayloadAction<User>) => ({
            ...state,
            byId: {
                ...state.byId,
                [action.payload.id]: action.payload
            }
        }),

        update: (state, action: PayloadAction<User>) => ({
            ...state,
            byId: {
                ...state.byId,
                [action.payload.id]: action.payload
            }
        }),

        logout: (state,action: PayloadAction<null>) => ({
            ...state,
            current: null
        })
        
    } 
})


export const userReducer = slice.reducer;
export const userActions = slice.actions;