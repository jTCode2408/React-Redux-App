import React from 'react';
import { connect } from 'react-redux';
import {fetchBey } from '../actions/index'
const Beyonce = props  =>{
    console.log('bey', props)
return(
    <div className = "bey-container">
      <h1> Queen Bey's Bops</h1> 
      <button onClick = {props.fetchBey}>More Bey!</button>
    {!props.gettingSongs && !props.loading && (<h2>Show the bops!</h2>
    )}

    {props.gettingSongs && !props.loading && (
        
        <div>
    {props.gettingSongs.map((song,id) => {
        return(
           
            <div>  
        <h3>Song: {song.title}</h3>
        <div>
            {/* <p>Tab Types: {song.tabTypes}</p> */}
            </div>
            <a href = "http://www.songsterr.com/a/wa/artist?id=6487"> Learn The Chords! </a>
            <a href = "https://thehoneybeeconservancy.org/" className = "bee-link">
                <p> (Or click here to help the bumblebees)</p></a>
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