import React from 'react';
import { connect } from 'react-redux';
import {fetchBey } from '../actions/index'
const Beyonce = props  =>{
    console.log('bey', props)
return(
    <div className = "bey-container">
      <h1> Beyonce!</h1> 
      <button onClick = {props.fetchBey}>More Bey!</button>
    {!props.gettingSongs && !props.loading && (<h3>Find More Bey!</h3>
    )}

    {props.gettingSongs && !props.loading && (
        <div>
    {props.gettingSongs.map((song,id) => {
        return(
           
            <div>  
    <h4>{song.artist.name}</h4>
        <p>{song.title}</p>
        <div>
            {song.tabTypes}
            </div>
            <a href = "http://www.songsterr.com/a/wa/artist?id=6487"> Learn To Play! </a>
            </div>
//sample data to play with: http://www.songsterr.com/a/wa/artist?id=6487
        )
    })}
    </div>
    )}

</div>

)


}



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