import { combineReducers } from 'redux'

import UserReducer from 'store/user/reducer'

import {itemReducer} from 'store/item/slice';

import HomestayReducer  from 'store/homestay/reducer'
import AcitivityReducer from 'store/activity/reducer'

const rootReducer = combineReducers({
    user: UserReducer,
    item: itemReducer,
    activity: AcitivityReducer,
    homestay: HomestayReducer
})


export default rootReducer