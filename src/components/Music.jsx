import React, {useState,useEffect} from 'react'
import Player from './Player';

function Music({musics}) {
    const [play , setPlay] = useState('');

  
    console.log(musics);
    return (
        <React.Fragment>
         {
         
         musics ?  musics.map((item,index) => (
            <div className="col-md-3 col-sm-12 mb-3  justify-content-center align-items-center">
            <div className="card rounded-3  mb-3 mx-2" >
            <img src={item.album_images[0]}  className="card-img-top image-first" alt="..."/>
            <img className="image-second" style={{cursor:"pointer"}} onClick={()=>setPlay(item.url)} src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQzNy4wMiA3NC45OGMtNDguMzUzLTQ4LjM1MS0xMTIuNjQtNzQuOTgtMTgxLjAyLTc0Ljk4cy0xMzIuNjY3IDI2LjYyOS0xODEuMDIgNzQuOThjLTQ4LjM1MSA0OC4zNTMtNzQuOTggMTEyLjY0LTc0Ljk4IDE4MS4wMnMyNi42MjkgMTMyLjY2NyA3NC45OCAxODEuMDJjNDguMzUzIDQ4LjM1MSAxMTIuNjQgNzQuOTggMTgxLjAyIDc0Ljk4czEzMi42NjctMjYuNjI5IDE4MS4wMi03NC45OGM0OC4zNTEtNDguMzUzIDc0Ljk4LTExMi42NCA3NC45OC0xODEuMDJzLTI2LjYyOS0xMzIuNjY3LTc0Ljk4LTE4MS4wMnptLTE4MS4wMiA0MDcuMDJjLTEyNC42MTcgMC0yMjYtMTAxLjM4My0yMjYtMjI2czEwMS4zODMtMjI2IDIyNi0yMjYgMjI2IDEwMS4zODMgMjI2IDIyNi0xMDEuMzgzIDIyNi0yMjYgMjI2eiIvPjxwYXRoIGQ9Im0zNzQuNzgyIDI0My44NC0xODAtMTMwYy00LjU2Ni0zLjI5OC0xMC41OTYtMy43NTktMTUuNjExLTEuMTk1cy04LjE3MSA3LjcyMi04LjE3MSAxMy4zNTV2MjYwYzAgNS42MzMgMy4xNTYgMTAuNzkxIDguMTcxIDEzLjM1NSAyLjE1NCAxLjEwMiA0LjQ5NSAxLjY0NSA2LjgyNyAxLjY0NSAzLjA5NyAwIDYuMTc5LS45NTggOC43ODQtMi44NGwxODAtMTMwYzMuOTA0LTIuODIgNi4yMTgtNy4zNDQgNi4yMTgtMTIuMTZzLTIuMzEyLTkuMzQtNi4yMTgtMTIuMTZ6bS0xNzMuNzgyIDExMi44MjR2LTIwMS4zMjhsMTM5LjM4MSAxMDAuNjY0eiIvPjwvZz48L3N2Zz4=" />
            <div className="card-body">
              <h5 className="card-title text-dark">{item.artist_name}</h5>
              <p className="card-text text-dark">{item.name}</p>
              <a href={item.url} target="_blank" className="btn">Download</a>  
              <a href={item.license_ccurl} target="_blank" className="btn ms-auto" style={{fontSize:"0.85rem"}}>Licence</a>  
            </div>
          </div>
        
          </div>
     
             ))  : <p>not found..</p>
            
         }
        <Player play={play}  data ={musics}/> 
       </React.Fragment>
    )
}

export default Music
