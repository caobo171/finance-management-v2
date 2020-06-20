import { combineReducers } from 'redux'


import {userReducer} from 'store/user/slice';
import {itemReducer} from 'store/item/slice';
import {homestayReducer} from 'store/homestay/slice';
import AcitivityReducer from 'store/activity/reducer'

const rootReducer = combineReducers({
    user: userReducer,
    item: itemReducer,
    activity: AcitivityReducer,
    homestay: homestayReducer
})


export default rootReducer