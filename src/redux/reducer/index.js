import {combineReducers} from "redux"

import articleReducer from './article'

const allReducer ={
    articleReducer,
}

const rootReducer = combineReducers(allReducer)


export default rootReducer; 