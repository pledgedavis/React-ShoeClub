import { createStore, combineReducers, applyMiddleware } from 'redux' 
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//reducers
import {shoeListReducer} from './store/reducers/shoeReducer'


const reducer = combineReducers({
    getShoeListFromReducer: shoeListReducer
})

const middleWare = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleWare)))




export default store

