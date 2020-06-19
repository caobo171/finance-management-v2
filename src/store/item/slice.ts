import createSliceModel from 'store/createSliceModel';
import Item from './types';

const {slice} = createSliceModel<Item>('item', {
    byId: {}
})


export const itemReducer = slice.reducer;
export const itemAction = slice.actions;


