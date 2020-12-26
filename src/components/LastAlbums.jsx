import React from 'react'

function LastAlbums({albums}) {


    console.log("Last albumdeyim",albums)
    return (
        <React.Fragment>
             <h3 className="fs-3 fst-italic ">Last Albums ...</h3>
          { 
       
          albums && albums.map(item => <div className="col-md-6 col-12 ">

                <div className="card" >
                    <img src={item.images[0]} className="card-img-top" alt="..." />
                    <div className="card-body bg-secondary text-white">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.added_at}</p>
                    </div>
                </div>



            </div>)
        }
     </React.Fragment>   
    )
}

export default LastAlbums
