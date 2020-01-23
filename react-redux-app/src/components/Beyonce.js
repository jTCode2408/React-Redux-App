import React from 'react';
import { connect } from 'react-redux';
import {fetchBey } from '../actions/index'
const Beyonce = props  =>{
    console.log('bey', props)
return(
    <div className = "bey-container">
      <h1> Beyonce!</h1> 
      <button onClick = {props.fetchBey}>More Bey!</button>
    </div>

)

};

const mapStateToProps = state =>{
    return{
        loading: state.loading,
        gettingSongs: state.gettingSongs,
        error: state.error
    };
}

export default connect(mapStateToProps, {
    fetchBey
}
)(Beyonce);