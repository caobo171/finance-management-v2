import createSliceModel from 'store/createSliceModel';
import HomeStay from './types';

const {slice} = createSliceModel<HomeStay>('homestay', {
    byId: {}
})


export const homestayReducer = slice.reducer;
export const homestayAction = slice.actions;


