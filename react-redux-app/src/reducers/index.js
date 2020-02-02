import { FETCHING_BEY_START, FETCHING_BEY_SUCCESS, FETCHING_BEY_FAIL } from '../actions/index';


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
    
        case FETCHING_BEY_SUCCESS:
            return{
                ...state,
                loading:false,
                gettingSongs: action.payload
            };
        
            case FETCHING_BEY_FAIL:
                return{
                    ...state,
                    loading: null,
                    gettingSongs: null,
                    error: 'SOMETHING WENT WRONG'
                }
    default: 
    return state;

};

}