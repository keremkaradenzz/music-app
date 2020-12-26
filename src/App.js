import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Music from './components/Music';
import Album from './components/Album';
import Artist from './components/Artist';
import LastAlbums from './components/LastAlbums';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
const AUTH_TOKEN = '1.a2VyZW1rYXJhZGV6ekBvdXRsb29rLmNvbQ==.OL4ZE92Gy4rp7Q5t76A130zo';
axios.defaults.baseURL = 'https://musicdb.jobs.otsimo.com/createClient';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';





function App() {
  const [selectOptions, setSelectOptions] = useState('');
  const [musics, setMusics] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState('');
  const [loading , setLoading] = useState(true);
  const [counter, setCounter] = useState(true);
  let API;


  if (selectOptions === "4") {
    API = `https://musicdb.jobs.otsimo.com/api/recent/musics`;

  }
  else if (selectOptions === "5") {
    API = `https://musicdb.jobs.otsimo.com/api/recent/albums`;
  }
  else {
    API = `https://musicdb.jobs.otsimo.com/api/music/search?q=${search}`;
  }
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  //Music Search
  const [selected, setSelected] = useState(0)
  const handleClick = (e) => {
    setCounter(false);
    axios.get(API)
      .then(function (response) {
        // handle success 
        if (selectOptions === "5") {
          console.log(response.data.albums)
          setAlbums(response.data.albums);
        }
        else {
          setMusics(response.data.musics)
          setLoading(false);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }


  //Album Search

  //Artist Search 




  return (

    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="container ">
          <div className="row">
            <div className="col-md-2 mb-5 col-6">

              <div className="form-check form-switch mt-5 ">
                <input onClick={themeToggler} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Theme</label>
              </div>
            </div>
            <div className="col-6 col-md-4 mb-5">
              <input className="mt-5 form-control rounded-pill text-dark bg-light" onChange={e => (setSearch(e.target.value), setSelected(1))} type="text" placeholder="Search music, album or artist..." aria-label="default input example"></input>

            </div>
            <div className="col-md-3 mb-5 col-6  mb-5">
              <select className="mt-md-5 mt-0 form-select form-select-sm rounded-pill" onChange={e => setSelectOptions(e.target.value)} aria-label="form-select-sm example">
                <option selected>Selec Category ..</option>
                <option value="1">Music</option>
                <option value="2">Album</option>
                <option value="3">Artist</option>
                <option value="4">Recent Musics</option>
                <option value="5">Recent Albums</option>
              </select>

            </div>
            
            <div className="col-6 col-md-3  mb-5">
                <button className="btn btn-outline-primary mt-md-5 mt-0" onClick={handleClick} > Search</button>
            </div>
            {
              selectOptions === "1" && !counter ?  (!loading ? <Music musics={musics} /> : <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>)  : null
            }
            {
              selectOptions === "2" && <Album musics={musics} searchValue={search} />
            }
            {
              selectOptions === "3" && !counter ?  (!loading ? <Album musics={musics} searchValue={search} /> : <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>)  : null
            }
            {
              selectOptions === "4" && !counter ?  (!loading ? <Music musics={musics} searchValue={search} /> : <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>)  : null
            }
            {
              selectOptions === "5" && !counter ?  (!loading ?  <LastAlbums albums={albums} /> : <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>)  : null
            }





          </div>

        </div>
      </>
    </ThemeProvider>

  );
}

export default App;
