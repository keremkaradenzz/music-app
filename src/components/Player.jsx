import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';


const Player = ({ play , data}) => {
    const [audio, setAudio] = useState();
 

    let newData ;
    try {
         newData = data.filter(item=> item.url.includes(play))
        }
        catch(err) {
            console.log(err);
        }
    useEffect(() => {
        if (audio) {
            audio.pause();
            audio.load();
            audio.play();
        }
    }, [play, audio]);

    return (
        <React.Fragment>
            {
                 newData && newData[0] ? <nav className=" navbar navbar-dark bg-dark fixed-bottom justify-content-center mt-5">  <div className="container"><div className="row">
                    <div className="text-white col-md-6 col-sm-12">
                            <h5 className="d-inline">{newData[0].name  ===null ? ""  : newData[0].name }</h5>
                            <p>{ newData[0].artist_name ===null ? ""  : newData[0].artist_name} - {newData[0].album_name===null ? ""  : newData[0].album_name}</p>
                    </div>
                    <div className="text-white  col-md-6 col-sm-12">
                        <audio controls="controls" ref={(audio) => { setAudio(audio) }}>
                            <source src={play} type="audio/mpeg" />
                        </audio> </div>
                </div></div></nav> : null


            }
        </React.Fragment>
    );

}

export default Player;