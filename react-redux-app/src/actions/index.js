import axios from 'axios';
//api link for artist page https://www.songsterr.com/a/ra/songs/byartists.xml?artists=Beyonce


export const FETCHING_BEY_START = 'FETCHING_BEY_START';
export const FETCHING_BEY_SUCCESS = 'FETCHING_BEY_SUCCESS';
export const FETCHING_BEY_FAIL = 'FETCHING_BEY_FAIL';
export const fetchBey = () => dispatch => {
dispatch({type: FETCHING_BEY_START });
axios
.get ('https://www.songsterr.com/a/ra/songs/byartists.xml?artists=Beyonce')
.then (res =>{
    console.log('reponse',res);
    dispatch({type: FETCHING_BEY_SUCCESS, payload: res.data})
})
.catch(err =>{
    console.log('error', err)
    dispatch({type: FETCHING_BEY_FAIL, payload: err.res})
})




}