import {useSelector } from 'react-redux'
import { FAKE_HOMESTAY } from './function'
import { RootState } from 'store/types'

export const useHomeStays = ()=>{
     return useSelector((state: RootState)=> Object.values(state.homestay.byId))
}


export const useHomeStay = (homestayId: string)=>{
    return useSelector((state: RootState)=> 
    (state.homestay.byId[homestayId] || FAKE_HOMESTAY))
}
