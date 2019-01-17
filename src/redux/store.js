import {createStore} from 'redux'; 

import rootReducer from './reducer/index'




const store = createStore(rootReducer); 

store.subscribe(()=>{
    console.log("Store Updated", store.getState())
})

export default store; 