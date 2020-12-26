import React, { useState } from 'react';
import Album from './Album';


const Artist = ({ musics, searchValue }) => {
    const [nameAlbum, setNameAlbum] = useState('');
    let newArtist;
    let albumImages;
    let albumName;
    let artistName;
    let data;
    try {

        newArtist = musics.filter((item) => item.artist_name.toLowerCase() === (searchValue.toLowerCase()));
        albumName = [...new Set(newArtist.map((item) => (item.album_name)))];
        artistName = [...new Set(newArtist.map((item) => (item.artist_name)))];
        albumImages = [...new Set(newArtist.map((item) => (item.album_images[0])))];
        data = [...albumImages];
    }
    catch (err) {
        console.log(err);
    }

    console.log(albumImages);
    console.log(albumName);


    console.log("artist", artistName);

    return (
        <React.Fragment>
            <div className="col-12">
                {artistName && data ? (<h3 className="fs-2 fst-italic">Artist : {artistName}</h3>) : <p>not found</p>}
            </div>
            {
               data && albumName ? data.map((item, index) =>

                    <div className="col-6">

                        <div className="card mb-3 text-white bg-secondary" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={item} alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div className="card-body">

                                        <h5 className="card-title fs-italic">{albumName[index]}</h5>
                                        <button type="button" onClick={() => setNameAlbum(albumName[index])} data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn  btn-primary">Go to Album ..</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                ): <p>not found</p>

            }
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Album</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Album musics={musics} searchValue={nameAlbum} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>

    )
}



export default Artist;