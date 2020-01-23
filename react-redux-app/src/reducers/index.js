import { FETCHING_BEY_START } from '../actions/index';


const initialState = {
    loading: false,
    gettingSongs: null,
    error: ''
};

export  const reducer = (state = initialState, action )=>{
switch(action.type) {
    case FETCHING_BEY_START:
        return{
            ...state,
            loading:true
        };
    default: 
    return state;

};

}