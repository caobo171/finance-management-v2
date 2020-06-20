
import { useSelector } from "react-redux"
import { User, State } from "./types"
import { FAKE_USER } from "./function"
import CurrentUser from "service/CurrentUser"
import { RootState } from "store/types"

export const useCurrentUser = (): User | null=>{
    return useSelector((state: RootState)=> state.user.current);
}

export const useAllUsers = (): User[]=>{
    return useSelector((state: RootState)=> Object.values(state.user.byId))
}

export const useUser  = (userId: string) =>{
    return useSelector((state: RootState)=> state.user.byId[userId] || FAKE_USER);
}


export const useUserByPlaceid = (placeId: string) => {
    return useSelector((state: {user: State})=> Object.values(state.user.byId)).filter(e=> e.placeId === placeId));
}

