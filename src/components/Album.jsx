import React , {useState} from 'react';
import Player from './Player';
const Album = ({ musics, searchValue }) => {
    const [play , setPlay] = useState('');
    
    let  newAlbum;
        try {
 
        newAlbum =  musics.filter((item) => item.album_name.toLowerCase().includes(searchValue.toLowerCase()));
        }
        catch(err) {
            console.log(err);
        }
        console.log(newAlbum);
    return (
        <React.Fragment>
        { 
            newAlbum && newAlbum[0] ? <div className="col-12">
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-12 col-sm-12">
                        <img src={newAlbum[0].album_images[1] === null ? ""  : newAlbum[0].album_images[1]} className="md-w-100" alt="..." />
                    </div>
                    <div className="col-md-12 col-sm-12">
                        <div className="card-body bg-secondary text-white" >
                            <h5 className="card-title fs-2">Album : {newAlbum[0].album_name === null ? "" : newAlbum[0].album_name}</h5> 
                            <p className="card-text fs-3 fst-italic">Artist : {newAlbum[0].artist_name === null ? "" : newAlbum[0].artist_name}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div> : <p>not found ..</p>
            }
            <ul class="nav flex-column">
            {

                newAlbum  ? newAlbum.map(item => (

                    <li className="nav-item mb-2 border-bottom d-flex justify-content-between ">
                  
                    <a className="nav-link d-inline-block fs-3 text-secondary" onClick={()=>setPlay(item.url)}  href="#">  <img style={{width:30,cursor: 'pointer'}} onClick={()=>setPlay(item.url)} className="d-inline-block  " src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMjAuMDAxIDMyMC4wMDEiIHZpZXdCb3g9IjAgMCAzMjAuMDAxIDMyMC4wMDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTI5NS44NCAxNDYuMDQ5LTI1Ni0xNDRjLTQuOTYtMi43ODQtMTEuMDA4LTIuNzItMTUuOTA0LjEyOC00LjkyOCAyLjg4LTcuOTM2IDguMTI4LTcuOTM2IDEzLjgyNHYyODhjMCA1LjY5NiAzLjAwOCAxMC45NDQgNy45MzYgMTMuODI0IDIuNDk2IDEuNDQgNS4yOCAyLjE3NiA4LjA2NCAyLjE3NiAyLjY4OCAwIDUuNDA4LS42NzIgNy44NC0yLjA0OGwyNTYtMTQ0YzUuMDI0LTIuODQ4IDguMTYtOC4xNiA4LjE2LTEzLjk1MnMtMy4xMzYtMTEuMTA0LTguMTYtMTMuOTUyeiIvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjwvc3ZnPg==" /><span className="ps-3">{item.name}</span></a>
                   
                    <a className="nav-link text-dark d-inline-block align-items-center fst-italic" href={item.license_ccurl}>  cc-by <span className="ps-5 fw-bold"> {Math.floor(item.duration/60)+":"+(item.duration%60 < 10 ? "0"+(item.duration%60) : (item.duration%60))}</span> </a>
                    </li>

                ))  : <p>not found..</p>


            }
            </ul>
            <Player play={play}  data={musics}/>
        </React.Fragment>
    )
}

export default Album;



